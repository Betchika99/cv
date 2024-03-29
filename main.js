'use strict';
// import locale from './locale.js';
const locale = {
    title: {
        en: 'Elizabeth Dobryanskaya',
        ru: 'Елизавета Добрянская',
    },
    speciality: {
        en: 'Frontend-developer, engineer and just interesting girl :)',
        ru: 'Frontend-разработчик, QA-инженер и просто интересная девушка :)',
    },

    aboutTitle: {
        en: 'ABOUT',
        ru: 'О СЕБЕ',
    },
    aboutText: {
        en: `<p>My name is Liza, I'm <span class="strong">21</span> y.o. and I'm from
            <span class="strong">Moscow, Russia</span>.</p><p>I'm a student at <span class="strong">
                Bauman Moscow State Technical University</span>, at the department of informatics and control systems.
                </p><p>My hobbies are self-education, volunteering and active lifestyle
                (e.g. walking or dancing)</p><p>Creative person :)</p><p>Nowadays I'm seriously  passionate about
                <span class="strong">Frontend development</span></p>`,
        ru: `<p>Меня зовут Лиза, мне <span class="strong">23</span> года и я из
            <span class="strong">Москвы</span>.</p><p>Я окончила <span class="strong">
            МГТУ им. Н.Э. Баумана</span> по специальности «Информатика и вычислительная
            техника» (магистр, выпуск 2022).</p><p>В последнее время всерьез увлечена изучением
            <span class="strong">Frontend-разработки</span>.</p>
            <p>
                <span class="strong">Старший ментор</span> по фронтенду в 
                ОЦ VK x МГТУ им. Н.Э. Баумана (осень 2021 - настоящее время).
                До этого 1.5 года была ментором.
            </p>
            <p>
                <span class="strong">Преподаватель</span> по курсу "Обеспечение качества разработки ПО" в 
                ОЦ VK x МГТУ им. Н.Э. Баумана. До этого семестр была ментором.
            </p>
            <p>Начинающий автор статей на <span class="strong">Habr</span>.</p>
            <p>Волонтер на конференции <span class="strong">Holy.js</span> (2020).</p>
            <p>Веду <span class="strong">свой канал в Telegram</span> "Делаем веб" для начинающих фронтендеров.</p>`,
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
                name: 'Real estate center from Sber - DomClick (Mar 2020 - nowadays)',
                role: `My job includes developing some <span class="strong">widgets and sites</span> provided 
                       Sber manager and clients communication. <span class="strong">
                    </span> in Frontend team of Yandex.Disk`,
                annotation: `Yandex.Disk is a cloud service that allows users to store their data on the Internet
                    and give a synchronous access to all recources from all devices`,
                technologies: ['JavaScript', 'Python', 'HermioneJS', 'Selenium Grid'],
                img: 'images/yandex.png',
                prod: 'https://disk.yandex.ru',
            },
            {
                name: 'Yandex (Aug 2019 - Jan 2020)',
                role: `I'm working with <span class="strong">autotests</span> and <span class="strong">
                    Continuous Integration</span> in Frontend team of Yandex.Disk`,
                annotation: `Yandex.Disk is a cloud service that allows users to store their data on the Internet
                    and give a synchronous access to all recources from all devices`,
                technologies: ['JavaScript', 'Python', 'HermioneJS', 'Selenium Grid'],
                img: 'images/yandex.png',
                prod: 'https://disk.yandex.ru',
            },
            {
                name: 'Yandex (Aug 2019 - Jan 2020)',
                role: `I was working with <span class="strong">autotests</span> and <span class="strong">
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
                name: 'VK (Ноябрь 2021 - настоящее время)',
                role: `Я работаю над <span class="strong">Порталом VK Рекламы</span> - местом, где любой клиент может
                    получить ответы на вопросы о размещении рекламы на площадках VK. Проект создавался с нуля, ключевыми
                    принципами стали - хорошая <span class="strong">SEO-оптимизация</span> и быстрое изменение контента сайта 
                    через <span class="strong">панель администратора (менеджера)</span>.
                    Поэтому проект представляет собой <span class="strong">"2&nbsp;в&nbsp;1"</span> - фронтенд-сервер (сам Портал как SSR-проект) и бекенд-сервер (API + Админка).
                    Поэтому есть возможность поработать и над клиентской частью, и над серверной. Портал является
                    <span class="strong">точкой входа для рекламного кабинета</span> VK Рекламы.`,
                annotation: `VK Реклама - проект, объединяющий средства ВКонтакте
                и MyTarget для размещения и продвижения продуктов в крупных IT-сервисах.`,
                technologies: ['TypeScript', 'Next.js', 'Strapi', 'Redux-toolkit', 'MySQL', 'Node.js'],
                img: 'images/VK_logo.svg',
                prod: 'https://ads.vk.com',
            },
            {
                name: 'Центр недвижимости от Cбера (Март 2020 - Октябрь 2021)',
                role: `Я занималась разработкой фронтенда в команде коммуникаций с клиентом. В задачи команды входило обеспечение 
                    стабильной и качественной работы <span class="strong">чата, колокольчика, пуш-уведомлений, системы 
                    с идеями и пожеланиями пользователей и пр.</span> Мы отвечали за техническую составляющую <span class="strong">
                    каналов связи клиента и компании </span>. За время работы участвовала в разработке  <span class="strong">виджетов</span>, 
                    страниц  <span class="strong">SPA/SSR/SSG</span>, 
                    а также занималась  <span class="strong">оптимизациями</span> legacy-проектов, организацией собственной 
                    <span class="strong">библиотеки компонентов</span>, 
                    первыми в компании внедрили стейт-менеджер <span class="strong">Effector</span>. 
                    Изучала работу ClickHouse, Lighthouse, Grafana для аналитики 
                    и настройке алертов`,
                annotation: `Домклик - это IT-платформа по подбору недвижимости и оформлению сделки через Сбер. Здесь на каждом шагу 
                возникают коммуникации с клиентом - чат с менеджером, телефонный звонок, пуш-уведомления на устройство или почту,
                опросы, идеи и предложения, помогающие сделать жизнь клиентов Сбера лучше`,
                technologies: ['TypeScript', 'React', 'Mobx', 'Effector', 'WebSocket', 'SCSS', 'Next.js', 'Grafana', 'Clickhouse'],
                img: 'images/domclick.png',
                prod: 'https://domclick.ru',
            },
            {
                name: 'Give me a Donut (Февраль 2020 - Сентябрь 2020)',
                link: 'https://github.com/BADgers-Team/donut-front',
                role: `В этом проекте я занималась <span class="strong">клиентской составляющей сайта с нуля, ее развитием и совершенствованием.</span> 
                    Кроме того, в этом проекте я была <span class="strong">Product-менеджером</span> и отвечала за основные продуктовые решения
                    команды`,
                annotation: `Give me a Donut - это сервис поддержки талантов. Cервис помогает творческим личностям 
                поделиться своими работами с публикой, найти свою аудиторию и зарабатывать тем, что действительно нравится. 
                В системе есть своя "вкусная" валюта - донат. Поэтому мы как никто знаем, что творить и зарабатывать - это весело!
                <br/>P.S. Продукт сделан в качестве выпускного защитного проекта студентов Технопарка Mail.ru и признан
                лучшим проектом семестра по мнению преподавателей`,
                technologies: ['JavaScript', 'React', 'Mobx', 'Go', 'PostgreSQL', 'Tarantool', 'S3'],
                img: 'images/donut.png',
                prod: 'https://givemeadonut.ru',
            },
            {
                name: 'Яндекс (Август 2019 - Январь 2020)',
                role: `Стажерская программа Яндекса. В мои задачи входила работа над <span class="strong">
                    автоматизацией тестирования</span> и <span class="strong">Continuous Integration</span>
                    в Фронтенд-команде Яндекс.Диска`,
                annotation: `Яндекс.Диск - это облачное хранилище, которое позволяет своим пользователям
                    хранить свои данные и файлы в интернете, а также предоставляет синхронный доступ к этим данным
                    с любых устройств`,
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
                prod: '',
            },
            {
                name: 'Ассистент Публикаций (Июнь 2018 - Июль 2021)',
                role: 'В этом проекте я и члены моей команды были <span class="strong">фуллстеками</span>. Во второй версии я была <span class="strong">фронтендером</span>.',
                annotation: `Данный программный продукт - <span class="strong">Портал</span> для организации
                    помощи авторам научных публикаций в МГТУ им. Н.Э. Баумана с переводом и опубликованием
                    в международных журналах. Проект живет и спустя некоторое время вышел в релиз и активно
                    используется внутри МГТУ. В 2020 году проект был <span class="strong">переписан на новый стек технологий</span>
                    с разделением Frontend (JavaScript) и Backend (Go, Postgres, Tarantool)`,
                technologies: ['Ruby', 'Rails', 'PostgreSQL', 'ActiveStorage', 'jQuery', 'JavaScript', 'Go'],
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
        ru: 'Посмотреть код ->',
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
                place: 'МГТУ им. Н.Э. Баумана',
                date: '1.09.2020 - 31.08.2022',
                site: 'http://www.bmstu.ru/',
                role: 'СТУДЕНТ ОЧНОГО ОТДЕЛЕНИЯ (МАГИСТР)',
                annotation: 'После окончания бакалавриата решила продолжить обучение и изучать Компьютерные комплексы и большие данные (кафедра ИУ6). Средний балл - 4.7',
            },
            {
                place: 'Технопарк Mail.Ru (теперь ОЦ VK x МГТУ им. Н.Э. Баумана)',
                date: 'Весна 2021',
                site: 'https://education.mail.ru/curriculum/program/discipline/1240/',
                role: 'ВЫПУСКНИК КУРСА "РУЧНОЕ ТЕСТИРОВАНИЕ"',
                annotation: '«Технопарк» — совместный проект МГТУ им. Н.Э. Баумана и Mail.Ru Group, направленный на подготовку квалифицированных специалистов для российского рынка веб-разработки. За год обучения мною были изучены алгоритмы и структуры данных, основы веб-разработки, углубленное программирование на C/C++, базы данных, проектирование интерфейсов, разработка на Goland и Frontend-разработка. В ходе обучения мы на практике изучали технологии разработки путем создания собственных проектов',
            },
            {
                place: 'Технопарк Mail.Ru (теперь ОЦ VK x МГТУ им. Н.Э. Баумана)',
                date: 'Осень 2018 - Сентябрь 2020',
                site: 'https://park.mail.ru',
                role: 'СТУДЕНТ ОСНОВНОЙ ПРОГРАММЫ «СИСТЕМНЫЙ АРХИТЕКТОР»',
                annotation: '«Технопарк» — совместный проект МГТУ им. Н.Э. Баумана и Mail.Ru Group, направленный на подготовку квалифицированных специалистов для российского рынка веб-разработки. За год обучения мною были изучены алгоритмы и структуры данных, основы веб-разработки, углубленное программирование на C/C++, базы данных, проектирование интерфейсов, разработка на Goland и Frontend-разработка. В ходе обучения мы на практике изучали технологии разработки путем создания собственных проектов',
            },
            {
                place: 'МГТУ им. Н.Э. Баумана',
                date: '1.09.2016 - 31.08.2020',
                site: 'http://www.bmstu.ru/',
                role: 'СТУДЕНТ ОЧНОГО ОТДЕЛЕНИЯ (БАКАЛАВР)',
                annotation: 'При поступлении мой выбор пал на кафедру «Компьютерные системы и сети» (ИУ6). В течение трех лет мною были изучены основы программирования, технологии разработки программных продуктов, сети и телекоммуникации, схемотехника и электроника, проектирование устройств ЭВМ и микропроцессорные системы. Окончила с красным дипломом. Средний балл - 5',
            },
            // {
            //     place: 'МОУ СОШ №24 г. Павловский Посад',
            //     date: '2005 - 2016 гг.',
            //     role: 'ВЫПУСКНИЦА ШКОЛЫ',
            //     annotation: 'Окончила школу с медалью "За отличные успехи в учебе"',
            // },
            // {
            //     place: 'МГИМО',
            //     date: '2013 - 2014 гг.',
            //     role: 'СТУДЕНТ КУРСОВ',
            //     annotation: 'Окончила курсы повышения уровня иностранного (английского) языка до уровня Intermediate',
            // },
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
                { name: 'JavaScript', progress: 90, },
                { name: 'TypeScript', progress: 80, },
                { name: 'React', progress: 80, },
                { name: 'HTML', progress: 80, },
                { name: 'CSS', progress: 70, },
                { name: 'C/C++', progress: 30, },
                { name: 'Ruby', progress: 30, },
                { name: 'Swift', progress: 30, },
                { name: 'Golang', progress: 40, },
            ],
            'OPERATING SYSTEMS': [
                { name: 'MacOS', progress: 90, },
                { name: 'Windows', progress: 80, },
                { name: 'Ubuntu', progress: 50, },
            ],
            'LANGUANGES': [
                { name: 'Russian', progress: 100, },
                { name: 'English', progress: 75, },
                { name: 'Spanish', progress: 30, },
            ],
            'OTHER': [
                { name: 'Figma', progress: 80, },
                { name: 'Sketch', progress: 60, },
                { name: 'Adobe Lightroom', progress: 60, },
                { name: 'Vim', progress: 60, },
            ],
        },
        ru: {
            'ЯЗЫКИ ПРОГРАММИРОВАНИЯ': [
                { name: 'JavaScript', progress: 90, },
                { name: 'TypeScript', progress: 80, },
                { name: 'React', progress: 80, },
                { name: 'HTML', progress: 80, },
                { name: 'CSS', progress: 70, },
                { name: 'Mobx', progress: 65, },
                { name: 'Effector', progress: 50, },
                { name: 'Jest/Selenium', progress: 50, },
                { name: 'Next.js', progress: 50, },
            ],
            'ОПЕРАЦИОННЫЕ СИСТЕМЫ': [
                { name: 'MacOS', progress: 90, },
                { name: 'Windows', progress: 80, },
                { name: 'Ubuntu', progress: 50, },
            ],
            'ЯЗЫКОВЫЕ НАВЫКИ': [
                { name: 'Русский язык', progress: 100, },
                { name: 'Английский язык', progress: 75, },
            ],
            'ДРУГИЕ УМЕНИЯ': [
                { name: 'Figma', progress: 80, },
                { name: 'MS Visio / Draw.io', progress: 70},
                { name: 'Figma', progress: 70, },
                { name: 'Elasticsearch', progress: 65, },
                { name: 'Lightroom/Photoshop', progress: 40, },
                { name: 'Hadoop', progress: 30, },
                { name: 'Kibana', progress: 30, },
                { name: 'Python/Go', progress: 30, },
            ],
        },
    },
    skillsTitle2: {
        en: 'FRAMEWORKS AND TECHNOLOGIES',
        ru: 'ОСНОВНЫЕ ФРЕЙМВОРКИ И ТЕХНОЛОГИИ',
    },

    footerMsg: {
        en: 'Nice to meet you!',
        ru: 'Рада познакомиться!',
    },
    footerCpr: {
        en: '© E. Dobryanskaya, 2022',
        ru: '© E. Добрянская, 2022',
    },
};

(() => {
    const MEDIA_SIZES = [
        480
    ];

    // const LANG = (window.navigator ? (window.navigator.language ||
        // window.navigator.systemLanguage ||
        // window.navigator.userLanguage) : "ru").substr(0, 2).toLowerCase();
    const LANG = "ru";

    const container = document.getElementById('container');

    const header = document.createElement('header');
    header.classList = 'header';

    const photo = document.createElement('div');
    photo.classList = 'header__photo';
    const img = document.createElement('img');
    img.classList = 'header__image';
    img.src = 'images/avatar.jpg';
    photo.appendChild(img);

    const titleBlock = document.createElement('div');
    titleBlock.classList = 'header__title-block';
    const name = document.createElement('div');
    name.classList = 'header__name';
    name.textContent = locale.title[LANG].toUpperCase();

    const speciality = document.createElement('div');
    speciality.classList = 'header__speciality';
    speciality.textContent = locale.speciality[LANG];
    titleBlock.appendChild(name);
    titleBlock.appendChild(speciality);

    header.appendChild(photo);
    header.appendChild(titleBlock);

    const hrHeader = document.createElement('hr');
    hrHeader.classList = 'hr-header';

    const content = document.createElement('div');
    content.classList = 'content';
    const leftColumn = document.createElement('div');
    leftColumn.classList = 'content__left';
    const hrContent = document.createElement('hr');
    hrContent.classList = 'hr-content content__horizontal';
    const rightColumn = document.createElement('div');
    rightColumn.classList = 'content__right';

    const about = document.createElement('div');
    about.classList = 'content__about';
    const aboutHeader = document.createElement('div');
    aboutHeader.classList = 'content__header';
    const aboutImg = document.createElement('img');
    aboutImg.src = 'images/chevron-right.svg';
    aboutImg.classList = 'content__header-img';
    const aboutTitle = document.createElement('div');
    aboutTitle.classList = 'content__title';
    aboutTitle.textContent = locale.aboutTitle[LANG];
    aboutHeader.appendChild(aboutImg);
    aboutHeader.appendChild(aboutTitle);
    let hr = document.createElement('hr');
    hr.classList = 'content__horizontal';
    const aboutText = document.createElement('div');
    aboutText.classList = 'content__text';
    aboutText.innerHTML += locale.aboutText[LANG];
    const listTitle = document.createElement('p');
    listTitle.textContent = locale.listTitle[LANG];
    aboutText.appendChild(listTitle);
    const listQualities = document.createElement('ul');
    locale.qualities[LANG].forEach(elem => {
        const li = document.createElement('li');
        li.textContent = elem;
        listQualities.appendChild(li);
    })
    aboutText.appendChild(listQualities);

    if (screen.width <= MEDIA_SIZES[0]) {
        aboutHeader.addEventListener('click', (event) => {
            event.preventDefault();
            if (aboutText.classList.contains('content__visible')) {
                aboutText.classList.remove('content__visible');
            } else {
                aboutText.classList.add('content__visible');
            }

            if (aboutImg.classList.contains('content__header-img__visible')) {
                aboutImg.classList.remove('content__header-img__visible');
            } else {
                aboutImg.classList.add('content__header-img__visible');
            }

            const separator = document.getElementsByClassName('content__horizontal')[0];
            if (separator.classList.contains('content__visible')) {
                separator.classList.remove('content__visible');
            } else {
                separator.classList.add('content__visible');
            }
        });
    }

    about.appendChild(aboutHeader);
    about.appendChild(hr);
    about.appendChild(aboutText);
    leftColumn.appendChild(about);

    const contact = document.createElement('div');
    contact.classList = 'content__contact';
    hr = document.createElement('hr');
    contact.appendChild(hr);
    const contactHeader = document.createElement('div');
    contactHeader.classList = 'content__header';
    const contactImg = document.createElement('img');
    contactImg.src = 'images/chevron-right.svg';
    contactImg.classList = 'content__header-img';
    const contactTitle = document.createElement('div');
    contactTitle.classList = 'content__title';
    contactTitle.textContent = locale.contactTitle[LANG];
    contactHeader.appendChild(contactImg);
    contactHeader.appendChild(contactTitle);
    hr = document.createElement('hr');
    const contactText = document.createElement('div');
    contactText.classList = 'contact__content';
    const contactConnect = document.createElement('div');
    contactConnect.classList = 'contact__connect';
    contactConnect.textContent = locale.contactConnect[LANG];
    const connectButtons = document.createElement('ul');
    connectButtons.classList = 'connect__buttons';
    let buttonsList = [
        {
            icon: 'images/phone.svg',
            orange_icon: 'images/phone_oran.svg',
            link: 'tel: +79250582816',
            data: '+7 (925) 058 28 16',
        },
        {
            icon: 'images/mailru.svg',
            orange_icon: 'images/mailru_oran.svg',
            link: 'mailto:emdobryanskaya@mail.ru',
            data: 'emdobryanskaya@mail.ru',
        },
        {
            icon: 'images/gmail.svg',
            orange_icon: 'images/gmail_oran.svg',
            link: 'mailto:emdobryanskaya@gmail.com',
            data: 'emdobryanskaya@gmail.com',
        },
        {
            icon: 'images/tg.svg',
            orange_icon: 'images/tg_oran.svg',
            link: 'https://t.me/emdobryanskaya',
            data: 'emdobryanskaya',
        },
    ];
    buttonsList.forEach(elem => {
        const li = document.createElement('a');
        li.classList = 'connect__button';
        if (elem.link) {
            li.href = elem.link;
        }
        const liBorder = document.createElement('div');
        liBorder.classList = 'connect__border';
        const liImg = document.createElement('img');
        liImg.classList = 'connect__img';
        liImg.src = elem.icon;
        const data = document.createElement('div');
        data.classList = 'connect__link';
        data.textContent = elem.data;
        li.addEventListener('mouseenter', (event) => {
            event.preventDefault();
            liImg.src = elem.orange_icon;
            liImg.classList.add('connect__img__hovered');
            liBorder.classList.add('connect__border__hovered');
            data.classList.add('connect__link__hovered');
        });
        li.addEventListener('mouseleave', (event) => {
            event.preventDefault();
            liImg.src = elem.icon;
            liImg.classList.remove('connect__img__hovered');
            liBorder.classList.remove('connect__border__hovered');
            data.classList.remove('connect__link__hovered');
        });
        li.appendChild(liBorder);
        li.appendChild(liImg);
        li.appendChild(data);
        connectButtons.appendChild(li);
    });
    contactConnect.appendChild(connectButtons);
    contactText.appendChild(contactConnect);

    const followButtons = document.createElement('ul');
    followButtons.classList = 'follow__buttons';
    const contactFollow = document.createElement('div');
    contactFollow.classList = 'contact__follow';
    contactFollow.textContent = locale.contactFollow[LANG];
    buttonsList = [
        {
            icon: 'images/github.svg',
            orange_icon: 'images/github_oran.svg',
            link: 'https://betchika99.github.io/',
            data: 'Betchika99',
        },
        {
            icon: 'images/tg.svg',
            orange_icon: 'images/tg_oran.svg',
            link: 'https://t.me/makingweb',
            data: 'Делаем веб',
        },
        {
            icon: 'images/habr.svg',
            orange_icon: 'images/habr_oran.svg',
            link: 'https://habr.com/ru/users/emdobro/',
            data: 'habr.com',
        },
        {
            icon: 'images/vk.svg',
            orange_icon: 'images/vk_oran.svg',
            link: 'https://vk.com/emdobryanskaya',
            data: 'emdobryanskaya',
        },
        {
            icon: 'images/instagram.svg',
            orange_icon: 'images/instagram_oran.svg',
            link: 'https://www.instagram.com/emdobryanskaya/?hl=ru',
            data: 'emdobryanskaya',
        },
    ];
    buttonsList.forEach(elem => {
        const li = document.createElement('a');
        li.classList = 'follow__button';
        li.href = elem.link;
        const liBorder = document.createElement('div');
        liBorder.classList = 'follow__border';
        const liImg = document.createElement('img');
        liImg.classList = 'follow__img';
        liImg.src = elem.icon;
        const data = document.createElement('div');
        data.classList = 'follow__link';
        data.textContent = elem.data;
        li.addEventListener('mouseenter', (event) => {
            event.preventDefault();
            liImg.src = elem.orange_icon;
            liImg.classList.add('follow__img__hovered');
            liBorder.classList.add('follow__border__hovered');
            data.classList.add('follow__link__hovered');
        });
        li.addEventListener('mouseleave', (event) => {
            event.preventDefault();
            liImg.src = elem.icon;
            liImg.classList.remove('follow__img__hovered');
            liBorder.classList.remove('follow__border__hovered');
            data.classList.remove('follow__link__hovered');
        });
        li.appendChild(liBorder);
        li.appendChild(liImg);
        li.appendChild(data);
        followButtons.appendChild(li);
    });

    contactFollow.appendChild(followButtons);
    contactText.appendChild(contactFollow);

    contactHeader.addEventListener('click', (event) => {
        event.preventDefault();
        const separator = document.getElementsByClassName('content__horizontal')[1];
        if (contactText.style.display == 'block') {
            contactText.style.display = 'none';
            separator.style.display = 'none';
        } else {
            contactText.style.display = 'block';
            separator.style.display = 'block';
        }

        if (contactImg.classList.contains('content__header-img__visible')) {
            contactImg.classList.remove('content__header-img__visible');
        } else {
            contactImg.classList.add('content__header-img__visible');
        }
    });

    contact.appendChild(contactHeader);
    contact.appendChild(hr);
    contact.appendChild(contactText);
    leftColumn.appendChild(contact);

    const exp = document.createElement('div');
    exp.classList = 'content__exp';
    const expHeader = document.createElement('div');
    expHeader.classList = 'content__header';
    const expImg = document.createElement('img');
    expImg.src = 'images/chevron-right.svg';
    expImg.classList = 'content__header-img';
    const expTitle = document.createElement('div');
    expTitle.classList = 'content__title';
    expTitle.textContent = locale.expTitle[LANG];
    expHeader.appendChild(expImg);
    expHeader.appendChild(expTitle);
    hr = document.createElement('hr');
    hr.classList = 'content__horizontal';

    const row = document.createElement('div');
    row.classList = 'experience__row';
    locale.expHistory[LANG].forEach((elem, i) => {
        const cell = document.createElement('div');
        cell.classList = 'experience__cell';
        const header = document.createElement('div');
        header.classList = 'cell__header';
        const img = document.createElement('img');
        img.src = elem.img;
        img.classList = 'cell__img';
        if (i === 3) {
            img.classList.add('img-yandex');
        }
        const name = document.createElement('a');
        name.classList = 'cell__title';
        name.textContent = elem.name;
        if (elem.prod) {
            name.href = elem.prod;
        }
        header.appendChild(img);
        header.appendChild(name);
        cell.appendChild(header);
        const annotation = document.createElement('div');
        annotation.classList = 'cell__info';
        annotation.innerHTML = elem.annotation;
        cell.appendChild(annotation);
        const role = document.createElement('div');
        role.classList = 'cell__role';
        role.innerHTML = elem.role;
        cell.appendChild(role);
        let data = document.createElement('div');
        data.classList = 'cell__data';
        let dataTitle = document.createElement('div');
        dataTitle.textContent = locale.dataTitle[LANG];
        let dataContent = document.createElement('div');
        dataContent.classList = 'cell__content';
        data.appendChild(dataTitle);
        elem.technologies.forEach(t => {
            const techno = document.createElement('div');
            techno.classList = 'cell__techno';
            techno.textContent = t;
            dataContent.append(techno);
        });
        data.appendChild(dataContent);
        cell.appendChild(data);
        const link = document.createElement('a');
        link.classList = 'cell__link';
        if (elem.link) {
            link.href = elem.link;
            link.textContent = locale.linkGood[LANG];
        } else {
            link.textContent = locale.linkBad[LANG];
        }
        cell.appendChild(link);

        row.appendChild(cell);
    });

    exp.appendChild(expHeader);
    exp.appendChild(hr);
    exp.appendChild(row);

    expHeader.addEventListener('click', (event) => {
        event.preventDefault();
        const separator = document.getElementsByClassName('content__horizontal')[2];
        if (row.style.display == 'block') {
            row.style.display = 'none';
            separator.style.display = 'none';
        } else {
            row.style.display = 'block';
            separator.style.display = 'block';
        }

        if (expImg.classList.contains('content__header-img__visible')) {
            expImg.classList.remove('content__header-img__visible');
        } else {
            expImg.classList.add('content__header-img__visible');
        }
    });

    hr = document.createElement('hr');
    exp.appendChild(hr);
    rightColumn.appendChild(exp);

    const educ = document.createElement('div');
    educ.classList = 'content__educ';
    const educHeader = document.createElement('div');
    educHeader.classList = 'content__header';
    const educImg = document.createElement('img');
    educImg.src = 'images/chevron-right.svg';
    educImg.classList = 'content__header-img';
    const educTitle = document.createElement('div');
    educTitle.classList = 'content__title';
    educTitle.textContent = locale.educTitle[LANG];
    educHeader.appendChild(educImg);
    educHeader.appendChild(educTitle);
    hr = document.createElement('hr');
    hr.classList = 'content__horizontal';
    const educText = document.createElement('div');
    educText.classList = 'education__content';
    const educList = document.createElement('ul');
    locale.educHistory[LANG].forEach(elem => {
        const li = document.createElement('li');
        li.classList = 'education__list';
        const header = document.createElement('div');
        header.classList = 'education__header';
        const place = document.createElement('div');
        place.classList = 'education__place';
        place.textContent = elem.place;
        const date = document.createElement('div');
        date.classList = 'education__date';
        date.textContent = elem.date;
        header.appendChild(place);
        header.appendChild(date);
        const site = document.createElement('a');
        site.classList = 'education__site';
        site.href = elem.site;
        site.textContent = elem.site;
        const role = document.createElement('div');
        role.classList = 'education__role';
        role.textContent = elem.role;
        const annotation = document.createElement('div');
        annotation.classList = 'education__info';
        annotation.textContent = elem.annotation;

        li.appendChild(header);
        li.appendChild(site);
        li.appendChild(role);
        li.appendChild(annotation);

        educList.appendChild(li);
    });
    educText.appendChild(educList);

    educ.appendChild(educHeader);
    educ.appendChild(hr);
    educ.appendChild(educText);

    educHeader.addEventListener('click', (event) => {
        event.preventDefault();
        const separator = document.getElementsByClassName('content__horizontal')[3];
        if (educText.style.display == 'block') {
            educText.style.display = 'none';
            separator.style.display = 'none';
        } else {
            educText.style.display = 'block';
            separator.style.display = 'block';
        }

        if (educImg.classList.contains('content__header-img__visible')) {
            educImg.classList.remove('content__header-img__visible');
        } else {
            educImg.classList.add('content__header-img__visible');
        }
    });

    hr = document.createElement('hr');
    educ.appendChild(hr);

    rightColumn.appendChild(educ);

    const skills = document.createElement('div');
    skills.classList = 'content__skills';
    const skillsHeader = document.createElement('div');
    skillsHeader.classList = 'content__header';
    const skillsImg = document.createElement('img');
    skillsImg.src = 'images/chevron-right.svg';
    skillsImg.classList = 'content__header-img';
    const skillsTitle = document.createElement('div');
    skillsTitle.classList = 'content__title';
    skillsTitle.textContent = locale.skillsTitle[LANG];
    skillsHeader.appendChild(skillsImg);
    skillsHeader.appendChild(skillsTitle);
    hr = document.createElement('hr');
    hr.classList = 'content__horizontal';
    const skillsText = document.createElement('div');
    skillsText.classList = 'content__text';

    let skillsRow = document.createElement('div');
    skillsRow.classList = 'skills__row';
    Object.entries(locale.skillsHistory[LANG]).forEach(elem => {
        const skillsCell = document.createElement('div');
        skillsCell.classList = 'skills__cell';
        let skillsTitle = document.createElement('div');
        skillsTitle.textContent = elem[0];
        skillsTitle.classList = 'skills__title';
        const skillsContent = document.createElement('div');
        skillsContent.classList = 'skills__content';
        elem[1].forEach(lang => {
            const langName = document.createElement('div');
            langName.classList = 'skills__language';
            langName.textContent = lang.name;
            const langProgress = document.createElement('progress');
            langProgress.classList = 'skills__progress';
            langProgress.max = 100;
            langProgress.value = lang.progress;
            skillsContent.appendChild(langName);
            skillsContent.appendChild(langProgress);
        });
        skillsCell.appendChild(skillsTitle);
        skillsCell.appendChild(skillsContent);
        skillsRow.appendChild(skillsCell);
    });
    skillsText.appendChild(skillsRow);

    skillsRow = document.createElement('div');
    skillsRow.classList = 'skills__row';
    const skillsCell = document.createElement('div');
    skillsCell.classList = 'skills__cell';
    const skillsTitle2 = document.createElement('div');
    skillsTitle2.textContent = locale.skillsTitle2[LANG];
    skillsTitle2.classList = 'skills__title';
    skillsCell.appendChild(skillsTitle2);

    const techologies = [
        { name: 'React', progress: 80, },
        { name: 'Next.js', progress: 80, },
        { name: 'Mobx', progress: 70 },
        { name: 'Effector', progress: 65 },
        { name: 'Node.js', progress: 70, },
        { name: 'SASS', progress: 85, },
        { name: 'Webpack', progress: 70, },
        { name: 'Git', progress: 85, },
        { name: 'PostgreSQL', progress: 80, },
    ];
    const skillsTechnos = document.createElement('div');
    skillsTechnos.classList = 'skills__technos';
    techologies.forEach(techno => {
        const name = document.createElement('div');
        name.classList = 'skills__name';
        name.textContent = techno.name;
        skillsTechnos.appendChild(name);
    });
    skillsCell.appendChild(skillsTechnos);
    skillsRow.appendChild(skillsCell);
    skillsText.appendChild(skillsRow);

    skills.appendChild(skillsHeader);
    skills.appendChild(hr);
    skills.appendChild(skillsText);

    skillsHeader.addEventListener('click', (event) => {
        event.preventDefault();
        const separator = document.getElementsByClassName('content__horizontal')[4];
        if (skillsText.style.display == 'block') {
            skillsText.style.display = 'none';
            separator.style.display = 'none';
        } else {
            skillsText.style.display = 'block';
            separator.style.display = 'block';
        }

        if (skillsImg.classList.contains('content__header-img__visible')) {
            skillsImg.classList.remove('content__header-img__visible');
        } else {
            skillsImg.classList.add('content__header-img__visible');
        }
    });
    rightColumn.appendChild(skills);

    content.appendChild(leftColumn);
    content.appendChild(hrContent);
    content.appendChild(rightColumn);

    const hrFooter = document.createElement('hr');
    hrFooter.classList = 'hr-footer';

    const footer = document.createElement('footer');
    footer.classList = 'footer';
    const textFooter = document.createElement('div');
    textFooter.classList = 'footer__text';
    const footerMsg = document.createElement('div');
    footerMsg.textContent = locale.footerMsg[LANG];
    const footerCpr = document.createElement('div');
    footerCpr.textContent = locale.footerCpr[LANG];
    footerCpr.style = 'margin-left: 8px;';
    textFooter.appendChild(footerMsg);
    textFooter.appendChild(footerCpr);
    footer.appendChild(textFooter);

    container.appendChild(header);
    container.appendChild(hrHeader);
    container.appendChild(content);
    container.appendChild(hrFooter);
    container.appendChild(footer);
})()