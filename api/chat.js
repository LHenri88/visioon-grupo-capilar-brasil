import { GoogleGenAI } from '@google/genai';
const CLINIC = {
  "slug": "grupo-capilar-brasil",
  "name": "Grupo Capilar Brasil",
  "tagline": "Criadores do Sistema de Alta Densidade®",
  "chat_persona": "Sou o Heitor, do Grupo Capilar. Calculo densidade, estimo folículos e te conecto com nosso staff médico.",
  "tone_of_voice": "Autoridade institucional global. Cita dados (5º maior do mundo, +2000 cirurgias). Confiável, pesado em prova social.",
  "icp": "Homens 28-55, executivos e empresários, decisão racional, comparam internacionalmente.",
  "procedures": [
    "implante-capilar",
    "implante-barba",
    "tratamento-calvicie"
  ]
};
export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { messages } = req.body || {};
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GEMINI_API_KEY_MISSING' });
  const systemPrompt = `Você é ${CLINIC.chat_persona}
Clínica: ${CLINIC.name} — ${CLINIC.tagline}
Tom: ${CLINIC.tone_of_voice}
ICP: ${CLINIC.icp}
Procedimentos: ${CLINIC.procedures.join(', ')}
Regras: PT-BR, máx 3 parágrafos curtos, nunca prometer resultado, sugerir agendamento no #schedule.`.trim();
  try {
    const ai = new GoogleGenAI({ apiKey });
    const history = (messages||[]).map(m => `${m.role==='user'?'Paciente':'Você'}: ${m.content}`).join('\n');
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: { parts: [{ text: `${systemPrompt}\n\nConversa:\n${history}\n\nVocê:` }] },
    });
    const text = response?.candidates?.[0]?.content?.parts?.find?.(p=>p.text)?.text || response?.text || 'Desculpe, tive um problema.';
    return res.status(200).json({ ok: true, text });
  } catch (err) { return res.status(500).json({ error: err.message }); }
}
