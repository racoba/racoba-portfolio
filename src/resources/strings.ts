const englishStrings = {
    links: {
        linkedin: "https://www.linkedin.com/in/bruno-racobaldo-76a7131b6/",
        instagram: "https://www.instagram.com/brunoracoba/",
        github: "https://github.com/racoba"
    },
    routes: {
        home: "Home",
        portfolio: "Portfolio",
        about: "About",
        contact: "Contact",
    },
    pages: {
        home: {
            myWorks: "Some of my work"
        },
        about: {
            aboutMe: [
                "I'm a passionate and results-driven Software Engineer currently studying Computer Engineering at SENAI CIMATEC. I have solid experience in full-stack development, working primarily with technologies such as React, Next.js, TypeScript, and Node.js",
                "Throughout my journey, I’ve taken on roles ranging from Front-End Developer to Technical Director at CIMATEC Jr., where I led development teams and managed real-world projects with clients. I also gained industry experience during my internship at FIEB, focusing on systems integration and IT innovation.",
                "Currently, I work at Fetchly Labs, where I build scalable, high-performance applications and contribute to architectural decisions.",
                "I’m constantly learning, whether through courses on machine learning, exploring advanced front-end architectures, or diving into new frameworks. I'm driven by challenges, teamwork, and the opportunity to create impactful tech solutions.",
            ]
        },
        portfolio: {
            myWorks: "My Works",
            works: [
                {
                    name: "Ciclick",
                    link: "https://play.google.com/store/apps/details?id=com.ciclik&hl=en_US&gl=US",
                    image: "https://media.licdn.com/dms/image/sync/v2/D4D27AQFpRrZiePJtJQ/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1711743660348?e=1746558000&v=beta&t=0-qXitZ_sGmdQ1D4eom8_rnrS_8A8Tc0_Mb--1NiTKQ",
                    description: "Be a sustainable consumer, so you earn discounts and compete for exclusive prizes."
                },
                {
                    name: "Necessial",
                    link: "https://www.necessial.com.br/",
                    image: "https://media.licdn.com/dms/image/sync/v2/D4D27AQH8_BswPHZQQA/articleshare-shrink_800/articleshare-shrink_800/0/1726846065587?e=1746561600&v=beta&t=8pyhqt_BW2cx2jRd8-aAAQBqCYsOQCj4VE1M99GbZFA",
                    description: "A natural products marketplace."
                },
                {
                    name: "Worlds",
                    link: "https://tickets.changeworlds.org/",
                    image: "https://image.typedream.com/cdn-cgi/image/width=3840,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/cc802dd2-55e2-443f-aa8d-e598b108b566/2pkonAnMyK3DYgA2b56g4jjViAF_worlds_website_banner_v2_041224_3840x1500.webp",
                    description: "A ticketing platform for events and experiences."
                },
                {
                    name: "MovieSense",
                    link: "https://movie-sense.vercel.app",
                    image: "/images/movie-sense.png",
                    description: "A movie recommendation algorhythm basead on user history."
                },
                {
                    name: "ToDo List",
                    link: "https://racobas-to-do-list.vercel.app/",
                    image: "/images/todolist.png",
                    description: "A simple personalized ToDo list to help with my activities."
                },
            ],
        },
        contact: {
            email: "brunoracobaldo@hotmail.com",
            phone: "+55 71 9 9920-3427",
        }
    },
    components: {
        timeline: {
            steps: [
                {
                    title: 'SENAI CIMATEC - College',
                    description: 'Started studying Computer Engineering with a focus on software architecture, embedded systems, and innovation.',
                    year: 2020,
                    icon: "SchoolIcon"
                },
                {
                    title: 'CIMATEC Jr. (Trainee)',
                    description: 'Joined as a trainee and began developing skills in software development and teamwork.',
                    year: 2020,
                    icon: "WorkIcon"
                },
                {
                    title: 'CIMATEC Jr. Coordinator (Front-End Developer)',
                    description: 'Worked as a Front-End Developer, focusing on web/mobile interfaces and project delivery.',
                    year: 2021,
                    icon: "WorkIcon"
                },
                {
                    title: 'StartApp ONE - Internship',
                    description: 'Worked as a full stack developer, developing mobile apps and websites.',
                    year: 2021,
                    icon: "WorkIcon"
                },
                {
                    title: 'Internship - FIEB',
                    description: 'Began internship in IT and Innovation, working with systems integration and support.',
                    year: 2023,
                    icon: "WorkIcon"
                },
                {
                    title: 'Fetchly Labs',
                    description: 'Joined as Full Stack Developer, working with React, TypeScript, and Next.js on various client projects.',
                    year: 2024,
                    icon: "WorkIcon"
                },
                {
                    title: 'SENAI CIMATEC - College',
                    description: 'Graduated on college.',
                    year: 2025,
                    icon: "SchoolIcon"
                },



            ]
        },
        latestWorkMenu: [
            {
                name: "Worlds",
                link: "https://tickets.changeworlds.org/",
                image: "https://image.typedream.com/cdn-cgi/image/width=3840,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/cc802dd2-55e2-443f-aa8d-e598b108b566/2pkonAnMyK3DYgA2b56g4jjViAF_worlds_website_banner_v2_041224_3840x1500.webp",
                description: "A ticketing platform for events and experiences."
            },
            {
                name: "Ciclick",
                link: "https://play.google.com/store/apps/details?id=com.ciclik&hl=en_US&gl=US",
                image: "https://media.licdn.com/dms/image/sync/v2/D4D27AQFpRrZiePJtJQ/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1711743660348?e=1746558000&v=beta&t=0-qXitZ_sGmdQ1D4eom8_rnrS_8A8Tc0_Mb--1NiTKQ",
                description: "Be a sustainable consumer, so you earn discounts and compete for exclusive prizes."
            },
        ]
    }
}

export default englishStrings;