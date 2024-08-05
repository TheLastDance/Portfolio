import grades from '../assets/photo/grades.jpg';

const timeline_data = [
    {
        header: 'Bootcamp test assignment',
        text: <span>The next stage proved to be a game-changer as I embraced the notion that growth as a developer requires fearlessly taking on challenging tasks and exploring uncharted territories. During this phase, I discovered the Evolution company's announcement of a global TypeScript bootcamp, which instantly captivated my interest. As part of the application process, in two weeks I successfully completed a <a href="https://possible-action.surge.sh" target="_blank" rel="noreferrer">test assignment (Hexagonal 2048)</a> and passed all jest test cases. The assignment involved developing a variant of the popular 2048 game, with the unique twist of using a hexagonal field instead of the traditional square grid. I used server requests to fetch new cells after each move. Additionally, I developed multiple levels of game, and introduced simple transition animations. For further information on the game rules and more, please refer to the <a href="https://github.com/TheLastDance/Hexagon_2048_readme" target="_blank" rel="noreferrer">readme file on GitHub</a>. Long story short, after submitting my solution, I received an exciting message from Evolution indicating that I had successfully passed the selection stage, marking the beginning of a remarkable journey.</span>,
        date: '26.12.2022'
    },
    {
        header: 'Basics of Typescript',
        text: <span>After progressing through the initial selection stage of the Bootcamp, I recognized the importance of being thoroughly prepared. Consequently, I dedicated myself to self-studying the basics of TypeScript, utilizing educational resources available on YouTube. I believe in the value of practical experience in coding, leading me to develop a simple <a href="https://github.com/TheLastDance/static_job_listings" target="_blank" rel="noreferrer">job-listing</a> desktop application.</span>,
        date: '21.01.2023'
    },
    {
        header: 'Evolution Bootcamp',
        text: <span>The highly intensive Bootcamp commenced on January 23, 2023, and spanned an immersive four-month period of learning. Throughout this experience, I not only fortified my understanding of TypeScript but also expanded my proficiency in React, Redux, CSS tools and animations. Moreover, this course exposed me to a wealth of new libraries and technologies, including MobX, RxJS, Canvas/WebGL, BabylonJS, PixiJS, and comprehensive unit testing with Jest and React Testing Library. The Bootcamp presented a multitude of captivating and practical homework assignments, the specifics of which I am unable to share due to privacy policies. Nonetheless, I am pleased to report that I achieved maximum scores on each assignment. Please refer to the provided <a href={grades} target="_blank" rel="noreferrer">grades document</a> for verification. As the program drew to a close, I can confidently affirm that the Bootcamp proved to be an enriching challenge that imparted invaluable experience and significantly expanded my knowledge in web-game development and not only. My newfound expertise instills me with a sense of assurance, and I am eager to apply my enhanced skills in future endeavors.</span>,
        date: '05.05.2023'
    },
    {
        header: "Texas Hold'em Poker",
        text: <span>For the final 1.5 months of the Evolution bootcamp, I juggled both completing homework assignments and working on my final project. The project entailed developing a game, with a particular focus on employing canvas or canvas frameworks and achieving smooth animations. It was recommended to select a gambling game with a casino theme, and I opted to build a classic single-player <a href="https://texas-holdem-poker.surge.sh" target="_blank" rel="noreferrer">Texas Hold'em Poker game</a>. My game allows users to customize the number of bots and starting stack size. Drawing on my prior experience in the gambling industry, I possessed a strong grasp of poker rules, but I went the extra mile to meticulously implement a true-to-life version of the game, ensuring precision and authenticity. The result is a fully responsive game playable on various devices, including smartphones, tablets, and desktop PCs that support the canvas. To realize this project, I utilized a powerful technology stack consisting of TypeScript, React, MobX, ReactPixi, SCSS, Howler, and various testing libraries. For understanding of the game's functionality and features, I highly recommend referring to the project's <a href="https://github.com/TheLastDance/Poker" target="_blank" rel="noreferrer">readme</a>. Finally, I take immense pride in declaring that this project stands as a crowning achievement in my portfolio. I am genuinely proud of the outcome, and it showcases the culmination of my skills and expertise.</span>,
        date: '03.05.2023'
    }
]


export { timeline_data };