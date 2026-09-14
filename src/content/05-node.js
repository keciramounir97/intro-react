import { article, t } from './helpers'

export const nodeArticles = [
  article(
    'nodejs',
    t('What is Node.js?', "Qu'est-ce que Node.js ?", 'ما هو Node.js؟'),
    t(
      'Node.js is a runtime: it executes JavaScript on your computer or on a server, using the V8 engine, without a browser window.',
      'Node.js est un runtime : il exécute JavaScript sur ton ordinateur ou un serveur, avec le moteur V8, sans fenêtre de navigateur.',
      'Node.js بيئة تشغيل: تنفّذ جافاسكريبت على جهازك أو على خادم بمحرك V8، بدون نافذة متصفح.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'Created by Ryan Dahl in 2009, Node.js takes Chrome’s V8 engine and adds APIs for files, network, processes. The browser has document and window. Node has fs, http, path, Buffer. Same language (JavaScript / ECMAScript), different host. Node is event-driven and non-blocking: one thread handles many connections with callbacks, promises, and async/await.',
          "Créé par Ryan Dahl en 2009, Node.js prend le moteur V8 de Chrome et ajoute des APIs fichiers, réseau, processus. Le navigateur a document et window. Node a fs, http, path, Buffer. Même langage (JavaScript / ECMAScript), autre hôte. Node est piloté par les événements et non bloquant : un fil gère beaucoup de connexions avec callbacks, promesses et async/await.",
          'أنشأه Ryan Dahl عام 2009. Node.js يأخذ محرك V8 من كروم ويضيف واجهات للملفات والشبكة والعمليات. المتصفح لديه document و window. Node لديه fs و http و path و Buffer. نفس اللغة (جافاسكريبت / ECMAScript) ومضيف مختلف. Node موجّه بالأحداث وغير حاجب: خيط واحد يعالج اتصالات كثيرة بالنداءات والوعود و async/await.',
        ),
      },
      { type: 'h2', text: t('What Node is used for', 'À quoi sert Node', 'لماذا يُستخدم Node') },
      {
        type: 'ul',
        items: [
          t('Web APIs and real-time servers.', 'APIs web et serveurs temps réel.', 'واجهات ويب وخوادم آنية.'),
          t('Developer tools: Vite, ESLint, test runners, React compilers.', 'Outils développeur : Vite, ESLint, tests, compilateurs React.', 'أدوات المطوّر: Vite و ESLint والاختبارات ومترجمات رياكت.'),
          t('Command-line programs (npm itself runs on Node).', 'Programmes en ligne de commande (npm lui-même tourne sur Node).', 'برامج سطر الأوامر (npm نفسه يعمل على Node).'),
        ],
      },
      {
        type: 'code',
        lang: 'bash',
        code: `node -v
node -e "console.log('Hello from Node, not from Chrome')"` ,
      },
      {
        type: 'note',
        variant: 'remember',
        text: t(
          'Installing Node.js does not put React into your browser. It puts a JS engine + npm on your machine so you can install Vite, compile JSX, and start a local server.',
          'Installer Node.js ne met pas React dans ton navigateur. Ça met un moteur JS + npm sur ta machine pour installer Vite, compiler le JSX, et lancer un serveur local.',
          'تثبيت Node.js لا يضع رياكت في متصفحك. يضع محرك JS و npm على جهازك حتى تثبّت Vite وتترجم JSX وتشغّل خادماً محلياً.',
        ),
      },
    ],
  ),
  article(
    'package-managers',
    t('What is a package manager?', "Qu'est-ce qu'un gestionnaire de paquets ?", 'ما هو مدير الحزم؟'),
    t(
      'A package manager downloads libraries, records versions, and installs the same tree for every teammate.',
      'Un gestionnaire de paquets télécharge des bibliothèques, enregistre les versions, et installe le même arbre pour chaque coéquipier.',
      'مدير الحزم ينزّل المكتبات ويسجّل الإصدارات ويثبّت الشجرة نفسها لكل زميل.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'A package is a reusable folder of code published with a name and version (react@19.0.0). A package manager reads package.json, resolves a dependency tree, writes a lockfile (package-lock.json, yarn.lock, pnpm-lock.yaml), and fills node_modules. Without it you would copy zip files by hand and never reproduce builds.',
          "Un paquet est un dossier de code réutilisable publié avec un nom et une version (react@19.0.0). Un gestionnaire lit package.json, résout un arbre de dépendances, écrit un lockfile, et remplit node_modules. Sans lui tu copierais des zips à la main et tu ne reproduirais jamais les builds.",
          'الحزمة مجلد شفرة قابل لإعادة الاستخدام يُنشر باسم وإصدار (react@19.0.0). المدير يقرأ package.json ويحل شجرة الاعتماديات ويكتب ملف قفل ويملأ node_modules. بدونه ستنسخ ملفات مضغوطة يدوياً ولن تعيد إنتاج البناء.',
        ),
      },
      {
        type: 'table',
        headers: [t('Tool', 'Outil', 'الأداة'), t('Notes', 'Notes', 'ملاحظات')],
        rows: [
          [t('npm', 'npm', 'npm'), t('Comes with Node.js. Default choice.', 'Fourni avec Node.js. Choix par défaut.', 'يأتي مع Node.js. الخيار الافتراضي.')],
          [t('yarn', 'yarn', 'yarn'), t('Facebook alternative, still used in many repos.', 'Alternative Facebook, encore présente.', 'بديل فيسبوك وما زال في مستودعات كثيرة.')],
          [t('pnpm', 'pnpm', 'pnpm'), t('Fast, disk-efficient. Popular in 2020s.', 'Rapide, économe en disque. Populaire dans les années 2020.', 'سريع وموفّر للقرص. شائع في عشرينيات القرن.')],
          [t('bun', 'bun', 'bun'), t('Runtime + package manager, very fast.', 'Runtime + gestionnaire, très rapide.', 'بيئة تشغيل ومدير حزم، سريع جداً.')],
        ],
      },
    ],
  ),
  article(
    'npm',
    t('npm: Node Package Manager', 'npm : Node Package Manager', 'npm: مدير حزم Node'),
    t(
      'npm is both a command-line tool and the public registry at npmjs.com where React, Vite and thousands of libraries are published.',
      'npm est à la fois un outil en ligne de commande et le registre public npmjs.com où sont publiés React, Vite et des milliers de bibliothèques.',
      'npm أداة سطر أوامر وسجل عام على npmjs.com حيث يُنشر رياكت و Vite وآلاف المكتبات.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'npm shipped with Node.js. The CLI reads package.json scripts (dev, build, preview) and can install from the registry. npx (later npm exec) runs a package without a global install — that is how create-vite works.',
          'npm est livré avec Node.js. La CLI lit les scripts de package.json (dev, build, preview) et installe depuis le registre. npx (puis npm exec) lance un paquet sans installation globale — c’est ainsi que create-vite fonctionne.',
          'npm يأتي مع Node.js. واجهة الأوامر تقرأ سكربتات package.json (dev و build و preview) وتثبّت من السجل. npx (ثم npm exec) يشغّل حزمة بدون تثبيت عام — هكذا يعمل create-vite.',
        ),
      },
      {
        type: 'code',
        lang: 'bash',
        code: `npm install
npm install react-router-dom
npm uninstall lodash
npm run dev
npx create-vite@latest my-app -- --template react`,
      },
      { type: 'h3', text: t('package.json roles', 'Rôles de package.json', 'أدوار package.json') },
      {
        type: 'ul',
        items: [
          t('dependencies: libraries the app needs in production (react).', 'dependencies : bibliothèques nécessaires en production (react).', 'dependencies: مكتبات التطبيق في الإنتاج (react).'),
          t('devDependencies: tools only for development (vite, eslint).', 'devDependencies : outils seulement pour le développement (vite, eslint).', 'devDependencies: أدوات للتطوير فقط (vite و eslint).'),
          t('scripts: nicknames for commands your team types every day.', 'scripts : surnoms des commandes tapées tous les jours.', 'scripts: ألقاب للأوامر التي يكتبها الفريق يومياً.'),
        ],
      },
    ],
  ),
  article(
    'why-nodejs-react',
    t('Why do I need Node.js to use React?', 'Pourquoi installer Node.js pour utiliser React ?', 'لماذا أحتاج Node.js لاستخدام رياكت؟'),
    t(
      'The browser understands HTML, CSS and JS. It does not understand JSX, TypeScript, import maps of hundreds of packages, or a hot-reload server. Node runs those tools.',
      'Le navigateur comprend HTML, CSS et JS. Il ne comprend pas JSX, TypeScript, des centaines de paquets, ni un serveur de rechargement à chaud. Node fait tourner ces outils.',
      'المتصفح يفهم HTML و CSS و JS. لا يفهم JSX ولا تايب سكريبت ولا مئات الحزم ولا خادم إعادة التحميل الحار. Node يشغّل تلك الأدوات.',
    ),
    [
      { type: 'h2', text: t('React in theory vs in practice', 'React en théorie vs en pratique', 'رياكت نظرياً مقابل عملياً') },
      {
        type: 'p',
        text: t(
          'You can load React from a CDN and write React.createElement without Node. That is how early demos worked. Real apps need JSX transform, module bundling, CSS imports, environment variables, TypeScript, and a production minify step. All of that is JavaScript software. Node is the engine that runs it on your laptop.',
          "Tu peux charger React depuis un CDN et écrire React.createElement sans Node. C’était le cas des démos anciennes. Les vraies apps ont besoin de transformer le JSX, d’emballer les modules, d’importer du CSS, de variables d’environnement, de TypeScript, et d’une minification de production. Tout cela est du logiciel JavaScript. Node est le moteur qui l’exécute sur ton laptop.",
          'يمكنك تحميل رياكت من CDN وكتابة React.createElement بدون Node. هكذا عملت العروض القديمة. التطبيقات الحقيقية تحتاج تحويل JSX وحزم الوحدات واستيراد CSS ومتغيرات بيئة وتايب سكريبت وتصغيراً للإنتاج. كل ذلك برمجيات جافاسكريبت. Node هو المحرك الذي يشغّلها على حاسوبك.',
        ),
      },
      {
        type: 'ol',
        items: [
          t('Install Node.js → you get npm.', 'Installe Node.js → tu obtiens npm.', 'ثبّت Node.js → تحصل على npm.'),
          t('npm create vite → scaffolding.', 'npm create vite → échafaudage.', 'npm create vite → هيكل المشروع.'),
          t('npm install → download react, react-dom, vite.', 'npm install → télécharge react, react-dom, vite.', 'npm install → تنزيل react و react-dom و vite.'),
          t('npm run dev → Vite (running on Node) serves the app to Chrome.', 'npm run dev → Vite (sur Node) sert l’app à Chrome.', 'npm run dev → Vite (على Node) يقدّم التطبيق لكروم.'),
          t('The browser still runs the final JavaScript. Node is the kitchen; the browser is the plate.', 'Le navigateur exécute encore le JavaScript final. Node est la cuisine ; le navigateur est l’assiette.', 'المتصفح ما زال يشغّل جافاسكريبت النهائي. Node هو المطبخ؛ المتصفح هو الطبق.'),
        ],
      },
    ],
  ),
]
