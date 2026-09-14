import { article, t } from './helpers'

export const reactArticles = [
  article(
    'what-is-react',
    t('What is React?', "Qu'est-ce que React ?", 'ما هو رياكت؟'),
    t(
      'React is an open-source JavaScript library for building user interfaces with components. Meta (Facebook) created it; the community runs it everywhere.',
      'React est une bibliothèque JavaScript open source pour construire des interfaces utilisateur avec des composants. Meta (Facebook) l’a créée ; la communauté la fait tourner partout.',
      'رياكت مكتبة جافاسكريبت مفتوحة المصدر لبناء واجهات المستخدم بالمكوّنات. أنشأتها Meta (فيسبوك)؛ والمجتمع يشغّلها في كل مكان.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'Jordan Walke, an engineer at Facebook, created React. It was used on Facebook’s news feed in 2011 and open-sourced in 2013. The original insight: treat the UI as a function of state. When data changes, you re-render the description of the UI; React updates the screen. You do not manually walk the DOM. The current model is function components + hooks (useState, useEffect, useContext…), introduced in 2018–2019, replacing most class components.',
          "Jordan Walke, ingénieur chez Facebook, a créé React. Utilisé sur le fil d’actualité en 2011, open sourcé en 2013. L’idée fondatrice : traiter l’UI comme une fonction de l’état. Quand les données changent, tu re-décris l’UI ; React met à jour l’écran. Tu ne parcours pas le DOM à la main. Le modèle actuel : composants fonctions + hooks (useState, useEffect, useContext…), introduits en 2018–2019, qui remplacent la plupart des classes.",
          'Jordan Walke مهندس في فيسبوك أنشأ رياكت. استُخدم في الخلاصة عام 2011 وأُفتح مصدره عام 2013. الفكرة الأصلية: معاملة الواجهة كدالة للحالة. عندما تتغير البيانات تعيد وصف الواجهة؛ رياكت يحدّث الشاشة. لا تمشي في DOM يدوياً. النموذج الحالي: مكوّنات دوال + خطافات (useState و useEffect و useContext…) ظهرت 2018–2019 وتعوّض أغلب الأصناف.',
        ),
      },
      { type: 'h2', text: t('Why use it instead of only HTML, CSS, JS', 'Pourquoi l’utiliser à la place du seul HTML, CSS, JS', 'لماذا تستخدمه بدل HTML و CSS و JS وحدها') },
      {
        type: 'ul',
        items: [
          t('Complex UI: many widgets sharing data.', 'UI complexe : beaucoup de widgets partagent des données.', 'واجهة معقّدة: ودجات كثيرة تشارك البيانات.'),
          t('Reuse and design systems.', 'Réutilisation et design systems.', 'إعادة الاستخدام وأنظمة التصميم.'),
          t('Huge ecosystem: routers, forms, animation, React Native.', 'Écosystème énorme : routeurs, formulaires, animation, React Native.', 'نظام بيئي ضخم: موجّهات ونماذج وحركة ورياكت نيتيف.'),
          t('Jobs: React is a common professional skill.', 'Emploi : React est une compétence professionnelle courante.', 'الوظائف: رياكت مهارة مهنية شائعة.'),
        ],
      },
      {
        type: 'note',
        variant: 'warning',
        text: t(
          'For a three-page brochure site, HTML and CSS may be enough. React is a tool for interfaces that behave like apps.',
          'Pour une brochure de trois pages, HTML et CSS suffisent souvent. React est un outil pour des interfaces qui se comportent comme des apps.',
          'لموقع كتيّب من ثلاث صفحات قد يكفي HTML و CSS. رياكت أداة للواجهات التي تتصرف كتطبيقات.',
        ),
      },
    ],
  ),
  article(
    'install-react',
    t('How to install React today', 'Comment installer React aujourd’hui', 'كيف تثبّت رياكت اليوم'),
    t(
      'The recommended beginner path is Node.js + npm + Vite with the official React template. Create React App is retired.',
      'Le chemin débutant recommandé est Node.js + npm + Vite avec le modèle React officiel. Create React App est retiré.',
      'المسار الموصى به للمبتدئ: Node.js + npm + Vite مع قالب رياكت الرسمي. Create React App متقاعد.',
    ),
    [
      { type: 'h2', text: t('Checklist', 'Liste de contrôle', 'قائمة تحقق') },
      {
        type: 'ol',
        items: [
          t('Install Node.js LTS from nodejs.org (includes npm).', 'Installe Node.js LTS depuis nodejs.org (inclut npm).', 'ثبّت Node.js LTS من nodejs.org (يتضمن npm).'),
          t('Open a terminal in your projects folder.', 'Ouvre un terminal dans ton dossier de projets.', 'افتح طرفية في مجلد مشاريعك.'),
          t('Create the app with Vite.', 'Crée l’app avec Vite.', 'أنشئ التطبيق بـ Vite.'),
          t('Install dependencies and start the dev server.', 'Installe les dépendances et lance le serveur de dev.', 'ثبّت الاعتماديات وشغّل خادم التطوير.'),
        ],
      },
      {
        type: 'code',
        lang: 'bash',
        code: `npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev`,
      },
      { type: 'h3', text: t('TypeScript variant', 'Variante TypeScript', 'متغير تايب سكريبت') },
      {
        type: 'code',
        lang: 'bash',
        code: `npm create vite@latest my-app -- --template react-ts`,
      },
      { type: 'h2', text: t('What gets installed', 'Ce qui s’installe', 'ماذا يُثبَّت') },
      {
        type: 'ul',
        items: [
          t('react: the library (components, hooks).', 'react : la bibliothèque (composants, hooks).', 'react: المكتبة (مكوّنات وخطافات).'),
          t('react-dom: talks to the browser DOM (createRoot).', 'react-dom : parle au DOM du navigateur (createRoot).', 'react-dom: يتحدث إلى DOM المتصفح (createRoot).'),
          t('vite + plugin-react: JSX, HMR, production build.', 'vite + plugin-react : JSX, HMR, build de production.', 'vite + plugin-react: JSX وإعادة التحميل الحار وبناء الإنتاج.'),
        ],
      },
      {
        type: 'note',
        variant: 'tip',
        text: t(
          'Other valid starts: Next.js (npx create-next-app), Remix, Expo (for React Native). Do not start with create-react-app in 2026.',
          'Autres départs valides : Next.js (npx create-next-app), Remix, Expo (React Native). Ne démarre pas avec create-react-app en 2026.',
          'بدايات أخرى صحيحة: Next.js (npx create-next-app) و Remix و Expo (لرياكت نيتيف). لا تبدأ بـ create-react-app في 2026.',
        ),
      },
    ],
  ),
  article(
    'react-syntax',
    t('React syntax: the everyday grammar', 'Syntaxe React : la grammaire du quotidien', 'صيغة رياكت: قواعد اليوم'),
    t(
      'React code is JavaScript plus JSX, plus a few conventions: uppercase components, className, camelCase events, expressions in braces.',
      'Le code React est du JavaScript plus du JSX, plus quelques conventions : composants en majuscule, className, événements en camelCase, expressions entre accolades.',
      'شفرة رياكت جافاسكريبت مع JSX وبعض الاصطلاحات: مكوّنات بحرف كبير، className، أحداث camelCase، تعبيرات بين أقواس معقوفة.',
    ),
    [
      { type: 'h2', text: t('Rules that surprise HTML developers', 'Règles qui surprennent les développeurs HTML', 'قواعد تفاجئ مطوّري HTML') },
      {
        type: 'ul',
        items: [
          t('class → className (class is a JS keyword).', 'class → className (class est un mot-clé JS).', 'class → className (class كلمة محجوزة في JS).'),
          t('for → htmlFor on labels.', 'for → htmlFor sur les labels.', 'for → htmlFor على التسميات.'),
          t('onclick → onClick (camelCase).', 'onclick → onClick (camelCase).', 'onclick → onClick (camelCase).'),
          t('style is an object: style={{ color: "red" }}, not a string.', 'style est un objet : style={{ color: "red" }}, pas une chaîne.', 'style كائن: style={{ color: "red" }} وليس نصاً.'),
          t('All tags must close: <img /> , <input />.', 'Toutes les balises se ferment : <img /> , <input />.', 'كل الوسوم تُغلق: <img /> و <input />.'),
          t('A component must return one parent or a fragment <>...</>.', 'Un composant doit retourner un parent ou un fragment <>...</>.', 'يجب أن يُرجع المكوّن أباً واحداً أو مقطعاً <>...</>.'),
          t('{count} embeds JS. if/for are written outside JSX or with && and .map.', '{count} insère du JS. if/for s’écrivent hors JSX ou avec && et .map.', '{count} يدمج JS. if/for تُكتب خارج JSX أو بـ && و .map.'),
        ],
      },
      {
        type: 'code',
        lang: 'jsx',
        code: `function Welcome({ name, items }) {
  return (
    <section className="box">
      <h1>Hello {name}</h1>
      {items.length === 0 && <p>Empty</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </section>
  )
}`,
      },
      {
        type: 'note',
        variant: 'remember',
        text: t(
          'key on lists is not a random prop: it helps React match items between renders. Never use the array index if the list can reorder.',
          'key sur les listes n’est pas une prop au hasard : elle aide React à apparier les éléments entre rendus. N’utilise pas l’index du tableau si la liste peut se réordonner.',
          'key في القوائم ليست خاصية عشوائية: تساعد رياكت على مطابقة العناصر بين التصييرات. لا تستخدم فهرس المصفوفة إن أمكن إعادة ترتيب القائمة.',
        ),
      },
    ],
  ),
  article(
    'jsx',
    t('JSX: JavaScript XML', 'JSX : JavaScript XML', 'JSX: JavaScript XML'),
    t(
      'JSX is a syntax extension that lets you write markup looking like HTML/XML inside JavaScript. Browsers do not run JSX. A compiler turns it into function calls.',
      'JSX est une extension de syntaxe qui permet d’écrire un balisage façon HTML/XML dans JavaScript. Les navigateurs n’exécutent pas le JSX. Un compilateur le transforme en appels de fonctions.',
      'JSX امتداد صياغة يسمح بكتابة ترميز يشبه HTML/XML داخل جافاسكريبت. المتصفحات لا تشغّل JSX. مترجم يحوّله إلى استدعاءات دوال.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'JSX was designed for React (spec by Facebook). It is neither a string nor HTML. It is syntactic sugar. <h1 className="x">Hi</h1> becomes something like React.createElement("h1", { className: "x" }, "Hi") or, with the modern automatic runtime, jsx("h1", { className: "x", children: "Hi" }). Vite’s React plugin performs this transform instantly in development.',
          "JSX a été conçu pour React (spécification Facebook). Ce n’est ni une chaîne ni du HTML. C’est du sucre syntaxique. <h1 className=\"x\">Hi</h1> devient quelque chose comme React.createElement(\"h1\", { className: \"x\" }, \"Hi\") ou, avec le runtime automatique moderne, jsx(\"h1\", { className: \"x\", children: \"Hi\" }). Le plugin React de Vite fait cette transformation instantanément en développement.",
          'JSX صُمّم لرياكت (مواصفة فيسبوك). ليس نصاً ولا HTML. هو سكر نحوي. <h1 className="x">Hi</h1> يصبح شيئاً مثل React.createElement("h1", { className: "x" }, "Hi") أو مع وقت التشغيل التلقائي الحديث jsx("h1", { className: "x", children: "Hi" }). إضافة رياكت في Vite تقوم بهذا التحويل فوراً أثناء التطوير.',
        ),
      },
      { type: 'h2', text: t('Why write JSX in React', 'Pourquoi écrire du JSX dans React', 'لماذا تكتب JSX في رياكت') },
      {
        type: 'ul',
        items: [
          t('You see the structure next to the logic. The component is one unit.', 'Tu vois la structure à côté de la logique. Le composant est une unité.', 'ترى البنية بجانب المنطق. المكوّن وحدة واحدة.'),
          t('It is typed and checked (especially with TSX). Typos in tags fail at compile time.', 'Il est typé et vérifié (surtout avec TSX). Une faute de balise échoue à la compilation.', 'يُكتب بأنواع ويُفحص (خصوصاً مع TSX). خطأ الوسم يفشل عند الترجمة.'),
          t('Injection is harder: text is escaped by default, unlike innerHTML.', 'L’injection est plus difficile : le texte est échappé par défaut, contrairement à innerHTML.', 'الحقن أصعب: النص يُهرَّب افتراضياً بخلاف innerHTML.'),
        ],
      },
      {
        type: 'code',
        lang: 'jsx',
        code: `const title = 'Academy'
const element = <h1>{title}</h1>

// Roughly compiles to:
// jsx('h1', { children: title })`,
      },
      {
        type: 'note',
        variant: 'tip',
        text: t(
          'You can write React without JSX (only createElement). Nobody does that for real apps: JSX is the human-friendly layer.',
          'Tu peux écrire React sans JSX (seulement createElement). Personne ne le fait pour une vraie app : JSX est la couche humaine.',
          'يمكنك كتابة رياكت بدون JSX (createElement فقط). لا أحد يفعل ذلك لتطبيق حقيقي: JSX هي الطبقة الإنسانية.',
        ),
      },
    ],
  ),
  article(
    'xml',
    t('XML: what it is independently of React', 'XML : ce que c’est, indépendamment de React', 'XML: ما هو مستقلاً عن رياكت'),
    t(
      'XML is a general-purpose markup language from the 1990s. JSX copies the look of XML tags. XML is not executed like a program.',
      'XML est un langage de balisage généraliste des années 1990. JSX copie l’allure des balises XML. XML ne s’exécute pas comme un programme.',
      'XML لغة ترميز عامة من التسعينيات. JSX ينسخ مظهر وسوم XML. XML لا يُنفَّذ كبرنامج.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'XML means eXtensible Markup Language. Unlike HTML, you invent your own tags as long as the document is well-formed: one root, closed tags, quoted attributes, matching case. XML describes data, not a visual page. Typical uses: RSS/Atom feeds, SVG (which is XML), Microsoft Office Open XML, Android layouts (older), SOAP APIs, configuration files (pom.xml in Maven).',
          "XML signifie eXtensible Markup Language. Contrairement au HTML, tu inventes tes balises tant que le document est bien formé : une racine, balises fermées, attributs quotés, casse respectée. XML décrit des données, pas une page visuelle. Usages typiques : flux RSS/Atom, SVG (qui est du XML), Office Open XML, layouts Android anciens, APIs SOAP, fichiers de config (pom.xml dans Maven).",
          'XML تعني eXtensible Markup Language. بخلاف HTML تخترع وسومك ما دام المستند سليم التكوين: جذر واحد، وسوم مغلقة، سمات بين علامات اقتباس، حالة الأحرف متطابقة. XML يصف بيانات لا صفحة مرئية. استخدامات شائعة: خلاصات RSS/Atom و SVG (وهو XML) و Office Open XML وتخطيطات أندرويد القديمة وواجهات SOAP وملفات الإعداد (pom.xml في Maven).',
        ),
      },
      {
        type: 'code',
        lang: 'xml',
        code: `<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Mounir</to>
  <from>Academy</from>
  <body>XML stores data. JSX is not XML.</body>
</note>`,
      },
      { type: 'h2', text: t('How do you “execute” XML?', 'Comment « exécute-t-on » le XML ?', 'كيف «تنفّذ» XML؟') },
      {
        type: 'p',
        text: t(
          'You do not run XML like JavaScript. A parser reads it into a tree (often using a DOM). Then a program decides what to do: a browser renders SVG; a feed reader shows titles; a build tool reads config. HTML is a cousin with predefined tags and a looser parser. JSX is compiled away before the browser; it is not sent as XML.',
          "On n’exécute pas le XML comme du JavaScript. Un parseur le lit en arbre (souvent un DOM). Ensuite un programme décide : le navigateur affiche du SVG ; un lecteur de flux montre des titres ; un outil de build lit une config. HTML est un cousin avec des balises prédéfinies et un parseur plus souple. Le JSX est compilé avant le navigateur ; il n’est pas envoyé comme XML.",
          'لا تشغّل XML مثل جافاسكريبت. محلّل يقرأه إلى شجرة (غالباً DOM). ثم برنامج يقرر: المتصفح يعرض SVG؛ قارئ الخلاصات يظهر عناوين؛ أداة بناء تقرأ إعداداً. HTML ابن عم بوسوم جاهزة ومحلّل أكثر تساهلاً. JSX يُترجم قبل المتصفح؛ لا يُرسل كـ XML.',
        ),
      },
      {
        type: 'table',
        headers: [t('Language', 'Langage', 'اللغة'), t('Job', 'Métier', 'المهمة')],
        rows: [
          [t('XML', 'XML', 'XML'), t('Generic structured data / documents.', 'Données / documents structurés génériques.', 'بيانات/مستندات منظّمة عامة.')],
          [t('HTML', 'HTML', 'HTML'), t('Web page meaning and structure.', 'Sens et structure d’une page web.', 'معنى صفحة الويب وبنيتها.')],
          [t('JSX', 'JSX', 'JSX'), t('Describe React elements inside JS.', 'Décrire des éléments React dans JS.', 'وصف عناصر رياكت داخل JS.')],
        ],
      },
    ],
  ),
  article(
    'tsx',
    t('TSX: JSX in TypeScript', 'TSX : du JSX dans TypeScript', 'TSX: JSX داخل تايب سكريبت'),
    t(
      'A .tsx file is TypeScript that is allowed to contain JSX. Vite, Next.js and Expo all support it.',
      'Un fichier .tsx est du TypeScript autorisé à contenir du JSX. Vite, Next.js et Expo le prennent en charge.',
      'ملف .tsx هو تايب سكريبت مسموح له أن يحتوي JSX. Vite و Next.js و Expo يدعمونه.',
    ),
    [
      { type: 'h2', text: t('File extensions', 'Extensions de fichiers', 'امتدادات الملفات') },
      {
        type: 'table',
        headers: [t('Extension', 'Extension', 'الامتداد'), t('Contains', 'Contient', 'المحتوى')],
        rows: [
          [t('.js', '.js', '.js'), t('JavaScript', 'JavaScript', 'جافاسكريبت')],
          [t('.jsx', '.jsx', '.jsx'), t('JavaScript + JSX', 'JavaScript + JSX', 'جافاسكريبت + JSX')],
          [t('.ts', '.ts', '.ts'), t('TypeScript, no JSX', 'TypeScript, pas de JSX', 'تايب سكريبت بدون JSX')],
          [t('.tsx', '.tsx', '.tsx'), t('TypeScript + JSX', 'TypeScript + JSX', 'تايب سكريبت + JSX')],
        ],
      },
      {
        type: 'code',
        lang: 'tsx',
        code: `type ButtonProps = {
  label: string
  onClick: () => void
}

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>
}`,
      },
      {
        type: 'p',
        text: t(
          'You can write TSX because the TypeScript compiler understands JSX when jsx is set in tsconfig (react-jsx). Vite templates already configure this. You are not executing TypeScript in Chrome; types are erased, JSX is transformed, leftover JS is what runs.',
          'Tu peux écrire du TSX parce que le compilateur TypeScript comprend le JSX quand jsx est réglé dans tsconfig (react-jsx). Les modèles Vite le configurent déjà. Tu n’exécutes pas TypeScript dans Chrome ; les types sont effacés, le JSX transformé, le JS restant est ce qui tourne.',
          'يمكنك كتابة TSX لأن مترجم تايب سكريبت يفهم JSX عندما يُضبط jsx في tsconfig (react-jsx). قوالب Vite تضبط ذلك مسبقاً. أنت لا تنفّذ تايب سكريبت في كروم؛ الأنواع تُمسح وJSX يُحوَّل والجافاسكريبت المتبقي هو ما يعمل.',
        ),
      },
    ],
  ),
  article(
    'react-variants',
    t('React variants: web, native, frameworks, runtimes', 'Variantes de React : web, native, frameworks, runtimes', 'أنواع رياكت: ويب، أصلي، أطر، أزمنة تشغيل'),
    t(
      '“React” is a family. The core library is shared; the renderer and the starter kit change.',
      '« React » est une famille. La bibliothèque cœur est partagée ; le moteur de rendu et le kit de démarrage changent.',
      '«رياكت» عائلة. المكتبة الجوهر مشتركة؛ محرك التصيير وطقم البدء يتغيّران.',
    ),
    [
      {
        type: 'table',
        headers: [t('Variant', 'Variante', 'النوع'), t('You use it for', 'Tu l’utilises pour', 'تستخدمه من أجل')],
        rows: [
          [t('react + react-dom + Vite', 'react + react-dom + Vite', 'react + react-dom + Vite'), t('SPA in the browser, dashboards, this academy.', 'SPA dans le navigateur, dashboards, cette académie.', 'تطبيق صفحة واحدة في المتصفح، لوحات، هذه الأكاديمية.')],
          [t('Next.js / Remix', 'Next.js / Remix', 'Next.js / Remix'), t('Full websites, SEO, server components.', 'Sites complets, SEO, composants serveur.', 'مواقع كاملة و SEO ومكوّنات خادم.')],
          [t('React Native + Expo', 'React Native + Expo', 'React Native + Expo'), t('iOS / Android (and some desktop) native UI.', 'UI native iOS / Android (et un peu desktop).', 'واجهة أصلية لـ iOS / Android (وبعض سطح المكتب).')],
          [t('react-three-fiber', 'react-three-fiber', 'react-three-fiber'), t('3D with Three.js using React components.', '3D avec Three.js en composants React.', 'ثلاثي أبعاد مع Three.js بمكوّنات رياكت.')],
          [t('Ink', 'Ink', 'Ink'), t('Interactive command-line UIs with React.', 'UI de terminal interactives avec React.', 'واجهات طرفية تفاعلية برياكت.')],
        ],
      },
      {
        type: 'p',
        text: t(
          'Same mental model: components, props, state, hooks. Different host elements: <div> on web, <View> on native, <mesh> in 3D. That is why learning React once transfers.',
          'Même modèle mental : composants, props, état, hooks. Éléments hôtes différents : <div> sur le web, <View> en native, <mesh> en 3D. Voilà pourquoi apprendre React une fois se transfère.',
          'نفس النموذج الذهني: مكوّنات و props وحالة وخطافات. عناصر مضيف مختلفة: <div> على الويب و <View> في الأصلي و <mesh> في الثلاثي الأبعاد. لذلك تعلّم رياكت مرة واحدة ينتقل.',
        ),
      },
    ],
  ),
]
