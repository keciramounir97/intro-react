import { t } from '../utils/i18n'

export const NAV_GROUPS = [
  {
    id: 'start',
    title: t('Get started', 'Démarrer', 'البداية'),
    items: [
      { id: 'roadmap', title: t('Learning path', "Parcours d'apprentissage", 'مسار التعلّم') },
      { id: 'glossary', title: t('Glossary', 'Glossaire', 'المصطلحات') },
    ],
  },
  {
    id: 'lang',
    title: t('Core languages', 'Langages de base', 'اللغات الأساسية'),
    items: [
      { id: 'html', title: t('What is HTML?', "Qu'est-ce que HTML ?", 'ما هو HTML؟') },
      { id: 'css', title: t('What is CSS?', "Qu'est-ce que CSS ?", 'ما هو CSS؟') },
      { id: 'javascript', title: t('JavaScript', 'JavaScript', 'جافاسكريبت') },
      { id: 'ecmascript', title: t('ECMAScript', 'ECMAScript', 'ECMAScript') },
      { id: 'typescript', title: t('TypeScript', 'TypeScript', 'تايب سكريبت') },
      { id: 'inner-web', title: t('HTML, CSS, JS inside React', 'HTML, CSS, JS dans React', 'HTML و CSS و JS داخل رياكت') },
    ],
  },
  {
    id: 'browser',
    title: t('Browser internals', 'Le navigateur', 'داخل المتصفح'),
    items: [
      { id: 'dom', title: t('DOM', 'DOM', 'DOM') },
      { id: 'bom', title: t('BOM', 'BOM', 'BOM') },
      { id: 'vdom', title: t('Virtual DOM', 'DOM virtuel', 'DOM الافتراضي') },
      { id: 'vanilla-vs-react', title: t('HTML/CSS/JS vs React', 'HTML/CSS/JS contre React', 'HTML/CSS/JS مقابل رياكت') },
    ],
  },
  {
    id: 'concepts',
    title: t('Key concepts', 'Concepts clés', 'مفاهيم أساسية'),
    items: [
      { id: 'library-vs-framework', title: t('Library vs framework', 'Bibliothèque vs framework', 'مكتبة مقابل إطار عمل') },
      { id: 'components', title: t('Why components?', 'Pourquoi des composants ?', 'لماذا المكوّنات؟') },
      { id: 'performance', title: t('What you gain in performance', 'Le gain en performance', 'ما تربحه في الأداء') },
    ],
  },
  {
    id: 'node',
    title: t('Node and packages', 'Node et paquets', 'Node والحزم'),
    items: [
      { id: 'nodejs', title: t('What is Node.js?', "Qu'est-ce que Node.js ?", 'ما هو Node.js؟') },
      { id: 'package-managers', title: t('Package managers', 'Gestionnaires de paquets', 'مديرو الحزم') },
      { id: 'npm', title: t('npm', 'npm', 'npm') },
      { id: 'why-nodejs-react', title: t('Why Node.js for React?', 'Pourquoi Node.js pour React ?', 'لماذا Node.js لرياكت؟') },
    ],
  },
  {
    id: 'react',
    title: t('React', 'React', 'رياكت'),
    items: [
      { id: 'what-is-react', title: t('What is React?', "Qu'est-ce que React ?", 'ما هو رياكت؟') },
      { id: 'install-react', title: t('How to install React', 'Installer React', 'كيفية تثبيت رياكت') },
      { id: 'react-syntax', title: t('React syntax', 'Syntaxe de React', 'صيغة رياكت') },
      { id: 'jsx', title: t('JSX', 'JSX', 'JSX') },
      { id: 'xml', title: t('XML', 'XML', 'XML') },
      { id: 'tsx', title: t('TSX and TypeScript files', 'TSX et fichiers TypeScript', 'TSX وملفات تايب سكريبت') },
      { id: 'react-variants', title: t('React variants', 'Variantes de React', 'أنواع رياكت') },
    ],
  },
  {
    id: 'tools',
    title: t('Build tools', 'Outils de build', 'أدوات البناء'),
    items: [
      { id: 'build-tools', title: t('What is a build tool?', "Qu'est-ce qu'un outil de build ?", 'ما هي أداة البناء؟') },
      { id: 'create-react-app', title: t('Create React App', 'Create React App', 'Create React App') },
      { id: 'vite', title: t('Vite', 'Vite', 'Vite') },
      { id: 'vite-commands', title: t('Vite commands', 'Commandes Vite', 'أوامر Vite') },
      { id: 'vite-vs-cra', title: t('Vite vs Create React App', 'Vite vs Create React App', 'Vite مقابل CRA') },
      { id: 'nextjs', title: t('Next.js', 'Next.js', 'Next.js') },
      { id: 'why-js-suffix', title: t('Why everything ends with JS', 'Pourquoi tout finit par JS', 'لماذا كل شيء ينتهي بـ JS') },
    ],
  },
  {
    id: 'compare',
    title: t('Compare and history', 'Comparer et histoire', 'مقارنات وتاريخ'),
    items: [
      { id: 'react-native', title: t('React Native', 'React Native', 'رياكت نيتيف') },
      { id: 'compare-all', title: t('React, Vite, Next, Native', 'React, Vite, Next, Native', 'رياكت وVite وNext وNative') },
      { id: 'creators', title: t('Who created what?', 'Qui a créé quoi ?', 'من أنشأ ماذا؟') },
    ],
  },
]

export function flattenNav() {
  return NAV_GROUPS.flatMap((group) => group.items.map((item) => ({ ...item, group })))
}

export function getNeighbors(id) {
  const list = flattenNav()
  const index = list.findIndex((item) => item.id === id)
  return {
    prev: index > 0 ? list[index - 1] : null,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : null,
  }
}
