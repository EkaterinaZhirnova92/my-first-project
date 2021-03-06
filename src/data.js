import js from './js.jpg';
import jscript from './jscript.jpg';
import bootstrap from './bootstrap.jpg';
import react from './react.jpg';
import php from './php.jpg';
import python from './python.jpg';
import ruby from './ruby.jpg';

const data = [

    {
        id: 1,
        names: 'HTML/CSS',
        image: js,
        search: 'front-end',
        description: 'Азы веб-разработчика начинаются с верстки, чтобы научиться верстать вам необходимо освоить HTML и CSS. HTML - это стандартизированный язык разметки (от англ. HyperText Markup Language), применяется для создания веб-страниц. Он обрабатывается браузером и отображается в виде документа в привычной для человека форме на экране монитора. Большинство веб-страниц содержит описание разметки на языке HTML. CSS - каскадные таблицы стилей (от англ Cascading Style Sheets). Это язык описания внешнего вида документа, написанного с помощью HTML. CSS используется для задания шрифтов, цветов, отдельных блоков и т.д.',
        showMore: false
    },

    {
        id: 2,
        names: 'Java Script',
        image: jscript,
        search: 'front-end',
        description: 'JavaScript — это язык программирования, который используют для написания frontend- и backend-частей сайтов, а также мобильных приложений. Часто в текстах и обучающих материалах название языка сокращают до JS. Это язык программирования высокого уровня, то есть код на нем понятный и хорошо читается. JS поддерживают все популярные браузеры. Во frontend-части сайтов язык используют для создания интерактива (анимаций, всплывающих форм, автозаполнения), так как он связан с HTML и CSS и может ими манипулировать. В backend-части с языком JavaScript работают на платформе Node.js. С ее помощью, например, разрабатывают серверные веб-приложения и подключают библиотеки. В поисковике Google на JavaScript работает строка автозаполнения, а Netflix, Uber, eBay используют его в своем backend. ',
        showMore: false
    },

    {
        id: 3,
        names: 'Bootstrap',
        image: bootstrap,
        search: 'front-end',
        description: 'Bootstrap — это открытый и бесплатный HTML, CSS и JS фреймворк, который используется веб-разработчиками для быстрой вёрстки адаптивных дизайнов сайтов и веб-приложений. Основная область его применения – это фронтенд разработка сайтов и интерфейсов админок. Он позволяет верстать сайты в несколько раз быстрее, чем на «чистом» CSS и JavaScript. А в нашем мире, время – это очень ценный ресурс. Ещё один его аспект – доступность. Она сводится к тому, что предоставляет возможность даже начинающему веб-разработчику (без глубоких знаний и достаточной практики) создавать достаточно качественные макеты.',
        showMore: false
    },

    {
        id: 4,
        names: 'React',
        image: react,
        search: 'front-end',
        description: 'React — это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов. В отличие от других библиотек JavaScript, предоставляющих полноценную платформу приложений, React ориентируется исключительно на создание представлений приложений через инкапсулированные единицы (называются компонентами), которые сохраняют состояние и генерируют элементы пользовательского интерфейса. Вы можете разместить отдельный компонент на веб-странице или вложить иерархии компонентов для создания сложного пользовательского интерфейса. Компоненты React часто пишутся на JavaScript и JSX (JavaScript XML), который является расширением JavaScript, очень похожим на HTML и включающим некоторые функции синтаксиса для оптимизированного выполнения распространенных задач, например регистрации обработчиков событий для элементов пользовательского интерфейса. Компонент React реализует метод отрисовки, который возвращает код JSX, представляющий пользовательский интерфейс компонента. ',
        showMore: false
    },

    {
        id: 5,
        names: 'PHP',
        image: php,
        search: 'back-end',
        description: 'Начнём с определения того, чем именно является PHP. Сложно в одном предложении дать полное представление об этом языке, поэтому опишем его следующими тремя характеристиками: PHP — это препроцессор гипертекста (HTML). PHP — это серверный язык программирования. PHP — это скриптовый, интерпретируемый язык программирования. Основная задача PHP — это «оживление» HTML страниц. Обычные HTML-страницы статичны. Статичность (или неизменность) означает, что после того, как страницу создали и загрузили на сайт, при каждом обращении к этой странице браузер покажет её любому пользователю в неизменном виде.',
        showMore: false
    },

    {
        id: 6,
        names: 'Python',
        image: python,
        search: 'back-end',
        description: 'Python — это высокоуровневый язык программирования, который используется в различных сферах IT, таких как машинное обучение, разработка приложений, web, парсинг и другие. В 2019 году Python стал самым популярным языком программирования, обогнав Java на 10%. Это обусловлено многими причинами, одна из которых — высокая оплата труда квалифицированных специалистов (около 100 тысяч долларов в год). Python смог захватить малую часть рынка веб-разработки, иногда используется для написания десктопных приложений и, конечно, тотально доминирует в сфере машинного обучения. Кроме того, на нём создаётся много прототипов, которые позволяют быстро набросать функционал и внешний вид будущего проекта.',
        showMore: false
    },

    {
        id: 7,
        names: 'Ruby',
        image: ruby,
        search: 'back-end',
        description: 'Ruby — язык программирования, бум популярности которого пришелся на 2006 год и был связан с выпуском фреймворка Ruby on Rails. Он позволяет быстро и с минимальной стоимостью создавать крутые веб-приложения. На Ruby написаны такие известные проекты как GitHub, Airbnb, Twitter, а также сам GeekBrains.',
        showMore: false
    }
]

export default data;