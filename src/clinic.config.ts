export const CLINIC = {
  "slug": "grupo-capilar-brasil",
  "name": "Grupo Capilar Brasil",
  "tagline": "Criadores do Sistema de Alta Densidade®",
  "slogan": "Criadores do Sistema de Alta Densidade®",
  "hero_headline_real": "O VERDADEIRO SISTEMA DE ALTA DENSIDADE® NO TRANSPLANTE CAPILAR",
  "domain": "grupocapilar.com.br",
  "email": "contato@grupocapilar.com.br",
  "city": "São Paulo · SP",
  "category": "Transplante Capilar · Sistema de Alta Densidade®",
  "primary_procedure": "implante-capilar",
  "brand": {
    "primary": "#1B5E3F",
    "secondary": "#2E8B6B",
    "accent": "#F4D35E",
    "ink": "#0C1F17",
    "paper": "#F5F8F5",
    "font_display": "'Outfit', sans-serif",
    "font_body": "'Inter', sans-serif",
    "logo_glyph": "GC"
  },
  "tone_of_voice": "Autoridade institucional global. Cita dados (5º maior do mundo, +2000 cirurgias). Confiável, pesado em prova social.",
  "icp": "Homens 28-55, executivos e empresários, decisão racional, comparam internacionalmente.",
  "sections": [
    "Hero",
    "Numbers",
    "Protocol",
    "Simulator",
    "Team",
    "Facilities",
    "Testimonials",
    "Awards",
    "Schedule",
    "Footer",
    "ChatWidget"
  ],
  "hero": {
    "kicker": "5º maior grupo de transplante capilar do mundo",
    "headline": "Veja sua nova linha capilar. Antes da cirurgia.",
    "sub": "O verdadeiro Sistema de Alta Densidade®: até 100 folículos por cm². Simulação realista FUE calibrada com o nosso protocolo."
  },
  "cta_primary": "Simular meu transplante",
  "chat_persona": "Sou o Heitor, do Grupo Capilar. Calculo densidade, estimo folículos e te conecto com nosso staff médico.",
  "procedures": [
    "implante-capilar",
    "implante-barba",
    "tratamento-calvicie"
  ],
  "procedure_details": [
    {
      "id": "implante-capilar",
      "name": "Transplante FUE",
      "desc": "Técnica minimamente invasiva, extração folículo a folículo.",
      "img": "/img/procedure-fue.jpg"
    },
    {
      "id": "implante-barba",
      "name": "Implante de Barba",
      "desc": "Barba cheia e simétrica com técnica FUE adaptada.",
      "img": "/img/procedure-barba.jpg"
    },
    {
      "id": "tratamento-calvicie",
      "name": "Sistema Alta Densidade®",
      "desc": "Até 100 folículos por cm² — exclusivo do Grupo Capilar.",
      "img": "/img/procedure-calvicie.jpg"
    }
  ],
  "numbers": [
    {
      "n": "+9.900",
      "label": "folículos extraídos · recorde mundial"
    },
    {
      "n": "25.000",
      "label": "fios em um procedimento"
    },
    {
      "n": "100",
      "label": "folículos por cm²"
    },
    {
      "n": "14",
      "label": "salas cirúrgicas próprias"
    },
    {
      "n": "72",
      "label": "enfermeiras especializadas"
    },
    {
      "n": "6",
      "label": "médicos especialistas"
    },
    {
      "n": "+2.000",
      "label": "cirurgias por médico"
    },
    {
      "n": "5º",
      "label": "maior grupo do mundo"
    }
  ],
  "protocol": {
    "title": "Sistema de Alta Densidade®",
    "sub": "A técnica exclusiva que coloca o Grupo Capilar entre os 5 maiores do mundo",
    "steps": [
      {
        "title": "Mapeamento folicular",
        "desc": "Análise de densidade área a área no escalpo."
      },
      {
        "title": "Extração FUE de precisão",
        "desc": "Folículo a folículo, preservando integridade do bulbo."
      },
      {
        "title": "Implante 100 fol/cm²",
        "desc": "Densidade até 100 folículos por cm² — recorde da técnica."
      },
      {
        "title": "Acompanhamento 12 meses",
        "desc": "Resultados completos em 12 meses, acompanhamento médico contínuo."
      }
    ]
  },
  "facilities": [
    {
      "title": "Centro cirúrgico próprio",
      "desc": "14 salas exclusivas para transplante capilar."
    },
    {
      "title": "Hotel 5 estrelas incluído",
      "desc": "Estadia premium para pacientes de fora de SP."
    },
    {
      "title": "Motorista particular",
      "desc": "Translado dedicado, da chegada à alta."
    },
    {
      "title": "Equipe multidisciplinar",
      "desc": "6 médicos + 72 enfermeiras especialistas."
    }
  ],
  "testimonials_real": [
    {
      "text": "Ter meus cabelos de volta mudou completamente minha vida.",
      "author": "Vinícius Maiato, SC"
    },
    {
      "text": "Foi a melhor decisão da minha vida.",
      "author": "Matheus Sian, São Paulo"
    },
    {
      "text": "O atendimento foi impecável do início ao fim.",
      "author": "Anderson Nunes, Pernambuco"
    }
  ],
  "awards": [
    "Recorde Mundial de Extração FUE",
    "5º maior grupo capilar do mundo",
    "Clínica que mais realiza FUE no Brasil"
  ],
  "images": {
    "hero": "/img/hero.jpg",
    "procedures": {
      "implante-capilar": "/img/procedure-fue.jpg",
      "implante-barba": "/img/procedure-barba.jpg",
      "tratamento-calvicie": "/img/procedure-calvicie.jpg"
    },
    "team": "/img/team.jpg",
    "_note": "Grupo Capilar: site retornou SVG vazios via WebFetch — usamos geração nano-banana"
  }
} as const;
export type ClinicConfig = typeof CLINIC;
