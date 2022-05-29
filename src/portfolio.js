
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "May says Hi ",
  title: "Bonjour, je suis Mayolie",
  subTitle: emoji("Forte de 5 ans d'expériences en projets digitaux, je suis prête à relever de nouveau défis ! Actuellement digital analyst spécialisé dans la collecte de donnée et l'a/b testing et surtout Data- driven, j'utilise la donnée pour prendre les meilleurs décisions possibles au quotidien."),
  subTitle2:"Les outils Adtech - Martech, le JavaScript et la Data n'ont aucun secret pour moi. ",
  resumeLink: "https://www.cjoint.com/doc/22_05/LEDqXEQYOM7_Mayolie-Coulibaly-CV-CDP-2022.pdf"
};

// Your Social Media Links

const socialMediaLinks = {

  github: "",
  linkedin: "https://www.linkedin.com/in/mayolie-coulibaly/",
  gmail: "mayoliecoulibaly@gmail.com",
  gitlab: "",
  facebook: "",
  twitter:"https://twitter.com/MayolieC"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Mes compétences",
  subTitle: "4 ans d'expériences en projets digitaux agiles ",
  skills:
  [
    emoji("⚡ Un profil technique orientée business et client"),
    emoji("⚡ Capacité d’analyse & data driven"),
    emoji("⚡ Organisation et communication sont mes atouts majeurs ")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github-square"
    },
    {
      skillName: "excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "trello",
      fontAwesomeClassname: "fab fa-trello"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "confluence",
      fontAwesomeClassname: "fab fa-confluence"
    },
    {
      skillName: "inVision",
      fontAwesomeClassname: "fab fa-invision"
    },
    {
      skillName: "analytics",
      fontAwesomeClassname: "fas fa-chart-line"
    }
    
  ]
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Grenoble École de Management",
      logo: require("./assets/images/gemlogo.png"),
      subHeader: "Master Manager des Systèmes d'Information et du Numérique",
      duration: "September 2019 - Septembre 2021",
      desc: "Mémoire : 'La personnalisation de l'expérience client et les donnés personnelles'",
      descBullets: []
    },
    {
      schoolName: "EFREI x Université d'Evry Val d'Essonne ",
      logo: require("./assets/images/efreixevry.png"),
      subHeader: "Licence professionnelle E-commerce et Marketing Numérique",
      duration: "September 2018 - Septembre 2019",
      desc:
        "Mémoire : 'Comment une entreprise arrive-t-elle à prédire les besoins de ses consommateurs ?' ",
      descBullets: []
    },
    {
      schoolName: "IUT d'Orsay",
      logo: require("./assets/images/iutorsay.png"),
      subHeader: "DUT Informatique",
      duration: "September 2016 - Septembre 2018",
      desc:
        "Mémoire sur l'agilité  ",
      descBullets: []
    }
  ]
};
// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Digital analyst - Tracking & CRO",
      company: "La Française des Jeux ",
      companylogo: require("./assets/images/fdjlogo.png"),
      date: "Septembre 2019 – Maintenant",
      desc:
        " ",
      descBullets: [
        "Responsable de l'a/b testing sur le site fdj.fr et l'application mobile FDJ",
        "Analyse de résultats et du comportement d’achat par le biais de différentes approches analytiques (AT Internet, My feel back,Reporting interne )", 
        "Gestion d'outils Martech et Adtech :Kameleoon, AT Internet, Eulerian et Tag Commander"
      ]
    },
    {
      role: "E-merchandiser",
      company: "Pierre et Vacances Center Parcs",
      companylogo: require("./assets/images/CPlogo.png"),
      date: "Septembre 2018 – Septembre 2019",
      desc:
        "",
      descBullets: [
      "En charge de l'a/b testing sur le site Centerparcs.fr", 
      "Animation commerciale :Contrôle de la fiabilité et de la qualité des informations intégrées sur le site web", 
      "Création de landing pages spécifiques et adaptées à la source de trafic" 
      ]
    },
    {
      role: "Ingénieur en développement web",
      company: "Groupama Support et Services",
      companylogo: require("./assets/images/g2slogo.png"),
      date: "Septembre 2017 - Septembre 2018",
      desc:
        " ",
      descBullets: [
        "Maintenance de Groupama.fr",
        "Programmation :JAVA,JSP,JavaScript, CSS, HTML, Liferay", 
        "Recette et tests de non régression"
      ]
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "ZDFjOTc1ZGNiZGNjMTc1ZmI3OGEwMjZlMzE4NzM5MjMxYTQxOTU5Yw==",
  githubUserName: "GitMay1398",
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projets 👩🏾‍💻 ",
  subtitle: "Les projets auxquels j'ai pu participés",
  projects: [
    {
      image: require("./assets/images/logo_gate13.png"),
      titleProjet:"Gate 13",
      link: "", 
      imageAlt: "Gate 13,  challenge 6 mois",
      projectDescription:"Challenge de 6 mois pour créer un projet de toute pièce </br> Gate 13 est un site proposant à ses utilisateurs des voyages à bas prix. Gate 13 trouve les meilleurs et destinations pour partir à petit prix."
    },
    {
      image: require("./assets/images/Article_1_crea_v2.png"),
      titleProjet:"Mentorat Article 1",
      link: "", 
      imageAlt: "Mentorat Article 1",
      projectDescription:"Article 1 œuvre pour une société où l’orientation, la réussite dans les études et l’insertion professionnelle ne dépendent pas des origines sociales, économiques et culturelles ; pour une société où la réussite passe par le lien social et l’engagement citoyen. </br> Mentorat d'un étudiant post-bac, apport de soutien et motivation "
   
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Parcours académique 🏆 "),
  subtitle: "Mes diplômes ",

  achivementsCards: [
    {
      title: "Master Manager des Systèmes d'Information et du Numérique",
      subtitle: "Grenoble École de Management, 2019-2021",
      image:"https://i.ibb.co/QcxFPGW/grenoble-logo.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        
      ]
    },
    {
      title: "Licence E-commerce et Marketing Numérique",
      subtitle: "EFREI x Université d'Évry Val d'Essonne, 2018-2019",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "DUT Informatique",
      subtitle: "IUT d'Orsay, 2016-2018",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }  
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Me Contacter ☎️"),
  subtitle: "À la recherche d'un nouveau talent ? Je suis à l'écoute.",
  number: "Je suis joiniable à l'adresse suivante :",
  email_address: "mayoliecoulibaly@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "MayolieC"//Replace "twitter" with your twitter username without @
  
};
export { educationInfo, workExperiences, greeting, socialMediaLinks, skillsSection, techStack,  bigProjects, openSource, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
