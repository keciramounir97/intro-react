import { article, t } from './helpers'

export const compareArticles = [
  article(
    'react-native',
    t('React Native: React for phones', 'React Native : React pour les téléphones', 'رياكت نيتيف: رياكت للهواتف'),
    t(
      'React Native uses the React model to drive native iOS and Android views, not HTML. Learn React first, then Native.',
      'React Native utilise le modèle React pour piloter des vues natives iOS et Android, pas du HTML. Apprends React d’abord, puis Native.',
      'رياكت نيتيف يستخدم نموذج رياكت لقيادة عروض iOS و Android الأصلية لا HTML. تعلّم رياكت أولاً ثم Native.',
    ),
    [
      { type: 'h2', text: t('Definition', 'Définition', 'تعريف') },
      {
        type: 'p',
        text: t(
          'Open-sourced by Facebook in 2015. You write JavaScript/TypeScript components. Instead of <div> and <span>, you use <View>, <Text>, <Image>, <ScrollView>. A bridge (and newer architectures like Fabric/JSI) maps those components to UIKit (iOS) and Android Views. The result is a real store app, not a WebView of your website (unless you choose that).',
          "Open sourcé par Facebook en 2015. Tu écris des composants JavaScript/TypeScript. Au lieu de <div> et <span>, tu utilises <View>, <Text>, <Image>, <ScrollView>. Un pont (et des architectures plus récentes comme Fabric/JSI) relie ces composants à UIKit (iOS) et aux vues Android. Le résultat est une vraie app de store, pas un WebView de ton site (sauf si tu le choisis).",
          'أُفتح مصدره من فيسبوك عام 2015. تكتب مكوّنات جافاسكريبت/تايب سكريبت. بدل <div> و <span> تستخدم <View> و <Text> و <Image> و <ScrollView>. جسر (وبنيات أحدث مثل Fabric/JSI) يربط تلك المكوّنات بـ UIKit (iOS) وعروض أندرويد. النتيجة تطبيق متجر حقيقي لا WebView لموقعك (إلا إذا اخترت ذلك).',
        ),
      },
      { type: 'h2', text: t('Why it exists', 'Pourquoi ça existe', 'لماذا وُجد') },
      {
        type: 'ul',
        items: [
          t('One team, two platforms, shared business logic.', 'Une équipe, deux plateformes, logique métier partagée.', 'فريق واحد، منصتان، منطق عمل مشترك.'),
          t('Reuse React skills (hooks, components, state).', 'Réutiliser les compétences React (hooks, composants, état).', 'إعادة استخدام مهارات رياكت (خطافات ومكوّنات وحالة).'),
          t('Not a replacement for React DOM on websites.', 'Pas un remplacement de React DOM sur les sites.', 'ليس بديلاً عن React DOM على المواقع.'),
        ],
      },
      { type: 'h2', text: t('How you use it', 'Comment tu l’utilises', 'كيف تستخدمه') },
      {
        type: 'code',
        lang: 'bash',
        code: `npm install -g expo-cli
npx create-expo-app my-native-app
cd my-native-app
npx expo start`,
      },
      {
        type: 'code',
        lang: 'jsx',
        code: `import { View, Text, Button } from 'react-native'

export default function Home() {
  return (
    <View>
      <Text>Hello Native</Text>
      <Button title="Press" onPress={() => {}} />
    </View>
  )
}`,
      },
      {
        type: 'ul',
        items: [
          t('No CSS files like the web: StyleSheet.create({ ... }) or libraries.', 'Pas de fichiers CSS comme le web : StyleSheet.create({ ... }) ou des libs.', 'لا ملفات CSS كالويب: StyleSheet.create({ ... }) أو مكتبات.'),
          t('onPress instead of onClick.', 'onPress à la place de onClick.', 'onPress بدل onClick.'),
          t('Expo is the easy beginner path (like Vite is for web React).', 'Expo est le chemin débutant facile (comme Vite pour React web).', 'Expo هو مسار المبتدئ السهل (مثل Vite لرياكت الويب).'),
        ],
      },
    ],
  ),
  article(
    'compare-all',
    t('React vs Vite vs Next.js vs React Native', 'React vs Vite vs Next.js vs React Native', 'رياكت مقابل Vite مقابل Next.js مقابل نيتيف'),
    t(
      'They are not four competing libraries. They sit on different layers. Mixing them up is the #1 beginner confusion.',
      'Ce ne sont pas quatre bibliothèques concurrentes. Elles sont sur des couches différentes. Les mélanger est la confusion n°1 des débutants.',
      'ليست أربع مكتبات متنافسة. هي على طبقات مختلفة. خلطها هو الحيرة رقم 1 للمبتدئ.',
    ),
    [
      {
        type: 'table',
        headers: [
          t('Thing', 'Chose', 'الشيء'),
          t('Layer', 'Couche', 'الطبقة'),
          t('Outputs', 'Produit', 'الناتج'),
          t('Easy because', 'Facile parce que', 'سهل لأن'),
        ],
        rows: [
          [
            t('React', 'React', 'رياكت'),
            t('UI library', 'Bibliothèque UI', 'مكتبة واجهة'),
            t('Component trees', 'Arbres de composants', 'أشجار مكوّنات'),
            t('One idea: UI = f(state)', 'Une idée : UI = f(état)', 'فكرة واحدة: الواجهة = د(الحالة)'),
          ],
          [
            t('Vite', 'Vite', 'Vite'),
            t('Build tool', 'Outil de build', 'أداة بناء'),
            t('Dev server + static files', 'Serveur de dev + fichiers statiques', 'خادم تطوير + ملفات ثابتة'),
            t('Almost no config, instant start', 'Presque pas de config, départ instantané', 'شبه بلا إعداد وإقلاع فوري'),
          ],
          [
            t('Next.js', 'Next.js', 'Next.js'),
            t('Framework on React', 'Framework sur React', 'إطار فوق رياكت'),
            t('Website with routes & server', 'Site avec routes et serveur', 'موقع بمسارات وخادم'),
            t('File-based routing, batteries included', 'Routage par fichiers, piles fournies', 'توجيه بالملفات وبطاريات مضمّنة'),
          ],
          [
            t('React Native', 'React Native', 'رياكت نيتيف'),
            t('Native renderer for React', 'Moteur natif pour React', 'محرك أصلي لرياكت'),
            t('iOS/Android apps', 'Apps iOS/Android', 'تطبيقات iOS/Android'),
            t('Same hooks, different tags', 'Mêmes hooks, autres balises', 'نفس الخطافات ووسوم مختلفة'),
          ],
        ],
      },
      { type: 'h2', text: t('Typical stacks', 'Piles typiques', 'مكدسات نموذجية') },
      {
        type: 'ul',
        items: [
          t('Learn UI: Node + Vite + React DOM.', 'Apprendre l’UI : Node + Vite + React DOM.', 'تعلّم الواجهة: Node + Vite + React DOM.'),
          t('Ship a public website: Next.js (includes React).', 'Publier un site public : Next.js (inclut React).', 'نشر موقع عام: Next.js (يتضمن رياكت).'),
          t('Ship a phone app: Expo + React Native (includes React).', 'Publier une app téléphone : Expo + React Native (inclut React).', 'نشر تطبيق هاتف: Expo + React Native (يتضمن رياكت).'),
        ],
      },
      {
        type: 'note',
        variant: 'remember',
        text: t(
          'You never choose “Vite or React”. You choose React, then Vite (or Next) to run it. You never choose “Next or React Native” for the same product surface: one is web, one is mobile.',
          'Tu ne choisis jamais « Vite ou React ». Tu choisis React, puis Vite (ou Next) pour le faire tourner. Tu ne choisis jamais « Next ou React Native » pour la même surface : l’un est web, l’autre mobile.',
          'لا تختار أبداً «Vite أو رياكت». تختار رياكت ثم Vite (أو Next) لتشغيله. لا تختار أبداً «Next أو نيتيف» لنفس سطح المنتج: واحد ويب والآخر جوّال.',
        ),
      },
    ],
  ),
  article(
    'creators',
    t('Who created what?', 'Qui a créé quoi ?', 'من أنشأ ماذا؟'),
    t(
      'Names help you remember that these tools come from different companies and years. They cooperate; they are not one product.',
      'Les noms aident à retenir que ces outils viennent de sociétés et d’années différentes. Ils coopèrent ; ce n’est pas un seul produit.',
      'الأسماء تساعد على تذكّر أن هذه الأدوات من شركات وسنوات مختلفة. تتعاون؛ ليست منتجاً واحداً.',
    ),
    [
      {
        type: 'table',
        headers: [
          t('Technology', 'Technologie', 'التقنية'),
          t('Person / org', 'Personne / org', 'الشخص / الجهة'),
          t('When', 'Quand', 'متى'),
          t('Note', 'Note', 'ملاحظة'),
        ],
        rows: [
          [t('JavaScript', 'JavaScript', 'جافاسكريبت'), t('Brendan Eich, Netscape', 'Brendan Eich, Netscape', 'Brendan Eich، Netscape'), t('1995', '1995', '1995'), t('Ten-day prototype, then the web language.', 'Prototype en dix jours, puis langage du web.', 'نموذج في عشرة أيام ثم لغة الويب.')],
          [t('ECMAScript', 'ECMAScript', 'ECMAScript'), t('Ecma TC39', 'Ecma TC39', 'Ecma TC39'), t('1997+', '1997+', '1997+'), t('Standard ECMA-262.', 'Norme ECMA-262.', 'معيار ECMA-262.')],
          [t('HTML', 'HTML', 'HTML'), t('Tim Berners-Lee, then W3C / WHATWG', 'Tim Berners-Lee, puis W3C / WHATWG', 'Tim Berners-Lee ثم W3C / WHATWG'), t('1991+', '1991+', '1991+'), t('Structure of the web.', 'Structure du web.', 'بنية الويب.')],
          [t('CSS', 'CSS', 'CSS'), t('Håkon Wium Lie, Bert Bos, W3C', 'Håkon Wium Lie, Bert Bos, W3C', 'Håkon Wium Lie و Bert Bos و W3C'), t('1996+', '1996+', '1996+'), t('Presentation.', 'Présentation.', 'العرض.')],
          [t('XML', 'XML', 'XML'), t('W3C', 'W3C', 'W3C'), t('1998', '1998', '1998'), t('Generic markup.', 'Balisage générique.', 'ترميز عام.')],
          [t('Node.js', 'Node.js', 'Node.js'), t('Ryan Dahl', 'Ryan Dahl', 'Ryan Dahl'), t('2009', '2009', '2009'), t('JS on the server. Dahl later made Deno.', 'JS sur le serveur. Dahl a plus tard créé Deno.', 'JS على الخادم. لاحقاً أنشأ Dahl Deno.')],
          [t('npm', 'npm', 'npm'), t('Isaac Z. Schlueter', 'Isaac Z. Schlueter', 'Isaac Z. Schlueter'), t('2010', '2010', '2010'), t('Now part of GitHub (Microsoft).', 'Désormais chez GitHub (Microsoft).', 'الآن ضمن GitHub (مايكروسوفت).')],
          [t('TypeScript', 'TypeScript', 'تايب سكريبت'), t('Anders Hejlsberg, Microsoft', 'Anders Hejlsberg, Microsoft', 'Anders Hejlsberg، مايكروسوفت'), t('2012', '2012', '2012'), t('Typed JS.', 'JS typé.', 'JS بأنواع.')],
          [t('React', 'React', 'رياكت'), t('Jordan Walke, Facebook / Meta', 'Jordan Walke, Facebook / Meta', 'Jordan Walke، فيسبوك / Meta'), t('2013 OSS', '2013 OSS', '2013 مصدر مفتوح'), t('UI library.', 'Bibliothèque UI.', 'مكتبة واجهة.')],
          [t('React Native', 'React Native', 'رياكت نيتيف'), t('Facebook / Meta', 'Facebook / Meta', 'فيسبوك / Meta'), t('2015', '2015', '2015'), t('Native apps.', 'Apps natives.', 'تطبيقات أصلية.')],
          [t('Next.js', 'Next.js', 'Next.js'), t('Guillermo Rauch, Vercel', 'Guillermo Rauch, Vercel', 'Guillermo Rauch، Vercel'), t('2016', '2016', '2016'), t('React framework.', 'Framework React.', 'إطار رياكت.')],
          [t('Create React App', 'Create React App', 'Create React App'), t('Facebook', 'Facebook', 'فيسبوك'), t('2016', '2016', '2016'), t('Retired starter.', 'Starter retiré.', 'بادئ متقاعد.')],
          [t('Vue.js', 'Vue.js', 'Vue.js'), t('Evan You', 'Evan You', 'Evan You'), t('2014', '2014', '2014'), t('Competing UI framework.', 'Framework UI concurrent.', 'إطار واجهة منافس.')],
          [t('Vite', 'Vite', 'Vite'), t('Evan You & Vite team', 'Evan You et l’équipe Vite', 'Evan You وفريق Vite'), t('2020', '2020', '2020'), t('Named after French « vite ».', 'Nommé d’après le français « vite ».', 'سُمّي من الفرنسية «vite».')],
        ],
      },
    ],
  ),
]
