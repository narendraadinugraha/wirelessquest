// WirelessQuest - 30 Soal Cerita HOTS Jaringan Nirkabel (Bilingual ID/EN)
// Higher Order Thinking Skills: Analisis RF, Standar 802.11, Antena, Keamanan WPA3 & Troubleshooting

export const HOTS_QUESTIONS = [
  {
    "id": 1,
    "topic": 1,
    "topic_id": "Dasar Gelombang Radio & Spektrum",
    "topic_en": "RF Fundamentals & Spectrum",
    "question_id": "Sebuah sekolah SMK memiliki gedung laboratorium 3 lantai berdinding beton tebal. Siswa di lantai 2 sering mengeluhkan sinyal Wi-Fi di dalam ruang praktikum sangat lemah saat terhubung ke frekuensi 5 GHz dari Access Point di lorong luar, padahal jika beralih ke frekuensi 2.4 GHz sinyal terbaca penuh. Apa penjelasan ilmiah dan solusi teknis paling tepat untuk fenomena ini?",
    "question_en": "A vocational school has a 3-story concrete laboratory building. Students on the 2nd floor report weak 5 GHz signals inside classrooms from the hallway AP, whereas 2.4 GHz shows full bars. What is the technical explanation and best remediation?",
    "options_id": [
      {
        "text": "Frekuensi 5 GHz memiliki panjang gelombang lebih pendek sehingga mengalami redaman (attenuation) jauh lebih tinggi saat menembus beton; solusinya pasang AP tambahan langsung di dalam ruang lab.",
        "correct": true
      },
      {
        "text": "Frekuensi 5 GHz memiliki daya pancar lebih kecil dari standar internasional sehingga harus dinaikkan gain antenanya.",
        "correct": false
      },
      {
        "text": "Frekuensi 2.4 GHz memiliki bandwidth lebih besar sehingga mampu menembus dinding lebih mudah.",
        "correct": false
      },
      {
        "text": "Terjadi interferensi gelombang elektromagnetik dari proyektor LCD di ruang laboratorium.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "5 GHz has shorter wavelengths resulting in significantly higher path loss through concrete; deploy an additional AP directly inside the lab.",
        "correct": true
      },
      {
        "text": "5 GHz transmit power is legally capped lower; simply boost the antenna gain.",
        "correct": false
      },
      {
        "text": "2.4 GHz carries higher channel bandwidth allowing easier wall penetration.",
        "correct": false
      },
      {
        "text": "Electromagnetic interference from LCD projectors is dampening the signal.",
        "correct": false
      }
    ],
    "explanation_id": "Sesuai hukum fisika propagasi RF, semakin tinggi frekuensi gelombang radio, semakin pendek panjang gelombangnya dan semakin mudah diserap/diredam oleh material padat seperti beton bertulang.",
    "explanation_en": "According to RF propagation laws, higher frequencies have shorter wavelengths and suffer much greater absorption when penetrating dense physical materials like reinforced concrete."
  },
  {
    "id": 2,
    "topic": 1,
    "topic_id": "Dasar Gelombang Radio & Spektrum",
    "topic_en": "RF Fundamentals & Spectrum",
    "question_id": "Seorang teknisi jaringan mengukur kekuatan sinyal (RSSI) di meja kerja guru dan mendapatkan angka -55 dBm dengan Noise Floor terukur -90 dBm. Berapakah nilai Signal-to-Noise Ratio (SNR) dan bagaimana evaluasi kelayakan koneksi tersebut untuk video conference berstandar Full HD?",
    "question_en": "A network technician records an RSSI of -55 dBm at an instructor desk with a measured noise floor of -90 dBm. What is the SNR and its suitability for full-HD video conferencing?",
    "options_id": [
      {
        "text": "SNR = +35 dB, kualitas sinyal sangat luar biasa (jauh di atas batas minimal 25 dB) dan sangat optimal untuk Full HD.",
        "correct": true
      },
      {
        "text": "SNR = -145 dB, kualitas sinyal sangat buruk karena berada di bawah nol.",
        "correct": false
      },
      {
        "text": "SNR = -35 dB, koneksi akan mengalami jitter parah karena nilainya negatif.",
        "correct": false
      },
      {
        "text": "SNR = +49.5 dB, koneksi hanya layak untuk browsing teks dasar.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "SNR = +35 dB, exceptional signal headroom (far exceeding the 25 dB threshold) and ideal for Full HD streaming.",
        "correct": true
      },
      {
        "text": "SNR = -145 dB, connection is totally degraded because the sum is deeply negative.",
        "correct": false
      },
      {
        "text": "SNR = -35 dB, heavy jitter will occur due to negative delta.",
        "correct": false
      },
      {
        "text": "SNR = +49.5 dB, suitable only for low-bitrate text browsing.",
        "correct": false
      }
    ],
    "explanation_id": "SNR dihitung dengan rumus: RSSI - Noise Floor = (-55 dBm) - (-90 dBm) = +35 dB. Nilai SNR di atas 25-30 dB digolongkan istimewa dan stabil untuk multimedia berat.",
    "explanation_en": "SNR is calculated as RSSI - Noise Floor = (-55 dBm) - (-90 dBm) = +35 dB. An SNR above 25-30 dB indicates pristine RF health suitable for demanding real-time video streaming."
  },
  {
    "id": 3,
    "topic": 1,
    "topic_id": "Dasar Gelombang Radio & Spektrum",
    "topic_en": "RF Fundamentals & Spectrum",
    "question_id": "Di sebuah kantin sekolah, koneksi Wi-Fi 2.4 GHz sering mengalami packet loss tinggi dan terputus sesaat setiap jam istirahat makan siang, padahal jumlah pengguna tidak bertambah signifikan. Setelah ditelusuri, pengelola kantin baru saja menyalakan 2 unit Microwave Oven besar untuk memanaskan makanan. Mengapa hal ini bisa terjadi?",
    "question_en": "In a school cafeteria, the 2.4 GHz Wi-Fi experiences high packet loss and drops every lunch hour when staff operate two commercial microwave ovens. Why does this occur?",
    "options_id": [
      {
        "text": "Microwave oven beroperasi memanaskan air menggunakan radiasi gelombang radio pada frekuensi 2.45 GHz yang langsung menginterferensi pita ISM Wi-Fi.",
        "correct": true
      },
      {
        "text": "Microwave oven menyedot daya listrik stopkontak sehingga Access Point kekurangan tegangan (undervoltage).",
        "correct": false
      },
      {
        "text": "Uap panas dari makanan mengubah konstanta dielektrik udara dan memblokir gelombang radio sepenuhnya.",
        "correct": false
      },
      {
        "text": "Koneksi internet ISP otomatis melakukan throttling saat mendeteksi suhu panas di ruangan.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Microwave ovens emit RF radiation at approximately 2.45 GHz, inducing intense non-Wi-Fi RF noise across the unlicensed 2.4 GHz ISM band.",
        "correct": true
      },
      {
        "text": "The ovens cause electrical brownouts, dropping the AP supply voltage.",
        "correct": false
      },
      {
        "text": "Food steam alters air dielectric permittivity and completely halts RF propagation.",
        "correct": false
      },
      {
        "text": "The upstream ISP throttles bandwidth upon detecting thermal spikes.",
        "correct": false
      }
    ],
    "explanation_id": "Microwave oven bekerja pada frekuensi sekitar 2.45 GHz dengan daya tinggi (800-1200 Watt). Kebocoran RF dari magnetron oven langsung membanjiri pita frekuensi 2.4 GHz dengan gelombang pengganggu (non-802.11 interference).",
    "explanation_en": "Microwave magnetrons operate at ~2.45 GHz at high power (800-1200W). RF emissions directly elevate the noise floor across the 2.4 GHz spectrum, overwhelming low-power Wi-Fi frames."
  },
  {
    "id": 4,
    "topic": 1,
    "topic_id": "Dasar Gelombang Radio & Spektrum",
    "topic_en": "RF Fundamentals & Spectrum",
    "question_id": "Seorang administrator jaringan ingin mengubah daya pancar (Transmit Power) radio Access Point dari 100 mW menjadi 200 mW. Berapa peningkatan daya dalam satuan desibel (dBm) yang terjadi?",
    "question_en": "An administrator doubles the AP transmit power from 100 mW to 200 mW. What is the corresponding gain in dBm?",
    "options_id": [
      {
        "text": "+3 dBm (Aturan 10s and 3s: menggandakan daya dalam mW selalu menambah daya sebesar +3 dB)",
        "correct": true
      },
      {
        "text": "+10 dBm karena terjadi kenaikan 100 mW",
        "correct": false
      },
      {
        "text": "+100 dBm sesuai nilai penambahan wattnya",
        "correct": false
      },
      {
        "text": "+6 dBm karena terjadi kelipatan dua kali lipat kuadrat",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "+3 dBm (Rule of 10s and 3s: doubling mW power equals a +3 dB gain)",
        "correct": true
      },
      {
        "text": "+10 dBm corresponding to the 100 mW delta",
        "correct": false
      },
      {
        "text": "+100 dBm mirroring the numeric wattage delta",
        "correct": false
      },
      {
        "text": "+6 dBm due to squared doubling factors",
        "correct": false
      }
    ],
    "explanation_id": "100 mW = 20 dBm (10 * log10(100)). 200 mW = 23 dBm (10 * log10(200)). Kenaikan daya dua kali lipat setara dengan penambahan +3 dB.",
    "explanation_en": "100 mW corresponds to 20 dBm, and 200 mW equals 23 dBm. By the logarithmic rule of 3s, doubling milliwatt power always produces a +3 dB increase."
  },
  {
    "id": 5,
    "topic": 1,
    "topic_id": "Dasar Gelombang Radio & Spektrum",
    "topic_en": "RF Fundamentals & Spectrum",
    "question_id": "Pita frekuensi 6 GHz (Wi-Fi 6E dan Wi-Fi 7) sering disebut sebagai 'Greenfield Spectrum' bagi dunia telekomunikasi nirkabel. Apa alasan utama di balik predikat tersebut?",
    "question_en": "Why is the newly opened 6 GHz band (Wi-Fi 6E / Wi-Fi 7) considered a 'Greenfield Spectrum' in enterprise wireless engineering?",
    "options_id": [
      {
        "text": "Karena pita 6 GHz bebas dari perangkat warisan (legacy 802.11b/a/g/n) sehingga tidak ada kompromi penurunan kecepatan akibat backward compatibility.",
        "correct": true
      },
      {
        "text": "Karena frekuensi 6 GHz ramah lingkungan dan mengonsumsi daya listrik nol watt.",
        "correct": false
      },
      {
        "text": "Karena gelombang 6 GHz dapat menembus pepohonan dan dedaunan hijau tanpa redaman sama sekali.",
        "correct": false
      },
      {
        "text": "Karena pita 6 GHz tidak memerlukan regulasi lisensi pemerintah di seluruh dunia.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Because 6 GHz prohibits legacy 802.11b/a/g/n clients, completely eliminating backwards-compatibility protocol overhead.",
        "correct": true
      },
      {
        "text": "Because 6 GHz is eco-certified and operates with zero transmitter energy consumption.",
        "correct": false
      },
      {
        "text": "Because 6 GHz traverses foliage and dense green trees with zero RF path loss.",
        "correct": false
      },
      {
        "text": "Because 6 GHz requires no regional regulatory compliance anywhere globally.",
        "correct": false
      }
    ],
    "explanation_id": "Pita 6 GHz hanya mengizinkan perangkat modern (Wi-Fi 6E dan Wi-Fi 7). AP tidak perlu menyiarkan beacon lambat untuk mendukung klien kuno, sehingga efisiensi udara (airtime) mencapai 100%.",
    "explanation_en": "The 6 GHz band exclusively admits Wi-Fi 6E and Wi-Fi 7 stations, removing legacy management frame overhead and maximizing airtime efficiency."
  },
  {
    "id": 6,
    "topic": 2,
    "topic_id": "Standar IEEE 802.11 & Wi-Fi",
    "topic_en": "IEEE 802.11 Standards & Wi-Fi",
    "question_id": "Dalam sebuah ruang aula sekolah yang dihadiri 200 siswa serentak, jaringan Wi-Fi 5 (802.11ac) lama mengalami kemacetan parah (latensi tinggi hingga 600 ms) saat ujian daring berlangsung. Setelah diganti dengan Access Point Wi-Fi 6 (802.11ax), latensi turun drastis ke 15 ms meskipun kapasitas total bandwidth internet tidak ditambah. Fitur utama apakah pada Wi-Fi 6 yang menyelesaikan masalah ini?",
    "question_en": "During a 200-student digital exam in an auditorium, an 802.11ac (Wi-Fi 5) AP suffers 600 ms latency spikes. Upgrading to an 802.11ax (Wi-Fi 6) AP drops latency to 15 ms under the exact same upstream bandwidth. Which Wi-Fi 6 feature eliminated the bottleneck?",
    "options_id": [
      {
        "text": "OFDMA (Orthogonal Frequency-Division Multiple Access) yang membagi saluran menjadi Resource Units (RU) untuk melayani puluhan klien bersamaan.",
        "correct": true
      },
      {
        "text": "WPA3 Personal yang mempercepat enkripsi sandi siswa.",
        "correct": false
      },
      {
        "text": "Peningkatan daya pancar antena dari 20 dBm menjadi 100 dBm.",
        "correct": false
      },
      {
        "text": "Penggunaan kabel serat optik di antena penerima smartphone siswa.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "OFDMA (Orthogonal Frequency-Division Multiple Access) dividing subcarriers into Resource Units (RUs) for concurrent transmissions.",
        "correct": true
      },
      {
        "text": "WPA3 Personal cryptographic accelerators.",
        "correct": false
      },
      {
        "text": "Boosting the radio transmit power to high levels.",
        "correct": false
      },
      {
        "text": "Integrating fiber-optic transceivers on student handhelds.",
        "correct": false
      }
    ],
    "explanation_id": "OFDMA memungkinkan AP mentransmisikan data ke banyak klien sekaligus dalam satu interval waktu transmisi dengan membagi spektrum menjadi sub-carrier kecil (Resource Units), menghilangkan antrean contention.",
    "explanation_en": "OFDMA sub-divides a 20 MHz channel into granular Resource Units (RUs), enabling the AP to serve dozens of concurrent low-bandwidth packets simultaneously without serial contention delay."
  },
  {
    "id": 7,
    "topic": 2,
    "topic_id": "Standar IEEE 802.11 & Wi-Fi",
    "topic_en": "IEEE 802.11 Standards & Wi-Fi",
    "question_id": "Seorang teknisi TKJ ingin memaksimalkan kecepatan Wi-Fi di pita 2.4 GHz dengan mengaktifkan fitur Channel Bonding 40 MHz (menggabungkan 2 kanal 20 MHz). Mengapa praktik ini SANGAT TIDAK DIREKOMENDASIKAN di lingkungan padat seperti gedung sekolah?",
    "question_en": "A technician enables 40 MHz channel bonding on 2.4 GHz inside a school campus. Why is this strongly discouraged in high-density enterprise environments?",
    "options_id": [
      {
        "text": "Kanal 40 MHz memakan lebih dari 80% total spektrum 2.4 GHz, menyebabkan tabrakan interferensi parah dengan semua AP tetangga.",
        "correct": true
      },
      {
        "text": "Adaptor Wi-Fi modern tidak lagi mendukung modulasi 40 MHz di frekuensi 2.4 GHz.",
        "correct": false
      },
      {
        "text": "Channel bonding 40 MHz membutuhkan izin lisensi khusus dari kementerian kominfo.",
        "correct": false
      },
      {
        "text": "Kanal 40 MHz menyebabkan panas berlebih yang merusak sirkuit internal Access Point.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "A 40 MHz channel consumes over 80% of the entire 2.4 GHz spectrum, triggering catastrophic co-channel and adjacent-channel interference.",
        "correct": true
      },
      {
        "text": "Modern client network adapters no longer support 40 MHz channels on 2.4 GHz.",
        "correct": false
      },
      {
        "text": "40 MHz bonding requires regional governmental radio licensing.",
        "correct": false
      },
      {
        "text": "40 MHz channels generate thermal runaway that fries AP motherboard chips.",
        "correct": false
      }
    ],
    "explanation_id": "Pita 2.4 GHz hanya memiliki lebar total ~83.5 MHz. Kanal 40 MHz menghabiskan 2 dari 3 kanal non-overlapping yang ada, memicu Co-Channel Interference masif dengan AP di sekitarnya.",
    "explanation_en": "The 2.4 GHz band provides only ~83.5 MHz of spectrum. A 40 MHz bonded channel occupies two-thirds of the usable band, causing devastating interference with neighboring APs."
  },
  {
    "id": 8,
    "topic": 2,
    "topic_id": "Standar IEEE 802.11 & Wi-Fi",
    "topic_en": "IEEE 802.11 Standards & Wi-Fi",
    "question_id": "Teknologi MIMO pada standar 802.11n/ac/ax dilambangkan dengan konfigurasi matriks seperti 4x4:4. Apa arti angka-angka dalam spesifikasi tersebut?",
    "question_en": "MIMO antenna specifications in 802.11n/ac/ax are designated using notation such as 4x4:4. What does this nomenclature signify?",
    "options_id": [
      {
        "text": "4 antena pemancar (Tx), 4 antena penerima (Rx), dan 4 aliran spasial data simultan (Spatial Streams).",
        "correct": true
      },
      {
        "text": "4 frekuensi berbeda, 4 kanal berbeda, dan maksimal 4 pengguna terhubung.",
        "correct": false
      },
      {
        "text": "Daya pancar 4 Watt, jangkauan 4 kilometer, dan redaman maksimal 4 dB.",
        "correct": false
      },
      {
        "text": "Maksimal 4 Access Point dalam satu jaringan mesh dengan 4 VLAN.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "4 Transmit antennas (Tx), 4 Receive antennas (Rx), and 4 independent Spatial Streams.",
        "correct": true
      },
      {
        "text": "4 frequencies, 4 channels, and up to 4 concurrent users.",
        "correct": false
      },
      {
        "text": "4 Watt transmit power, 4 kilometer range, and 4 dB attenuation headroom.",
        "correct": false
      },
      {
        "text": "4 Access Points per mesh cluster across 4 VLAN tags.",
        "correct": false
      }
    ],
    "explanation_id": "Notasi MIMO standar adalah Tx x Rx : Spatial Streams. Angka 4x4:4 berarti perangkat memiliki 4 rantai radio pemancar, 4 penerima, dan mampu memancarkan 4 aliran data berbeda secara bersamaan.",
    "explanation_en": "Standard MIMO notation represents Tx x Rx : Spatial Streams. 4x4:4 indicates 4 transmitters, 4 receivers, and 4 spatial multiplexed data streams multiplying theoretical PHY rates."
  },
  {
    "id": 9,
    "topic": 2,
    "topic_id": "Standar IEEE 802.11 & Wi-Fi",
    "topic_en": "IEEE 802.11 Standards & Wi-Fi",
    "question_id": "Pada spesifikasi Wi-Fi 6 (802.11ax), terdapat fitur Target Wake Time (TWT). Apa dampak positif terbesar fitur ini terutama bagi perangkat Internet of Things (IoT) sekolah seperti sensor suhu dan presensi RFID?",
    "question_en": "What is the most significant operational benefit of Target Wake Time (TWT) in Wi-Fi 6 for battery-powered IoT edge sensors?",
    "options_id": [
      {
        "text": "Menghemat konsumsi baterai perangkat IoT secara signifikan dengan mengatur jadwal kapan modul radio harus tidur dan bangun.",
        "correct": true
      },
      {
        "text": "Mempercepat kecepatan download file sensor hingga 9.6 Gbps.",
        "correct": false
      },
      {
        "text": "Menggantikan alamat IP perangkat sensor menjadi alamat GPS otomatis.",
        "correct": false
      },
      {
        "text": "Memperluas jangkauan antena sensor hingga radius 50 kilometer.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Significantly prolongs battery lifespan by negotiating exact sleep and wake intervals with the AP.",
        "correct": true
      },
      {
        "text": "Boosts download throughput up to 9.6 Gbps for all telemetry frames.",
        "correct": false
      },
      {
        "text": "Replaces IP addressing with automatic satellite GPS coordinates.",
        "correct": false
      },
      {
        "text": "Extends dipole antenna range to 50 kilometers.",
        "correct": false
      }
    ],
    "explanation_id": "TWT memungkinkan AP dan klien IoT menjadwalkan waktu komunikasi tertentu. Modul Wi-Fi IoT dapat tetap berada dalam kondisi deep sleep saat tidak mengirim data, menghemat baterai hingga berbulan-bulan.",
    "explanation_en": "TWT allows stations to negotiate predefined sleep schedules with the AP, drastically lowering duty cycles and preserving battery longevity for lightweight IoT sensors."
  },
  {
    "id": 10,
    "topic": 2,
    "topic_id": "Standar IEEE 802.11 & Wi-Fi",
    "topic_en": "IEEE 802.11 Standards & Wi-Fi",
    "question_id": "Standar Wi-Fi 7 (802.11be) menghadirkan inovasi Multi-Link Operation (MLO). Bagaimana cara kerja MLO dalam meningkatkan performa dan keandalan transmisi data?",
    "question_en": "Wi-Fi 7 (802.11be) introduces Multi-Link Operation (MLO). How does MLO enhance network performance and reliability?",
    "options_id": [
      {
        "text": "Memungkinkan satu perangkat mengirim dan menerima paket data secara simultan di beberapa pita frekuensi (2.4, 5, dan 6 GHz) sekaligus.",
        "correct": true
      },
      {
        "text": "Menggabungkan 10 router internet rumahan menjadi satu router super.",
        "correct": false
      },
      {
        "text": "Mengubah sinyal Wi-Fi menjadi sinyal seluler 5G secara otomatis tanpa kartu SIM.",
        "correct": false
      },
      {
        "text": "Menghapus kebutuhan kata sandi autentikasi pada seluruh jaringan publik.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Permits an endpoint to transmit and receive data concurrently across multiple frequency bands (2.4, 5, and 6 GHz) over aggregated links.",
        "correct": true
      },
      {
        "text": "Merges 10 consumer broadband modems into one aggregated router.",
        "correct": false
      },
      {
        "text": "Converts Wi-Fi RF frames directly into cellular 5G packets without SIM cards.",
        "correct": false
      },
      {
        "text": "Eliminates security password requirements across all public networks.",
        "correct": false
      }
    ],
    "explanation_id": "Sebelum Wi-Fi 7, perangkat hanya bisa terhubung ke satu pita frekuensi pada satu waktu. MLO memungkinkan agregasi multi-band simultan, melipatgandakan kecepatan dan mengurangi latensi.",
    "explanation_en": "Legacy Wi-Fi associates stations to a single band at a time. MLO aggregates multiple physical channels across 2.4, 5, and 6 GHz simultaneously, yielding ultra-low jitter and multi-link redundancy."
  },
  {
    "id": 11,
    "topic": 3,
    "topic_id": "Arsitektur & Topologi WLAN",
    "topic_en": "WLAN Architecture & Topologies",
    "question_id": "Sebuah kampus SMK memasang 15 unit Access Point yang tersebar di 3 gedung. Seluruh AP dihubungkan ke Switch kabel dan dikonfigurasi menyiarkan nama SSID yang sama yaitu 'SMK-BISA'. Arsitektur topologi nirkabel apakah yang terbentuk pada skenario ini?",
    "question_en": "A school deploys 15 Access Points across three buildings interconnected via Ethernet switches, broadcasting a single unified SSID named 'SMK-BISA'. Which 802.11 topology does this represent?",
    "options_id": [
      {
        "text": "Extended Service Set (ESS) dengan Distribution System (DS) berbasis kabel switch",
        "correct": true
      },
      {
        "text": "Independent Basic Service Set (IBSS) ad-hoc tanpa koordinasi",
        "correct": false
      },
      {
        "text": "Topologi Mesh murni tanpa kabel distribusi jaringan",
        "correct": false
      },
      {
        "text": "Point-to-Point (PtP) link antar gedung",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Extended Service Set (ESS) underpinned by a wired Ethernet Distribution System (DS)",
        "correct": true
      },
      {
        "text": "Independent Basic Service Set (IBSS) ad-hoc peer arrangement",
        "correct": false
      },
      {
        "text": "Pure wireless mesh topology lacking wired distribution",
        "correct": false
      },
      {
        "text": "Point-to-Point (PtP) directional bridge link",
        "correct": false
      }
    ],
    "explanation_id": "Kumpulan dua atau lebih Basic Service Set (BSS) yang dihubungkan melalui sistem distribusi (DS) dan menggunakan SSID terpadu disebut Extended Service Set (ESS).",
    "explanation_en": "An Extended Service Set (ESS) unites multiple BSS cells through a common wired Distribution System (DS), allowing mobile clients to roam under a single broadcast SSID."
  },
  {
    "id": 12,
    "topic": 3,
    "topic_id": "Arsitektur & Topologi WLAN",
    "topic_en": "WLAN Architecture & Topologies",
    "question_id": "Saat seorang guru berjalan dari ruang guru ke ruang rapat sambil melakukan panggilan suara berbasis VoIP di smartphone, panggilan tiba-tiba putus selama 2 detik setiap kali ponsel berpindah ke Access Point baru. Protokol IEEE apakah yang perlu diaktifkan pada sistem controller AP untuk mencapai Fast Roaming tanpa putus?",
    "question_en": "During a VoIP call, an instructor experiences 2-second audio drops every time their smartphone roams to a new AP. Which IEEE amendment must be activated on the controller for seamless Fast BSS Transition?",
    "options_id": [
      {
        "text": "IEEE 802.11r (Fast BSS Transition) yang memotong proses autentikasi enkripsi kunci sebelum klien berpindah.",
        "correct": true
      },
      {
        "text": "IEEE 802.3af (Power over Ethernet) untuk menambah daya baterai.",
        "correct": false
      },
      {
        "text": "IEEE 802.1Q untuk menambahkan tag VLAN pada panggilan suara.",
        "correct": false
      },
      {
        "text": "IEEE 802.11b untuk menurunkan kecepatan ke 11 Mbps.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "IEEE 802.11r (Fast BSS Transition) caching cryptographic handshake keys prior to client handoff.",
        "correct": true
      },
      {
        "text": "IEEE 802.3af (PoE) providing additional smartphone battery charging.",
        "correct": false
      },
      {
        "text": "IEEE 802.1Q VLAN trunking for packet marking.",
        "correct": false
      },
      {
        "text": "IEEE 802.11b downgrading PHY rates to 11 Mbps.",
        "correct": false
      }
    ],
    "explanation_id": "Standar 802.11r memangkas proses re-autentikasi dan negosiasi kunci enkripsi WPA2/WPA3 saat klien berpindah AP dari ratusan milidetik menjadi di bawah 30-50 ms, sehingga panggilan VoIP tidak putus.",
    "explanation_en": "IEEE 802.11r (Fast BSS Transition) pre-authenticates security keys with target APs, slashing roaming handoff latency below 30 ms to preserve voice session persistence."
  },
  {
    "id": 13,
    "topic": 3,
    "topic_id": "Arsitektur & Topologi WLAN",
    "topic_en": "WLAN Architecture & Topologies",
    "question_id": "Laboratorium TKJ berada di gedung utama, sedangkan bengkel otomotif berada di gedung terpisah sejauh 400 meter di mana penggalian aspal untuk kabel fiber optik tidak diizinkan pihak sekolah. Topologi dan perangkat nirkabel apakah yang paling tepat untuk menghubungkan jaringan kedua gedung tersebut?",
    "question_en": "The IT lab is in the main building while the automotive shop is 400m away across a paved courtyard where trenching fiber is forbidden. Which wireless topology and hardware configuration is best?",
    "options_id": [
      {
        "text": "Wireless Bridge Point-to-Point (PtP) menggunakan 2 unit radio directional luar ruangan berfrekuensi 5 GHz yang diarahkan saling berhadapan (Line of Sight).",
        "correct": true
      },
      {
        "text": "Memasang Access Point indoor standar di jendela ruang lab dengan antena omnidirectional.",
        "correct": false
      },
      {
        "text": "Membuat jaringan ad-hoc Bluetooth antar laptop di kedua gedung.",
        "correct": false
      },
      {
        "text": "Memasang repeater Wi-Fi rumahan di pohon tengah lapangan sekolah.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "A Point-to-Point (PtP) wireless bridge using two 5 GHz outdoor directional radios aligned in direct Line of Sight.",
        "correct": true
      },
      {
        "text": "Placing a standard indoor AP at the window using omnidirectional rubber duck antennas.",
        "correct": false
      },
      {
        "text": "Setting up an ad-hoc BLE mesh across student laptops in both buildings.",
        "correct": false
      },
      {
        "text": "Attaching a consumer plug-in Wi-Fi extender to a tree in the courtyard.",
        "correct": false
      }
    ],
    "explanation_id": "Jembatan nirkabel Point-to-Point (PtP) dengan antena directional luar ruangan (seperti Ubiquiti NanoStation atau MikroTik SXT) menyediakan throughput ratusan Mbps dengan latensi rendah melintasi jarak ratusan meter.",
    "explanation_en": "A dedicated Point-to-Point (PtP) 5 GHz wireless bridge with directional antennas delivers transparent layer-2 connectivity with carrier-grade throughput without physical trenching."
  },
  {
    "id": 14,
    "topic": 3,
    "topic_id": "Arsitektur & Topologi WLAN",
    "topic_en": "WLAN Architecture & Topologies",
    "question_id": "Apa perbedaan mendasar antara Service Set Identifier (SSID) dan Basic Service Set Identifier (BSSID) pada sebuah jaringan Wi-Fi?",
    "question_en": "What is the fundamental architectural difference between an SSID and a BSSID in Wi-Fi networks?",
    "options_id": [
      {
        "text": "SSID adalah nama logis jaringan yang dibaca manusia (contoh: 'Lab-TKJ'), sedangkan BSSID adalah alamat MAC fisik 48-bit dari kartu radio Access Point.",
        "correct": true
      },
      {
        "text": "SSID adalah kata sandi jaringan, sedangkan BSSID adalah nama pengguna admin.",
        "correct": false
      },
      {
        "text": "SSID digunakan untuk frekuensi 2.4 GHz, sedangkan BSSID khusus untuk frekuensi 5 GHz.",
        "correct": false
      },
      {
        "text": "SSID mengontrol alamat IP router, sedangkan BSSID mengontrol nomor port switch.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "SSID is the human-readable logical network name (e.g., 'Lab-TKJ'), while BSSID is the 48-bit physical MAC address of the AP radio interface.",
        "correct": true
      },
      {
        "text": "SSID is the WPA2 passphrase, while BSSID is the administrative root login.",
        "correct": false
      },
      {
        "text": "SSID designates 2.4 GHz operations, while BSSID is restricted to 5 GHz radios.",
        "correct": false
      },
      {
        "text": "SSID governs the default gateway IP, while BSSID controls switch port allocations.",
        "correct": false
      }
    ],
    "explanation_id": "SSID adalah identifier tekstual (hingga 32 karakter) untuk dikenali pengguna. BSSID adalah alamat MAC layer-2 dari pemancar radio AP yang membedakan AP satu dengan AP lainnya dalam satu ESS.",
    "explanation_en": "The SSID is a configurable text label broadcast to users, whereas the BSSID is the hardware layer-2 MAC address of the serving radio transceiver."
  },
  {
    "id": 15,
    "topic": 3,
    "topic_id": "Arsitektur & Topologi WLAN",
    "topic_en": "WLAN Architecture & Topologies",
    "question_id": "Dalam arsitektur Wireless Mesh Network (WDS), setiap kali sinyal nirkabel melompat (hop) dari satu node mesh ke node mesh berikutnya menggunakan radio saluran tunggal yang sama, apa konsekuensi matematis terhadap throughput efektif?",
    "question_en": "In a single-radio WDS wireless mesh network, what is the theoretical throughput penalty incurred for every intermediate wireless repeater hop?",
    "options_id": [
      {
        "text": "Throughput berkurang sekitar 50% pada setiap hop karena radio harus bergantian mengirim dan menerima paket pada frekuensi yang sama (half-duplex).",
        "correct": true
      },
      {
        "text": "Throughput bertambah dua kali lipat karena terjadi penguatan daya sinyal.",
        "correct": false
      },
      {
        "text": "Throughput tetap konstan tanpa ada penurunan kecepatan.",
        "correct": false
      },
      {
        "text": "Throughput langsung turun menjadi 0% setelah lompatan kedua.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Throughput is halved (~50% reduction) per hop due to half-duplex store-and-forward retransmissions over the same channel.",
        "correct": true
      },
      {
        "text": "Throughput doubles due to RF repeater signal amplification.",
        "correct": false
      },
      {
        "text": "Throughput remains unaffected by repeater hops.",
        "correct": false
      },
      {
        "text": "Throughput drops instantly to zero after the second hop.",
        "correct": false
      }
    ],
    "explanation_id": "Karena Wi-Fi bersifat half-duplex dan saluran yang sama digunakan untuk menerima dari AP induk dan mengirim ke klien, separuh waktu udara (airtime) terbuang untuk proses relaying ulang.",
    "explanation_en": "Single-band mesh repeaters must receive and retransmit packets over the same half-duplex RF channel, halving usable bandwidth on every consecutive hop."
  },
  {
    "id": 16,
    "topic": 4,
    "topic_id": "Perangkat & Antena Nirkabel",
    "topic_en": "Wireless Hardware & Antennas",
    "question_id": "Sebuah sekolah berencana memasang Access Point di tengah plafon langit-langit ruang kelas berukuran 8x8 meter dengan tujuan memancarkan sinyal merata ke seluruh laptop siswa di dalam ruangan. Jenis antena apakah yang paling tepat terpasang pada AP tersebut?",
    "question_en": "A school is installing an AP in the center ceiling of an 8x8m classroom to provide uniform coverage to all student desks. Which antenna radiation pattern is most suitable?",
    "options_id": [
      {
        "text": "Antena Omnidirectional dengan gain rendah-sedang (3 - 5 dBi) yang memancarkan pola cakupan melingkar 360 derajat horizontal.",
        "correct": true
      },
      {
        "text": "Antena Parabolic Dish 30 dBi yang terpusat seperti laser.",
        "correct": false
      },
      {
        "text": "Antena Yagi terarah 18 dBi yang diarahkan ke papan tulis.",
        "correct": false
      },
      {
        "text": "Antena Grid luar ruangan dengan sudut pancaran vertikal sempit 5 derajat.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Low-to-medium gain (3-5 dBi) Omnidirectional antenna generating a 360-degree horizontal doughnut pattern.",
        "correct": true
      },
      {
        "text": "Parabolic Dish 30 dBi laser-focused antenna.",
        "correct": false
      },
      {
        "text": "High-gain directional Yagi antenna pointed at the chalkboard.",
        "correct": false
      },
      {
        "text": "Outdoor narrow-beam Grid antenna.",
        "correct": false
      }
    ],
    "explanation_id": "Antena omnidirectional menyebarkan sinyal merata ke segala arah 360 derajat di bidang horizontal, sangat cocok untuk ditempatkan di tengah langit-langit ruangan umum.",
    "explanation_en": "Omnidirectional antennas radiate RF power uniformly in all horizontal directions (360 degrees), making them the industry standard for indoor central ceiling deployments."
  },
  {
    "id": 17,
    "topic": 4,
    "topic_id": "Perangkat & Antena Nirkabel",
    "topic_en": "Wireless Hardware & Antennas",
    "question_id": "Dalam link nirkabel Point-to-Point luar ruangan sejauh 5 km berfrekuensi 5 GHz, teknisi memastikan kedua antena saling terlihat mata (Visual LoS). Namun koneksi sering putus dan paket loss mencapai 40%. Setelah diperiksa menggunakan teropong, terdapat deretan puncak pohon pinus yang menjorok masuk ke area tengah antara kedua tower. Mengapa puncak pohon tersebut merusak koneksi padahal antena masih terlihat?",
    "question_en": "On a 5 km PtP link at 5 GHz, two directional antennas maintain visual Line of Sight. However, 40% packet loss occurs because pine treetops intrude into the center path. Why do trees degrade performance despite clear visual sight?",
    "options_id": [
      {
        "text": "Pohon melanggar kelonggaran Zona Fresnel pertama (First Fresnel Zone), menyebabkan pantulan gelombang yang tiba di antena penerima berbeda fase dan membatalkan sinyal utama.",
        "correct": true
      },
      {
        "text": "Daun pinus mengandung zat magnetis yang membelokkan arah polarisasi medan magnet bumi.",
        "correct": false
      },
      {
        "text": "Pohon pinus menyerap seluruh daya listrik tegangan tinggi dari kabel PoE.",
        "correct": false
      },
      {
        "text": "Antena pemancar otomatis mati ketika mendeteksi objek organik hidup.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "The trees intrude into the First Fresnel Zone, generating phase-inverted multipath reflections that cause destructive signal cancellation.",
        "correct": true
      },
      {
        "text": "Pine needles contain ferromagnetic compounds warping geomagnetic fields.",
        "correct": false
      },
      {
        "text": "Pine foliage draws PoE electrical voltage out of the antennas.",
        "correct": false
      },
      {
        "text": "Transmitters undergo safety auto-shutdown when detecting organic matter.",
        "correct": false
      }
    ],
    "explanation_id": "Propagasi RF membutuhkan ruang bebas berbentuk elips (Zona Fresnel). Minimal 60% jari-jari Zona Fresnel pertama harus bebas dari penghalang. Jika pohon menyentuh zona ini, pantulan sinyal akan membatalkan sinyal asli.",
    "explanation_en": "RF Line of Sight requires 60% clearance of the 3D First Fresnel Zone. Obstacles within this ellipsoidal envelope create phase-shifted reflections that destructively cancel carrier waves."
  },
  {
    "id": 18,
    "topic": 4,
    "topic_id": "Perangkat & Antena Nirkabel",
    "topic_en": "Wireless Hardware & Antennas",
    "question_id": "Apa keuntungan arsitektur Controller-based Access Point (Lightweight AP / CAPWAP) dibandingkan Standalone / Autonomous AP pada jaringan sekolah dengan 50 unit AP?",
    "question_en": "What is the primary advantage of a Controller-based AP architecture (Lightweight AP / CAPWAP) over Standalone APs in a 50-AP campus deployment?",
    "options_id": [
      {
        "text": "Konfigurasi terpusat dari satu dashboard WLC, pengaturan daya dan kanal radio otomatis (RRM), serta roaming klien yang mulus dan terpantau.",
        "correct": true
      },
      {
        "text": "Menghilangkan kebutuhan kabel listrik dan kabel jaringan ke seluruh AP.",
        "correct": false
      },
      {
        "text": "Biaya perangkat menjadi 100% gratis tanpa perlu membeli hardware controller.",
        "correct": false
      },
      {
        "text": "Menaikkan kecepatan internet ISP dari 10 Mbps menjadi 10 Gbps secara otomatis.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Centralized management via WLC, automated Radio Resource Management (RRM) channel/power tuning, and coordinated roaming.",
        "correct": true
      },
      {
        "text": "Eliminates all power and Ethernet cabling to every AP location.",
        "correct": false
      },
      {
        "text": "Hardware costs become zero dollars with no controller footprint.",
        "correct": false
      },
      {
        "text": "Automatically magnifies ISP upstream speed 1000-fold without plan upgrades.",
        "correct": false
      }
    ],
    "explanation_id": "WLC (Wireless LAN Controller) memungkinkan administrator mengelola konfigurasi, pembaruan firmware, kebijakan keamanan, serta dynamic RF balancing untuk puluhan hingga ribuan AP dari satu konsol.",
    "explanation_en": "Lightweight APs terminate CAPWAP control and data tunnels at the WLC, enabling global radio resource optimization, unified firmware upgrades, and fast roaming coordination."
  },
  {
    "id": 19,
    "topic": 4,
    "topic_id": "Perangkat & Antena Nirkabel",
    "topic_en": "Wireless Hardware & Antennas",
    "question_id": "Jika sebuah antena memiliki spesifikasi Gain yang sangat tinggi (misal Antena Grid 27 dBi), bagaimana karakteristik sudut pancaran (Beamwidth) gelombang radionya?",
    "question_en": "When an antenna features very high gain (e.g., a 27 dBi Grid antenna), how does this affect its radiation beamwidth?",
    "options_id": [
      {
        "text": "Sudut pancarannya menjadi sangat sempit dan terfokus (hanya beberapa derajat horizontal dan vertikal).",
        "correct": true
      },
      {
        "text": "Sudut pancarannya melebar menjadi 360 derajat ke segala arah.",
        "correct": false
      },
      {
        "text": "Sudut pancarannya tidak terpengaruh oleh besarnya gain antena.",
        "correct": false
      },
      {
        "text": "Antena hanya dapat memancarkan gelombang suara bukan gelombang radio.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Its beamwidth becomes exceptionally narrow and focused (concentrated within a few degrees in azimuth and elevation).",
        "correct": true
      },
      {
        "text": "Its beamwidth expands into a 360-degree sphere in all directions.",
        "correct": false
      },
      {
        "text": "Beamwidth is totally invariant with antenna gain.",
        "correct": false
      },
      {
        "text": "The antenna radiates acoustic sonic pressure rather than electromagnetic waves.",
        "correct": false
      }
    ],
    "explanation_id": "Antena adalah perangkat pasif yang mematuhi hukum kekekalan energi. Untuk menghasilkan gain tinggi (dBi besar), energi radiasi harus dipadatkan ke sudut yang sangat sempit dan terarah.",
    "explanation_en": "Antenna gain is achieved through geometric reciprocity by focusing isotropic radiation into a tighter spatial beamwidth, trading angular coverage for focused axial reach."
  },
  {
    "id": 20,
    "topic": 4,
    "topic_id": "Perangkat & Antena Nirkabel",
    "topic_en": "Wireless Hardware & Antennas",
    "question_id": "Seorang teknisi TKJ menyambungkan radio AP luar ruangan berdaya 20 dBm (100 mW) ke antena sektoral 15 dBi menggunakan kabel coaxial pigtail yang memiliki redaman (cable loss) 2 dB. Berapakah nilai Equivalent Isotropically Radiated Power (EIRP) total yang dipancarkan ke udara?",
    "question_en": "An outdoor radio configured at 20 dBm (100 mW) is connected to a 15 dBi sector antenna via a coaxial jumper cable exhibiting 2 dB insertion loss. What is the calculated EIRP?",
    "options_id": [
      {
        "text": "EIRP = 33 dBm (Daya Radio 20 dBm - Redaman Kabel 2 dB + Gain Antena 15 dBi)",
        "correct": true
      },
      {
        "text": "EIRP = 37 dBm (Daya Radio 20 dBm + Redaman Kabel 2 dB + Gain Antena 15 dBi)",
        "correct": false
      },
      {
        "text": "EIRP = 15 dBm karena redaman kabel mematikan daya radio",
        "correct": false
      },
      {
        "text": "EIRP = 300 mW tanpa satuan dBm",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "EIRP = 33 dBm (Transmitter 20 dBm - Cable Loss 2 dB + Antenna Gain 15 dBi)",
        "correct": true
      },
      {
        "text": "EIRP = 37 dBm adding all values unconditionally",
        "correct": false
      },
      {
        "text": "EIRP = 15 dBm constrained by cable loss",
        "correct": false
      },
      {
        "text": "EIRP = 300 mW absolute scalar",
        "correct": false
      }
    ],
    "explanation_id": "Rumus EIRP = Tx Power (dBm) - Cable Loss (dB) + Antenna Gain (dBi). Maka: 20 - 2 + 15 = 33 dBm (setara dengan daya pancar efektif ~2 Watt di udara).",
    "explanation_en": "EIRP = Tx Power - Loss + Gain = 20 dBm - 2 dB + 15 dBi = 33 dBm (approximately 2 Watts effective isotropic radiated power)."
  },
  {
    "id": 21,
    "topic": 5,
    "topic_id": "Keamanan Jaringan Nirkabel",
    "topic_en": "Wireless Security Protocols",
    "question_id": "Mengapa protokol enkripsi WEP (Wired Equivalent Privacy) kini dinyatakan terlarang dan tidak boleh lagi digunakan pada jaringan nirkabel modern?",
    "question_en": "Why is WEP (Wired Equivalent Privacy) formally deprecated and prohibited in modern enterprise networking?",
    "options_id": [
      {
        "text": "Menggunakan cipher stream RC4 dengan Initialization Vector (IV) 24-bit yang terlalu pendek sehingga kunci enkripsi dapat dipecahkan dalam hitungan menit menggunakan serangan IV collision.",
        "correct": true
      },
      {
        "text": "Hanya bisa digunakan pada perangkat bersistem operasi Linux bukan Windows.",
        "correct": false
      },
      {
        "text": "Membuat kecepatan internet turun menjadi 1 Kbps secara permanen.",
        "correct": false
      },
      {
        "text": "Membutuhkan biaya lisensi bulanan yang mahal ke konsorsium Wi-Fi.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "It uses RC4 with a diminutive 24-bit IV, suffering deterministic IV collisions that permit full passphrase recovery within minutes.",
        "correct": true
      },
      {
        "text": "It only operates on Linux workstations and is incompatible with Windows.",
        "correct": false
      },
      {
        "text": "It permanently throttles all bandwidth to 1 Kbps.",
        "correct": false
      },
      {
        "text": "It requires recurring licensing royalties to the Wi-Fi Alliance.",
        "correct": false
      }
    ],
    "explanation_id": "Panjang IV WEP hanya 24 bit, sehingga dalam jaringan yang sibuk terjadi pengulangan IV (IV collision). Penyerang yang menangkap paket dapat memulihkan seluruh kunci rahasia dalam < 60 detik.",
    "explanation_en": "WEP relies on a 24-bit IV combined with RC4. In active networks, IV reuse (collisions) occurs rapidly, enabling passive eavesdroppers to crack keys via statistical analysis."
  },
  {
    "id": 22,
    "topic": 5,
    "topic_id": "Keamanan Jaringan Nirkabel",
    "topic_en": "Wireless Security Protocols",
    "question_id": "Seorang penyerang (hacker) mengirimkan ratusan frame palsu bertipe '802.11 Deauthentication Frame' yang dipalsukan mengatasnamakan alamat MAC Access Point ke laptop seorang bendahara sekolah. Akibatnya, laptop bendahara terus-menerus terputus dari Wi-Fi. Jenis serangan apakah ini dan mengapa berhasil dilakukan pada jaringan WPA2 standar?",
    "question_en": "An attacker spoofs the AP MAC address to flood a client with 802.11 Deauthentication frames, repeatedly disconnecting the target. What is this attack and why does legacy WPA2 succumb to it?",
    "options_id": [
      {
        "text": "Deauthentication Denial-of-Service (DoS) Attack; berhasil karena frame manajemen 802.11 pada WPA2 tidak dienkripsi atau diautentikasi (belum ada PMF).",
        "correct": true
      },
      {
        "text": "Man-in-the-Middle Attack; berhasil karena kata sandi bendahara terlalu pendek.",
        "correct": false
      },
      {
        "text": "Rogue DHCP Server Attack; berhasil karena pool IP address habis.",
        "correct": false
      },
      {
        "text": "SQL Injection Attack; berhasil karena form login web rentan.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Deauthentication Denial-of-Service (DoS) attack; succeeds because legacy 802.11 management frames are unencrypted and unauthenticated without PMF.",
        "correct": true
      },
      {
        "text": "Man-in-the-Middle attack exploiting short user passwords.",
        "correct": false
      },
      {
        "text": "Rogue DHCP exhaustion exhausting IP lease scopes.",
        "correct": false
      },
      {
        "text": "SQL injection targeting the captive portal authentication database.",
        "correct": false
      }
    ],
    "explanation_id": "Pada standar 802.11 awal dan WPA2 standar, frame manajemen (seperti Disconnect/Deauth) dikirim dalam bentuk teks terbuka (unprotected). Standar WPA3 mewajibkan Protected Management Frames (PMF / 802.11w) untuk mencegah serangan ini.",
    "explanation_en": "Legacy 802.11 management frames lack cryptographic integrity checks, enabling trivial MAC spoofing. 802.11w Protected Management Frames (PMF), mandatory in WPA3, eliminates this vulnerability."
  },
  {
    "id": 23,
    "topic": 5,
    "topic_id": "Keamanan Jaringan Nirkabel",
    "topic_en": "Wireless Security Protocols",
    "question_id": "Inovasi kriptografi terpenting apa yang dihadirkan oleh WPA3-Personal untuk menggantikan mekanisme 4-Way Handshake pada WPA2-Personal yang rentan disadap?",
    "question_en": "Which key cryptographic mechanism in WPA3-Personal replaces the 4-Way Handshake vulnerable to offline dictionary cracking in WPA2?",
    "options_id": [
      {
        "text": "Simultaneous Authentication of Equals (SAE) berbasis pertukaran kunci Dragonfly yang kebal terhadap serangan kamus offline (Offline Dictionary Attack).",
        "correct": true
      },
      {
        "text": "Penambahan panjang kata sandi wajib minimal 64 karakter angka.",
        "correct": false
      },
      {
        "text": "Penggantian alamat MAC kartu jaringan setiap 5 menit sekali.",
        "correct": false
      },
      {
        "text": "Penyembunyian nama SSID Wi-Fi secara permanen dari publik.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Simultaneous Authentication of Equals (SAE) employing Dragonfly handshake cryptography to neutralize offline dictionary attacks.",
        "correct": true
      },
      {
        "text": "Mandating 64-character numerical passphrases.",
        "correct": false
      },
      {
        "text": "MAC randomization every 5 minutes at hardware layers.",
        "correct": false
      },
      {
        "text": "Enforcing permanently hidden SSIDs across all cells.",
        "correct": false
      }
    ],
    "explanation_id": "SAE (Dragonfly Handshake) menggunakan zero-knowledge proof di mana penyerang yang merekam proses autentikasi di udara tidak dapat melakukan tebakan kata sandi kamus offline seperti pada WPA2.",
    "explanation_en": "SAE leverages discrete logarithm zero-knowledge proofs. Captured authentication handshakes yield zero cryptanalytic data for offline password guessing dictionaries."
  },
  {
    "id": 24,
    "topic": 5,
    "topic_id": "Keamanan Jaringan Nirkabel",
    "topic_en": "Wireless Security Protocols",
    "question_id": "Seorang penyerang memasang Access Point portabel di kantin sekolah dengan menyiarkan SSID yang sama persis ('Wi-Fi-SMK') dan membuat halaman login web tiruan untuk memancing siswa memasukkan username dan password. Metode serangan siber apakah ini?",
    "question_en": "An attacker deploys a rogue AP broadcasting a spoofed identical SSID ('Wi-Fi-SMK') with a cloned captive login portal to harvest student credentials. What is this attack classification?",
    "options_id": [
      {
        "text": "Evil Twin Attack (Rogue Access Point kloningan)",
        "correct": true
      },
      {
        "text": "Buffer Overflow Attack pada switch jaringan",
        "correct": false
      },
      {
        "text": "DNS Poisoning via ARP spoofing kabel",
        "correct": false
      },
      {
        "text": "Smurf DDoS Attack berbasis paket ICMP ping broadcast",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Evil Twin Attack (Phishing Rogue Access Point)",
        "correct": true
      },
      {
        "text": "Buffer Overflow vulnerability on physical switch ports",
        "correct": false
      },
      {
        "text": "Wired ARP poisoning DNS spoofing",
        "correct": false
      },
      {
        "text": "Smurf ICMP amplification DDoS vector",
        "correct": false
      }
    ],
    "explanation_id": "Serangan Evil Twin adalah pembuatan AP palsu dengan SSID dan tampilan portal yang identik dengan jaringan resmi dengan tujuan menipu korban agar terhubung ke jaringan penyerang.",
    "explanation_en": "An Evil Twin attack clones a legitimate SSID and captive portal, tricking stations into associating with malicious hardware to intercept credentials."
  },
  {
    "id": 25,
    "topic": 5,
    "topic_id": "Keamanan Jaringan Nirkabel",
    "topic_en": "Wireless Security Protocols",
    "question_id": "Banyak administrator pemula menganggap bahwa menyembunyikan siaran nama jaringan (Hidden SSID) dan mengaktifkan MAC Address Filtering sudah cukup untuk mengamankan jaringan Wi-Fi. Mengapa anggapan ini keliru dalam perspektif keamanan profesional?",
    "question_en": "Why do seasoned security engineers consider Hidden SSIDs and MAC address filtering ineffective as standalone security controls?",
    "options_id": [
      {
        "text": "Nama SSID tetap bocor tanpa enkripsi saat klien terhubung (Probe Request/Response) dan alamat MAC sah dapat diintip serta dipalsukan (spoofed) dengan mudah oleh penyerang.",
        "correct": true
      },
      {
        "text": "Karena router Wi-Fi akan mengalami kerusakan sistem jika fitur tersebut diaktifkan.",
        "correct": false
      },
      {
        "text": "Karena fitur tersebut menghabiskan kuota kuota internet hingga 50%.",
        "correct": false
      },
      {
        "text": "Karena standar IEEE telah menghapus fitur alamat MAC dari kartu jaringan.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "SSID strings are clearly exposed in plaintext association frames, and whitelisted MACs can be trivially sniffed and spoofed.",
        "correct": true
      },
      {
        "text": "Activating these toggles causes hardware operating system kernel panics.",
        "correct": false
      },
      {
        "text": "These features consume 50% of the upstream Internet quota.",
        "correct": false
      },
      {
        "text": "IEEE standards deprecated hardware MAC addresses entirely.",
        "correct": false
      }
    ],
    "explanation_id": "Hidden SSID dan MAC Filter adalah 'Security through Obscurity'. Siapapun dengan software seperti Wireshark atau airodump-ng dapat melihat SSID yang tersembunyi dan mengkloning MAC resmi dalam 10 detik.",
    "explanation_en": "Both rely on security through obscurity. Sniffers inspect unencrypted probe/association frames to unmask hidden SSIDs, and attacker network adapters can clone authorized MACs with one command."
  },
  {
    "id": 26,
    "topic": 6,
    "topic_id": "Site Survey & Troubleshooting",
    "topic_en": "Site Survey & Troubleshooting",
    "question_id": "Di pita frekuensi 2.4 GHz standar di Indonesia dan internasional, mengapa para teknisi profesional HANYA menggunakan kombinasi saluran (channel) 1, 6, dan 11 dalam perancangan jaringan multi-AP?",
    "question_en": "Why do wireless network designers strictly restrict 2.4 GHz deployments to Channels 1, 6, and 11?",
    "options_id": [
      {
        "text": "Karena kanal 1, 6, dan 11 adalah satu-satunya kelompok 3 saluran yang memiliki jarak frekuensi cukup sehingga tidak saling tumpang tindih (Non-Overlapping Channels).",
        "correct": true
      },
      {
        "text": "Karena saluran lainnya dilarang dan disegel oleh badan keamanan militer.",
        "correct": false
      },
      {
        "text": "Karena hanya saluran ganjil yang memiliki kecepatan modulasi di atas 100 Mbps.",
        "correct": false
      },
      {
        "text": "Karena saluran nomor genap menghasilkan radiasi yang berbahaya bagi manusia.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Channels 1, 6, and 11 are the only set of three 20 MHz channels with adequate separation to completely avoid Adjacent Channel Interference.",
        "correct": true
      },
      {
        "text": "Intermediate channels are reserved exclusively for military radar.",
        "correct": false
      },
      {
        "text": "Only odd-numbered channels modulate above 100 Mbps.",
        "correct": false
      },
      {
        "text": "Even-numbered channels emit dangerous ionizing radiation.",
        "correct": false
      }
    ],
    "explanation_id": "Setiap saluran 2.4 GHz memiliki lebar 20/22 MHz dengan jarak antar nomor saluran hanya 5 MHz. Untuk menghindari tumpang-tindih spektrum (interferensi ACI), dibutuhkan selisih minimal 5 kanal (1, 6, 11).",
    "explanation_en": "Standard 2.4 GHz channels are spaced 5 MHz apart but span 20-22 MHz widths. Channels 1, 6, and 11 provide the maximum 25 MHz inter-carrier separation required for zero spectral overlap."
  },
  {
    "id": 27,
    "topic": 6,
    "topic_id": "Site Survey & Troubleshooting",
    "topic_en": "Site Survey & Troubleshooting",
    "question_id": "Dalam sebuah gedung perkantoran, teknisi memasang dua Access Point bersebelahan dan keduanya disetel pada Kanal 6 dengan daya pancar maksimum. Klien mengalami penurunan kecepatan drastis meskipun sinyal terbaca penuh (-45 dBm). Jenis gangguan apakah yang terjadi?",
    "question_en": "Two adjacent APs are deployed on Channel 6 at maximum transmit power. Users suffer severe throughput degradation despite -45 dBm RSSI. What interference mechanism is causing this?",
    "options_id": [
      {
        "text": "Co-Channel Interference (CCI) di mana kedua AP dan klien harus antre bergantian menggunakan mekanisme CSMA/CA karena berada pada frekuensi yang sama.",
        "correct": true
      },
      {
        "text": "Multipath Fading akibat pantulan dinding kaca.",
        "correct": false
      },
      {
        "text": "DNS Cache Poisoning pada gateway router.",
        "correct": false
      },
      {
        "text": "Kegagalan modulasi QAM akibat suhu ruangan panas.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Co-Channel Interference (CCI); both APs and clients must serially arbitrate for airtime via CSMA/CA on the identical contention domain.",
        "correct": true
      },
      {
        "text": "Multipath reflection fading off window surfaces.",
        "correct": false
      },
      {
        "text": "DNS Cache Poisoning on the upstream router.",
        "correct": false
      },
      {
        "text": "Thermal throttling of hardware QAM constellation encoders.",
        "correct": false
      }
    ],
    "explanation_id": "CCI mengubah beberapa sel nirkabel menjadi satu domain contention bersama. Karena Wi-Fi menggunakan CSMA/CA (Clear Channel Assessment), stasiun di kedua sel harus menunggu giliran bicara, membagi airtime.",
    "explanation_en": "Co-Channel Interference (CCI) merges distinct cells into a single contention domain. Under CSMA/CA clear channel assessment, stations wait for clear carrier status, halving available airtime."
  },
  {
    "id": 28,
    "topic": 6,
    "topic_id": "Site Survey & Troubleshooting",
    "topic_en": "Site Survey & Troubleshooting",
    "question_id": "Dalam survei perencanaan jaringan nirkabel (RF Site Survey), apa ambang batas minimal kekuatan sinyal (RSSI) standar enterprise yang harus diterima oleh perangkat klien di seluruh area produktif utama gedung?",
    "question_en": "What is the widely accepted enterprise design threshold for minimum RSSI signal coverage across primary production workspaces?",
    "options_id": [
      {
        "text": "-65 dBm (atau minimal -67 dBm untuk menjamin kualitas video call dan VoIP yang bebas jitter)",
        "correct": true
      },
      {
        "text": "-20 dBm (karena sinyal harus sedekat mungkin dengan nol)",
        "correct": false
      },
      {
        "text": "-95 dBm (karena desibel bernilai negatif semakin kecil semakin bagus)",
        "correct": false
      },
      {
        "text": "+50 dBm (daya harus positif)",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "-65 dBm (or -67 dBm minimum to guarantee voice over Wi-Fi and real-time video thresholds)",
        "correct": true
      },
      {
        "text": "-20 dBm requiring extreme proximity to radios",
        "correct": false
      },
      {
        "text": "-95 dBm treating deep negative values as superior",
        "correct": false
      },
      {
        "text": "+50 dBm insisting on positive scale figures",
        "correct": false
      }
    ],
    "explanation_id": "Nilai RSSI standar enterprise adalah -65 dBm. Ambang -67 dBm adalah batas kritis agar perangkat dapat mempertahankan modulasi tinggi dan melakukan roaming mulus sebelum sinyal terputus.",
    "explanation_en": "-65 dBm is the standard enterprise design target (-67 dBm for voice/video). Signals below -70 dBm trigger aggressive data rate down-shifting and increased packet retries."
  },
  {
    "id": 29,
    "topic": 6,
    "topic_id": "Site Survey & Troubleshooting",
    "topic_en": "Site Survey & Troubleshooting",
    "question_id": "Dua buah laptop (Klien A dan Klien B) terhubung ke satu Access Point yang sama di tengah ruangan. Klien A berada di ujung barat dan Klien B berada di ujung timur terhalang pilar beton sehingga tidak bisa saling mendengar transmisi satu sama lain. Ketika keduanya mengirim data bersamaan ke AP, terjadi tabrakan paket (collision) parah. Masalah klasik nirkabel apakah ini dan bagaimana solusinya?",
    "question_en": "Two clients (A and B) associate with the same AP from opposite ends of a hall separated by a concrete column, unable to detect each other. Simultaneous transmissions trigger packet collisions. What is this phenomenon and its fix?",
    "options_id": [
      {
        "text": "Hidden Node Problem; solusinya aktifkan mekanisme handshaking RTS/CTS (Request to Send / Clear to Send) pada AP.",
        "correct": true
      },
      {
        "text": "Dead Zone Syndrome; solusinya pasang kabel LAN ke kedua laptop.",
        "correct": false
      },
      {
        "text": "Evil Twin Effect; solusinya ganti kata sandi Wi-Fi.",
        "correct": false
      },
      {
        "text": "IP Address Conflict; solusinya ubah subnet mask menjadi /30.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "Hidden Node Problem; resolved by enabling the RTS/CTS (Request to Send / Clear to Send) reservation protocol.",
        "correct": true
      },
      {
        "text": "Dead Zone syndrome resolved by running UTP cables.",
        "correct": false
      },
      {
        "text": "Evil Twin collision resolved by altering pre-shared keys.",
        "correct": false
      },
      {
        "text": "IP address conflict resolved by changing subnet masks to /30.",
        "correct": false
      }
    ],
    "explanation_id": "Hidden Node Problem terjadi ketika klien tidak dapat mendeteksi transmisi satu sama lain karena jarak atau halangan fisik. Mekanisme RTS/CTS mewajibkan klien meminta izin AP sebelum mentransmisikan data.",
    "explanation_en": "The Hidden Node Problem occurs when stations cannot hear each other's carrier sensing signals. The 802.11 RTS/CTS mechanism coordinates airtime by having the AP broadcast a reservation frame."
  },
  {
    "id": 30,
    "topic": 6,
    "topic_id": "Site Survey & Troubleshooting",
    "topic_en": "Site Survey & Troubleshooting",
    "question_id": "Pada hari pertama masuk sekolah setelah libur panjang, ratusan siswa yang datang ke aula mengeluh ponsel mereka berstatus 'Obtaining IP address...' sangat lama dan akhirnya gagal terhubung ke Wi-Fi, padahal sinyal AP sangat kuat (-50 dBm). Indikasi penyebab masalah dan penanganan tercepat apakah yang harus dilakukan?",
    "question_en": "On day one of school, hundreds of students gather in the gym; phones stall on 'Obtaining IP address...' despite pristine -50 dBm RSSI. What is the root cause and immediate remedy?",
    "options_id": [
      {
        "text": "Alokasi IP pada DHCP Server pool habis (exhausted); solusinya perpendek Lease Time (misal 1-2 jam) dan perbesar subnet pool DHCP (contoh dari /24 ke /22).",
        "correct": true
      },
      {
        "text": "Antena AP rusak akibat sambaran petir; ganti seluruh unit AP dengan yang baru.",
        "correct": false
      },
      {
        "text": "Ponsel siswa terinfeksi ransomware; lakukan format pabrik pada seluruh ponsel.",
        "correct": false
      },
      {
        "text": "Kabel fiber optik ISP terputus di dasar laut.",
        "correct": false
      }
    ],
    "options_en": [
      {
        "text": "DHCP IP pool exhaustion; remediate by shortening DHCP lease durations (e.g., 1-2 hours) and expanding the subnet scope (e.g., /24 to /22).",
        "correct": true
      },
      {
        "text": "Hardware antenna damage from lightning strikes requiring full AP replacement.",
        "correct": false
      },
      {
        "text": "Student smartphones infected by ransomware requiring factory resets.",
        "correct": false
      },
      {
        "text": "Subsea ISP fiber cut interrupting IP distribution.",
        "correct": false
      }
    ],
    "explanation_id": "Status tertahan di 'Obtaining IP address' menandakan fase asosiasi layer-2 nirkabel berhasil, namun pertukaran paket DHCP DORA di layer-3 gagal karena tidak ada sisa alamat IP yang tersedia.",
    "explanation_en": "Hanging on 'Obtaining IP Address' indicates successful layer-2 RF association but layer-3 DHCP failure because the pool is exhausted by long lease timers from past devices."
  }
];
