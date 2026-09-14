import { article, t } from './helpers'

export const startArticles = [
  article(
    'roadmap',
    t('Learning path: from HTML to React', "Parcours d'apprentissage : du HTML à React", 'مسار التعلّم: من HTML إلى رياكت'),
    t(
      'A beginner should not start with React. React is a layer on top of the web. This page is the map of everything you will study in this academy.',
      "Un débutant ne commence pas par React. React est une couche au-dessus du web. Cette page est la carte de tout ce que tu vas étudier dans cette académie.",
      'المبتدئ لا يبدأ برياكت. رياكت طبقة فوق الويب. هذه الصفحة هي خريطة كل ما ستدرسه في هذه الأكاديمية.',
    ),
    [
      { type: 'h2', text: t('The right order', 'Le bon ordre', 'الترتيب الصحيح') },
      {
        type: 'p',
        text: t(
          'A website is a conversation between three languages. HTML describes the structure (headings, paragraphs, buttons). CSS describes the look (colors, layout, fonts). JavaScript describes the behavior (clicks, data, animation). React does not replace those three languages. It organizes them so that a large interface stays understandable.',
          "Un site web est une conversation entre trois langages. HTML décrit la structure (titres, paragraphes, boutons). CSS décrit l'apparence (couleurs, mise en page, polices). JavaScript décrit le comportement (clics, données, animation). React ne remplace pas ces trois langages. Il les organise pour qu'une grande interface reste compréhensible.",
          'الموقع حوار بين ثلاث لغات. HTML يصف البنية (عناوين، فقرات، أزرار). CSS يصف المظهر (ألوان، تخطيط، خطوط). جافاسكريبت يصف السلوك (نقرات، بيانات، حركة). رياكت لا يستبدل هذه اللغات الثلاث. هو ينظّمها حتى تبقى الواجهة الكبيرة مفهومة.',
        ),
      },
      {
        type: 'ol',
        items: [
          t('HTML: what exists on the page.', 'HTML : ce qui existe sur la page.', 'HTML: ما يوجد في الصفحة.'),
          t('CSS: how it looks.', 'CSS : à quoi ça ressemble.', 'CSS: كيف يبدو.'),
          t('JavaScript / ECMAScript: how it reacts.', 'JavaScript / ECMAScript : comment ça réagit.', 'جافاسكريبت / ECMAScript: كيف يتفاعل.'),
          t('DOM and BOM: how the browser exposes the page and the window.', 'DOM et BOM : comment le navigateur expose la page et la fenêtre.', 'DOM و BOM: كيف يعرض المتصفح الصفحة والنافذة.'),
          t('TypeScript: JavaScript with types, optional but useful.', 'TypeScript : JavaScript avec des types, optionnel mais utile.', 'تايب سكريبت: جافاسكريبت مع أنواع، اختياري لكنه مفيد.'),
          t('Node.js + npm: tools that run on your computer, not in the browser tab.', 'Node.js + npm : des outils qui tournent sur ton ordinateur, pas dans l’onglet du navigateur.', 'Node.js و npm: أدوات تعمل على جهازك، ليس في تبويب المتصفح.'),
          t('Vite: the modern way to start a React project.', 'Vite : la façon moderne de démarrer un projet React.', 'Vite: الطريقة الحديثة لبدء مشروع رياكت.'),
          t('React, JSX, components, Virtual DOM.', 'React, JSX, composants, DOM virtuel.', 'رياكت و JSX والمكوّنات وDOM الافتراضي.'),
          t('Then choose Next.js (websites) or React Native (phones) when you need them.', 'Ensuite Next.js (sites) ou React Native (téléphones) quand tu en as besoin.', 'ثم Next.js (مواقع) أو React Native (هواتف) عند الحاجة.'),
        ],
      },
      { type: 'h2', text: t('What “inner HTML / CSS / JS” means in React', 'Ce que signifient HTML / CSS / JS « internes » dans React', 'ماذا يعني HTML / CSS / JS الداخلي في رياكت') },
      {
        type: 'p',
        text: t(
          'In a classic page you write index.html, style.css and script.js as three files. In React you still use the same three ideas, but they live closer to the component: JSX looks like HTML, CSS can be a file or a style object, and JavaScript is the logic of the component (state, events, conditions). Nothing magical was invented — the same web platform is used, with a better organization.',
          "Dans une page classique tu écris index.html, style.css et script.js comme trois fichiers. Dans React tu utilises encore les trois mêmes idées, mais elles vivent plus près du composant : JSX ressemble à du HTML, le CSS peut être un fichier ou un objet de style, et JavaScript est la logique du composant (état, événements, conditions). Rien de magique n’a été inventé — c’est la même plateforme web, mieux organisée.",
          'في صفحة كلاسيكية تكتب index.html و style.css و script.js كثلاثة ملفات. في رياكت ما زلت تستخدم الأفكار الثلاث نفسها، لكنها أقرب إلى المكوّن: JSX يشبه HTML، وCSS قد يكون ملفاً أو كائن أنماط، وجافاسكريبت هو منطق المكوّن (الحالة، الأحداث، الشروط). لم يُخترع شيء سحري — نفس منصة الويب بتنظيم أفضل.',
        ),
      },
      {
        type: 'note',
        variant: 'remember',
        text: t(
          'If you skip HTML, CSS and JavaScript, React will feel like magic and then like confusion. This academy exists so the magic becomes a mechanism you can explain.',
          'Si tu sautes HTML, CSS et JavaScript, React semblera magique puis confus. Cette académie existe pour que la magie redevienne un mécanisme que tu peux expliquer.',
          'إذا تخطيت HTML و CSS وجافاسكريبت سيبدو رياكت سحراً ثم حيرة. هذه الأكاديمية موجودة حتى يعود السحر آلية تستطيع شرحها.',
        ),
      },
      { type: 'h2', text: t('How to use this website', 'Comment utiliser ce site', 'كيف تستخدم هذا الموقع') },
      {
        type: 'ul',
        items: [
          t('Use the sidebar like W3Schools: one concept per page.', 'Utilise le menu comme W3Schools : un concept par page.', 'استخدم الشريط الجانبي مثل W3Schools: مفهوم واحد في كل صفحة.'),
          t('Switch French / English / Arabic at any time. The current lesson stays.', 'Passe de français / anglais / arabe à tout moment. Le cours reste le même.', 'بدّل بين الفرنسية والإنجليزية والعربية في أي وقت. الدرس يبقى نفسه.'),
          t('Use light or dark theme. Your choice is saved in the browser.', 'Utilise le thème clair ou sombre. Ton choix est mémorisé.', 'استخدم الوضع الفاتح أو الداكن. اختيارك يُحفظ في المتصفح.'),
          t('Read the definitions fully. Then copy the examples and change them.', 'Lis les définitions en entier. Puis copie les exemples et modifie-les.', 'اقرأ التعريفات كاملة. ثم انسخ الأمثلة وغيّرها.'),
        ],
      },
    ],
  ),
  article(
    'glossary',
    t('Glossary of every important word', 'Glossaire de tous les mots importants', 'مسرد لكل كلمة مهمة'),
    t(
      'Short definitions you can reopen while learning. Each term has a full lesson in the sidebar.',
      'Définitions courtes à rouvrir pendant l’apprentissage. Chaque terme a un cours complet dans le menu.',
      'تعريفات قصيرة تعود إليها أثناء التعلّم. لكل مصطلح درس كامل في القائمة.',
    ),
    [
      {
        type: 'table',
        headers: [
          t('Term', 'Terme', 'المصطلح'),
          t('One-sentence definition', 'Définition en une phrase', 'تعريف بجملة واحدة'),
        ],
        rows: [
          [t('HTML', 'HTML', 'HTML'), t('Language of structure for web pages.', 'Langage de structure des pages web.', 'لغة بنية صفحات الويب.')],
          [t('CSS', 'CSS', 'CSS'), t('Language of presentation (colors, layout, fonts).', 'Langage de présentation (couleurs, mise en page, polices).', 'لغة العرض (ألوان، تخطيط، خطوط).')],
          [t('JavaScript', 'JavaScript', 'جافاسكريبت'), t('Programming language of the web, used in browsers and with Node.js.', 'Langage de programmation du web, dans le navigateur et avec Node.js.', 'لغة برمجة الويب في المتصفح ومع Node.js.')],
          [t('ECMAScript', 'ECMAScript', 'ECMAScript'), t('The official standard that JavaScript follows.', 'La norme officielle que JavaScript suit.', 'المعيار الرسمي الذي يتبعه جافاسكريبت.')],
          [t('TypeScript', 'TypeScript', 'تايب سكريبت'), t('JavaScript plus static types, created by Microsoft.', 'JavaScript plus des types statiques, créé par Microsoft.', 'جافاسكريبت مع أنواع ثابتة، من مايكروسوفت.')],
          [t('DOM', 'DOM', 'DOM'), t('Tree of the HTML document that JavaScript can read and change.', "Arbre du document HTML que JavaScript peut lire et modifier.", 'شجرة مستند HTML التي يقرأها ويغيّرها جافاسكريبت.')],
          [t('BOM', 'BOM', 'BOM'), t('Browser objects around the page: window, location, history, navigator.', 'Objets du navigateur autour de la page : window, location, history, navigator.', 'كائنات المتصفح حول الصفحة: window و location و history و navigator.')],
          [t('Virtual DOM', 'DOM virtuel', 'DOM الافتراضي'), t('A JavaScript copy of the UI that React diffs before touching the real DOM.', "Une copie JavaScript de l’interface que React compare avant de toucher le vrai DOM.", 'نسخة جافاسكريبت للواجهة يقارنها رياكت قبل لمس DOM الحقيقي.')],
          [t('Library', 'Bibliothèque', 'مكتبة'), t('A toolbox you call from your code. You stay in charge of the architecture.', 'Une boîte à outils que tu appelles. Tu restes maître de l’architecture.', 'صندوق أدوات تستدعيه. تبقى أنت سيد البنية.')],
          [t('Framework', 'Framework', 'إطار عمل'), t('A structure that calls your code and imposes a way of building the app.', 'Une structure qui appelle ton code et impose une façon de construire l’app.', 'بنية تستدعي شفرتك وتفرض طريقة بناء التطبيق.')],
          [t('React', 'React', 'رياكت'), t('A JavaScript library for building user interfaces with components.', 'Une bibliothèque JavaScript pour construire des interfaces avec des composants.', 'مكتبة جافاسكريبت لبناء واجهات بالمكوّنات.')],
          [t('Component', 'Composant', 'مكوّن'), t('A reusable piece of UI with its own markup, style and logic.', 'Une pièce d’interface réutilisable avec son balisage, son style et sa logique.', 'قطعة واجهة قابلة لإعادة الاستخدام مع ترميزها وأسلوبها ومنطقها.')],
          [t('JSX', 'JSX', 'JSX'), t('JavaScript syntax that looks like HTML/XML and compiles to React calls.', 'Syntaxe JavaScript qui ressemble à du HTML/XML et se compile en appels React.', 'صيغة جافاسكريبت تشبه HTML/XML وتُترجم إلى استدعاءات رياكت.')],
          [t('XML', 'XML', 'XML'), t('A general markup language to store and exchange structured data.', 'Un langage de balisage général pour stocker et échanger des données structurées.', 'لغة ترميز عامة لتخزين البيانات المنظّمة وتبادلها.')],
          [t('TSX', 'TSX', 'TSX'), t('JSX written inside TypeScript files.', 'Du JSX écrit dans des fichiers TypeScript.', 'JSX مكتوب داخل ملفات تايب سكريبت.')],
          [t('Node.js', 'Node.js', 'Node.js'), t('A runtime that executes JavaScript outside the browser.', 'Un environnement qui exécute JavaScript hors du navigateur.', 'بيئة تنفّذ جافاسكريبت خارج المتصفح.')],
          [t('Package manager', 'Gestionnaire de paquets', 'مدير الحزم'), t('A tool that installs libraries (npm, yarn, pnpm, bun).', 'Un outil qui installe des bibliothèques (npm, yarn, pnpm, bun).', 'أداة تثبّت المكتبات (npm و yarn و pnpm و bun).')],
          [t('npm', 'npm', 'npm'), t('The default Node.js package manager and a huge public registry.', 'Le gestionnaire de paquets par défaut de Node.js et un immense registre public.', 'مدير حزم Node.js الافتراضي وسجل عام ضخم.')],
          [t('Build tool', 'Outil de build', 'أداة بناء'), t('A program that transforms source files into something the browser can run fast.', 'Un programme qui transforme tes fichiers source en quelque chose que le navigateur peut exécuter vite.', 'برنامج يحوّل ملفات المصدر إلى شيء يستطيع المتصفح تشغيله بسرعة.')],
          [t('Vite', 'Vite', 'Vite'), t('A fast build tool and dev server created by Evan You.', 'Un outil de build et un serveur de dev rapides créés par Evan You.', 'أداة بناء وخادم تطوير سريعان أنشأهما Evan You.')],
          [t('Create React App', 'Create React App', 'Create React App'), t('The old official React starter, now retired.', 'L’ancien starter officiel de React, aujourd’hui retiré.', 'أداة البدء الرسمية القديمة لرياكت، وهي متقاعدة الآن.')],
          [t('Next.js', 'Next.js', 'Next.js'), t('A React framework for full websites (routing, server rendering, SEO).', 'Un framework React pour des sites complets (routage, rendu serveur, SEO).', 'إطار رياكت لمواقع كاملة (توجيه، تصيير خادم، SEO).')],
          [t('React Native', 'React Native', 'رياكت نيتيف'), t('React for iOS and Android native apps, not for the browser DOM.', 'React pour des apps natives iOS et Android, pas pour le DOM du navigateur.', 'رياكت لتطبيقات iOS و Android الأصلية، وليس لـ DOM المتصفح.')],
        ],
      },
    ],
  ),
]
