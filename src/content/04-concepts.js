import { article, t } from './helpers'

export const conceptArticles = [
  article(
    'library-vs-framework',
    t('Library vs framework', 'Bibliothèque vs framework', 'مكتبة مقابل إطار عمل'),
    t(
      'A library is a tool you call. A framework is a structure that calls you. React is officially a library. Next.js is a framework.',
      'Une bibliothèque est un outil que tu appelles. Un framework est une structure qui t’appelle. React est officiellement une bibliothèque. Next.js est un framework.',
      'المكتبة أداة تستدعيها. إطار العمل بنية تستدعيك. رياكت رسمياً مكتبة. Next.js إطار عمل.',
    ),
    [
      { type: 'h2', text: t('Library', 'Bibliothèque', 'مكتبة') },
      {
        type: 'p',
        text: t(
          'A library (jQuery, lodash, React, Zustand) gives functions or components. Your index file decides the architecture: routing, folders, how data is fetched. You can use React with Vite, or with Next.js, or even embed it in one widget on a PHP site. That freedom is why people say React is a library: it focuses on the view (UI), not on the whole application.',
          "Une bibliothèque (jQuery, lodash, React, Zustand) offre des fonctions ou des composants. Ton fichier index décide de l’architecture : routage, dossiers, chargement des données. Tu peux utiliser React avec Vite, ou avec Next.js, ou même l’embarquer dans un widget sur un site PHP. Cette liberté explique pourquoi on dit que React est une bibliothèque : il se concentre sur la vue (l’UI), pas sur toute l’application.",
          'المكتبة (jQuery و lodash ورياكت و Zustand) تعطي دوالاً أو مكوّنات. ملف index عندك يقرر البنية: التوجيه والمجلدات وجلب البيانات. يمكن استخدام رياكت مع Vite أو مع Next.js أو حتى دمجه كودجت في موقع PHP. هذه الحرية تفسّر لماذا يقال إن رياكت مكتبة: يركّز على العرض (الواجهة) لا على التطبيق كله.',
        ),
      },
      { type: 'h2', text: t('Framework', 'Framework', 'إطار عمل') },
      {
        type: 'p',
        text: t(
          'A framework (Angular, Next.js, NestJS, Django) inverts control: it owns the lifecycle. You put files in the folders it expects, you export the functions it will call (pages, loaders, middleware). You gain conventions, routing, often server rendering, authentication patterns. You lose some freedom; you gain speed as a team.',
          "Un framework (Angular, Next.js, NestJS, Django) inverse le contrôle : il possède le cycle de vie. Tu places les fichiers où il l’attend, tu exportes les fonctions qu’il appellera (pages, loaders, middleware). Tu gagnes des conventions, du routage, souvent du rendu serveur, des schémas d’auth. Tu perds un peu de liberté ; tu gagnes de la vitesse en équipe.",
          'إطار العمل (Angular و Next.js و NestJS و Django) يعكس التحكم: هو يملك دورة الحياة. تضع الملفات حيث يتوقع، وتصدّر الدوال التي سيستدعيها (صفحات، محمّلات، وسيط). تربح اصطلاحات وتوجيهاً وغالباً تصيير خادم وأنماط مصادقة. تخسر بعض الحرية؛ تربح سرعة كفريق.',
        ),
      },
      {
        type: 'table',
        headers: [t('Question', 'Question', 'سؤال'), t('Library', 'Bibliothèque', 'مكتبة'), t('Framework', 'Framework', 'إطار عمل')],
        rows: [
          [t('Who calls whom?', 'Qui appelle qui ?', 'من يستدعي من؟'), t('Your code calls the lib', 'Ton code appelle la lib', 'شفرتك تستدعي المكتبة'), t('The framework calls your code', 'Le framework appelle ton code', 'الإطار يستدعي شفرتك')],
          [t('Scope', 'Périmètre', 'النطاق'), t('One problem (UI, dates, HTTP)', 'Un problème (UI, dates, HTTP)', 'مشكلة واحدة (واجهة، تواريخ، HTTP)'), t('The whole app shape', 'La forme de toute l’app', 'شكل التطبيق كله')],
          [t('Example', 'Exemple', 'مثال'), t('React, lodash', 'React, lodash', 'رياكت و lodash'), t('Next.js, Angular, Nest', 'Next.js, Angular, Nest', 'Next.js و Angular و Nest')],
        ],
      },
      {
        type: 'note',
        variant: 'tip',
        text: t(
          'People sometimes call React a “framework” in casual speech because the ecosystem is huge. Officially, and in interviews, React = library, Next.js = React framework.',
          'On dit parfois « framework React » dans le langage courant parce que l’écosystème est énorme. Officiellement, et en entretien, React = bibliothèque, Next.js = framework React.',
          'أحياناً يُقال «إطار رياكت» في الكلام العادي لأن النظام البيئي ضخم. رسمياً وفي المقابلات: رياكت = مكتبة، Next.js = إطار رياكت.',
        ),
      },
    ],
  ),
  article(
    'components',
    t('Why React splits the page into components', 'Pourquoi React découpe la page en composants', 'لماذا يقسم رياكت الصفحة إلى مكوّنات'),
    t(
      'A component is a named, reusable piece of UI. React applications are trees of components, the same way HTML is a tree of tags.',
      'Un composant est un morceau d’UI nommé et réutilisable. Une application React est un arbre de composants, comme le HTML est un arbre de balises.',
      'المكوّن قطعة واجهة لها اسم وقابلة لإعادة الاستخدام. تطبيق رياكت شجرة مكوّنات، كما HTML شجرة وسوم.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'A React component is typically a function whose name starts with an uppercase letter. It receives props (inputs) and returns JSX (output). Optional state lives inside it. The website is not one giant HTML file: it is Header + Sidebar + Article + Button composed together. Each piece can be tested, restyled, and reused (the same Button on fifty screens).',
          "Un composant React est en général une fonction dont le nom commence par une majuscule. Il reçoit des props (entrées) et retourne du JSX (sortie). Un état optionnel vit dedans. Le site n’est pas un immense fichier HTML : c’est Header + Sidebar + Article + Button composés ensemble. Chaque pièce peut être testée, restylée, réutilisée (le même Button sur cinquante écrans).",
          'مكوّن رياكت عادة دالة يبدأ اسمها بحرف كبير. يستقبل props (مدخلات) ويُرجع JSX (مخرجات). حالة اختيارية تعيش داخله. الموقع ليس ملف HTML عملاقاً: هو Header + Sidebar + Article + Button مركّبة معاً. كل قطعة يمكن اختبارها وإعادة تنسيقها وإعادة استخدامها (نفس الزر في خمسين شاشة).',
        ),
      },
      { type: 'h2', text: t('What you win', 'Ce que tu gagnes', 'ماذا تربح') },
      {
        type: 'ul',
        items: [
          t('Reuse: write Card once, use it everywhere.', 'Réutilisation : écris Card une fois, utilise-la partout.', 'إعادة الاستخدام: اكتب Card مرة واستخدمها في كل مكان.'),
          t('Mental load: you think about one button, not the whole homepage.', 'Charge mentale : tu penses à un bouton, pas à toute la page d’accueil.', 'العبء الذهني: تفكّر في زر واحد لا في كل الصفحة الرئيسية.'),
          t('Teamwork: one person owns Sidebar, another owns Checkout.', 'Travail d’équipe : une personne possède Sidebar, une autre Checkout.', 'العمل الجماعي: شخص يملك Sidebar وآخر يملك Checkout.'),
          t('Isolation: CSS and state can stay close to the UI they affect.', 'Isolation : le CSS et l’état restent près de l’UI qu’ils concernent.', 'العزل: CSS والحالة يبقيان قرب الواجهة التي يؤثران فيها.'),
        ],
      },
      {
        type: 'code',
        lang: 'jsx',
        code: `function Button({ children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  )
}

function Page() {
  return (
    <>
      <Button onClick={save}>Save</Button>
      <Button onClick={cancel}>Cancel</Button>
    </>
  )
}`,
      },
      {
        type: 'note',
        variant: 'remember',
        text: t(
          'Split by purpose, not by pixel count. A 5-line Button is a component. A 200-line “god” Homepage that does everything is the problem components exist to avoid.',
          'Découpe selon le rôle, pas selon le nombre de pixels. Un Button de 5 lignes est un composant. Une Homepage « dieu » de 200 lignes qui fait tout est le problème que les composants existent pour éviter.',
          'قسّم حسب الدور لا حسب عدد البكسلات. زر من 5 أسطر مكوّن. صفحة رئيسية «إله» من 200 سطر تفعل كل شيء هي المشكلة التي وُجدت المكوّنات لتجنّبها.',
        ),
      },
    ],
  ),
  article(
    'performance',
    t('What you actually win in performance', 'Ce que tu gagnes vraiment en performance', 'ما تربحه فعلاً في الأداء'),
    t(
      'React is not automatically faster than carefully written vanilla JS. It is faster than typical messy DOM code, and it keeps large UIs update-efficient.',
      'React n’est pas automatiquement plus rapide qu’un JS vanilla soigné. Il est plus rapide que le DOM salissant typique, et il garde les grandes UI efficaces à mettre à jour.',
      'رياكت ليس أسرع تلقائياً من جافاسكريبت خام متقن. هو أسرع من شفرة DOM الفوضوية الشائعة، ويبقي الواجهات الكبيرة فعّالة عند التحديث.',
    ),
    [
      { type: 'h2', text: t('The real bottleneck', 'Le vrai goulot', 'عنق الزجاجة الحقيقي') },
      {
        type: 'p',
        text: t(
          'Creating JavaScript objects is cheap. Reading layout (offsetHeight) and writing to the DOM is expensive because the browser may recompute styles and reflow. Vanilla code that rebuilds a 1000-row table with innerHTML = ... on every keystroke pays that cost fully. React batches updates, diffs, and patches only changed cells.',
          "Créer des objets JavaScript est bon marché. Lire le layout (offsetHeight) et écrire dans le DOM est cher, car le navigateur peut recalculer les styles et le reflow. Un code vanilla qui reconstruit un tableau de 1000 lignes avec innerHTML = ... à chaque frappe paie ce coût en entier. React regroupe les updates, compare, et ne rustine que les cellules changées.",
          'إنشاء كائنات جافاسكريبت رخيص. قراءة التخطيط (offsetHeight) والكتابة في DOM مكلفان لأن المتصفح قد يعيد حساب الأنماط والتدفق. شفرة خام تعيد بناء جدول من 1000 صف بـ innerHTML عند كل ضغطة تدفع التكلفة كاملة. رياكت يجمع التحديثات ويقارن ويرقّع الخلايا المتغيّرة فقط.',
        ),
      },
      { type: 'h2', text: t('Wins', 'Gains', 'المكاسب') },
      {
        type: 'ul',
        items: [
          t('Fewer full tree recreations in the real DOM.', 'Moins de recréations complètes de l’arbre dans le vrai DOM.', 'إعادة إنشاء أقل للشجرة كاملة في DOM الحقيقي.'),
          t('Declarative UI avoids forgotten DOM leftovers (duplicate listeners, ghost nodes).', 'L’UI déclarative évite les restes DOM oubliés (écouteurs en double, nœuds fantômes).', 'الواجهة التصريحية تتجنب بقايا DOM المنسية (مستمعون مكررون، عقد شبح).'),
          t('Developer speed: fewer bugs often beats micro-optimizations.', 'Vitesse développeur : moins de bugs bat souvent les micro-optimisations.', 'سرعة المطوّر: تقليل العلل غالباً يهزم التحسينات الصغيرة.'),
        ],
      },
      { type: 'h2', text: t('What React does not magically fix', 'Ce que React ne répare pas par magie', 'ما لا يصلحه رياكت بالسحر') },
      {
        type: 'ul',
        items: [
          t('Huge images, blocking fonts, slow APIs.', 'Images énormes, polices bloquantes, APIs lentes.', 'صور ضخمة، خطوط حاجبة، واجهات بطيئة.'),
          t('Re-rendering a giant component on every keystroke — you still need keys, memo, lists virtualization when data is huge.', 'Re-rendre un énorme composant à chaque frappe — tu as encore besoin de keys, memo, virtualisation de listes si les données sont énormes.', 'إعادة تصيير مكوّن عملاق عند كل ضغطة — ما زلت تحتاج keys و memo وتقنية القوائم الافتراضية إن كانت البيانات ضخمة.'),
        ],
      },
    ],
  ),
]
