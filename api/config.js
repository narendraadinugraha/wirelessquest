export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.status(200).json({
    SUPABASE_URL: process.env.SUPABASE_URL || 'https://bvrpxoqpfwhlogmqiykw.supabase.co',
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || 'sb_publishable_3soZqoVbex6Eb5yum7ic9Q_Q9fV9C2l',
    SUPABASE_PROJECT_REF: process.env.SUPABASE_PROJECT_REF || 'bvrpxoqpfwhlogmqiykw',
    TEACHER_CODE: process.env.TEACHER_CODE || 'GURU2026'
  });
}
