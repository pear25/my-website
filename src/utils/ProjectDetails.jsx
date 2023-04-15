import CH from "../assets/ch_logo.png"
import cat from "../assets/profile.png"
import gym from "../assets/gym.webp"
import cat2 from "../assets/cat.webp"
import path from '../utils/SVGPaths';
import moneed from "../assets/moneed.jpeg"
import hkstp from "../assets/hkstp.jpeg"


const ProjectDetails = [
    {
        image: hkstp,
        cover: true,
        title: `HKSTP Talent Game On`,
        description: `A gamification platform for recruitment process in HKSTP, developed as a web game, where users are prompted to solve puzzle games. Reached 1000+ signups and 5k+ plays in first week of launch`,
        build: ['AWS S3', 'Node.js', 'Vue'],
        site: {
            link: `https://hkstp.careerhackers.io/play`,
            path1: path.webSVG,
            viewbox: '0 0 1024 1024'
        },
        code: {
            link: ``,
            path1: path.codeSVG,

        }
    },
    {
        image: moneed,
        cover: true,
        title: `Moneed`,
        description: `Final year project aiming to integrate a money management interface together with a group transaction bill-splitting feature.`,
        build: ['Reactjs', 'Node.js', 'MongoDB'],
        site: {
            link: `https://hkstp.careerhackers.io/play`, //moneed link tbd
            path1: path.webSVG,
            viewbox: '0 0 1024 1024'
        },
        code: {
            link: `https://www.github.com/pear25/moneed`,
            path1: path.codeSVG,

        }
    },
    {
        image: cat2,
        title: `Pearsonal Page`,
        description: `My current personal page, showcasing some of my projects and more stuff about me. More updates to come soon, stay tuned!!`,
        light: true,
        cover: true,
        build: ['Tailwind', 'Vite'],
        site: {
            link: `https://pearlim.netlify.app`, //moneed link tbd
            path1: path.webSVG,
            viewbox: '0 0 1024 1024'
        },
        code: {
            link: `https://www.github.com/pear25/my-website`,
            path1: path.codeSVG,

        }
    },
    {
        image: CH,
        dark: true,
        title: `NFC Business Card`,
        contain: true,
        description: `Created NFC business cards marketed towards students to expand their network. Reaching 5000 users within 1 week of launch..`,
        build: ['Typescript', 'Nodejs', 'S3', 'Lambda'],
        site: {
            link: `https://hello.careerhackers.io/pierson`,
            path1: path.webSVG,
            viewbox: '0 0 1024 1024'
        },
        code: {
            link: ``,
            path1: path.codeSVG,

        }
    },
    {
        image: gym,
        cover: true,
        title: `Letsgojim Android app`,
        description: `Upcoming project to be finished at May 2023, features a fitness lifestyle app that allows users to track their progress and provide sound recommendations to their fitness goals.`,
        build: ['Android Studio', 'Firebase'],
        site: {
            link: ``,
            path1: path.webSVG,
            viewbox: '0 0 1024 1024'
        },
        code: {
            link: ``,
            path1: path.codeSVG,

        }
    },

]

export default ProjectDetails