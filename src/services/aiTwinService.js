// AI Twin Knowledge Engine for Ikram Amjad

export const SUPPORTED_LANGUAGES = [
  { code: 'en-US', name: 'English (US)', flag: '🇺🇸', native: 'English' },
  { code: 'ur-PK', name: 'Urdu (Pakistan)', flag: '🇵🇰', native: 'اردو' },
  { code: 'es-ES', name: 'Spanish (Español)', flag: '🇪🇸', native: 'Español' },
  { code: 'de-DE', name: 'German (Deutsch)', flag: '🇩🇪', native: 'Deutsch' },
  { code: 'fr-FR', name: 'French (Français)', flag: '🇫🇷', native: 'Français' },
  { code: 'ar-SA', name: 'Arabic (العربية)', flag: '🇸🇦', native: 'العربية' },
  { code: 'ja-JP', name: 'Japanese (日本語)', flag: '🇯🇵', native: '日本語' },
  { code: 'zh-CN', name: 'Chinese (中文)', flag: '🇨🇳', native: '简体中文' },
];

export const INITIAL_GREETINGS = {
  'en-US': "Hi there! 🪄 I'm Ikram's AI Twin. Ask me anything about Ikram's work at Cuboid & WebMantis, his full-stack skills, projects, or how to collaborate with him!",
  'ur-PK': "السلام علیکم! 🪄 میں اکرام امجد کا اے آئی ٹوئن ہوں۔ آپ مجھ سے اکرام کے کام، مہارتوں، پراجیکٹس اور تعلیمی پس منظر کے بارے میں کچھ بھی پوچھ سکتے ہیں!",
  'es-ES': "¡Hola! 🪄 Soy el gemelo de IA de Ikram. Pregúntame sobre su trabajo en Cuboid y WebMantis, sus habilidades full-stack o cómo colaborar con él.",
  'de-DE': "Hallo! 🪄 Ich bin Ikrams KI-Zwilling. Frag mich alles über Ikrams Arbeit bei Cuboid & WebMantis, seine Full-Stack-Fähigkeiten oder Projekte.",
  'fr-FR': "Bonjour ! 🪄 Je suis le jumeau IA d'Ikram. Posez-moi des questions sur son travail chez Cuboid & WebMantis, ses compétences full-stack ou ses projets.",
  'ar-SA': "مرحباً! 🪄 أنا التوأم الذكي لإكرام أمجد. اسألني عن خبراته في Cuboid وWebMantis، مهاراته البرمجية، أو مشاريعه السابقة.",
  'ja-JP': "こんにちは！🪄 イクラムのAIツインです。CuboidやWebMantisでの開発経験、フルスタック技術、プロジェクトについて何でも聞いてください！",
  'zh-CN': "你好！🪄 我是Ikram的AI分身。欢迎询问关于Ikram在Cuboid和WebMantis的全栈开发经验、技术栈以及项目作品！",
};

export const QUICK_QUESTIONS = {
  'en-US': [
    "Introduce Ikram to me",
    "What did Ikram build at Cuboid & WebMantis?",
    "What is his full tech stack?",
    "What are his certifications & education?",
    "How can I hire or contact Ikram?"
  ],
  'ur-PK': [
    "اکرام کا تعارف کروائیں",
    "کیوبائیڈ اور ویب مینٹس میں اکرام کا کیا کام ہے؟",
    "اکرام کی ٹیکنیکل مہارتیں کیا ہیں؟",
    "اکرام کی تعلیم اور سرٹیفیکیشنز کیا ہیں؟",
    "اکرام سے کیسے رابطہ کیا جا سکتا ہے؟"
  ],
  'es-ES': [
    "Presenta a Ikram",
    "¿Qué construyó Ikram en Cuboid y WebMantis?",
    "¿Cuál es su stack tecnológico?",
    "¿Cuáles son sus certificaciones?",
    "¿Cómo puedo contactar a Ikram?"
  ],
  'de-DE': [
    "Stelle Ikram vor",
    "Was hat Ikram bei Cuboid & WebMantis gebaut?",
    "Welche Technologien beherrscht er?",
    "Welche Zertifikate hat er?",
    "Wie kann ich Ikram kontaktieren?"
  ],
  'fr-FR': [
    "Présentez Ikram",
    "Qu'a développé Ikram chez Cuboid & WebMantis ?",
    "Quelles sont ses compétences techniques ?",
    "Quelles sont ses certifications ?",
    "Comment contacter Ikram ?"
  ],
  'ar-SA': [
    "عرّفني بإكرام",
    "ماذا أنجز إكرام في Cuboid وWebMantis؟",
    "ما هي التقنيات التي يتقنها؟",
    "ما هي شهاداته الأكاديمية؟",
    "كيف يمكنني التواصل مع إكرام؟"
  ],
  'ja-JP': [
    "イクラムの自己紹介をして",
    "CuboidとWebMantisで何を作りましたか？",
    "主な技術スタックは何ですか？",
    "資格や学歴を教えてください",
    "連絡先や採用について教えて"
  ],
  'zh-CN': [
    "请介绍一下Ikram",
    "Ikram在Cuboid和WebMantis做了什么？",
    "他的核心技术栈是什么？",
    "他的学历与认证有哪些？",
    "如何联系或聘用Ikram？"
  ]
};

// Knowledge base multi-language response dictionary
const KNOWLEDGE_RESPONSES = {
  intro: {
    'en-US': "Ikram Amjad is a Computer Engineer and Full-Stack Developer based in Islamabad, Pakistan. He has a degree in Electrical & Computer Engineering from COMSATS Abbottabad and currently holds two active production engineering roles: Full-Stack Engineer at Cuboid Incorporation and Back End Developer at WebMantis. He specializes in scalable Node.js architectures, React & Angular full-stack applications, PostgreSQL/MongoDB database design, Redis caching, AWS cloud systems, and Prompt Engineering!",
    'ur-PK': "اکرام امجد اسلام آباد، پاکستان سے تعلق رکھنے والے ایک کمپیوٹر انجینئر اور فل اسٹیک ڈویلپر ہیں۔ انہوں نے کامسیٹس ایبٹ آباد سے الیکٹریکل اینڈ کمپیوٹر انجینئرنگ میں ڈگری حاصل کی ہے۔ فی الوقت وہ کیوبائیڈ انکارپوریشن میں بطور فل اسٹیک انجینئر اور ویب مینٹس میں بیک اینڈ ڈویلپر کام کر رہے ہیں۔ وہ نوڈ جے ایس، ری ایکٹ، اینگولر، پوسٹگری ایس کیو ایل، مونگو ڈی بی، ریڈیس کیشنگ، اے ڈبلیو ایس کلاؤڈ اور پرامپٹ انجینئرنگ میں گہری مہارت رکھتے ہیں۔",
    'es-ES': "Ikram Amjad es un ingeniero informático y desarrollador Full-Stack radicado en Islamabad, Pakistán. Graduado de COMSATS Abbottabad, actualmente trabaja activamente como Full-Stack Engineer en Cuboid Incorporation y Back End Developer en WebMantis, especializándose en Node.js, React, PostgreSQL, MongoDB, Redis y AWS.",
    'de-DE': "Ikram Amjad ist ein Computeringenieur und Full-Stack-Entwickler aus Islamabad, Pakistan. Er hat an der COMSATS Abbottabad studiert und arbeitet derzeit als Full-Stack-Ingenieur bei Cuboid Incorporation und als Backend-Entwickler bei WebMantis mit Fokus auf Node.js, React, PostgreSQL und AWS.",
    'fr-FR': "Ikram Amjad est un ingénieur en informatique et développeur Full-Stack basé à Islamabad, au Pakistan. Diplômé de COMSATS Abbottabad, il travaille actuellement chez Cuboid Incorporation et WebMantis, spécialisé dans Node.js, React, PostgreSQL, MongoDB et AWS.",
    'ar-SA': "إكرام أمجد هو مهندس حاسوب ومطور Full-Stack مقيم في إسلام آباد، باكستان. تخرج من جامعة COMSATS، ويعمل حالياً كمهندس Full-Stack في Cuboid ومطور Backend في WebMantis، متمرس في Node.js، React، قواعد البيانات وAWS.",
    'ja-JP': "イクラム・アムジャド（Ikram Amjad）は、パキスタンのイスラマバードを拠点とするコンピュータエンジニア兼フルスタック開発者です。COMSATSアボッタバードを卒業し、現在はCuboid IncのフルスタックエンジニアおよびWebMantisのバックエンド開発者として活躍しています。",
    'zh-CN': "Ikram Amjad是一名常驻巴基斯坦伊斯兰堡的计算机工程师兼全栈开发人员。毕业于COMSATS大学，目前在Cuboid担任全栈工程师并在WebMantis担任后端开发人员，擅长Node.js、React、PostgreSQL和AWS云架构。"
  },

  experience_cuboid: {
    'en-US': "At Cuboid Incorporation (Dec 2025 – Present), Ikram serves as a Full Stack Engineer. He architects enterprise web platforms uniting responsive React.js and Angular.js client frontends with relational data modeling in PostgreSQL and flexible document stores in MongoDB. He also engineered secure JWT role-based access control (RBAC) and high-concurrency REST endpoints.",
    'ur-PK': "کیوبائیڈ انکارپوریشن (دسمبر 2025 تا حال) میں اکرام فل اسٹیک انجینئر کے طور پر کام کر رہے ہیں۔ وہ ری ایکٹ اور اینگولر فرنٹ اینڈز کو پوسٹگری ایس کیو ایل اور مونگو ڈی بی کے ساتھ جوڑنے والے پیچیدہ ویب پلیٹ فارمز بناتے ہیں، جن میں محفوظ لاگ ان اور تیز ترین ڈیٹا پروسیسنگ شامل ہے۔",
    'es-ES': "En Cuboid Incorporation, Ikram trabaja como ingeniero Full-Stack creando aplicaciones web empresariales con React, Angular, Node.js, PostgreSQL y MongoDB.",
    'de-DE': "Bei Cuboid Incorporation arbeitet Ikram als Full-Stack-Ingenieur und entwickelt Enterprise-Webplattformen mit React, Angular, PostgreSQL und Node.js.",
    'fr-FR': "Chez Cuboid Incorporation, Ikram conçoit des plateformes d'entreprise de bout en bout avec React, Angular, PostgreSQL et Node.js.",
    'ar-SA': "في Cuboid Incorporation، يعمل إكرام كمهندس Full-Stack يقوم ببناء منصات ويب متكاملة باستخدام React وAngular وNode.js وPostgreSQL.",
    'ja-JP': "Cuboid Incorporationでは、フルスタックエンジニアとしてReact、Angular、Node.js、PostgreSQLを活用したエンタープライズWeb基盤を構築しています。",
    'zh-CN': "在Cuboid Incorporation，Ikram担任全栈工程师，利用React、Angular、Node.js和PostgreSQL构建企业级全栈Web平台。"
  },

  experience_webmantis: {
    'en-US': "At WebMantis (Aug 2024 – Present), Ikram is a Back End Developer. He constructs high-throughput server-side APIs with Node.js and Express.js, architects Redis in-memory caching and message queue tiers to reduce database latency by over 65%, and designs automated LLM prompt engineering pipelines for intelligent agent workflows.",
    'ur-PK': "ویب مینٹس (اگست 2024 تا حال) میں اکرام بیک اینڈ ڈویلپر ہیں۔ وہ نوڈ جے ایس اور ایکسپریس میں ہائی تھرو پٹ اے پی آئیز بناتے ہیں، ریڈیس کیشنگ کے ذریعے ڈیٹا بیس کی رفتار میں 65 فیصد سے زیادہ اضافہ کرتے ہیں اور مصنوعی ذہانت کے جدید پرامپٹ سسٹمز ڈیزائن کرتے ہیں۔",
    'es-ES': "En WebMantis, Ikram es desarrollador Backend, optimizando APIs en Node.js, implementando colas y caché con Redis e integrando flujos de inteligencia artificial.",
    'de-DE': "Bei WebMantis ist Ikram Backend-Entwickler, zuständig für Node.js-APIs, Redis-Caching-Systeme und KI-Prompt-Engineering.",
    'fr-FR': "Chez WebMantis, Ikram est développeur backend, optimisant les API Node.js, les systèmes de cache Redis et les intégrations d'IA.",
    'ar-SA': "في WebMantis، يعمل إكرام كمطور Backend يقوم بتطوير واجهات برمجة التطبيقات بنظام Node.js وتحسين الأداء باستخدام Redis والذكاء الاصطناعي.",
    'ja-JP': "WebMantisではバックエンド開発者として、Node.js APIの構築、Redisによるキャッシュ最適化、プロンプトエンジニアリングを行っています。",
    'zh-CN': "在WebMantis，Ikram担任后端开发人员，主导Node.js API开发、Redis队列与缓存架构，以及大语言模型提示工程管道。"
  },

  skills: {
    'en-US': "Ikram's core technical toolkit spans:\n• **Frontend**: React.js, Angular.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Three.js / WebGL\n• **Backend**: Node.js, Express.js, PHP & Laravel, RESTful API design, Microservices\n• **Databases & Cache**: MongoDB, PostgreSQL, MySQL, Redis (caching & queues)\n• **Cloud & AI**: AWS (S3, Lambda serverless), Prompt Engineering, AWS & Oracle AI Foundations\n• **Tools**: Git, Postman, Linux, Vite",
    'ur-PK': "اکرام کے تکنیکی اوزار میں شامل ہیں:\n• **فرنٹ اینڈ**: ری ایکٹ، اینگولر، ٹیل ونڈ سی ایس ایس، تھری جے ایس (3D WebGL)\n• **بیک اینڈ**: نوڈ جے ایس، ایکسپریس، پی ایچ پی و لاراول، ریسٹ فل سروسز\n• **ڈیٹا بیسز**: مونگو ڈی بی، پوسٹگری ایس کیو ایل، مائی ایس کیو ایل، ریڈیس کیشے\n• **کلاؤڈ اور اے آئی**: اے ڈبلیو ایس (S3، لیمبڈا)، پرامپٹ انجینئرنگ، اوریکل اور ایمیزون سرٹیفیکیشنز",
    'es-ES': "Las habilidades de Ikram incluyen React.js, Angular.js, Node.js, Express, PostgreSQL, MongoDB, Redis, AWS (S3 y Lambda) y Prompt Engineering.",
    'de-DE': "Ikrams Fähigkeiten umfassen React.js, Angular.js, Node.js, Express, PostgreSQL, MongoDB, Redis, AWS (S3, Lambda) und Prompt Engineering.",
    'fr-FR': "Les compétences d'Ikram comprennent React.js, Angular.js, Node.js, Express, PostgreSQL, MongoDB, Redis, AWS et l'ingénierie de prompts.",
    'ar-SA': "تتضمن مهارات إكرام: React.js، Angular.js، Node.js، Express، PostgreSQL، MongoDB، Redis، AWS، وهندسة الأوامر (Prompt Engineering).",
    'ja-JP': "主な技術スタックは、React.js、Angular.js、Node.js、Express、PostgreSQL、MongoDB、Redis、AWS（S3/Lambda）、プロンプトエンジニアリングです。",
    'zh-CN': "Ikram的核心技能包括：React.js、Angular.js、Node.js、Express、PostgreSQL、MongoDB、Redis、AWS无服务器云服务及提示词工程。"
  },

  projects: {
    'en-US': "Ikram has 4 key featured production projects:\n1. **Cuboid Enterprise Platform**: Multi-database full-stack web application with React, Angular, PostgreSQL, and Node.js.\n2. **WebMantis AI Engine**: High-concurrency server-side pipeline with Redis queues and dynamic prompt engineering.\n3. **CloudFlow AWS Microservices**: Event-driven serverless file processing with AWS S3, Lambda, and Redis pub/sub.\n4. **IEEE Project Command Center**: Event orchestration portal built during his tenure as Project Manager at IEEE COMSATS.",
    'ur-PK': "اکرام کے نمایاں پراجیکٹس میں شامل ہیں:\n1. **کیوبائیڈ انٹرپرائز سوئیٹ**: فل اسٹیک ایپلی کیشن (ری ایکٹ، اینگولر، پوسٹگری اور مونگو ڈی بی)\n2. **ویب مینٹس اے آئی انجن**: نوڈ جے ایس اور ریڈیس پر مبنی ہائی پرفارمنس بیک اینڈ\n3. **کلاؤڈ فلو اے ڈبلیو ایس پائپ لائن**: سرورلیس مائیکرو سروسز (AWS S3، Lambda)\n4. **آئی ٹرپل ای پراجیکٹ کمانڈ سینٹر**: کیمپس مینیجمنٹ سسٹم جو انہوں نے بطور پراجیکٹ مینیجر بنایا۔",
    'es-ES': "Sus proyectos destacados incluyen la plataforma Cuboid Enterprise, el motor de IA de WebMantis, la arquitectura serverless CloudFlow en AWS y el portal de proyectos de IEEE COMSATS.",
    'de-DE': "Zu seinen Projekten gehören die Cuboid Enterprise Suite, die WebMantis AI Engine, CloudFlow AWS Microservices und das IEEE COMSATS Portal.",
    'fr-FR': "Ses projets incluent la suite Cuboid Enterprise, le moteur IA WebMantis, CloudFlow AWS Microservices et le portail IEEE COMSATS.",
    'ar-SA': "من أبرز مشاريعه: منصة Cuboid Enterprise، محرك الذكاء الاصطناعي WebMantis، وخدمات CloudFlow السحابية على AWS، ومنظومة IEEE COMSATS.",
    'ja-JP': "代表的なプロジェクトには、Cuboid Enterprise Suite、WebMantis AI Engine、CloudFlow AWSマイクロサービス、IEEE COMSATS管理システムがあります。",
    'zh-CN': "代表项目包括：Cuboid企业级全栈平台、WebMantis高并发AI引擎、CloudFlow AWS微服务架构，以及IEEE COMSATS项目调度中心。"
  },

  education_certifications: {
    'en-US': "Ikram graduated with an Electrical & Computer Engineering degree from COMSATS Institute of Information Technology Abbottabad (2020–2024). In addition, he holds:\n• **AWS Machine Learning & Cloud Foundations Certified**\n• **Oracle AI & Cloud Foundations Certified**\n• **Prompt Engineering Specialist**\n• Former **Project Manager at IEEE COMSATS**.",
    'ur-PK': "اکرام نے کامسیٹس ایبٹ آباد سے الیکٹریکل اینڈ کمپیوٹر انجینئرنگ میں ڈگری مکمل کی ہے۔ اس کے علاوہ ان کے پاس درج ذیل تصدیق شدہ سرٹیفیکیشنز ہیں:\n• **اے ڈبلیو ایس مشین لرننگ و کلاؤڈ فاؤنڈیشنز**\n• **اوریکل اے آئی و کلاؤڈ فاؤنڈیشنز**\n• **پرامپٹ انجینئرنگ اسپیشلسٹ**\n• سابق **پراجیکٹ مینیجر، آئی ٹرپل ای کامسیٹس**۔",
    'es-ES': "Ikram se graduó en Ingeniería Eléctrica e Informática en COMSATS Abbottabad. Cuenta con certificaciones oficiales de AWS y Oracle en Inteligencia Artificial y Cloud, además de ser especialista en Prompt Engineering.",
    'de-DE': "Ikram absolvierte sein Studium der Computer- und Elektrotechnik an der COMSATS Abbottabad. Er ist von AWS und Oracle für Cloud & KI zertifiziert.",
    'fr-FR': "Ikram est diplômé en génie électrique et informatique de COMSATS Abbottabad. Il détient des certifications AWS et Oracle en IA et Cloud.",
    'ar-SA': "تخرج إكرام بدرجة هندسة الحاسوب والكهرباء من جامعة COMSATS، ويحمل شهادات معتمدة من AWS وOracle في الذكاء الاصطناعي والسحابة.",
    'ja-JP': "COMSATSアボッタバード校で電気・コンピュータ工学の学位を取得。AWSおよびOracleのAI・クラウド認定資格を保持しています。",
    'zh-CN': "Ikram拥有COMSATS大学电气与计算机工程学士学位，并持有AWS及Oracle官方人工智能与云计算认证。"
  },

  contact: {
    'en-US': "You can easily reach out to Ikram directly:\n• **Email**: [ikramamjad10@gmail.com](mailto:ikramamjad10@gmail.com)\n• **LinkedIn**: [linkedin.com/in/ikram-amjad-8963b4195](https://www.linkedin.com/in/ikram-amjad-8963b4195)\n• **GitHub**: [github.com/ikram-amjad](https://github.com/ikram-amjad)\n• **Location**: Islamabad, Pakistan\nHe responds promptly within 24 hours!",
    'ur-PK': "آپ اکرام سے باآسانی رابطہ کر سکتے ہیں:\n• **ای میل**: ikramamjad10@gmail.com\n• **لنکڈ اِن**: linkedin.com/in/ikram-amjad-8963b4195\n• **گٹ ہب**: github.com/ikram-amjad\n• **مقام**: اسلام آباد، پاکستان\nوہ عموماً 24 گھنٹوں کے اندر جواب دیتے ہیں!",
    'es-ES': "Puedes contactar a Ikram por correo en ikramamjad10@gmail.com, en LinkedIn (linkedin.com/in/ikram-amjad-8963b4195) o en GitHub (github.com/ikram-amjad).",
    'de-DE': "Du kannst Ikram per E-Mail unter ikramamjad10@gmail.com, auf LinkedIn oder auf GitHub erreichen. Standort: Islamabad, Pakistan.",
    'fr-FR': "Vous pouvez contacter Ikram par e-mail à ikramamjad10@gmail.com, via LinkedIn ou GitHub. Il est basé à Islamabad, Pakistan.",
    'ar-SA': "يمكنك التواصل مع إكرام عبر البريد: ikramamjad10@gmail.com، أو من خلال LinkedIn وGitHub. مقره إسلام آباد، باكستان.",
    'ja-JP': "イクラムへのご連絡はメール（ikramamjad10@gmail.com）、LinkedIn、またはGitHubからお気軽にどうぞ！",
    'zh-CN': "欢迎通过邮箱 ikramamjad10@gmail.com、领英或GitHub与Ikram直接取得联系！"
  },

  fallback: {
    'en-US': "That's an interesting question! As Ikram's AI Twin, I can tell you all about his full-stack work with React and Node.js, his active engineering roles at Cuboid & WebMantis, his cloud projects with AWS & Redis, or his degree from COMSATS. Feel free to ask about any specific project, skill, or how to get in touch!",
    'ur-PK': "بہت شکریہ! اکرام کے اے آئی ٹوئن کے طور پر، میں آپ کو ان کی فل اسٹیک مہارتوں، کیوبائیڈ اور ویب مینٹس میں کام، کامسیٹس کی ڈگری اور پراجیکٹس کے بارے میں بتا سکتا ہوں۔ آپ کسی بھی خاص مہارت یا رابطے کے بارے میں پوچھ سکتے ہیں!",
    'es-ES': "¡Gracias por tu pregunta! Puedo contarte sobre el trabajo de Ikram con React y Node.js, sus roles en Cuboid y WebMantis, sus proyectos en AWS o cómo contactarlo.",
    'de-DE': "Danke für deine Frage! Als Ikrams KI-Zwilling kann ich dir alles über seine Projekte bei Cuboid & WebMantis, seinen Tech-Stack oder Kontaktmöglichkeiten erzählen.",
    'fr-FR': "Merci pour votre question ! Je peux vous renseigner sur les réalisations d'Ikram avec React et Node.js, ses rôles chez Cuboid & WebMantis, ou ses coordonnées.",
    'ar-SA': "شكراً لسؤالك! بصفتي التوأم الذكي لإكرام، يمكنني إخبارك بكل ما يخص مهاراته البرمجية، مشاريعه في Cuboid وWebMantis، أو كيفية التواصل معه.",
    'ja-JP': "ご質問ありがとうございます！イクラムのフルスタック開発実績、CuboidやWebMantisでの役割、技術スタックや連絡先について何でもお答えできます。",
    'zh-CN': "感谢提问！作为Ikram的AI分身，我可以向你介绍他在React和Node.js开发、Cuboid与WebMantis的任职经历、AWS云项目或联系方式。"
  }
};

class AITwinService {
  // Parse query text and match intent
  matchIntent(query) {
    const q = query.toLowerCase().trim();

    // Intro / Who is Ikram
    if (
      q.includes('who are you') || 
      q.includes('who is ikram') || 
      q.includes('introduce') || 
      q.includes('about') || 
      q.includes('tell me about') || 
      q.includes('تعارف') || 
      q.includes('کون ہو') ||
      q.includes('présente') ||
      q.includes('wer bist') ||
      q.includes('quién eres') ||
      q.includes('自己紹介') ||
      q.includes('介绍')
    ) {
      return 'intro';
    }

    // Cuboid Incorporation
    if (q.includes('cuboid') || q.includes('کیوبائیڈ')) {
      return 'experience_cuboid';
    }

    // WebMantis
    if (q.includes('webmantis') || q.includes('mantis') || q.includes('ویب مینٹس')) {
      return 'experience_webmantis';
    }

    // Experience general
    if (
      q.includes('experience') || 
      q.includes('work') || 
      q.includes('roles') || 
      q.includes('company') || 
      q.includes('job') ||
      q.includes('تجربہ') ||
      q.includes('کام')
    ) {
      return 'experience_cuboid';
    }

    // Skills / Stack
    if (
      q.includes('skill') || 
      q.includes('stack') || 
      q.includes('tech') || 
      q.includes('node') || 
      q.includes('react') || 
      q.includes('database') || 
      q.includes('redis') || 
      q.includes('aws') || 
      q.includes('مهارت') ||
      q.includes('fähigkeiten') ||
      q.includes('habilidades') ||
      q.includes('compétences') ||
      q.includes('技術') ||
      q.includes('技能')
    ) {
      return 'skills';
    }

    // Projects
    if (
      q.includes('project') || 
      q.includes('built') || 
      q.includes('portfolio') || 
      q.includes('cloudflow') || 
      q.includes('engine') || 
      q.includes('پراجیکٹ') ||
      q.includes('منظومة') ||
      q.includes('projekte') ||
      q.includes('proyectos') ||
      q.includes('projets') ||
      q.includes('プロジェクト') ||
      q.includes('项目')
    ) {
      return 'projects';
    }

    // Education & Certifications
    if (
      q.includes('education') || 
      q.includes('degree') || 
      q.includes('university') || 
      q.includes('comsats') || 
      q.includes('certif') || 
      q.includes('oracle') || 
      q.includes('تعلیم') ||
      q.includes('سرٹیفیکیشن') ||
      q.includes('ausbildung') ||
      q.includes('estudios') ||
      q.includes('études') ||
      q.includes('学歴') ||
      q.includes('学历')
    ) {
      return 'education_certifications';
    }

    // Contact / Hire
    if (
      q.includes('contact') || 
      q.includes('hire') || 
      q.includes('email') || 
      q.includes('linkedin') || 
      q.includes('github') || 
      q.includes('reach') || 
      q.includes('location') || 
      q.includes('رابطہ') ||
      q.includes('ای میل') ||
      q.includes('kontakt') ||
      q.includes('contacto') ||
      q.includes('連絡') ||
      q.includes('联系')
    ) {
      return 'contact';
    }

    return 'fallback';
  }

  // Get response in user's selected language
  async generateResponse(query, lang = 'en-US', optionalApiKey = null) {
    // If user provided an optional Gemini / OpenAI API key, could connect live API
    if (optionalApiKey && optionalApiKey.startsWith('AIza')) {
      try {
        const liveAnswer = await this.queryGeminiLive(query, lang, optionalApiKey);
        if (liveAnswer) return liveAnswer;
      } catch (err) {
        console.warn("Live API call fallback to local knowledge engine:", err);
      }
    }

    // Match intent against pre-trained multi-language knowledge base
    const intent = this.matchIntent(query);
    const intentGroup = KNOWLEDGE_RESPONSES[intent] || KNOWLEDGE_RESPONSES.fallback;
    
    // Exact language match or fallback to English
    return intentGroup[lang] || intentGroup['en-US'] || KNOWLEDGE_RESPONSES.fallback['en-US'];
  }

  // Optional live Gemini fallback if API key configured
  async queryGeminiLive(query, lang, apiKey) {
    const systemPrompt = `You are the AI Twin of Ikram Amjad, a Computer Engineer and Full-Stack Developer based in Islamabad, Pakistan. 
Ikram works as a Full-Stack Engineer at Cuboid Incorporation and Back End Developer at WebMantis. He graduated from COMSATS Abbottabad. 
Core stack: React, Angular, Node.js, Express, MongoDB, PostgreSQL, Redis, AWS (S3, Lambda), Prompt Engineering. 
Email: ikramamjad10@gmail.com, LinkedIn: https://www.linkedin.com/in/ikram-amjad-8963b4195, GitHub: https://github.com/ikram-amjad.
Answer warmly, accurately, and concisely in language: ${lang}.`;

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: `${systemPrompt}\n\nUser Question: ${query}` }] }
        ]
      })
    });

    if (!res.ok) throw new Error(`Gemini HTTP error: ${res.status}`);
    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text;
  }
}

export const aiTwinService = new AITwinService();
