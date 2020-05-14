
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "May says Hi ",
  title: "Bonjour, je suis Mayolie",
  subTitle: emoji("Jeune diplômée de Grenoble École de Management 🚀 Après 4 ans d'alternance dans différentes entreprises je suis à la recherche de mon premier CDI !"),
  subTitle2:"Les outils Adtech - Martech, le JavaScript et la Data n'ont aucun secret pour moi. ",
  resumeLink: "CV A AJOUTER "
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
  subTitle: "UN PROFIL BUSINESS & TECHNIQUE ",
  skills: [
    emoji("⚡ blablabla 1  "),
    emoji("⚡ blablabla 2"),
    emoji("⚡ blablabla 3")
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
      skillName: "excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Commander Act",
      fontAwesomeClassname: "fad fa-hexagon"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
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
  githubConvertedToken: "MjRmMGQ2YTgwMmNhNDFkMWVjMmRhNmY5YjY3ZDA1MTUwNzVjMzQ4OQ==",
  githubUserName: "GitMay1398",
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Les projets auquelles j'ai pu participés",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Mes diplômes et certifications",

  achivementsCards: [
    {
      title: "Master Manager des Systèmes d'Information et du Numérique",
      subtitle: "Grenoble École de Management, 2019-2021",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
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
      url: "",
      title: "",
      description: ""
    },
    {
      url: "",
      title: "",
      description: ""
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: "",

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
      image:""
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: "",
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: ""
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
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
