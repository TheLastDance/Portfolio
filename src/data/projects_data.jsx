import poker from "../assets/photo/project_poker.jpg"
import hexagon from "../assets/photo/project_hexagon2048.jpg"
import clock from "../assets/photo/project_clock_2.png"
import calculator from '../assets/photo/project_calculator_2.png'
import freeTour from '../assets/photo/project_freeTour_2.jpg'
import restCountries from '../assets/photo/project_rest_countries_2.jpg'
import todo from '../assets/photo/project_todo_2.jpg'
import landing from '../assets/photo/project_product_landing_2.jpg'
import generator from '../assets/photo/project_food_generator_2.jpg'

// function svgFilter(){

// }

const data_projects = [{
    name: 'Poker',
    img: poker,
    url: 'https://texas-holdem-poker.surge.sh',
    svg: ["PixiJS/ReactPixi", "REACT", "TS", "MobX", "SCSS", "JEST", "REACT TESTING LIBRARY"],
    date: '03.05.2023',
    github: 'https://github.com/TheLastDance/Poker'
},
{
    name: 'Hexagon 2048',
    img: hexagon,
    url: 'https://possible-action.surge.sh',
    svg: ["REACT", "SCSS"],
    date: '26.12.2022',
    github: 'https://github.com/TheLastDance/Hexagon_2048'
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
    name: 'Rest Countries',
    img: restCountries,
    url: 'https://thelastdance.github.io/Rest-Countries-Api-Project/',
    svg: ["REACT", "SCSS"],
    date: '19.11.2022',
    github: 'https://github.com/TheLastDance/Rest-Countries-Api-Project'
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
    name: 'Food generator',
    img: generator,
    url: 'https://thelastdance.github.io/Food-Generator/food%20generator%20project.html',
    svg: ["HTML", "CSS", "JS"],
    date: '08.04.2022',
    github: 'https://github.com/TheLastDance/Food-Generator'
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
    name: '25+5 Clock',
    img: clock,
    url: 'https://thelastdance.github.io/25-5_Clock/',
    svg: ["REACT", "SCSS"],
    date: '26.08.2022',
    github: 'https://github.com/TheLastDance/25-5_Clock'
},
{
    name: 'FreeTour travel company',
    img: freeTour,
    url: 'https://thelastdance.github.io/FreeTour/index.html',
    svg: ["HTML", "BOOTSTRAP", "SCSS"],
    date: '14.06.2022',
    github: 'https://github.com/TheLastDance/FreeTour'
}]

const data_projects2 = [
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
        svg: [<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="-52.5 0 361 361" ><title>HTML</title><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26" /><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529" /><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB" /><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" /><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF" /></svg>, <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="-52.5 0 361 361"><title>CSS</title><path d="M127.844 360.088L23.662 331.166.445 70.766h255.11l-23.241 260.36-104.47 28.962z" fill="#264DE4" /><path d="M212.417 314.547l19.86-222.49H128V337.95l84.417-23.403z" fill="#2965F1" /><path d="M53.669 188.636l2.862 31.937H128v-31.937H53.669zM47.917 123.995l2.903 31.937H128v-31.937H47.917zM128 271.58l-.14.037-35.568-9.604-2.274-25.471h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58z" fill="#EBEBEB" /><path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0zM106.901 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9V0zM153.319 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32V0z" /><path d="M202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576z" fill="#FFF" /></svg>, <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z" /><title>JS</title><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330" /></svg>],
        date: '19.05.2022',
        github: 'https://github.com/TheLastDance/BrightLights'
    },
    {
        name: 'Konstruct',
        url: 'https://thelastdance.github.io/konstruct/Konstrukt.html',
        date: '24.11.2021',
        github: 'https://github.com/TheLastDance/konstruct'
    },
    {
        name: 'Porten',
        url: 'https://thelastdance.github.io/Porten/Porten.html',
        date: '18.11.2021',
        github: 'https://github.com/TheLastDance/Porten'
    },
    {
        name: 'Shake with minions CodeHS final project',
        url: 'https://codehs.com/sandbox/thelastdance/shake-with-minons/run',
        date: '25.10.2021'
    },
    {
        name: 'BreakOut CodeHS',
        url: 'https://codehs.com/sandbox/thelastdance/breakout/run',
        date: '20.10.2021'
    }
]


export { data_projects, data_projects2 };