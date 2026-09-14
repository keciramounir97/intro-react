import { article, t } from './helpers'

export const toolArticles = [
  article(
    'build-tools',
    t('What is a build tool?', "Qu'est-ce qu'un outil de build ?", 'ما هي أداة البناء؟'),
    t(
      'A build tool transforms the code you like to write into the code the browser likes to run: bundle, minify, convert JSX/TS, process CSS.',
      'Un outil de build transforme le code que tu aimes écrire en code que le navigateur aime exécuter : bundle, minify, conversion JSX/TS, traitement CSS.',
      'أداة البناء تحوّل الشفرة التي تحب كتابتها إلى الشفرة التي يحب المتصفح تشغيلها: حزم، تصغير، تحويل JSX/TS، معالجة CSS.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'Browsers historically loaded a few script tags. Modern apps have thousands of modules, JSX, TypeScript, CSS modules, images, env variables. A build tool (Webpack, Vite, Parcel, esbuild, Rollup, Turbopack) graphs those files, rewrites imports, and emits optimized assets. In development it also runs a server with Hot Module Replacement (HMR): save a file, the browser updates without a full reload.',
          "Les navigateurs chargeaient historiquement quelques balises script. Les apps modernes ont des milliers de modules, du JSX, du TypeScript, des CSS modules, des images, des variables d’environnement. Un outil de build (Webpack, Vite, Parcel, esbuild, Rollup, Turbopack) graphe ces fichiers, réécrit les imports, et émet des assets optimisés. En développement il lance aussi un serveur avec Hot Module Replacement (HMR) : tu sauves, le navigateur met à jour sans rechargement complet.",
          'كانت المتصفحات تاريخياً تحمّل بضعة وسوم script. التطبيقات الحديثة فيها آلاف الوحدات و JSX وتايب سكريبت ووحدات CSS وصور ومتغيرات بيئة. أداة البناء (Webpack و Vite و Parcel و esbuild و Rollup و Turbopack) ترسم بيان تلك الملفات وتعيد كتابة الاستيرادات وتُخرج أصولاً محسّنة. في التطوير تشغّل أيضاً خادماً مع Hot Module Replacement: تحفظ فيحدّث المتصفح بدون إعادة تحميل كاملة.',
        ),
      },
      { type: 'h2', text: t('Dev vs production', 'Dev vs production', 'تطوير مقابل إنتاج') },
      {
        type: 'ul',
        items: [
          t('Development: speed, source maps, readable errors, HMR.', 'Développement : vitesse, source maps, erreurs lisibles, HMR.', 'التطوير: سرعة وخرائط مصدر وأخطاء مقروءة و HMR.'),
          t('Production: minify, tree-shake unused code, split chunks, hash filenames for cache.', 'Production : minifier, enlever le code mort, découper les chunks, hasher les noms pour le cache.', 'الإنتاج: تصغير، إزالة الشفرة الميتة، تقسيم القطع، تجزئة الأسماء للكاش.'),
        ],
      },
    ],
  ),
  article(
    'create-react-app',
    t('Create React App (CRA)', 'Create React App (CRA)', 'Create React App (CRA)'),
    t(
      'CRA was the official zero-config starter from Facebook (2016). It wrapped Webpack. It is deprecated: no new apps should use it.',
      'CRA était le starter officiel zéro-config de Facebook (2016). Il encapsulait Webpack. Il est déprécié : plus aucune nouvelle app ne devrait l’utiliser.',
      'CRA كان بادئ فيسبوك الرسمي بلا إعداد (2016). كان يغلّف Webpack. هو مهجور: لا ينبغي لأي تطبيق جديد استخدامه.',
    ),
    [
      { type: 'h2', text: t('What it did', 'Ce qu’il faisait', 'ماذا كان يفعل') },
      {
        type: 'p',
        text: t(
          'npx create-react-app my-app generated a React project with Webpack, Babel, ESLint, a dev server, and npm scripts (start, build, test). Beginners did not configure Webpack. That was the win. The cost: slow cold starts, slow rebuilds, hard-to-eject config, and a toolchain that aged while Vite and Next.js moved faster.',
          'npx create-react-app my-app générait un projet React avec Webpack, Babel, ESLint, un serveur de dev, et des scripts npm (start, build, test). Les débutants ne configuraient pas Webpack. C’était le gain. Le coût : démarrages à froid lents, rebuilds lents, config difficile à extraire, et une chaîne d’outils vieillissante pendant que Vite et Next.js avançaient.',
          'npx create-react-app my-app كان يولّد مشروع رياكت مع Webpack و Babel و ESLint وخادم تطوير وسكربتات npm (start و build و test). المبتدئون لم يضبطوا Webpack. ذلك كان المكسب. التكلفة: إقلاع بارد بطيء وإعادة بناء بطيئة وإعداد صعب الاستخراج وسلسلة أدوات شاخَت بينما تقدّم Vite و Next.js.',
        ),
      },
      {
        type: 'code',
        lang: 'bash',
        code: `# Historical only — do not use for new projects
npx create-react-app my-app
npm start`,
      },
      {
        type: 'note',
        variant: 'warning',
        text: t(
          'React docs tell you to use Vite or a framework. If a tutorial still starts with CRA, treat it as outdated unless you are maintaining a legacy repo.',
          'La doc React te dit d’utiliser Vite ou un framework. Si un tuto commence encore par CRA, considère-le comme daté sauf maintenance d’un repo héritage.',
          'وثائق رياكت تطلب استخدام Vite أو إطار عمل. إذا بدأ درس ما زال بـ CRA فاعتبره قديماً إلا إذا كنت تصون مستودعاً قديماً.',
        ),
      },
    ],
  ),
  article(
    'vite',
    t('Vite: the modern build tool', 'Vite : l’outil de build moderne', 'Vite: أداة البناء الحديثة'),
    t(
      'Vite (French for “fast”) is a build tool and dev server created by Evan You, the author of Vue.js. It is the default way to start a client-side React app.',
      'Vite (mot français) est un outil de build et un serveur de développement créé par Evan You, l’auteur de Vue.js. C’est la façon par défaut de démarrer une app React côté client.',
      'Vite (كلمة فرنسية تعني «سريع») أداة بناء وخادم تطوير أنشأها Evan You مؤلف Vue.js. هي الطريقة الافتراضية لبدء تطبيق رياكت من جهة العميل.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'Vite uses native ES modules in development: the browser loads source files directly, and esbuild pre-bundles heavy dependencies (react, react-dom) at lightning speed. In production Vite uses Rollup (and newer versions also integrate Rolldown/Oxc in the toolchain) to emit optimized static files. The name is French on purpose: speed is the product.',
          "Vite utilise les modules ES natifs en développement : le navigateur charge les fichiers source, et esbuild pré-emballe les grosses dépendances (react, react-dom) à toute vitesse. En production Vite s’appuie sur Rollup (et les versions plus récentes intègrent Rolldown/Oxc dans la chaîne) pour émettre des fichiers statiques optimisés. Le nom est français exprès : la vitesse est le produit.",
          'Vite يستخدم وحدات ES الأصلية في التطوير: المتصفح يحمّل ملفات المصدر، و esbuild يحزم الاعتماديات الثقيلة (react و react-dom) بسرعة البرق. في الإنتاج يعتمد Vite على Rollup (والإصدارات الأحدث تدمج Rolldown/Oxc في السلسلة) لإخراج ملفات ثابتة محسّنة. الاسم فرنسي عمداً: السرعة هي المنتج.',
        ),
      },
      { type: 'h2', text: t('Why it feels easy', 'Pourquoi ça paraît facile', 'لماذا يبدو سهلاً') },
      {
        type: 'ul',
        items: [
          t('One command scaffolds React, Vue, Svelte, Solid, vanilla…', 'Une commande échafaude React, Vue, Svelte, Solid, vanilla…', 'أمر واحد يهيّئ React و Vue و Svelte و Solid و vanilla…'),
          t('Dev server starts in milliseconds even on large projects.', 'Le serveur de dev démarre en millisecondes même sur de gros projets.', 'خادم التطوير يقلع خلال أجزاء من الثانية حتى في المشاريع الكبيرة.'),
          t('HMR updates a component without losing React state when possible.', 'Le HMR met à jour un composant sans perdre l’état React quand c’est possible.', 'HMR يحدّث مكوّناً دون فقدان حالة رياكت عند الإمكان.'),
          t('sane defaults: JSX, TS, CSS, assets, env files (import.meta.env).', 'défauts sains : JSX, TS, CSS, assets, fichiers env (import.meta.env).', 'افتراضات سليمة: JSX و TS و CSS والأصول وملفات env.'),
        ],
      },
      { type: 'h2', text: t('Vite is not React', 'Vite n’est pas React', 'Vite ليس رياكت') },
      {
        type: 'p',
        text: t(
          'Vite can build a React app, a Vue app, or a vanilla TS app. React is the UI library. Vite is the factory. Node.js is the electricity in the factory. They all can end with “.js” in conversation because they are JavaScript-world tools — different jobs.',
          'Vite peut construire une app React, Vue, ou TS vanilla. React est la bibliothèque UI. Vite est l’usine. Node.js est l’électricité de l’usine. Ils peuvent tous « finir par JS » dans la conversation parce qu’ils appartiennent au monde JavaScript — métiers différents.',
          'Vite يمكنه بناء تطبيق رياكت أو Vue أو TS خام. رياكت مكتبة الواجهة. Vite هو المصنع. Node.js كهرباء المصنع. كلها قد «تنتهي بـ JS» في الكلام لأنها أدوات عالم جافاسكريبت — مهام مختلفة.',
        ),
      },
    ],
  ),
  article(
    'vite-commands',
    t('Vite commands and template variants', 'Commandes Vite et variantes de modèles', 'أوامر Vite وقوالبها'),
    t(
      'These are the commands you will type constantly. Templates pick the framework and whether TypeScript is on.',
      'Ce sont les commandes que tu vas taper tout le temps. Les templates choisissent le framework et si TypeScript est activé.',
      'هذه الأوامر التي ستكتبها باستمرار. القوالب تختار الإطار وما إذا كان تايب سكريبت مفعّلاً.',
    ),
    [
      { type: 'h2', text: t('Create a project', 'Créer un projet', 'إنشاء مشروع') },
      {
        type: 'code',
        lang: 'bash',
        code: `npm create vite@latest
npm create vite@latest my-app
npm create vite@latest my-app -- --template react
npm create vite@latest my-app -- --template react-ts
npm create vite@latest my-app -- --template react-swc
npm create vite@latest my-app -- --template react-swc-ts

# other official templates (not React)
npm create vite@latest my-vue -- --template vue
npm create vite@latest my-vue -- --template vue-ts
npm create vite@latest my-svelte -- --template svelte
npm create vite@latest vanilla -- --template vanilla-ts`,
      },
      { type: 'h2', text: t('Inside the project (package.json scripts)', 'Dans le projet (scripts package.json)', 'داخل المشروع (سكربتات package.json)') },
      {
        type: 'code',
        lang: 'bash',
        code: `npm run dev      # start http://localhost:5173
npm run build    # emit dist/ for production
npm run preview  # serve the production build locally
npm run lint     # if the template added a linter`,
      },
      { type: 'h3', text: t('Useful CLI flags', 'Options CLI utiles', 'خيارات سطر أوامر مفيدة') },
      {
        type: 'code',
        lang: 'bash',
        code: `npx vite --host          # expose on the LAN
npx vite --port 3000     # change port
npx vite build --sourcemap
npx vite preview --port 4173`,
      },
      {
        type: 'ul',
        items: [
          t('react vs react-ts: JavaScript JSX vs TypeScript TSX.', 'react vs react-ts : JSX JavaScript vs TSX TypeScript.', 'react مقابل react-ts: JSX جافاسكريبت مقابل TSX تايب سكريبت.'),
          t('react-swc: uses SWC (Rust) instead of Babel for the React plugin — faster transforms.', 'react-swc : utilise SWC (Rust) au lieu de Babel pour le plugin React — transforms plus rapides.', 'react-swc: يستخدم SWC (Rust) بدل Babel لإضافة رياكت — تحويل أسرع.'),
          t('yarn create vite / pnpm create vite / bun create vite: same generator, different package manager.', 'yarn create vite / pnpm create vite / bun create vite : même générateur, autre gestionnaire.', 'yarn create vite / pnpm create vite / bun create vite: نفس المولّد ومدير حزم مختلف.'),
        ],
      },
    ],
  ),
  article(
    'vite-vs-cra',
    t('Vite vs Create React App', 'Vite vs Create React App', 'Vite مقابل Create React App'),
    t(
      'Same goal (start a React SPA). Different engines, different era. Vite won.',
      'Même but (démarrer une SPA React). Autres moteurs, autre époque. Vite a gagné.',
      'نفس الهدف (بدء SPA رياكت). محركات مختلفة وعصر مختلف. فاز Vite.',
    ),
    [
      {
        type: 'table',
        headers: [t('Topic', 'Sujet', 'الموضوع'), t('Create React App', 'Create React App', 'Create React App'), t('Vite', 'Vite', 'Vite')],
        rows: [
          [t('Author era', 'Époque', 'الحقبة'), t('Facebook, 2016, Webpack+Babel', 'Facebook, 2016, Webpack+Babel', 'فيسبوك، 2016، Webpack+Babel'), t('Evan You, 2020, ESM+esbuild+Rollup', 'Evan You, 2020, ESM+esbuild+Rollup', 'Evan You، 2020، ESM+esbuild+Rollup')],
          [t('Dev start', 'Démarrage dev', 'إقلاع التطوير'), t('Often many seconds', 'Souvent plusieurs secondes', 'غالباً ثوانٍ كثيرة'), t('Near-instant', 'Quasi instantané', 'شبه فوري')],
          [t('HMR', 'HMR', 'HMR'), t('Slower on large apps', 'Plus lent sur les gros projets', 'أبطأ على المشاريع الكبيرة'), t('Granular and fast', 'Granulaire et rapide', 'دقيق وسريع')],
          [t('Config', 'Config', 'الإعداد'), t('Hidden, eject is painful', 'Cachée, eject douloureux', 'مخفي و eject مؤلم'), t('Small vite.config.js', 'Petit vite.config.js', 'vite.config.js صغير')],
          [t('Status 2026', 'Statut 2026', 'الوضع 2026'), t('Deprecated', 'Déprécié', 'مهجور'), t('Recommended for SPAs', 'Recommandé pour les SPA', 'موصى به لتطبيقات الصفحة الواحدة')],
        ],
      },
    ],
  ),
  article(
    'nextjs',
    t('Next.js: a React framework', 'Next.js : un framework React', 'Next.js: إطار رياكت'),
    t(
      'Next.js adds routing, server rendering, and production defaults on top of React. Vite+React is a SPA toolkit. Next is a full-stack web framework.',
      'Next.js ajoute le routage, le rendu serveur, et des défauts de production au-dessus de React. Vite+React est une boîte à outils SPA. Next est un framework web full-stack.',
      'Next.js يضيف التوجيه وتصيير الخادم وافتراضات الإنتاج فوق رياكت. Vite+رياكت صندوق أدوات SPA. Next إطار ويب كامل المكدس.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'Created by Vercel (Guillermo Rauch and team). Next.js uses React and decides how pages are routed (app/ folder), how they render (static, server, client), how you load data, and how you deploy. It can use React Server Components. SEO is much easier than with a blank Vite SPA because HTML can be produced on the server.',
          "Créé par Vercel (Guillermo Rauch et l’équipe). Next.js utilise React et décide du routage des pages (dossier app/), du rendu (statique, serveur, client), du chargement des données, et du déploiement. Il peut utiliser les React Server Components. Le SEO est bien plus facile qu’avec une SPA Vite vide car le HTML peut être produit sur le serveur.",
          'أنشأته Vercel (Guillermo Rauch والفريق). Next.js يستخدم رياكت ويقرر توجيه الصفحات (مجلد app/) والتصيير (ثابت، خادم، عميل) وتحميل البيانات والنشر. يمكنه استخدام مكوّنات خادم رياكت. تحسين محركات البحث أسهل بكثير من SPA Vite فارغة لأن HTML يمكن إنتاجه على الخادم.',
        ),
      },
      {
        type: 'table',
        headers: [t('Choose', 'Choisis', 'اختر'), t('When', 'Quand', 'متى')],
        rows: [
          [t('Vite + React', 'Vite + React', 'Vite + رياكت'), t('Learning React, dashboards, tools behind login, this academy style.', 'Apprendre React, dashboards, outils derrière login, style académie.', 'تعلّم رياكت، لوحات، أدوات خلف تسجيل دخول، أسلوب هذه الأكاديمية.')],
          [t('Next.js', 'Next.js', 'Next.js'), t('Marketing sites, blogs, e-commerce, SEO, mixed server/client.', 'Sites marketing, blogs, e-commerce, SEO, mélange serveur/client.', 'مواقع تسويق ومدونات وتجارة و SEO ومزيج خادم/عميل.')],
        ],
      },
      {
        type: 'code',
        lang: 'bash',
        code: `npx create-next-app@latest my-next-app`,
      },
    ],
  ),
  article(
    'why-js-suffix',
    t('Why Node.js, React.js and Vite.js all end with JS', 'Pourquoi Node.js, React.js et Vite.js finissent tous par JS', 'لماذا Node.js و React.js و Vite.js تنتهي كلها بـ JS'),
    t(
      'The suffix means “this belongs to the JavaScript universe”, not “these three tools do the same job”.',
      'Le suffixe veut dire « ceci appartient à l’univers JavaScript », pas « ces trois outils font le même métier ».',
      'اللاحقة تعني «هذا ينتمي إلى عالم جافاسكريبت» لا «هذه الأدوات الثلاث تؤدي العمل نفسه».',
    ),
    [
      {
        type: 'table',
        headers: [t('Name', 'Nom', 'الاسم'), t('Category', 'Catégorie', 'الفئة'), t('Job', 'Métier', 'المهمة')],
        rows: [
          [t('JavaScript', 'JavaScript', 'جافاسكريبت'), t('Language', 'Langage', 'لغة'), t('You write programs.', 'Tu écris des programmes.', 'تكتب البرامج.')],
          [t('Node.js', 'Node.js', 'Node.js'), t('Runtime', 'Runtime', 'بيئة تشغيل'), t('Runs JS on a machine.', 'Exécute JS sur une machine.', 'يشغّل JS على جهاز.')],
          [t('React.js', 'React.js', 'React.js'), t('UI library', 'Bibliothèque UI', 'مكتبة واجهة'), t('Build component trees.', 'Construire des arbres de composants.', 'بناء أشجار مكوّنات.')],
          [t('Vite.js', 'Vite.js', 'Vite.js'), t('Build tool', 'Outil de build', 'أداة بناء'), t('Dev server + production bundle.', 'Serveur de dev + bundle production.', 'خادم تطوير وحزمة إنتاج.')],
        ],
      },
      {
        type: 'p',
        text: t(
          'People add “.js” the way brands added “.io”. Officially: Node.js, React, Vite. You may see ReactJS in job posts. It is the same library.',
          'On ajoute « .js » comme d’autres marques ajoutaient « .io ». Officiellement : Node.js, React, Vite. Tu verras ReactJS dans des offres d’emploi. C’est la même bibliothèque.',
          'يضيف الناس «.js» كما أضافت علامات «.io». رسمياً: Node.js و React و Vite. قد ترى ReactJS في الوظائف. هي المكتبة نفسها.',
        ),
      },
    ],
  ),
]
