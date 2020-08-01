// Your Summary And Greeting Section
/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Ananth",
    title: "Hi all, I'm Ananth",
    subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Machine learning models, Web and Mobile applications with Python / JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
    resumeLink: "https://drive.google.com/file/d/1OfWVsJVVbT0ledlZ3J3PLmwOIaISC1g6/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

    github: "https://github.com/AnanthKumarVasamsetti",
    linkedin: "https://www.linkedin.com/in/ananth-kumar-60bb7392/",
    gmail: "ananth.vasamsetti9502@gmail.com"
        // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
    title: "What Do I do?",
    subTitle: "Develope production-grade softwares with CI/CD, explore various tech stacks and architectures. Build and deploy machine learning models for various deep lerning and stastical usecases.",
    skills: [
        emoji("⚡ Develope and deploy ML models like Recommender systems, Natural language processing user-interface, etc.,"),
        emoji("⚡ Develope interactive user interfaces for web and mobile applications"),
        emoji("⚡ Develope highly scalable distirubted systems on client-server architectire"),
        emoji("⚡ Integration of third party services such as AWS/ AZURE/ DOCKER"),
        emoji("⚡ Apart from the cited I have experience in frameworks and libraries like Tensorflow, Keras, Pandas, ExpressJs, AngularJs, Bootstrap."),
        emoji("⚡ Experineced in some of the testing frameworks like Junit, jasmine and mocha.")
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "HTML5",
            fontAwesomeClassname: "fab fa-html5",
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
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "Java",
            fontAwesomeClassname: "fab fa-java"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "MongoDB",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        },
        {
            skillName: "git",
            fontAwesomeClassname: "fab fa-github"
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "DS & Algos",
            progressPercentage: "85%"
        },
        {
            Stack: "Full Stack development", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Machine Learning and Deep learning",
            progressPercentage: "80%"
        }
    ]
};


// Your top 3 work experiences

const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "Software Engineer",
            company: "Kony",
            companylogo: require("./assets/images/kony.png"),
            date: "Dec 2015 – June 2018",
            desc: "Developer for Mobile and web application with cross-platform functionality",
            descBullets: [
                "Designed and developed Employee self service suite of applications with cross-platform compatibility.",
                "Designed an asynchronous data fetching framework to solve concurrency issues which fixed many long-standing intermittent issues.",
                "Reduced network latency to 0 - 2ms from 10ms using effective in memory management."
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Kony",
            companylogo: require("./assets/images/kony.png"),
            date: "June 2018 – March 2019",
            desc: "Engineer for Kony IQ - CTO labs",
            descBullets: [
                "Early member of KonyIQ R&D team of 6 engineers from all over the company.",
                "Designed and developed layout recommendation system (Patented) with an accuracy of 82.74%.",
                "Designed and developed KonyIQ’s chatbot and search engine.",
                "Developed component generator system to avoid duplicate layouts."
            ]
        },
        {
            role: "Software engineer IC-2",
            company: "ServiceNow",
            companylogo: require("./assets/images/servicenow.png"),
            date: "March 2019 – Present",
            desc: "Engineer for ITBM Tool",
            descBullets: [
                "Working on PPM group of ITBM.",
                "Enhancing project management tool of ServiceNow’s ITBM team with features like smart project suggestions, adding contextual search capabilities",
                "Building virtual agents to assist in the project management workflow",
                "Handling Client issues related to PPM"
            ]
        },
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "AnanthKumarVasamsetti", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME OF MY NOTABLE CONTRIBUTIONS ARE FOUND HERE.",
    projects: [{
        image: require("./assets/images/konyquantum.png"),
        link: "https://docs.kony.com/konylibrary/visualizer/visualizer_user_guide/Content/Kony_IQ.htm"
    }]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

    title: emoji("Achievements And Recongnitions 🏆 "),
    subtitle: "Achievements, Award Letters and Some Cool Stuff that I have done !",

    achivementsCards: [{
            title: "CEO Award",
            subtitle: "Highest engineering award for innovation and development. For developing a recommendation system and developer chatbot.",
            image: require("./assets/images/award.png"),
            footerLink: [{
                name: "View recommendation system in action",
                url: "https://docs.kony.com/konylibrary/visualizer/visualizer_user_guide/Content/Kony_IQ.htm"
            }]
        },
        {
            title: " 2nd in Hackathon",
            subtitle: "Developed project diagnostics architecture for providing immediate hotfixs",
            image: require("./assets/images/servicenow2.png"),
            footerLink: []
        },

        {
            title: "Mission RnD Alumni",
            subtitle: "Selected from a huge pool of students(Top 1%) from state wide for Mission RnD program. Receviced training in advanced programming from industry experts of Microsoft, Oracle, Amazon, etc.,",
            image: require("./assets/images/missionrnd.png"),
            footerLink: []
        },
        {
            title: "Microsoft student partner",
            subtitle: "Selected as a Microsoft Student Partner(MSP) for my college and held various developer events. Also made some of my fellow students as Microsoft Student Associates.",
            image: require("./assets/images/microsoft.png"),
            footerLink: []
        },
    ]
};


const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+91-9491957763",
    email_address: "ananth.vasamsetti9502@gmail.com"
};
// Blogs Section

const blogSection = {

    title: "",
    subtitle: "",

    blogs: []
};

// Talks Sections

const talkSection = {
    title: "",
    subtitle: "",

    talks: []
};

// Podcast Section

const podcastSection = {
    title: "",
    subtitle: "",
    // Please Provide with Your Podcast embeded Link
    podcast: []
};

//Twitter Section

const twitterDetails = {
    userName: "ananth9502" //Replace "twitter" with your twitter username without @
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };