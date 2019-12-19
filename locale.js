define(locale = {
    title: {
        en: 'Elizabeth Dobryanskaya',
        ru: 'Елизавета Добрянская',
    },
    speciality: {
        en: 'Frontend-developer, engineer and just interesting girl :)',
        ru: 'Разработчик, инженер и просто интересная девушка :)',
    },

    aboutTitle: {
        en: 'ABOUT',
        ru: 'О СЕБЕ',
    },
    aboutText: {
        en: `<p>My name is Liza, I'm <span class="strong">20</span> y.o. and I'm from 
            <span class="strong">Moscow, Russia</span>.</p><p>I'm a student at <span class="strong">
                Bauman Moscow State Technical University</span>, at the department of informatics and control systems. 
                </p><p>My hobbies are self-education, volunteering and active lifestyle 
                (e.g. walking or dancing)</p><p>Creative person :)</p><p>Nowadays I'm seriously  passionate about 
                <span class="strong">Frontend development</span></p>`,
        ru: `<p>Меня зовут Лиза, мне <span class="strong">20</span> лет и я из 
            <span class="strong">Москвы</span>.</p><p>Я учусь в <span class="strong">
            МГТУ им. Н.Э. Баумана</span> по специальности «Информатика и вычислительная 
            техника».</p><p>Свободное от учебы время в основном занимаюсь самообразованием, 
            волонтерством или активными занятиями (например, пешими прогулками или танцами)</p>
            <p>Творческая личность :)</p><p>В последнее время всерьез увлечена изучением 
            <span class="strong">Frontend-разработки</span></p>`,
    },
    listTitle: {
        en: 'Personal qualities:',
        ru: 'Личные качества:',
    },
    qualities: {
        en: [
            'Persistence',
            'Responsibility and organization',
            'Attentiveness',
            'Initiative',
            'Curiosity'
        ],
        ru: [
            'Настойчивость',
            'Ответственность и организованность',
            'Внимательность',
            'Инициативность',
            'Любопытство и любознательность'
        ],
    },

    contactTitle: {
        en: 'CONTACTS',
        ru: 'КОНТАКТЫ',
    },
    contactConnect: {
        en: 'CONNECT WITH ME',
        ru: 'НА СВЯЗИ',
    },
    contactFollow: {
        en: 'JOIN TO ME',
        ru: 'ПРИСОЕДИНЯЙТЕСЬ',
    },

    expTitle: {
        en: 'EXPERIENCE',
        ru: 'ОПЫТ РАЗРАБОТКИ',
    },
    expHistory: {
        en: [
            {
                name: 'Yandex (Aug 2019 - nowadays)',
                role: `I'm working with <span class="strong">autotests</span> and <span class="strong">
                    Continuous Integration</span> in Frontend team of Yandex.Disk`,
                annotation: `Yandex.Disk is a cloud service that allows users to store their data on the Internet
                    and give a synchronous access to all recources from all devices`,
                technologies: ['JavaScript', 'Python', 'HermioneJS', 'Selenium Grid'],
                img: 'images/yandex.png',
                prod: 'https://disk.yandex.ru',
            },
            {
                name: 'Penguins Wars (Feb - June 2019)',
                link: 'https://github.com/frontend-park-mail-ru/2019_1_undefined_penguins',
                role: `My main point in this project was <span class="strong">Frontend side</span> 
                    and <span class="strong">monitoring</span>`,
                annotation: `It is a Real-time <span class="strong">game</span>, which
                    main goal is - to stay alive! :)`,
                technologies: ['JavaScript', 'Golang', 'PostgreSQL', 'Node.js', 'Grafana'],
                img: 'images/penguin3.svg',
                prod: 'https://penguin-wars.sytes.pro',
            },
            {
                name: 'DOF calculator (Sep - Dec 2018)',
                link: 'https://github.com/Betchika99/GRIP-calculator',
                role: `My tasks were <span class="strong">developing math library 
                    </span> and setting up of<span class="strong">client-server connection</span>`,
                annotation: `DOF - depth of field. My team created desktop application 
                    for simulating <span class="strong">photo sharpness/blur</span> 
                    due to camera parametrs`,
                technologies: ['C/C++', 'MongoDB', 'Libevent', 'Qt', 'Boost', 'Jansson'],
                img: 'images/dof.svg'
            },
            {
                name: 'Publication Assistant (Jun 2018 - nowadays)',
                role: 'My team and I were <span class="strong">fullstacks</span> at this project.',
                annotation: `This working is <span class="strong">CRM system</span> which can
                    help writers of scientific publications at BMSTU with translating and publishing
                    in international editions. This project is working in prodaction mode and is very popular at BMSTU.`,
                technologies: ['Ruby', 'Rails', 'PostgreSQL', 'ActiveStorage', 'jQuery'],
                img: 'images/pubAssist.svg',
                prod: 'http://assistent.bmstu.ru/',
            },
        ],
        ru: [
            {
                name: 'Яндекс (Август 2019 - настоящее время)',
                role: `Я работаю над <span class="strong">автоматизацией тестирования</span> и <span class="strong">
                    Continuous Integration</span> в Фронтенд-команде Яндекс.Диска`,
                annotation: `Яндекс.Диск - это облачное хранилище, которое позволяет своим пользователям
                    хранить свои данные и файлы в интернете, а также предоставляет синхронный доступ к этим данным
                    с любых устройст`,
                technologies: ['JavaScript', 'Python', 'HermioneJS', 'Selenium Grid'],
                img: 'images/yandex.png',
                prod: 'https://disk.yandex.ru',
            },
            {
                name: 'Penguins Wars (Февраль - Июнь 2019)',
                link: 'https://github.com/frontend-park-mail-ru/2019_1_undefined_penguins',
                role: `Я отвечала в этом проекте, в основном, за <span class="strong">Frontend</span> 
                    и <span class="strong">мониторинг</span>`,
                annotation: `Это настоящая Real-time <span class="strong">игра</span>, в 
                    которой главная задача - выжить :)`,
                technologies: ['JavaScript', 'Golang', 'PostgreSQL', 'Node.js', 'Grafana'],
                img: 'images/penguin3.svg',
                prod: 'https://penguin-wars.sytes.pro',
            },
            {
                name: 'ГРИП калькулятор (Сентябрь - Декабрь 2018)',
                link: 'https://github.com/Betchika99/GRIP-calculator',
                role: `В мои задачи входило <span class="strong">создание математической 
                    библиотеки</span> и настройка <span class="strong">клиент-серверного взаимодействия</span>`,
                annotation: `ГРИП - глубина резко изображаемого пространства. Было разработано десктопное 
                    приложение для моделирования <span class="strong">резкости/размытости фотографии</span> 
                    в зависимости от параметров фотокамеры`,
                technologies: ['C/C++', 'MongoDB', 'Libevent', 'Qt', 'Boost', 'Jansson'],
                img: 'images/dof.svg'
            },
            {
                name: 'Ассистент Публикаций (Июнь 2018 - текущее время)',
                role: 'В этом проекте я и члены моей команды были <span class="strong">фуллстеками</span>.',
                annotation: `Данный программный продукт - <span class="strong">Портал</span> для организации 
                    помощи авторам научных публикаций в МГТУ им. Н.Э. Баумана с переводом и опубликованием 
                    в международных журналах. Проект живет и спустя некоторое время вышел в релиз и активно 
                    используется внутри МГТУ.`,
                technologies: ['Ruby', 'Rails', 'PostgreSQL', 'ActiveStorage', 'jQuery'],
                img: 'images/pubAssist.svg',
                prod: 'http://assistent.bmstu.ru/',
            },
        ]
    },
    dataTitle: {
        en: 'Techologies: ',
        ru: 'Технологии: ',
    },
    linkGood: {
        en: 'Link to ->',
        ru: 'Посмотреть ->',
    },
    linkBad: {
        en: 'The code is not available :(',
        ru: 'Кодес засекречен :('
    },

    educHistory: {
        en: [
            {
                place: 'Technopark Mail.Ru',
                date: 'Autumn 2018 - nowadays',
                site: 'https://park.mail.ru',
                role: `SYSTEM ARCHITECT`,
                annotation: `Techopark is cooperative project of BMSTU and Mail.Ru Group, 
                    which has a goal to prepare professionals in Web-development. I have studied
                    for one year and already studied algorithms and data structures, Web-development 
                    bases, C/C++ development, databases, UI/UX design, Goland development and 
                    Frontend-development. During this studing I improved my knowlege in 
                    development by creating own projects`,
            },
            {
                place: 'BMSTU',
                date: '1.09.2016 - nowadays',
                site: 'http://www.bmstu.ru/',
                role: 'FULLTIME STUDENT (BACHELOR)',
                annotation: `I chose Computer Systems, Complexes and Networks sub-department to get 
                    fundamental education in Computer Science. During three years I studied 
                    programming basics, development technologies of programm systems, networks, 
                    circuitry and electronics, computer design and microprocessor systems. GPA: 5`,
            },
            {
                place: 'MGIMO UNIVERSITY',
                date: '2013 - 2014',
                role: 'ENGLISH COURSE STUDENT',
                annotation: 'Finished a course of improving foregn language (English) to Intermediate level',
            },
        ],
        ru: [
            {
                place: 'Технопарк Mail.Ru',
                date: 'Осень 2018 - настоящее время',
                site: 'https://park.mail.ru',
                role: 'СТУДЕНТ ОСНОВНОЙ ПРОГРАММЫ «СИСТЕМНЫЙ АРХИТЕКТОР»',
                annotation: '«Технопарк» — совместный проект МГТУ им. Н.Э. Баумана и Mail.Ru Group, направленный на подготовку квалифицированных специалистов для российского рынка веб-разработки. За год обучения мною были изучены алгоритмы и структуры данных, основы веб-разработки, углубленное программирование на C/C++, базы данных, проектирование интерфейсов, разработка на Goland и Frontend-разработка. В ходе обучения мы на практике изучали технологии разработки путем создания собственных проектов',
            },
            {
                place: 'МГТУ им. Н.Э. Баумана',
                date: '1.09.2016 - настоящее время',
                site: 'http://www.bmstu.ru/',
                role: 'СТУДЕНТ ОЧНОГО ОТДЕЛЕНИЯ (БАКАЛАВР)',
                annotation: 'При поступлении мой выбор пал на кафедру «Компьютерные системы и сети» (ИУ6). В течение трех лет мною были изучены основы программирования, технологии разработки программных продуктов, сети и телекоммуникации, схемотехника и электроника, проектирование устройств ЭВМ и микропроцессорные системы. Средний балл - 5',
            },
            {
                place: 'МОУ СОШ №24 г. Павловский Посад',
                date: '2005 - 2016 гг.',
                role: 'ВЫПУСКНИЦА ШКОЛЫ',
                annotation: 'Окончила школу с медалью "За отличные успехи в учебе"',
            },
            {
                place: 'МГИМО',
                date: '2013 - 2014 гг.',
                role: 'СТУДЕНТ КУРСОВ',
                annotation: 'Окончила курсы повышения уровня иностранного (английского) языка до уровня Intermediate',
            },
        ],
    },
    educTitle: {
        en: 'EDUCATION',
        ru: 'ОБРАЗОВАНИЕ',
    },

    skillsTitle: {
        en: 'SKILLS',
        ru: 'НАВЫКИ',
    },
    skillsHistory: {
        en: {
            'PROGRAMMING LANGUAGES': [
                { name: 'JavaScript', progress: 75, },
                { name: 'HTML', progress: 80, },
                { name: 'CSS', progress: 70, },
                { name: 'C/C++', progress: 60, },
                { name: 'Ruby', progress: 60, },
                { name: 'Swift', progress: 40, },
                { name: 'Golang', progress: 40, },
            ],
            'OPERATING SYSTEMS': [
                { name: 'MacOS', progress: 90, },
                { name: 'Windows', progress: 80, },
                { name: 'Ubuntu', progress: 50, },
            ],
            'LANGUANGES': [
                { name: 'Russian', progress: 100, },
                { name: 'English', progress: 80, },
                { name: 'Spanish', progress: 30, },
            ],
            'OTHER': [
                { name: 'Sketch', progress: 70, },
                { name: 'Adobe Lightroom', progress: 60, },
                { name: 'Vim', progress: 60, },
            ],
        },
        ru: {
            'ЯЗЫКИ ПРОГРАММИРОВАНИЯ': [
                { name: 'JavaScript', progress: 70, },
                { name: 'HTML', progress: 80, },
                { name: 'CSS', progress: 70, },
                { name: 'C/C++', progress: 60, },
                { name: 'Ruby', progress: 60, },
                { name: 'Swift', progress: 40, },
                { name: 'Golang', progress: 40, },
            ],
            'ОПЕРАЦИОННЫЕ СИСТЕМЫ': [
                { name: 'MacOS', progress: 90, },
                { name: 'Windows', progress: 80, },
                { name: 'Ubuntu', progress: 50, },
            ],
            'ЯЗЫКОВЫЕ НАВЫКИ': [
                { name: 'Русский язык', progress: 100, },
                { name: 'Английский язык', progress: 80, },
                { name: 'Испанский язык', progress: 30, },
            ],
            'ДРУГИЕ УМЕНИЯ': [
                { name: 'Sketch', progress: 70, },
                { name: 'Adobe Lightroom', progress: 60, },
                { name: 'Vim', progress: 60, },
            ],
        },
    },
    skillsTitle2: {
        en: 'FRAMEWORKS AND TECHNOLOGIES',
        ru: 'ФРЕЙМВОРКИ И ТЕХНОЛОГИИ',
    },

    footerMsg: {
        en: 'Nice to meet you!',
        ru: 'Рада познакомиться!',
    },
    footerCpr: {
        en: '© E. Dobryanskaya, 2019',
        ru: '© E. Добрянская, 2019',
    },
});