import { article, t } from './helpers'

export const browserArticles = [
  article(
    'dom',
    t('DOM: Document Object Model', 'DOM : Document Object Model', 'DOM: نموذج كائن المستند'),
    t(
      'The DOM is how the browser turns HTML into a tree of objects that JavaScript can read and change.',
      'Le DOM est la façon dont le navigateur transforme le HTML en un arbre d’objets que JavaScript peut lire et modifier.',
      'DOM هو كيف يحوّل المتصفح HTML إلى شجرة كائنات يقرأها جافاسكريبت ويغيّرها.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'DOM means Document Object Model. After the browser parses HTML, it builds a tree: document at the root, then html, head, body, then every element, text node, and attribute. Each node is an object with properties (textContent, className, children) and methods (append, remove, querySelector). When you change the DOM, the browser repaints the pixels. That update work is often the expensive part of a web app.',
          "DOM signifie Document Object Model. Après l’analyse du HTML, le navigateur construit un arbre : document à la racine, puis html, head, body, puis chaque élément, nœud texte et attribut. Chaque nœud est un objet avec des propriétés (textContent, className, children) et des méthodes (append, remove, querySelector). Quand tu changes le DOM, le navigateur repeint les pixels. Ce travail de mise à jour est souvent la partie coûteuse d’une application web.",
          'DOM تعني Document Object Model. بعد تحليل HTML يبني المتصفح شجرة: document في الجذر ثم html و head و body ثم كل عنصر وعقدة نص وسمة. كل عقدة كائن بخصائص (textContent و className و children) ودوال (append و remove و querySelector). عندما تغيّر DOM يعيد المتصفح رسم البكسلات. عمل التحديث هذا غالباً الجزء المكلف في تطبيق الويب.',
        ),
      },
      {
        type: 'code',
        lang: 'js',
        code: `// Vanilla JS talks to the real DOM
const list = document.querySelector('#todos')
const item = document.createElement('li')
item.textContent = 'Learn the DOM'
list.append(item)`,
      },
      { type: 'h2', text: t('Why direct DOM updates become hard', 'Pourquoi les mises à jour DOM directes deviennent dures', 'لماذا تحديثات DOM المباشرة تصبح صعبة') },
      {
        type: 'p',
        text: t(
          'For a small page, querySelector is fine. For a dashboard with filters, lists, modals and live data, you must remember which nodes exist, destroy old ones, keep event listeners in sync, and avoid layout thrashing. React’s job is to let you describe the next UI; it then updates the DOM for you.',
          "Pour une petite page, querySelector suffit. Pour un tableau de bord avec filtres, listes, modales et données live, tu dois te souvenir des nœuds, détruire les anciens, synchroniser les écouteurs, éviter de casser le layout. Le métier de React est de te laisser décrire la prochaine UI ; ensuite il met à jour le DOM pour toi.",
          'لصفحة صغيرة querySelector يكفي. للوحة تحكم بفلاتر وقوائم ونوافذ وبيانات حيّة يجب أن تتذكر العقد وتدمّر القديمة وتزامن المستمعين وتتجنب تحطيم التخطيط. مهمة رياكت أن تدعك تصف الواجهة التالية ثم يحدّث هو DOM نيابة عنك.',
        ),
      },
    ],
  ),
  article(
    'bom',
    t('BOM: Browser Object Model', 'BOM : Browser Object Model', 'BOM: نموذج كائن المتصفح'),
    t(
      'The BOM is the browser around the page: the window, the URL, history, screen, and dialogs. It is not the HTML tree.',
      'Le BOM est le navigateur autour de la page : la fenêtre, l’URL, l’historique, l’écran, les dialogues. Ce n’est pas l’arbre HTML.',
      'BOM هو المتصفح حول الصفحة: النافذة والرابط والتاريخ والشاشة والحوارات. ليس شجرة HTML.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'BOM means Browser Object Model. There is no single official “BOM specification” like the DOM. In practice it is the set of objects attached to window: location (current URL), history (back/forward), navigator (browser info), screen (size), alert/confirm, localStorage. The DOM lives at window.document. So: BOM = the house, DOM = the furniture of the current room (the document).',
          "BOM signifie Browser Object Model. Il n’existe pas une unique « spécification BOM » comme pour le DOM. En pratique, c’est l’ensemble des objets accrochés à window : location (URL), history (précédent/suivant), navigator (infos navigateur), screen (taille), alert/confirm, localStorage. Le DOM vit dans window.document. Donc : BOM = la maison, DOM = les meubles de la pièce actuelle (le document).",
          'BOM تعني Browser Object Model. لا توجد مواصفة BOM واحدة رسمية مثل DOM. عملياً هي مجموعة الكائنات المعلّقة على window: location (الرابط) و history (رجوع/تقدم) و navigator (معلومات المتصفح) و screen (الحجم) و alert/confirm و localStorage. DOM يعيش في window.document. إذن: BOM = البيت، DOM = أثاث الغرفة الحالية (المستند).',
        ),
      },
      {
        type: 'code',
        lang: 'js',
        code: `console.log(window.location.href)
console.log(window.innerWidth)
window.localStorage.setItem('theme', 'dark')
// window.alert('Hello')  // a BOM dialog`,
      },
      { type: 'h2', text: t('BOM and React', 'BOM et React', 'BOM ورياكت') },
      {
        type: 'p',
        text: t(
          'React manages the document tree, not the whole browser. You still use BOM APIs yourself: changing the URL with React Router, reading localStorage for theme (this academy does that), listening to resize. In React Native there is no browser BOM — no window.location — because there is no browser.',
          "React gère l’arbre du document, pas tout le navigateur. Tu utilises encore les APIs BOM toi-même : changer l’URL avec React Router, lire localStorage pour le thème (cette académie le fait), écouter le resize. Dans React Native il n’y a pas de BOM navigateur — pas de window.location — parce qu’il n’y a pas de navigateur.",
          'رياكت يدير شجرة المستند لا المتصفح كله. ما زلت تستخدم واجهات BOM بنفسك: تغيير الرابط مع React Router، قراءة localStorage للسمة (هذه الأكاديمية تفعل ذلك)، الاستماع لتغيير الحجم. في React Native لا يوجد BOM متصفح — لا window.location — لأنه لا يوجد متصفح.',
        ),
      },
    ],
  ),
  article(
    'vdom',
    t('Virtual DOM: React’s in-memory UI copy', 'DOM virtuel : la copie mémoire de l’UI React', 'DOM الافتراضي: نسخة الواجهة في الذاكرة'),
    t(
      'The Virtual DOM is a JavaScript description of the UI. React compares two descriptions and only then touches the real DOM.',
      'Le DOM virtuel est une description JavaScript de l’UI. React compare deux descriptions, puis seulement ensuite touche le vrai DOM.',
      'DOM الافتراضي وصف جافاسكريبت للواجهة. رياكت يقارن وصفين ثم بعد ذلك فقط يلمس DOM الحقيقي.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'A Virtual DOM (VDOM) is a tree of plain JavaScript objects: type (div, MyButton), props, children. It is cheap to create and compare because it is just data in memory. The real DOM is a heavy browser structure tied to layout, styles, and accessibility. React 18 still uses this idea; newer React also compiles some updates more directly. For beginners, the mental model remains: you declare UI from state → React diffs → minimal DOM patch.',
          "Un DOM virtuel (VDOM) est un arbre d’objets JavaScript simples : type (div, MyButton), props, children. Il est bon marché à créer et comparer car ce n’est que des données en mémoire. Le vrai DOM est une structure lourde du navigateur, liée au layout, aux styles, à l’accessibilité. React 18 utilise encore cette idée ; le React plus récent compile aussi certaines mises à jour plus directement. Pour un débutant, le modèle mental reste : tu déclares l’UI depuis l’état → React compare → rustine DOM minimale.",
          'DOM الافتراضي (VDOM) شجرة كائنات جافاسكريبت بسيطة: النوع (div أو MyButton) والخصائص والأبناء. رخيص الإنشاء والمقارنة لأنه مجرد بيانات في الذاكرة. DOM الحقيقي بنية متصفح ثقيلة مرتبطة بالتخطيط والأنماط وإمكانية الوصول. رياكت 18 ما زال يستخدم هذه الفكرة؛ رياكت الأحدث يترجم أيضاً بعض التحديثات بشكل أ مباشر. للمبتدئ يبقى النموذج الذهني: تصف الواجهة من الحالة → رياكت يقارن → رقعة DOM دنيا.',
        ),
      },
      { type: 'h2', text: t('What happens on a click', 'Que se passe-t-il au clic', 'ماذا يحدث عند النقرة') },
      {
        type: 'ol',
        items: [
          t('State changes (setCount(count + 1)).', 'L’état change (setCount(count + 1)).', 'الحالة تتغير (setCount(count + 1)).'),
          t('React calls your function component again and gets new JSX.', 'React rappelle ton composant fonction et obtient un nouveau JSX.', 'رياكت يستدعي مكوّنك الدالي مرة أخرى ويحصل على JSX جديد.'),
          t('JSX becomes a new virtual tree.', 'Le JSX devient un nouvel arbre virtuel.', 'JSX يصبح شجرة افتراضية جديدة.'),
          t('React diffs old tree vs new tree (reconciliation).', 'React compare l’ancien arbre et le nouveau (réconciliation).', 'رياكت يقارن الشجرة القديمة بالجديدة (المصالحة).'),
          t('Only changed hosts (text node, className, etc.) are updated in the real DOM.', 'Seuls les hôtes changés (nœud texte, className, etc.) sont mis à jour dans le vrai DOM.', 'فقط المضيفون المتغيّرون (عقدة نص، className…) تُحدَّث في DOM الحقيقي.'),
        ],
      },
      {
        type: 'note',
        variant: 'tip',
        text: t(
          'The Virtual DOM is not “faster than the DOM” in every case. It is faster than naive full innerHTML rebuilds, and it makes the programming model (declare the whole UI) practical.',
          'Le DOM virtuel n’est pas « plus rapide que le DOM » dans tous les cas. Il est plus rapide que de tout reconstruire avec innerHTML, et il rend le modèle de programmation (déclarer toute l’UI) praticable.',
          'DOM الافتراضي ليس «أسرع من DOM» في كل حالة. هو أسرع من إعادة بناء innerHTML الساذجة، ويجعل نموذج البرمجة (وصف الواجهة كلها) عملياً.',
        ),
      },
    ],
  ),
  article(
    'vanilla-vs-react',
    t('What happens with HTML/CSS/JS vs with React', 'Que se passe-t-il avec HTML/CSS/JS vs avec React', 'ماذا يحدث مع HTML/CSS/JS مقابل رياكت'),
    t(
      'Same pixels on screen. Different way to think, to update, and to scale the project.',
      'Les mêmes pixels à l’écran. Une autre façon de penser, de mettre à jour, et de faire grandir le projet.',
      'نفس البكسلات على الشاشة. طريقة مختلفة في التفكير والتحديث وتوسيع المشروع.',
    ),
    [
      { type: 'h2', text: t('Vanilla path (no React)', 'Chemin vanilla (sans React)', 'المسار الخام (بدون رياكت)') },
      {
        type: 'ol',
        items: [
          t('You write HTML by hand.', 'Tu écris le HTML à la main.', 'تكتب HTML يدوياً.'),
          t('You write CSS that targets those tags and classes.', 'Tu écris du CSS qui vise ces balises et classes.', 'تكتب CSS يستهدف تلك الوسوم والأصناف.'),
          t('You write JS that finds nodes and mutates them after each event.', 'Tu écris du JS qui trouve les nœuds et les mute après chaque événement.', 'تكتب JS يجد العقد ويغيّرها بعد كل حدث.'),
          t('The source of truth is the DOM itself. If JS and HTML disagree, bugs appear.', 'La source de vérité est le DOM lui-même. Si JS et HTML divergent, les bugs apparaissent.', 'مصدر الحقيقة هو DOM نفسه. إذا اختلف JS و HTML تظهر العلل.'),
        ],
      },
      { type: 'h2', text: t('React path', 'Chemin React', 'مسار رياكت') },
      {
        type: 'ol',
        items: [
          t('You keep data in state (count, user, todos).', 'Tu gardes les données dans l’état (count, user, todos).', 'تحفظ البيانات في الحالة (count و user و todos).'),
          t('You write a function that returns JSX from that state.', 'Tu écris une fonction qui retourne du JSX depuis cet état.', 'تكتب دالة تُرجع JSX من تلك الحالة.'),
          t('An event updates state, not the DOM by hand.', 'Un événement met à jour l’état, pas le DOM à la main.', 'الحدث يحدّث الحالة لا DOM يدوياً.'),
          t('React updates the DOM to match the new JSX.', 'React met à jour le DOM pour coller au nouveau JSX.', 'رياكت يحدّث DOM ليطابق JSX الجديد.'),
          t('The source of truth is state. The DOM is a projection.', 'La source de vérité est l’état. Le DOM est une projection.', 'مصدر الحقيقة هو الحالة. DOM إسقاط.'),
        ],
      },
      {
        type: 'code',
        lang: 'js',
        code: `// Vanilla: you command the DOM
button.onclick = () => {
  count += 1
  span.textContent = count
}

// React: you command the data
function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}`,
      },
      {
        type: 'note',
        variant: 'remember',
        text: t(
          'Use vanilla HTML/CSS/JS for simple pages, emails of knowledge, and to understand the platform. Use React when the UI is a living system: many states, reuse, team, long life.',
          'Utilise HTML/CSS/JS vanilla pour les pages simples, pour apprendre, pour comprendre la plateforme. Utilise React quand l’UI est un système vivant : beaucoup d’états, réutilisation, équipe, longue vie.',
          'استخدم HTML/CSS/JS الخام للصفحات البسيطة وللتعلّم ولفهم المنصة. استخدم رياكت عندما تكون الواجهة نظاماً حياً: حالات كثيرة، إعادة استخدام، فريق، عمر طويل.',
        ),
      },
    ],
  ),
]
