import cybersphere from "../assets/photo/project_cybersphere.jpg"
import poker from "../assets/photo/project_poker.jpg"
import sandrosbooks from "../assets/photo/project_sandrosbooks.jpg"
import unispace from "../assets/photo/project_unispace.jpg"
import fmAnalyzer from "../assets/photo/project_fmAnalyzer.jpg"
import countryInfo from "../assets/photo/project_countryInfo.jpg"
import hexagon from "../assets/photo/project_hexagon2048.jpg"
import clock from "../assets/photo/project_clock_2.png"
import calculator from '../assets/photo/project_calculator_2.png'
import freeTour from '../assets/photo/project_freeTour_2.jpg'
import restCountries from '../assets/photo/project_rest_countries_2.jpg'
import todo from '../assets/photo/project_todo_2.jpg'
import landing from '../assets/photo/project_product_landing_2.jpg'
import generator from '../assets/photo/project_food_generator_2.jpg'


const data_projects = [
    {
        name: 'CyberSphere',
        img: cybersphere,
        url: 'https://tbc-project-tau.vercel.app',
        svg: ["NextJS", "TS", "CSS", "FRAMER MOTION", "NodeJS", "PostgreSQL"],
        github: 'https://github.com/TheLastDance/tbc-project'
    },
    {
        name: 'Poker',
        img: poker,
        url: 'https://texas-holdem-poker.surge.sh',
        svg: ["PixiJS/ReactPixi", "REACT", "TS", "MobX", "SCSS", "JEST", "REACT TESTING LIBRARY"],
        date: '03.05.2023',
        github: 'https://github.com/TheLastDance/Poker'
    },
    {
        name: "Sandro's books",
        img: sandrosbooks,
        url: 'https://sandro-s-book-update.vercel.app/',
        svg: ["REACT", "SCSS", "FRAMER MOTION"],
        github: 'https://github.com/Mind1a/Sandro-s-book-Update'
    },
    {
        name: "UniSpace",
        img: unispace,
        url: 'https://unispace-deploy.surge.sh/#/',
        svg: ["REACT", "Styled Components", "FRAMER MOTION"],
        github: 'https://github.com/Mind1a/UniSpace'
    },
    {
        name: "Football Manager Analyzer",
        img: fmAnalyzer,
        url: 'https://fm-analyzer.netlify.app',
        svg: ["REACT", "TS", "CSS", "NodeJS", "ExpressJS"],
        github: 'https://github.com/TheLastDance/fm-players-analyzer'
    },
    {
        name: 'Hexagon 2048',
        img: hexagon,
        url: 'https://possible-action.surge.sh',
        svg: ["REACT", "SCSS"],
        date: '26.12.2022',
        github: 'https://github.com/TheLastDance/Hexagon_2048_readme'
    },
    {
        name: 'Product landing',
        img: landing,
        url: 'https://www.youtube.com/watch?v=-xRsBkRL2Ik',
        svg: ["REACT", "REDUX/REDUX TOOLKIT", "GRAPHQL", "SCSS"],
        date: '10.10.2022',
        github: 'https://github.com/TheLastDance/David_Khachaturov_Scandiweb_Test'
    },
    {
        name: 'Country Info',
        img: countryInfo,
        url: 'https://countries-info-all.surge.sh',
        svg: ["REACT", "TS", "CSS"],
        github: 'https://github.com/TheLastDance/Sweeft'
    }]

const data_projects2 = [
    {
        name: 'Iliauni',
        url: 'https://david-khachaturov-iliauni-test-task.surge.sh/',
        github: 'https://github.com/TheLastDance/Iliauni'
    },
    {
        name: 'Food generator',
        img: generator,
        url: 'https://thelastdance.github.io/Food-Generator/food%20generator%20project.html',
        svg: ["HTML", "CSS", "JS"],
        date: '08.04.2022',
        github: 'https://github.com/TheLastDance/Food-Generator'
    },
    {
        name: 'Rest Countries',
        img: restCountries,
        url: 'https://thelastdance.github.io/Rest-Countries-Api-Project/',
        svg: ["REACT", "SCSS"],
        date: '19.11.2022',
        github: 'https://github.com/TheLastDance/Rest-Countries-Api-Project'
    },
    {
        name: 'FreeTour travel company',
        img: freeTour,
        url: 'https://thelastdance.github.io/FreeTour/index.html',
        svg: ["HTML", "BOOTSTRAP", "SCSS"],
        date: '14.06.2022',
        github: 'https://github.com/TheLastDance/FreeTour'
    },
    {
        name: 'To-Do list',
        img: todo,
        url: 'https://thelastdance.github.io/ToDo-List/',
        svg: ["REACT", "REDUX/REDUX TOOLKIT", "CSS", "BOOTSTRAP", "FRAMER MOTION"],
        date: '06.08.2022',
        github: 'https://github.com/TheLastDance/ToDo-List'
    },
    {
        name: 'Calculator',
        img: calculator,
        url: 'https://thelastdance.github.io/React-Calculator/',
        svg: ["REACT", "BOOTSTRAP", "SCSS"],
        date: '24.07.2022',
        github: 'https://github.com/TheLastDance/React-Calculator'
    },
    {
        name: '25+5 Clock',
        img: clock,
        url: 'https://thelastdance.github.io/25-5_Clock/',
        svg: ["REACT", "SCSS"],
        date: '26.08.2022',
        github: 'https://github.com/TheLastDance/25-5_Clock'
    },
    {
        name: 'Drum machine',
        url: 'https://thelastdance.github.io/Drum_Machine/',
        date: '22.08.2022',
        github: 'https://github.com/TheLastDance/Drum_Machine'
    },
    {
        name: 'Markdown previewer',
        url: 'https://thelastdance.github.io/Markdown_previewer/',
        date: '19.08.2022',
        github: 'https://github.com/TheLastDance/Markdown_previewer'
    },
    {
        name: 'Random quote machine',
        url: 'https://thelastdance.github.io/Random_quote_machine/',
        date: '15.08.2022',
        github: 'https://github.com/TheLastDance/Random_quote_machine'
    },
    {
        name: 'Bright Lights',
        url: 'https://thelastdance.github.io/BrightLights/index.html',
        date: '19.05.2022',
        github: 'https://github.com/TheLastDance/BrightLights'
    }
]


export { data_projects, data_projects2 };