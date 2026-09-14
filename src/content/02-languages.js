import { article, t } from './helpers'

export const languageArticles = [
  article(
    'html',
    t('What is HTML?', "Qu'est-ce que HTML ?", 'ما هو HTML؟'),
    t(
      'HTML is the skeleton of every web page. Without HTML there is nothing to show, style, or make interactive.',
      "HTML est le squelette de chaque page web. Sans HTML, il n’y a rien à afficher, à styliser, ni à rendre interactif.",
      'HTML هو هيكل كل صفحة ويب. بدون HTML لا يوجد شيء لعرضه أو تنسيقه أو جعله تفاعلياً.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'HTML means HyperText Markup Language. It is not a programming language: it does not compute, it does not have loops as its main job. It is a markup language: you wrap content in tags so the browser knows what each piece is — a title, a paragraph, an image, a form, a link.',
          "HTML signifie HyperText Markup Language. Ce n’est pas un langage de programmation : il ne calcule pas, les boucles ne sont pas son métier. C’est un langage de balisage : tu entoures le contenu de balises pour que le navigateur sache ce qu’est chaque morceau — un titre, un paragraphe, une image, un formulaire, un lien.",
          'HTML تعني HyperText Markup Language. ليست لغة برمجة: لا تحسب، والحلقات ليست عملها الأساسي. هي لغة ترميز: تلف المحتوى بوسوم حتى يعرف المتصفح ما هي كل قطعة — عنوان، فقرة، صورة، نموذج، رابط.',
        ),
      },
      { type: 'h3', text: t('A minimal page', 'Une page minimale', 'صفحة دنيا') },
      {
        type: 'code',
        lang: 'html',
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My first page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>This is a paragraph.</p>
    <button>Click</button>
  </body>
</html>`,
      },
      {
        type: 'ul',
        items: [
          t('<!DOCTYPE html> tells the browser this is modern HTML5.', '<!DOCTYPE html> dit au navigateur que c’est du HTML5 moderne.', '<!DOCTYPE html> يخبر المتصفح أن هذه صفحة HTML5 حديثة.'),
          t('<html> is the root. lang helps screen readers and search engines.', '<html> est la racine. lang aide les lecteurs d’écran et le SEO.', '<html> هو الجذر. lang يساعد قارئات الشاشة ومحركات البحث.'),
          t('<head> holds metadata: title, charset, CSS links. Visitors do not see it as page content.', '<head> contient les métadonnées : titre, charset, liens CSS. Le visiteur ne le voit pas comme contenu.', '<head> يحوي بيانات وصفية: العنوان والترميز وروابط CSS. الزائر لا يراه كمحتوى الصفحة.'),
          t('<body> is everything visible.', '<body> est tout ce qui est visible.', '<body> هو كل ما يظهر.'),
        ],
      },
      { type: 'h2', text: t('Why HTML still matters with React', 'Pourquoi HTML compte encore avec React', 'لماذا HTML ما زال مهماً مع رياكت') },
      {
        type: 'p',
        text: t(
          'React components return markup that becomes real HTML in the browser. If you do not know what a button, a label, or a heading is, you will build inaccessible interfaces. Semantic HTML (header, nav, main, article, button instead of clickable divs) is part of professional React work.',
          "Les composants React retournent du balisage qui devient de vrai HTML dans le navigateur. Si tu ne sais pas ce qu’est un bouton, un label ou un titre, tu construiras des interfaces inaccessibles. Le HTML sémantique (header, nav, main, article, button au lieu de div cliquables) fait partie du travail React professionnel.",
          'مكوّنات رياكت تُرجع ترميزاً يصبح HTML حقيقياً في المتصفح. إن لم تعرف ما هو الزر أو التسمية أو العنوان فستبني واجهات غير قابلة للوصول. HTML الدلالي (header و nav و main و article و button بدل div قابلة للنقر) جزء من عمل رياكت الاحترافي.',
        ),
      },
      {
        type: 'note',
        variant: 'tip',
        text: t(
          'Learn tags, attributes, forms, images, links, lists, and accessibility (alt, labels, headings order) before chasing React tricks.',
          'Apprends les balises, les attributs, les formulaires, les images, les liens, les listes et l’accessibilité (alt, labels, ordre des titres) avant de courir après les astuces React.',
          'تعلّم الوسوم والسمات والنماذج والصور والروابط والقوائم وإمكانية الوصول (alt والتسميات وترتيب العناوين) قبل مطاردة حيل رياكت.',
        ),
      },
    ],
  ),
  article(
    'css',
    t('What is CSS?', "Qu'est-ce que CSS ?", 'ما هو CSS؟'),
    t(
      'CSS is the clothing of the page. Same HTML can look like a newspaper, a mobile app, or a game HUD depending on CSS.',
      'CSS est le vêtement de la page. Le même HTML peut ressembler à un journal, une app mobile ou un HUD de jeu selon le CSS.',
      'CSS هو لباس الصفحة. نفس HTML يمكن أن يبدو كجريدة أو تطبيق جوال أو واجهة لعبة حسب CSS.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'CSS means Cascading Style Sheets. You select HTML elements and assign properties: color, font-size, display, flex, grid, margin, padding, animation. “Cascading” means several rules can apply to the same element; the browser decides the winner with specificity and source order.',
          "CSS signifie Cascading Style Sheets (feuilles de style en cascade). Tu sélectionnes des éléments HTML et tu leur donnes des propriétés : color, font-size, display, flex, grid, margin, padding, animation. « En cascade » veut dire que plusieurs règles peuvent viser le même élément ; le navigateur départage avec la spécificité et l’ordre du code.",
          'CSS تعني Cascading Style Sheets (أوراق الأنماط المتتالية). تختار عناصر HTML وتعطيها خصائص: اللون والحجم والعرض وflex وgrid والهوامش والحشوة والحركة. «متتالية» تعني أن عدة قواعد قد تصيب العنصر نفسه؛ المتصفح يحسم بالخصوصية وترتيب المصدر.',
        ),
      },
      {
        type: 'code',
        lang: 'css',
        code: `button {
  background: #04aa6d;
  color: white;
  border: 0;
  padding: 0.6rem 1rem;
  border-radius: 8px;
}

button:hover {
  background: #059862;
}`,
      },
      { type: 'h2', text: t('Three places CSS can live', 'Trois endroits où le CSS peut vivre', 'ثلاثة أماكن يمكن أن يعيش فيها CSS') },
      {
        type: 'ul',
        items: [
          t('External file: styles.css linked from HTML. Best for sites and for React (App.css, modules).', 'Fichier externe : styles.css lié depuis le HTML. Idéal pour les sites et pour React (App.css, modules).', 'ملف خارجي: styles.css مربوط من HTML. الأفضل للمواقع ولرياكت (App.css والوحدات).'),
          t('Internal: a <style> tag in the HTML head.', 'Interne : une balise <style> dans le head.', 'داخلي: وسم <style> في رأس HTML.'),
          t('Inline: style="color:red" on one element. Useful for quick tests, messy for large apps.', 'En ligne : style="color:red" sur un élément. Pratique pour tester, salissant sur une grande app.', 'ضمني: style="color:red" على عنصر واحد. مفيد للاختبار وسريع الفوضى في تطبيق كبير.'),
        ],
      },
      { type: 'h2', text: t('CSS in React', 'Le CSS dans React', 'CSS في رياكت') },
      {
        type: 'p',
        text: t(
          'React does not invent a new design language. You import .css files, use CSS modules, write style={{ color: "red" }} objects (camelCase names), or use libraries (Tailwind, styled-components). Layout knowledge (flexbox, grid, responsive media queries) transfers 100%.',
          "React n’invente pas un nouveau langage de design. Tu importes des fichiers .css, tu utilises des CSS modules, tu écris des objets style={{ color: 'red' }} (noms en camelCase), ou tu prends des bibliothèques (Tailwind, styled-components). La connaissance de la mise en page (flexbox, grid, media queries) se transfère à 100 %.",
          'رياكت لا يخترع لغة تصميم جديدة. تستورد ملفات .css أو تستخدم وحدات CSS أو تكتب كائنات style={{ color: "red" }} (أسماء camelCase) أو مكتبات (Tailwind و styled-components). معرفة التخطيط (flexbox و grid والاستعلامات الإعلامية) تنتقل بالكامل.',
        ),
      },
    ],
  ),
  article(
    'javascript',
    t('JavaScript: the language of behavior', 'JavaScript : le langage du comportement', 'جافاسكريبت: لغة السلوك'),
    t(
      'JavaScript is the programming language of the web. It turns a static document into an application.',
      'JavaScript est le langage de programmation du web. Il transforme un document statique en application.',
      'جافاسكريبت لغة برمجة الويب. تحوّل المستند الثابت إلى تطبيق.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'JavaScript (often abbreviated JS) is a high-level, dynamic, multi-paradigm language. It was created in 1995 by Brendan Eich at Netscape in about ten days, to run small scripts inside Netscape Navigator. Today it runs in every browser, on servers (Node.js), on desktop (Electron), and it is the language React is written for.',
          "JavaScript (souvent JS) est un langage de haut niveau, dynamique, multi-paradigme. Il a été créé en 1995 par Brendan Eich chez Netscape en une dizaine de jours, pour exécuter de petits scripts dans Netscape Navigator. Aujourd’hui il tourne dans tous les navigateurs, sur les serveurs (Node.js), sur le bureau (Electron), et c’est le langage pour lequel React est écrit.",
          'جافاسكريبت (غالباً JS) لغة عالية المستوى، ديناميكية، متعددة النماذج. أنشأها Brendan Eich في Netscape عام 1995 في نحو عشرة أيام لتشغيل سكربتات صغيرة داخل Netscape Navigator. اليوم تعمل في كل المتصفحات وعلى الخوادم (Node.js) وعلى سطح المكتب (Electron)، وهي اللغة التي كُتب رياكت من أجلها.',
        ),
      },
      { type: 'h2', text: t('What JavaScript can do in the browser', 'Ce que JavaScript peut faire dans le navigateur', 'ماذا يستطيع جافاسكريبت فعله في المتصفح') },
      {
        type: 'ul',
        items: [
          t('Read and change the DOM: add a list item, hide a menu, update text.', 'Lire et modifier le DOM : ajouter un élément de liste, cacher un menu, changer un texte.', 'قراءة DOM وتغييره: إضافة عنصر قائمة، إخفاء قائمة، تحديث نص.'),
          t('Listen to events: click, submit, keydown, scroll.', 'Écouter des événements : clic, envoi de formulaire, clavier, défilement.', 'الاستماع إلى الأحداث: نقر، إرسال، لوحة مفاتيح، تمرير.'),
          t('Talk to servers: fetch JSON APIs.', 'Parler aux serveurs : fetch d’APIs JSON.', 'التحدث مع الخوادم: جلب واجهات JSON.'),
          t('Store data: localStorage, cookies (with limits).', 'Stocker des données : localStorage, cookies (avec limites).', 'تخزين البيانات: localStorage والكوكيز (بحدود).'),
          t('Draw: canvas, WebGL, CSS animation driven by JS.', 'Dessiner : canvas, WebGL, animations CSS pilotées par JS.', 'الرسم: canvas و WebGL وحركة CSS يقودها JS.'),
        ],
      },
      {
        type: 'code',
        lang: 'js',
        code: `const button = document.querySelector('button')
const title = document.querySelector('h1')

button.addEventListener('click', () => {
  title.textContent = 'You clicked'
  title.style.color = '#04aa6d'
})`,
      },
      { type: 'h2', text: t('JavaScript is not Java', 'JavaScript n’est pas Java', 'جافاسكريبت ليست جافا') },
      {
        type: 'p',
        text: t(
          'The name was a marketing choice in the 1990s. Java is a different language (virtual machine, static types, used in Android and enterprise). JavaScript borrowed a few keywords and then went its own way: prototypes, first-class functions, a single-threaded event loop.',
          "Le nom était un choix marketing des années 1990. Java est un autre langage (machine virtuelle, types statiques, Android, entreprises). JavaScript a emprunté quelques mots-clés puis a suivi sa propre voie : prototypes, fonctions first-class, boucle d’événements à un seul fil.",
          'الاسم كان خياراً تسويقياً في التسعينيات. جافا لغة مختلفة (آلة افتراضية، أنواع ثابتة، أندرويد والمؤسسات). جافاسكريبت استعارت بعض الكلمات ثم سلكت طريقها: النماذج الأولية، الدوال كمواطنين من الدرجة الأولى، حلقة أحداث وحيدة الخيط.',
        ),
      },
      {
        type: 'note',
        variant: 'remember',
        text: t(
          'React is a library written in JavaScript. You cannot “learn React instead of JavaScript”. You learn JavaScript, then you learn how React uses it.',
          'React est une bibliothèque écrite en JavaScript. On ne « apprend pas React à la place de JavaScript ». On apprend JavaScript, puis la façon dont React l’utilise.',
          'رياكت مكتبة مكتوبة بجافاسكريبت. لا «تتعلّم رياكت بدل جافاسكريبت». تتعلّم جافاسكريبت ثم كيف يستخدمها رياكت.',
        ),
      },
    ],
  ),
  article(
    'ecmascript',
    t('ECMAScript: the standard behind JavaScript', 'ECMAScript : la norme derrière JavaScript', 'ECMAScript: المعيار وراء جافاسكريبت'),
    t(
      'ECMAScript is the specification. JavaScript is the living language that implements it in browsers and Node.js.',
      'ECMAScript est la spécification. JavaScript est le langage vivant qui l’implémente dans les navigateurs et Node.js.',
      'ECMAScript هو المواصفة. جافاسكريبت هي اللغة الحيّة التي تطبقها في المتصفحات و Node.js.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'ECMAScript (ES) is a standard published by Ecma International as ECMA-262. It describes types, grammar, objects (Array, Promise, Map), modules, and how the language should behave. Engine vendors (V8 in Chrome and Node.js, SpiderMonkey in Firefox, JavaScriptCore in Safari) implement that standard. When people say “ES6”, they mean the 2015 edition that added let/const, classes, arrows, modules, promises, template strings.',
          "ECMAScript (ES) est une norme publiée par Ecma International sous le nom ECMA-262. Elle décrit les types, la grammaire, les objets (Array, Promise, Map), les modules, et le comportement du langage. Les moteurs (V8 dans Chrome et Node.js, SpiderMonkey dans Firefox, JavaScriptCore dans Safari) implémentent cette norme. Quand on dit « ES6 », on parle de l’édition 2015 : let/const, classes, flèches, modules, promesses, template strings.",
          'ECMAScript (ES) معيار تنشره Ecma International باسم ECMA-262. يصف الأنواع والقواعد والكائنات (Array و Promise و Map) والوحدات وسلوك اللغة. المحركات (V8 في كروم و Node.js و SpiderMonkey في فايرفوكس و JavaScriptCore في سفاري) تطبق هذا المعيار. عندما يقال «ES6» فالمقصود طبعة 2015: let/const والأصناف والأسهم والوحدات والوعود والقوالب.',
        ),
      },
      { type: 'h2', text: t('Why the two names exist', 'Pourquoi il y a deux noms', 'لماذا يوجد اسمان') },
      {
        type: 'p',
        text: t(
          'Netscape wanted to standardize JavaScript. Sun Microsystems owned the Java trademark, so the standard could not be called JavaScript. Ecma used the name ECMAScript. In daily speech, developers still say JavaScript. In documentation of new features, they say ES2017, ES2020, ES2024…',
          "Netscape voulait standardiser JavaScript. Sun Microsystems possédait la marque Java, donc la norme ne pouvait pas s’appeler JavaScript. Ecma a choisi ECMAScript. Dans la vie quotidienne, les développeurs disent encore JavaScript. Dans la doc des nouveautés, on dit ES2017, ES2020, ES2024…",
          'أرادت Netscape توحيد جافاسكريبت. كانت Sun تملك علامة Java، لذلك لم يمكن تسمية المعيار JavaScript. اختارت Ecma اسم ECMAScript. في الكلام اليومي ما زال المطوّرون يقولون جافاسكريبت. في توثيق الميزات الجديدة يقولون ES2017 و ES2020 و ES2024…',
        ),
      },
      {
        type: 'table',
        headers: [t('You hear', 'Tu entends', 'تسمع'), t('It means', 'Ça veut dire', 'المعنى')],
        rows: [
          [t('JavaScript', 'JavaScript', 'جافاسكريبت'), t('The language you write and run.', 'Le langage que tu écris et exécutes.', 'اللغة التي تكتبها وتشغّلها.')],
          [t('ECMAScript / ES', 'ECMAScript / ES', 'ECMAScript / ES'), t('The written rules of that language.', 'Les règles écrites de ce langage.', 'القواعد المكتوبة لتلك اللغة.')],
          [t('ES6 / ES2015', 'ES6 / ES2015', 'ES6 / ES2015'), t('The big 2015 upgrade, foundation of modern React code.', 'La grande mise à jour 2015, base du code React moderne.', 'تحديث 2015 الكبير، أساس شفرة رياكت الحديثة.')],
          [t('TC39', 'TC39', 'TC39'), t('The committee that designs new ES features.', 'Le comité qui conçoit les nouvelles fonctionnalités ES.', 'اللجنة التي تصمّم ميزات ES الجديدة.')],
        ],
      },
      {
        type: 'note',
        variant: 'tip',
        text: t(
          'Modern React is written with ES6+: modules (import/export), arrows, destructuring, spread, async/await, optional chaining. Learning ES6 is learning the dialect React speaks.',
          'Le React moderne s’écrit en ES6+ : modules (import/export), flèches, destructuration, spread, async/await, optional chaining. Apprendre ES6, c’est apprendre le dialecte que parle React.',
          'رياكت الحديث يُكتب بـ ES6+: الوحدات (import/export) والأسهم والتفكيك والنشر و async/await والربط الاختياري. تعلّم ES6 هو تعلّم اللهجة التي يتحدثها رياكت.',
        ),
      },
    ],
  ),
  article(
    'typescript',
    t('TypeScript: JavaScript with a type system', 'TypeScript : JavaScript avec un système de types', 'تايب سكريبت: جافاسكريبت مع نظام أنواع'),
    t(
      'TypeScript is a language that compiles to JavaScript. You write extra type information; the compiler checks it; the browser still receives plain JS.',
      'TypeScript est un langage qui compile vers JavaScript. Tu écris des informations de type ; le compilateur les vérifie ; le navigateur reçoit toujours du JS simple.',
      'تايب سكريبت لغة تُترجم إلى جافاسكريبت. تكتب معلومات أنواع؛ المترجم يتحقق منها؛ المتصفح ما زال يستلم JS عادياً.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'TypeScript (TS) was created at Microsoft by Anders Hejlsberg (also known for C#). It is a superset of JavaScript: almost all JS is valid TS. You add types to variables, function parameters, and return values. Errors like passing a number where a string is expected appear in the editor before the app runs. That is the main reason large teams adopt it, including the React team’s documentation examples.',
          "TypeScript (TS) a été créé chez Microsoft par Anders Hejlsberg (aussi connu pour C#). C’est un sur-ensemble de JavaScript : presque tout JS est du TS valide. Tu ajoutes des types aux variables, paramètres et valeurs de retour. Des erreurs comme passer un nombre là où une chaîne est attendue apparaissent dans l’éditeur avant l’exécution. C’est la raison principale pour laquelle les grandes équipes l’adoptent, y compris dans les exemples de la doc React.",
          'تايب سكريبت (TS) أُنشئ في مايكروسوفت على يد Anders Hejlsberg (المعروف أيضاً بـ C#). هو مجموعة فوق جافاسكريبت: تقريباً كل JS صالح كـ TS. تضيف أنواعاً للمتغيرات ومعاملات الدوال والقيم المُرجعة. أخطاء مثل تمرير رقم حيث يُتوقع نص تظهر في المحرّر قبل التشغيل. هذا السبب الرئيسي لتبنّي الفرق الكبيرة له، بما في ذلك أمثلة وثائق رياكت.',
        ),
      },
      {
        type: 'code',
        lang: 'ts',
        code: `function greet(name: string): string {
  return 'Hello ' + name
}

greet('Mounir')
// greet(42)  // TypeScript error: number is not a string`,
      },
      { type: 'h2', text: t('Why it matters for React', 'Pourquoi ça compte pour React', 'لماذا يهم رياكت') },
      {
        type: 'p',
        text: t(
          'React components receive props. Without types, a parent can pass the wrong shape and you discover it at runtime. With TypeScript you describe props once. Vite and Next.js both offer official TypeScript templates. Files are named .ts (logic) or .tsx (logic + JSX).',
          "Les composants React reçoivent des props. Sans types, un parent peut envoyer la mauvaise forme et tu le découvres à l’exécution. Avec TypeScript tu décris les props une fois. Vite et Next.js proposent des modèles TypeScript officiels. Les fichiers s’appellent .ts (logique) ou .tsx (logique + JSX).",
          'مكوّنات رياكت تستقبل props. بدون أنواع يمكن للأب تمرير شكل خاطئ وتكتشفه عند التشغيل. مع تايب سكريبت تصف الـ props مرة واحدة. Vite و Next.js يقدّمان قوالب تايب سكريبت رسمية. الملفات تُسمّى .ts (منطق) أو .tsx (منطق + JSX).',
        ),
      },
      {
        type: 'note',
        variant: 'warning',
        text: t(
          'TypeScript does not run in the browser. A compiler (tsc) or a bundler (Vite, esbuild, swc) strips types. Beginners can start with JSX (.jsx) and move to TSX later.',
          'TypeScript ne s’exécute pas dans le navigateur. Un compilateur (tsc) ou un bundler (Vite, esbuild, swc) enlève les types. Les débutants peuvent commencer en JSX (.jsx) puis passer au TSX.',
          'تايب سكريبت لا يعمل في المتصفح. مترجم (tsc) أو حازم (Vite و esbuild و swc) يزيل الأنواع. يمكن للمبتدئ أن يبدأ بـ JSX ثم ينتقل إلى TSX.',
        ),
      },
    ],
  ),
  article(
    'inner-web',
    t('HTML, CSS and JS inside a React app', 'HTML, CSS et JS à l’intérieur d’une app React', 'HTML و CSS و JS داخل تطبيق رياكت'),
    t(
      'React does not delete HTML, CSS or JavaScript. It nests them inside components. This page shows exactly where each one goes.',
      'React ne supprime ni HTML, ni CSS, ni JavaScript. Il les loge dans des composants. Cette page montre exactement où va chacun.',
      'رياكت لا يحذف HTML أو CSS أو جافاسكريبت. هو يضعها داخل المكوّنات. هذه الصفحة تبيّن أين يذهب كل واحد.',
    ),
    [
      { type: 'h2', text: t('The classic trio', 'Le trio classique', 'الثلاثي الكلاسيكي') },
      {
        type: 'p',
        text: t(
          'Before React, a page is often three files: index.html (structure), styles.css (look), app.js (behavior). The browser loads HTML, applies CSS, then runs JS which queries the DOM (getElementById) and mutates it.',
          "Avant React, une page est souvent trois fichiers : index.html (structure), styles.css (apparence), app.js (comportement). Le navigateur charge le HTML, applique le CSS, puis lance le JS qui interroge le DOM (getElementById) et le mute.",
          'قبل رياكت غالباً ما تكون الصفحة ثلاثة ملفات: index.html (بنية) و styles.css (مظهر) و app.js (سلوك). المتصفح يحمّل HTML ثم يطبّق CSS ثم يشغّل JS الذي يسأل DOM (getElementById) ويغيّره.',
        ),
      },
      { type: 'h2', text: t('The same trio inside React', 'Le même trio dans React', 'نفس الثلاثي داخل رياكت') },
      {
        type: 'table',
        headers: [
          t('Role', 'Rôle', 'الدور'),
          t('Vanilla web', 'Web classique', 'الويب الكلاسيكي'),
          t('Inside React', 'Dans React', 'داخل رياكت'),
        ],
        rows: [
          [
            t('Structure', 'Structure', 'البنية'),
            t('HTML tags in .html files', 'Balises HTML dans des .html', 'وسوم HTML في ملفات .html'),
            t('JSX in .jsx / .tsx components', 'JSX dans des composants .jsx / .tsx', 'JSX في مكوّنات .jsx / .tsx'),
          ],
          [
            t('Look', 'Apparence', 'المظهر'),
            t('.css files or <style>', 'Fichiers .css ou <style>', 'ملفات .css أو <style>'),
            t('Imported CSS, modules, Tailwind, or style objects', 'CSS importé, modules, Tailwind, ou objets style', 'CSS مستورد أو وحدات أو Tailwind أو كائنات style'),
          ],
          [
            t('Behavior', 'Comportement', 'السلوك'),
            t('script.js + DOM APIs', 'script.js + APIs DOM', 'script.js وواجهات DOM'),
            t('JS in the component: state, events, effects', 'JS dans le composant : état, événements, effets', 'JS في المكوّن: حالة وأحداث وتأثيرات'),
          ],
        ],
      },
      { type: 'h3', text: t('Example: one component holds all three', 'Exemple : un composant porte les trois', 'مثال: مكوّن واحد يحمل الثلاثة') },
      {
        type: 'code',
        lang: 'jsx',
        code: `import { useState } from 'react'
import './Card.css'

export function Card() {
  const [open, setOpen] = useState(false)

  return (
    <article className="card">
      <h2>Title</h2>
      {open && <p>Hidden text</p>}
      <button onClick={() => setOpen(!open)}>
        Toggle
      </button>
    </article>
  )
}`,
      },
      {
        type: 'ul',
        items: [
          t('JSX (<article>, <h2>, <button>) is the inner HTML — compiled, not a string.', 'Le JSX (<article>, <h2>, <button>) est le HTML interne — compilé, pas une chaîne.', 'JSX (<article> و <h2> و <button>) هو HTML الداخلي — مُترجم وليس نصاً.'),
          t('Card.css is the inner CSS for this piece of UI.', 'Card.css est le CSS interne de ce morceau d’interface.', 'Card.css هو CSS الداخلي لهذه القطعة من الواجهة.'),
          t('useState and onClick are the inner JavaScript.', 'useState et onClick sont le JavaScript interne.', 'useState و onClick هما جافاسكريبت الداخلي.'),
        ],
      },
      {
        type: 'note',
        variant: 'remember',
        text: t(
          'You almost never write innerHTML in React. Mixing raw HTML strings is how XSS bugs appear. JSX is the safe, default way to describe inner HTML.',
          'On n’écrit presque jamais innerHTML dans React. Mélanger des chaînes HTML brutes, c’est ainsi que naissent les failles XSS. JSX est la façon sûre et par défaut de décrire le HTML interne.',
          'نادراً ما تكتب innerHTML في رياكت. خلط نصوص HTML الخام هو طريق ثغرات XSS. JSX هو الطريقة الآمنة الافتراضية لوصف HTML الداخلي.',
        ),
      },
    ],
  ),
]
