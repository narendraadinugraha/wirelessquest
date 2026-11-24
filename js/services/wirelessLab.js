// WirelessQuest - Interactive Wireless Networking Laboratory Suite (WLAN, RF, Heatmap, Security & Antenna)
// Designed for vocational TKJ & IEEE 802.11 Wireless Engineering curricula.

import { sound } from "./gamification.js";

// ============================================================================
// LAB 1: INTERACTIVE WLAN TOPOLOGY & SEAMLESS ROAMING SIMULATOR
// ============================================================================
export function renderWlanRoamingLab(container) {
  let isMoving = false;
  let clientX = 180;
  let clientY = 190;
  let moveDir = 1;
  let animId = null;

  let ap1Power = 20; // dBm
  let ap2Power = 20; // dBm
  let currentBand = "2.4"; // "2.4" or "5"
  let ap1Channel = 1;
  let ap2Channel = 6;
  let securityMode = "wpa3"; // "open", "wpa2", "wpa3", "enterprise"
  let connectedAp = "AP-1";
  let logs = [
    `[Sistem] Laboratorium Topologi WLAN & Roaming siap.`,
    `[Inisialisasi] AP-1 (Ch 1) dan AP-2 (Ch 6) aktif memancarkan Beacon frame.`,
    `[Koneksi] Klien terasosiasi ke AP-1 (BSSID: 00:11:22:AA:BB:01). Handshake WPA3 SAE sukses.`
  ];

  function calcSignal(dist, powerDbm, band) {
    // Log-distance path loss model: FSPL(dB) = 20*log10(d) + 20*log10(f) - 27.55
    const fMHz = band === "2.4" ? 2412 : 5180;
    const dMeters = Math.max(1, dist / 8);
    const fspl = 20 * Math.log10(dMeters) + 20 * Math.log10(fMHz) - 27.55;
    const rssi = Math.round(powerDbm - fspl);
    return Math.max(-95, Math.min(-30, rssi));
  }

  container.innerHTML = `
    <div class="space-y-5">
      <!-- Top Control Bar -->
      <div class="p-4 sm:p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3 flex-wrap">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
            <span class="font-bold text-xs text-on-surface font-mono uppercase tracking-wider">SSID Kampus:</span>
            <span class="px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 font-mono text-xs font-bold">WirelessQuest-WLAN</span>
          </div>

          <!-- Pita Frekuensi -->
          <div class="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-xl border border-outline-variant">
            <button class="px-2.5 py-1 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${currentBand === "2.4" ? "bg-primary text-on-primary shadow-xs" : "text-outline hover:text-on-surface"}" id="btn-band-24">
              2.4 GHz (3 Ch)
            </button>
            <button class="px-2.5 py-1 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${currentBand === "5" ? "bg-primary text-on-primary shadow-xs" : "text-outline hover:text-on-surface"}" id="btn-band-5">
              5 GHz (High Speed)
            </button>
          </div>

          <!-- Protokol Keamanan -->
          <div class="flex items-center gap-1">
            <span class="text-xs font-mono text-outline">Keamanan:</span>
            <select id="wlan-sec-select" class="px-2.5 py-1 bg-surface-container-low border border-outline-variant rounded-lg font-mono text-xs text-on-surface cursor-pointer focus:ring-1 focus:ring-primary">
              <option value="wpa3" ${securityMode === "wpa3" ? "selected" : ""}>WPA3-Personal (SAE Dragonfly)</option>
              <option value="wpa2" ${securityMode === "wpa2" ? "selected" : ""}>WPA2-Personal (PSK 4-Way)</option>
              <option value="enterprise" ${securityMode === "enterprise" ? "selected" : ""}>WPA3-Enterprise (802.1X RADIUS)</option>
              <option value="open" ${securityMode === "open" ? "selected" : ""}>Open (Tanpa Sandi)</option>
            </select>
          </div>
        </div>

        <!-- Simulation Action Buttons -->
        <div class="flex items-center gap-2 flex-wrap">
          <button id="btn-toggle-move" class="px-4 py-2 bg-primary hover:bg-primary-container text-on-primary font-mono text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95">
            <span class="material-symbols-outlined text-[17px]" id="icon-move-state">play_arrow</span>
            <span id="label-move-state">Simulasi Bergerak (Auto Roam)</span>
          </button>
          <button id="btn-reset-pos" class="px-3 py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-mono text-xs rounded-xl border border-outline-variant transition-colors cursor-pointer" title="Kembalikan Klien ke AP 1">
            Reset Posisi
          </button>
        </div>
      </div>

      <!-- Main Stage: Visual Canvas & Realtime Telemetry -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        <!-- Interactive Canvas Stage (8 Cols) -->
        <div class="lg:col-span-8 bg-slate-950 rounded-2xl border border-outline-variant overflow-hidden shadow-md relative">
          <div class="p-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
            <div class="flex items-center gap-2">
              <span class="text-sky-400 font-bold">Topologi ESS (Extended Service Set):</span>
              <span>Ruang Kelas A ──► Koridor ──► Ruang Lab B</span>
            </div>
            <span class="text-[11px] text-slate-400">Tarik klien (ikon laptop) secara bebas dengan mouse</span>
          </div>

          <canvas id="wlan-canvas" width="800" height="380" class="w-full h-[320px] sm:h-[380px] block cursor-grab active:cursor-grabbing"></canvas>

          <!-- Interference Warning Banner -->
          <div id="wlan-collision-alert" class="hidden absolute top-12 left-4 right-4 p-2.5 rounded-xl bg-amber-500/90 text-slate-950 font-mono text-xs font-bold border border-amber-300 shadow-xl flex items-center justify-between backdrop-blur-md">
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[18px]">warning</span>
              <span>Peringatan Interferensi Kanal: Kedua AP berada pada kanal yang sama (${ap1Channel})!</span>
            </span>
            <span class="text-[10px] bg-slate-950 text-white px-2 py-0.5 rounded">Ganti kanal AP-2 ke Kanal 6 atau 11</span>
          </div>
        </div>

        <!-- Telemetry & Live Handshake Terminal (4 Cols) -->
        <div class="lg:col-span-4 space-y-4">
          <!-- Real-time RSSI Signal Gauge -->
          <div class="p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-xs space-y-3">
            <div class="flex items-center justify-between border-b border-outline-variant pb-2">
              <h3 class="text-xs font-bold text-on-surface font-mono uppercase tracking-wider">Telemetri Sinyal Klien</h3>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold ${connectedAp === "AP-1" ? "bg-sky-500/20 text-sky-400" : "bg-emerald-500/20 text-emerald-400"}" id="live-connected-pill">
                Tersambung: ${connectedAp}
              </span>
            </div>

            <!-- AP 1 Signal Bar -->
            <div>
              <div class="flex justify-between text-[11px] font-mono mb-1">
                <span class="text-on-surface-variant font-medium">AP-1 (Ruang Kelas A):</span>
                <span class="font-bold text-sky-400" id="live-rssi-ap1">-50 dBm</span>
              </div>
              <div class="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                <div id="bar-rssi-ap1" class="h-full bg-sky-500 transition-all duration-150" style="width: 75%"></div>
              </div>
            </div>

            <!-- AP 2 Signal Bar -->
            <div>
              <div class="flex justify-between text-[11px] font-mono mb-1">
                <span class="text-on-surface-variant font-medium">AP-2 (Ruang Lab B):</span>
                <span class="font-bold text-emerald-400" id="live-rssi-ap2">-78 dBm</span>
              </div>
              <div class="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                <div id="bar-rssi-ap2" class="h-full bg-emerald-500 transition-all duration-150" style="width: 35%"></div>
              </div>
            </div>

            <!-- Roaming Threshold Indicator -->
            <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant text-[11px] font-mono text-on-surface-variant space-y-1">
              <div class="flex justify-between">
                <span>Ambang Roaming (802.11k/v):</span>
                <span class="text-amber-400 font-bold">-72 dBm</span>
              </div>
              <div class="flex justify-between">
                <span>Standar Fast Transition:</span>
                <span class="text-emerald-400 font-bold">IEEE 802.11r (&lt; 30 ms)</span>
              </div>
            </div>
          </div>

          <!-- Live Roaming & Handshake Console -->
          <div class="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-slate-300 font-mono shadow-xs space-y-2">
            <div class="flex items-center justify-between text-xs pb-1.5 border-b border-slate-800">
              <span class="text-sky-400 font-bold flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[15px]">terminal</span>
                <span>Log Aktivitas Nirkabel (Live)</span>
              </span>
              <button id="btn-clear-wlan-log" class="text-[10px] text-slate-500 hover:text-slate-300 cursor-pointer">Bersihkan</button>
            </div>

            <div id="wlan-log-box" class="h-44 overflow-y-auto text-[11px] space-y-1.5 leading-relaxed pr-1 scrollbar-thin">
              ${logs.map(l => `<div>${l}</div>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const canvas = container.querySelector("#wlan-canvas");
  const ctx = canvas.getContext("2d");
  const collisionAlert = container.querySelector("#wlan-collision-alert");

  const ap1 = { x: 180, y: 190, name: "AP-1 (Kelas A)", bssid: "00:11:22:AA:BB:01", channel: ap1Channel, power: ap1Power };
  const ap2 = { x: 620, y: 190, name: "AP-2 (Lab B)", bssid: "00:11:22:AA:BB:02", channel: ap2Channel, power: ap2Power };

  function addLog(msg) {
    const time = new Date().toLocaleTimeString("id-ID");
    const formatted = `<span class="text-slate-500">[${time}]</span> ${msg}`;
    logs.push(formatted);
    if (logs.length > 30) logs.shift();
    const box = container.querySelector("#wlan-log-box");
    if (box) {
      box.innerHTML = logs.map(l => `<div>${l}</div>`).join("");
      box.scrollTop = box.scrollHeight;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Grid Background
    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 0.8;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // 2. Middle Corridor Wall Barrier (Concrete with opening)
    ctx.fillStyle = "#334155";
    ctx.fillRect(395, 20, 10, 110);
    ctx.fillRect(395, 250, 10, 110);
    ctx.fillStyle = "#64748b";
    ctx.font = "10px monospace";
    ctx.fillText("Dinding Beton (-12 dB)", 350, 15);
    ctx.fillText("Pintu Koridor (Bebas)", 360, 195);

    // 3. AP Coverage Radiation Rings
    const radiusScale = currentBand === "2.4" ? 1.0 : 0.75;
    const r1 = (ap1.power * 8.5) * radiusScale;
    const r2 = (ap2.power * 8.5) * radiusScale;

    // AP-1 Halo
    const grad1 = ctx.createRadialGradient(ap1.x, ap1.y, 10, ap1.x, ap1.y, r1);
    grad1.addColorStop(0, "rgba(14, 165, 233, 0.35)");
    grad1.addColorStop(0.5, "rgba(14, 165, 233, 0.15)");
    grad1.addColorStop(1, "rgba(14, 165, 233, 0.0)");
    ctx.fillStyle = grad1;
    ctx.beginPath();
    ctx.arc(ap1.x, ap1.y, r1, 0, Math.PI * 2);
    ctx.fill();

    // AP-2 Halo
    const grad2 = ctx.createRadialGradient(ap2.x, ap2.y, 10, ap2.x, ap2.y, r2);
    grad2.addColorStop(0, "rgba(16, 185, 129, 0.35)");
    grad2.addColorStop(0.5, "rgba(16, 185, 129, 0.15)");
    grad2.addColorStop(1, "rgba(16, 185, 129, 0.0)");
    ctx.fillStyle = grad2;
    ctx.beginPath();
    ctx.arc(ap2.x, ap2.y, r2, 0, Math.PI * 2);
    ctx.fill();

    // 4. Calculate Distance and Signals
    const d1 = Math.hypot(clientX - ap1.x, clientY - ap1.y);
    const d2 = Math.hypot(clientX - ap2.x, clientY - ap2.y);
    const s1 = calcSignal(d1, ap1.power, currentBand);
    const s2 = calcSignal(d2, ap2.power, currentBand);

    // Update Telemetry Elements
    const elS1 = container.querySelector("#live-rssi-ap1");
    const elS2 = container.querySelector("#live-rssi-ap2");
    const bar1 = container.querySelector("#bar-rssi-ap1");
    const bar2 = container.querySelector("#bar-rssi-ap2");
    if (elS1) elS1.textContent = `${s1} dBm`;
    if (elS2) elS2.textContent = `${s2} dBm`;
    if (bar1) bar1.style.width = `${Math.max(5, Math.min(100, (s1 + 100) * 1.4))}%`;
    if (bar2) bar2.style.width = `${Math.max(5, Math.min(100, (s2 + 100) * 1.4))}%`;

    // 5. Check Seamless Roaming Logic (802.11r/k/v threshold: -72 dBm with 6 dB hysteresis)
    if (connectedAp === "AP-1" && s2 > s1 + 4 && s1 < -70) {
      connectedAp = "AP-2";
      sound.success?.();
      addLog(`<span class="text-emerald-400 font-bold">[ROAMING SUKSES]</span> Klien roaming ke <strong>AP-2</strong> via IEEE 802.11r Fast BSS Transition! Sinyal AP-2 (${s2} dBm) melampaui AP-1 (${s1} dBm). Transisi 18 ms.`);
      const pill = container.querySelector("#live-connected-pill");
      if (pill) {
        pill.textContent = "Tersambung: AP-2";
        pill.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400";
      }
    } else if (connectedAp === "AP-2" && s1 > s2 + 4 && s2 < -70) {
      connectedAp = "AP-1";
      sound.success?.();
      addLog(`<span class="text-sky-400 font-bold">[ROAMING SUKSES]</span> Klien roaming ke <strong>AP-1</strong> via IEEE 802.11r Fast BSS Transition! Sinyal AP-1 (${s1} dBm) melampaui AP-2 (${s2} dBm). Transisi 16 ms.`);
      const pill = container.querySelector("#live-connected-pill");
      if (pill) {
        pill.textContent = "Tersambung: AP-1";
        pill.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500/20 text-sky-400";
      }
    }

    // 6. Draw Distribution Trunk (Ethernet cable connecting APs to WLC Switch)
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(ap1.x, ap1.y - 45);
    ctx.lineTo(400, 50);
    ctx.lineTo(ap2.x, ap2.y - 45);
    ctx.stroke();
    ctx.setLineDash([]);

    // Central WLC Box
    ctx.fillStyle = "#0f172a";
    ctx.strokeStyle = "#10b981";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(350, 30, 100, 32, 6);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#34d399";
    ctx.font = "bold 9px monospace";
    ctx.textAlign = "center";
    ctx.fillText("WLC KAMPUS", 400, 46);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "8px monospace";
    ctx.fillText("CAPWAP Tunnel", 400, 56);

    // 7. Draw AP 1 Device
    ctx.fillStyle = "#0284c7";
    ctx.beginPath();
    ctx.arc(ap1.x, ap1.y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "14px sans-serif";
    ctx.fillText("📡", ap1.x, ap1.y + 5);
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 10px monospace";
    ctx.fillText(ap1.name, ap1.x, ap1.y + 35);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "9px monospace";
    ctx.fillText(`Kanal ${ap1.channel} (${ap1.power} dBm)`, ap1.x, ap1.y + 47);

    // 8. Draw AP 2 Device
    ctx.fillStyle = "#059669";
    ctx.beginPath();
    ctx.arc(ap2.x, ap2.y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "14px sans-serif";
    ctx.fillText("📡", ap2.x, ap2.y + 5);
    ctx.fillStyle = "#34d399";
    ctx.font = "bold 10px monospace";
    ctx.fillText(ap2.name, ap2.x, ap2.y + 35);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "9px monospace";
    ctx.fillText(`Kanal ${ap2.channel} (${ap2.power} dBm)`, ap2.x, ap2.y + 47);

    // 9. Draw Active Wireless Link (Beam) between Client and Connected AP
    const targetAp = connectedAp === "AP-1" ? ap1 : ap2;
    const activeColor = connectedAp === "AP-1" ? "#38bdf8" : "#34d399";
    ctx.strokeStyle = activeColor;
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(targetAp.x, targetAp.y);
    ctx.lineTo(clientX, clientY);
    ctx.stroke();
    ctx.setLineDash([]);

    // 10. Draw Moving Client Station (Laptop / Smartphone)
    ctx.fillStyle = "#1e293b";
    ctx.strokeStyle = activeColor;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(clientX, clientY, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.font = "14px sans-serif";
    ctx.fillText("💻", clientX, clientY + 5);

    // Client Tag
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 9.5px monospace";
    ctx.fillText("Laptop Siswa (STA)", clientX, clientY + 32);
    ctx.fillStyle = activeColor;
    ctx.font = "bold 9px monospace";
    ctx.fillText(`${connectedAp === "AP-1" ? s1 : s2} dBm`, clientX, clientY + 43);

    // Check collision if same channel
    if (ap1.channel === ap2.channel && collisionAlert) {
      collisionAlert.classList.remove("hidden");
    } else if (collisionAlert) {
      collisionAlert.classList.add("hidden");
    }
  }

  // Animation Loop for Auto Roaming
  function animate() {
    if (isMoving) {
      clientX += 1.8 * moveDir;
      if (clientX > 640) {
        moveDir = -1;
      } else if (clientX < 160) {
        moveDir = 1;
      }
    }
    draw();
    animId = requestAnimationFrame(animate);
  }

  // Mouse drag support for interactive client station
  let isDragging = false;
  canvas.addEventListener("mousedown", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
    const my = (e.clientY - rect.top) * (canvas.height / rect.height);
    if (Math.hypot(mx - clientX, my - clientY) < 30) {
      isDragging = true;
      isMoving = false;
      const btn = container.querySelector("#btn-toggle-move");
      if (btn) {
        container.querySelector("#icon-move-state").textContent = "play_arrow";
        container.querySelector("#label-move-state").textContent = "Simulasi Bergerak (Auto Roam)";
      }
    }
  });

  window.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const rect = canvas.getBoundingClientRect();
      clientX = Math.max(80, Math.min(canvas.width - 80, (e.clientX - rect.left) * (canvas.width / rect.width)));
      clientY = Math.max(70, Math.min(canvas.height - 70, (e.clientY - rect.top) * (canvas.height / rect.height)));
    }
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch support for mobile devices
  canvas.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      clientX = Math.max(80, Math.min(canvas.width - 80, (e.touches[0].clientX - rect.left) * (canvas.width / rect.width)));
      clientY = Math.max(70, Math.min(canvas.height - 70, (e.touches[0].clientY - rect.top) * (canvas.height / rect.height)));
      isMoving = false;
    }
  }, { passive: true });

  // Event handlers for controls
  container.querySelector("#btn-toggle-move")?.addEventListener("click", () => {
    isMoving = !isMoving;
    sound.click();
    const icon = container.querySelector("#icon-move-state");
    const label = container.querySelector("#label-move-state");
    if (icon && label) {
      icon.textContent = isMoving ? "pause" : "play_arrow";
      label.textContent = isMoving ? "Hentikan Gerakan" : "Simulasi Bergerak (Auto Roam)";
    }
    if (isMoving) addLog(`[Simulasi] Klien mulai bergerak melintasi ruang koridor antar-AP.`);
  });

  container.querySelector("#btn-reset-pos")?.addEventListener("click", () => {
    clientX = 180;
    clientY = 190;
    moveDir = 1;
    isMoving = false;
    connectedAp = "AP-1";
    sound.click();
    addLog(`[Reset] Klien dikembalikan ke posisi Ruang Kelas A (AP-1).`);
  });

  container.querySelector("#btn-band-24")?.addEventListener("click", (e) => {
    currentBand = "2.4";
    ap1.power = 20;
    ap2.power = 20;
    e.target.classList.add("bg-primary", "text-on-primary");
    container.querySelector("#btn-band-5")?.classList.remove("bg-primary", "text-on-primary");
    sound.click();
    addLog(`[Pita Frekuensi] Beralih ke <strong>2.4 GHz</strong>. Jangkauan lebih luas, daya tembus dinding tinggi.`);
  });

  container.querySelector("#btn-band-5")?.addEventListener("click", (e) => {
    currentBand = "5";
    ap1.power = 23;
    ap2.power = 23;
    e.target.classList.add("bg-primary", "text-on-primary");
    container.querySelector("#btn-band-24")?.classList.remove("bg-primary", "text-on-primary");
    sound.click();
    addLog(`[Pita Frekuensi] Beralih ke <strong>5 GHz</strong>. Throughput Gigabit, jangkauan teredam dinding.`);
  });

  container.querySelector("#wlan-sec-select")?.addEventListener("change", (e) => {
    securityMode = e.target.value;
    sound.click();
    if (securityMode === "wpa3") {
      addLog(`[Keamanan] Mode <strong>WPA3-Personal (SAE)</strong> aktif. Menggunakan pertukaran Dragonfly anti-dictionary brute-force.`);
    } else if (securityMode === "wpa2") {
      addLog(`[Keamanan] Mode <strong>WPA2-Personal (PSK)</strong> aktif. Menggunakan 4-Way Handshake tradisional.`);
    } else if (securityMode === "enterprise") {
      addLog(`[Keamanan] Mode <strong>WPA3-Enterprise</strong> aktif. Autentikasi terhubung ke Server RADIUS Kampus.`);
    } else {
      addLog(`[Keamanan] ⚠️ Mode <strong>Open</strong> aktif. Seluruh frame data tidak terenkripsi.`);
    }
  });

  container.querySelector("#btn-clear-wlan-log")?.addEventListener("click", () => {
    logs = [];
    const box = container.querySelector("#wlan-log-box");
    if (box) box.innerHTML = "";
    sound.click();
  });

  // Start Animation
  animate();
}

// ============================================================================
// LAB 2: RF SITE SURVEY & REALTIME HEATMAP COVERAGE PLANNER
// ============================================================================
export function renderRfHeatmapLab(container) {
  let apList = [
    { id: 1, name: "AP-1", x: 160, y: 140, channel: 1, powerDbm: 20, color: "#10b981" },
    { id: 2, name: "AP-2", x: 440, y: 140, channel: 6, powerDbm: 20, color: "#06b6d4" }
  ];
  let selectedApId = 1;
  let wallMaterial = "concrete"; // "drywall", "brick", "concrete"

  container.innerHTML = `
    <div class="space-y-5">
      <!-- Toolbar Controls -->
      <div class="p-4 sm:p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3 flex-wrap">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="font-bold text-xs text-on-surface font-mono uppercase">Lab Site Survey:</span>
            <span class="text-xs font-mono text-outline">Simulasi Redaman Dinding &amp; Sebaran RSSI</span>
          </div>

          <!-- Wall Material Selector -->
          <div class="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-xl border border-outline-variant text-xs font-mono">
            <span class="text-outline px-1.5 font-bold">Material Dinding:</span>
            <button class="px-2 py-0.5 rounded font-bold transition-all cursor-pointer ${wallMaterial === "drywall" ? "bg-primary text-on-primary shadow-xs" : "text-outline hover:text-on-surface"}" id="btn-wall-drywall">Gypsum (-3 dB)</button>
            <button class="px-2 py-0.5 rounded font-bold transition-all cursor-pointer ${wallMaterial === "brick" ? "bg-primary text-on-primary shadow-xs" : "text-outline hover:text-on-surface"}" id="btn-wall-brick">Bata (-6 dB)</button>
            <button class="px-2 py-0.5 rounded font-bold transition-all cursor-pointer ${wallMaterial === "concrete" ? "bg-primary text-on-primary shadow-xs" : "text-outline hover:text-on-surface"}" id="btn-wall-concrete">Beton (-14 dB)</button>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button id="btn-add-ap" class="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer">
            <span class="material-symbols-outlined text-[16px]">add</span>
            <span>Tambah Access Point</span>
          </button>
          <button id="btn-toggle-channel-opt" class="px-3.5 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-mono text-xs font-bold rounded-xl border border-outline-variant transition-colors cursor-pointer">
            Auto-Tune Kanal (1, 6, 11)
          </button>
        </div>
      </div>

      <!-- Main Canvas & Inspector -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <!-- Floorplan Canvas -->
        <div class="lg:col-span-8 bg-slate-950 rounded-2xl border border-outline-variant overflow-hidden shadow-md relative">
          <canvas id="heatmap-canvas" width="800" height="420" class="w-full h-[360px] sm:h-[420px] block cursor-crosshair"></canvas>
          <div class="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-300">
            <span>Legenda: Hijau (> -65 dBm Sangat Baik) • Kuning (-67 s/d -75 dBm Cukup) • Merah (< -80 dBm Zona Lemah)</span>
            <span class="text-emerald-400 font-bold" id="coverage-percent-label">Cakupan Area: 92%</span>
          </div>
        </div>

        <!-- Inspector AP Properties -->
        <div class="lg:col-span-4 space-y-4">
          <div class="p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-xs space-y-3.5">
            <h3 class="text-xs font-bold text-on-surface font-mono uppercase tracking-wider border-b border-outline-variant pb-2">Konfigurasi Access Point Terpilih</h3>
            
            <div>
              <label class="block text-xs font-mono text-outline mb-1">Pilih AP untuk Diatur:</label>
              <select id="sel-active-ap" class="w-full px-3 py-1.5 bg-surface-container-low border border-outline-variant rounded-lg font-mono text-xs text-on-surface">
                ${apList.map(a => `<option value="${a.id}">${a.name} (Kanal ${a.channel})</option>`).join("")}
              </select>
            </div>

            <div>
              <div class="flex justify-between text-xs font-mono mb-1">
                <span class="text-on-surface font-medium">Daya Pancar (Tx Power):</span>
                <span class="font-bold text-primary" id="lbl-ap-power">20 dBm (100 mW)</span>
              </div>
              <input type="range" id="rng-ap-power" min="10" max="30" value="20" class="w-full accent-primary cursor-pointer" />
            </div>

            <div>
              <label class="block text-xs font-mono text-outline mb-1">Kanal Operasional (2.4 GHz):</label>
              <select id="sel-ap-channel" class="w-full px-3 py-1.5 bg-surface-container-low border border-outline-variant rounded-lg font-mono text-xs text-on-surface">
                <option value="1">Kanal 1 (2412 MHz) — Non-Overlapping</option>
                <option value="6">Kanal 6 (2437 MHz) — Non-Overlapping</option>
                <option value="11">Kanal 11 (2462 MHz) — Non-Overlapping</option>
                <option value="3">Kanal 3 (Interferensi Tumpang Tindih)</option>
              </select>
            </div>

            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant text-xs font-mono space-y-1">
              <div class="text-on-surface font-bold">Rekomendasi Standar Industri:</div>
              <p class="text-[11px] text-on-surface-variant leading-relaxed">
                Hindari penggunaan kanal 2, 3, 4, 5, 7, 8, 9, 10 di area perkantoran/sekolah untuk mencegah distorsi <em>Adjacent Channel Interference (ACI)</em>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const canvas = container.querySelector("#heatmap-canvas");
  const ctx = canvas.getContext("2d");

  function drawHeatmap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Floorplan Background Grid
    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render RF Radiation Rings for each AP
    apList.forEach(ap => {
      const radius = ap.powerDbm * 11;
      const radGrad = ctx.createRadialGradient(ap.x, ap.y, 10, ap.x, ap.y, radius);
      radGrad.addColorStop(0, "rgba(16, 185, 129, 0.45)");
      radGrad.addColorStop(0.4, "rgba(132, 204, 22, 0.35)");
      radGrad.addColorStop(0.7, "rgba(234, 179, 8, 0.2)");
      radGrad.addColorStop(1, "rgba(239, 68, 68, 0.0)");
      ctx.fillStyle = radGrad;
      ctx.beginPath();
      ctx.arc(ap.x, ap.y, radius, 0, Math.PI * 2);
      ctx.fill();
    });

    // Floorplan Walls
    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 4;
    // Outer Border
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
    // Inner Room Partitions
    ctx.beginPath();
    ctx.moveTo(300, 30);
    ctx.lineTo(300, 260); // Wall A
    ctx.moveTo(300, 330);
    ctx.lineTo(300, canvas.height - 30);
    ctx.moveTo(560, 30);
    ctx.lineTo(560, canvas.height - 30); // Wall B
    ctx.stroke();

    // Room Labels
    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 11px monospace";
    ctx.fillText("Ruang Kelas Teori A", 80, 55);
    ctx.fillText("Laboratorium Komputer TKJ", 350, 55);
    ctx.fillText("Ruang Server & Guru", 610, 55);

    // Render Access Point Markers
    apList.forEach(ap => {
      ctx.fillStyle = "#0f172a";
      ctx.strokeStyle = ap.color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(ap.x, ap.y, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("📡", ap.x, ap.y + 4);

      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 10px monospace";
      ctx.fillText(ap.name, ap.x, ap.y + 30);
      ctx.fillStyle = ap.color;
      ctx.font = "9px monospace";
      ctx.fillText(`Ch ${ap.channel} (${ap.powerDbm} dBm)`, ap.x, ap.y + 42);
    });
  }

  // Dragging APs
  let draggedAp = null;
  canvas.addEventListener("mousedown", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
    const my = (e.clientY - rect.top) * (canvas.height / rect.height);
    draggedAp = apList.find(a => Math.hypot(a.x - mx, a.y - my) < 25);
  });

  window.addEventListener("mousemove", (e) => {
    if (draggedAp) {
      const rect = canvas.getBoundingClientRect();
      draggedAp.x = Math.max(50, Math.min(canvas.width - 50, (e.clientX - rect.left) * (canvas.width / rect.width)));
      draggedAp.y = Math.max(50, Math.min(canvas.height - 50, (e.clientY - rect.top) * (canvas.height / rect.height)));
      drawHeatmap();
    }
  });

  window.addEventListener("mouseup", () => {
    draggedAp = null;
  });

  // UI Event bindings
  container.querySelector("#rng-ap-power")?.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    container.querySelector("#lbl-ap-power").textContent = `${val} dBm (${Math.round(Math.pow(10, val/10))} mW)`;
    const ap = apList.find(a => a.id === selectedApId);
    if (ap) {
      ap.powerDbm = val;
      drawHeatmap();
    }
  });

  container.querySelector("#btn-add-ap")?.addEventListener("click", () => {
    if (apList.length < 5) {
      const newId = apList.length + 1;
      apList.push({
        id: newId,
        name: `AP-${newId}`,
        x: 200 + newId * 80,
        y: 280,
        channel: newId === 3 ? 11 : 1,
        powerDbm: 20,
        color: newId === 3 ? "#f59e0b" : "#8b5cf6"
      });
      sound.click();
      drawHeatmap();
    }
  });

  container.querySelector("#btn-toggle-channel-opt")?.addEventListener("click", () => {
    // Auto-tune to 1, 6, 11
    const cleanChannels = [1, 6, 11, 1, 6];
    apList.forEach((ap, idx) => {
      ap.channel = cleanChannels[idx % cleanChannels.length];
    });
    sound.success?.();
    drawHeatmap();
  });

  drawHeatmap();
}

// ============================================================================
// LAB 3: WIRELESS SECURITY, WPA3 SAE & ROGUE AP DEFENSE LAB
// ============================================================================
export function renderWlanSecurityLab(container) {
  let isAttacking = false;
  let attackLog = [];

  container.innerHTML = `
    <div class="space-y-5">
      <div class="p-4 sm:p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-base font-bold text-on-surface font-mono flex items-center gap-2">
            <span class="material-symbols-outlined text-rose-500 text-[20px]">security</span>
            <span>Uji Ketahanan Protokol Nirkabel &amp; Penetrasi Wi-Fi</span>
          </h2>
          <p class="text-xs text-on-surface-variant mt-0.5">Simulasi serangan Deauthentication, Capture Handshake, dan Proteksi WPA3 PMF (802.11w).</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <!-- Test 1: WPA2-Personal (Vulnerable) -->
        <div class="p-5 bg-surface-container-lowest rounded-2xl border border-rose-500/30 shadow-xs space-y-4">
          <div class="flex items-center justify-between border-b border-outline-variant pb-2.5">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-500"></span>
              <h3 class="font-bold text-sm text-on-surface font-mono">1. WPA2-Personal (PSK)</h3>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20">Rentan Serangan</span>
          </div>

          <p class="text-xs text-on-surface-variant leading-relaxed">
            WPA2 menggunakan 4-Way Handshake tradisional tanpa perlindungan frame manajemen (PMF). Penyerang dapat memutus paksa klien dengan frame Deauth palsu dan mencuri hash sandi.
          </p>

          <button id="btn-attack-wpa2" class="w-full py-2.5 px-4 bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span class="material-symbols-outlined text-[16px]">bug_report</span>
            <span>Jalankan Serangan Deauth &amp; Crack Handshake</span>
          </button>

          <div id="wpa2-attack-result" class="hidden p-3 rounded-xl bg-slate-950 font-mono text-xs text-rose-400 space-y-1"></div>
        </div>

        <!-- Test 2: WPA3-Personal SAE (Protected) -->
        <div class="p-5 bg-surface-container-lowest rounded-2xl border border-emerald-500/30 shadow-xs space-y-4">
          <div class="flex items-center justify-between border-b border-outline-variant pb-2.5">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
              <h3 class="font-bold text-sm text-on-surface font-mono">2. WPA3-Personal (SAE Dragonfly)</h3>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">Kebal Brute-Force</span>
          </div>

          <p class="text-xs text-on-surface-variant leading-relaxed">
            WPA3 mengintegrasikan <em>Protected Management Frames (PMF)</em> wajib dan protokol <em>Simultaneous Authentication of Equals (SAE)</em> dengan pertukaran Zero-Knowledge Proof.
          </p>

          <button id="btn-attack-wpa3" class="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span class="material-symbols-outlined text-[16px]">verified_user</span>
            <span>Uji Ketahanan Serangan pada WPA3</span>
          </button>

          <div id="wpa3-attack-result" class="hidden p-3 rounded-xl bg-slate-950 font-mono text-xs text-emerald-400 space-y-1"></div>
        </div>
      </div>
    </div>
  `;

  container.querySelector("#btn-attack-wpa2")?.addEventListener("click", () => {
    sound.click();
    const res = container.querySelector("#wpa2-attack-result");
    if (res) {
      res.classList.remove("hidden");
      res.innerHTML = `
        <div class="text-slate-400">[0.0s] aireplay-ng -0 5 -a 00:11:22:AA:BB:01 -c 34:E6:D7:12:34:56 wlan0mon</div>
        <div class="text-rose-400 font-bold">[0.5s] Frame Deauthentication berhasil disuntikkan! Klien terputus!</div>
        <div class="text-amber-400">[1.2s] Klien mengirim ulang 4-Way Handshake (EAPOL). Hash captured!</div>
        <div class="text-emerald-400 font-bold">[2.0s] Hashcat Dictionary Attack berhasil! Sandi terbongkar: 'smkbisa123'</div>
      `;
    }
  });

  container.querySelector("#btn-attack-wpa3")?.addEventListener("click", () => {
    sound.click();
    const res = container.querySelector("#wpa3-attack-result");
    if (res) {
      res.classList.remove("hidden");
      res.innerHTML = `
        <div class="text-slate-400">[0.0s] aireplay-ng -0 5 -a 00:11:22:AA:BB:02 wlan0mon</div>
        <div class="text-emerald-400 font-bold">[0.3s] BLOCKED! Protected Management Frames (802.11w) memvalidasi MAC kriptografis. Frame palsu ditolak AP!</div>
        <div class="text-sky-400">[1.0s] Dragonfly Handshake (SAE) menolak offline wordlist. Zero-Knowledge Proof aman.</div>
        <div class="text-emerald-400 font-bold">[2.0s] HASIL: Jaringan Kebal terhadap Deauth & Dictionary Attack!</div>
      `;
    }
  });
}

// ============================================================================
// LAB 4: ANTENNA RADIATION PATTERN & RF LINK BUDGET CALCULATOR
// ============================================================================
export function renderAntennaLinkLab(container) {
  let distanceKm = 2.5;
  let freqGhz = 5.8;
  let txPowerDbm = 23;
  let txGainDbi = 24; // Dish
  let rxGainDbi = 24; // Dish

  function calcLinkBudget() {
    // FSPL (dB) = 20*log10(d) + 20*log10(f) + 92.45 (d in km, f in GHz)
    const fspl = 20 * Math.log10(distanceKm) + 20 * Math.log10(freqGhz) + 92.45;
    // RSL = TxPower + TxGain - CableLoss(2dB) - FSPL + RxGain - CableLoss(2dB)
    const rsl = Math.round(txPowerDbm + txGainDbi - 2 - fspl + rxGainDbi - 2);
    // Fresnel Radius (m) at center = 17.32 * sqrt(d / (4 * f))
    const fresnelRadius = (17.32 * Math.sqrt(distanceKm / (4 * freqGhz))).toFixed(1);
    return { fspl: Math.round(fspl), rsl, fresnelRadius };
  }

  function update() {
    const res = calcLinkBudget();
    const lblFspl = container.querySelector("#link-fspl");
    const lblRsl = container.querySelector("#link-rsl");
    const lblFresnel = container.querySelector("#link-fresnel");
    const statusPill = container.querySelector("#link-status");

    if (lblFspl) lblFspl.textContent = `${res.fspl} dB`;
    if (lblRsl) lblRsl.textContent = `${res.rsl} dBm`;
    if (lblFresnel) lblFresnel.textContent = `${res.fresnelRadius} Meter`;
    if (statusPill) {
      if (res.rsl >= -65) {
        statusPill.textContent = "Koneksi Sangat Kuat (Throughput Maksimal)";
        statusPill.className = "text-emerald-400 font-bold font-mono text-xs";
      } else if (res.rsl >= -75) {
        statusPill.textContent = "Koneksi Stabil (Kualitas Baik)";
        statusPill.className = "text-sky-400 font-bold font-mono text-xs";
      } else {
        statusPill.textContent = "Sinyal Lemah (Rentan Putus / Redaman Cuaca)";
        statusPill.className = "text-rose-400 font-bold font-mono text-xs";
      }
    }
  }

  container.innerHTML = `
    <div class="space-y-5">
      <div class="p-4 sm:p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-base font-bold text-on-surface font-mono flex items-center gap-2">
            <span class="material-symbols-outlined text-amber-500 text-[20px]">cell_tower</span>
            <span>Kalkulator RF Link Budget &amp; Zona Fresnel (Point-to-Point)</span>
          </h2>
          <p class="text-xs text-on-surface-variant mt-0.5">Perhitungan transmisi nirkabel jarak jauh antar-gedung sekolah dengan antena Grid / Dish Parabolik.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <!-- Controls (6 cols) -->
        <div class="lg:col-span-6 p-5 bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-xs space-y-4">
          <div>
            <div class="flex justify-between text-xs font-mono mb-1">
              <span class="text-on-surface font-medium">Jarak Point-to-Point (Jarak Tempuh):</span>
              <span class="font-bold text-primary" id="lbl-dist">${distanceKm} km</span>
            </div>
            <input type="range" id="rng-dist" min="0.5" max="15" step="0.5" value="${distanceKm}" class="w-full accent-primary cursor-pointer" />
          </div>

          <div>
            <div class="flex justify-between text-xs font-mono mb-1">
              <span class="text-on-surface font-medium">Penguatan Antena Pemancar (Tx Gain):</span>
              <span class="font-bold text-amber-400" id="lbl-tx-gain">${txGainDbi} dBi (Parabolic Dish)</span>
            </div>
            <input type="range" id="rng-tx-gain" min="3" max="30" step="1" value="${txGainDbi}" class="w-full accent-primary cursor-pointer" />
          </div>

          <div>
            <div class="flex justify-between text-xs font-mono mb-1">
              <span class="text-on-surface font-medium">Daya Pancar Radio (Tx Power):</span>
              <span class="font-bold text-sky-400" id="lbl-tx-pow">${txPowerDbm} dBm (200 mW)</span>
            </div>
            <input type="range" id="rng-tx-pow" min="10" max="30" step="1" value="${txPowerDbm}" class="w-full accent-primary cursor-pointer" />
          </div>
        </div>

        <!-- Telemetry Results (6 cols) -->
        <div class="lg:col-span-6 p-5 bg-slate-950 rounded-2xl border border-slate-800 text-slate-300 font-mono shadow-xs space-y-4">
          <h3 class="text-xs font-bold text-sky-400 uppercase tracking-wider border-b border-slate-800 pb-2">Hasil Analisis Transmisi Gelombang RF</h3>

          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-slate-900 rounded-xl border border-slate-800">
              <span class="text-slate-400 block text-[10px]">Free Space Path Loss (FSPL):</span>
              <span class="text-base font-bold text-rose-400" id="link-fspl">-- dB</span>
            </div>
            <div class="p-3 bg-slate-900 rounded-xl border border-slate-800">
              <span class="text-slate-400 block text-[10px]">Received Signal Level (RSL):</span>
              <span class="text-base font-bold text-emerald-400" id="link-rsl">-- dBm</span>
            </div>
          </div>

          <div class="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <span class="text-slate-400 block text-[10px]">Jari-Jari Zona Fresnel (Titik Tengah Bebas Halangan):</span>
            <span class="text-sm font-bold text-amber-400" id="link-fresnel">-- Meter</span>
            <span class="text-[10px] text-slate-500 block mt-1">Wajib bebas dari pohon, tiang, dan bangunan minimal 60% jari-jari.</span>
          </div>

          <div class="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
            <span class="text-[10px] text-slate-400 block">Evaluasi Kelayakan Tautan:</span>
            <div id="link-status" class="mt-0.5">--</div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.querySelector("#rng-dist")?.addEventListener("input", (e) => {
    distanceKm = parseFloat(e.target.value);
    container.querySelector("#lbl-dist").textContent = `${distanceKm} km`;
    update();
  });

  container.querySelector("#rng-tx-gain")?.addEventListener("input", (e) => {
    txGainDbi = parseInt(e.target.value);
    rxGainDbi = txGainDbi;
    container.querySelector("#lbl-tx-gain").textContent = `${txGainDbi} dBi (${txGainDbi >= 20 ? "Parabolic Dish" : (txGainDbi >= 12 ? "Sectoral/Yagi" : "Omni")})`;
    update();
  });

  container.querySelector("#rng-tx-pow")?.addEventListener("input", (e) => {
    txPowerDbm = parseInt(e.target.value);
    container.querySelector("#lbl-tx-pow").textContent = `${txPowerDbm} dBm (${Math.round(Math.pow(10, txPowerDbm/10))} mW)`;
    update();
  });

  update();
}
