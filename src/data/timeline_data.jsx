const timeline_data = [
    {
        header: 'My road was started',
        text: <span>My first step in our field happened in 22.08.2021 and it was "FreeCodeCamp Responsive Web Design" course. I passed it on 15.09.2021 with all projects that it has. If be honest, my first html/css projects was not perfect, some of them were without any responsivity and bad designed, but after that course I watched plenty tutorials and practice as much as I could, so now I am much more self-confident in that part.</span>,
        date: '15.09.2021',
    },
    {
        header: 'Introduction to algorithms',
        text: <span>After passing my previous course I started other one, which called "CodeHS Introduction to Computer Science in JavaScript (Golden)". That course has it's own syntax, which is very close to JS but upgraded for begginers. I started that course on 18.09.2021 and finished it on 26.10.2021. I remember that I spent a lot of nerve cells on that course, that was really tough one, also challenges were much more harder than in introduction videos of sections. So sometimes I spent some days to finish algorithms. But it was worth it, after that course I started to think like a developer and built my own <a href="https://codehs.com/sandbox/thelastdance/shake-with-minons/run" target="_blank" rel="noreferrer">GAME</a> with CodeHS syntax, also I draw minions models by myself using that syntax.  </span>,
        date: '26.10.2021'
    },
    {
        header: 'VS Code and first web pages',
        text: <span>Then I realize that I need to learn VS Code, because code writing in codepen was a little bit painful and took a long time. So I started to watch some tutorials on youtube. Next few days I spent to test many things in VS Code and choose-download extensions for it. When I realized that I am familiar with VS Code, I chose some website templates on Figma for begginers and made <a href="https://thelastdance.github.io/Porten/Porten.html" target="_blank" rel="noreferrer">Porten</a> and <a href="https://thelastdance.github.io/konstruct/Konstrukt.html" target="_blank" rel="noreferrer">Konstruct</a> pages with full responsivity using html/css. </span>,
        date: '24.11.2021'
    },
    {
        header: 'FreeCodeCamp Javascript course',
        text: <span> 28.11.2021 I started "FreeCodeCamp JavaScript Algorithms and Data Structures" course. I was trying to not hurry and understand each method. At the beggining I was confused sometimes, but everything was changed when I started to scripting. By practise I understand and learn much more than with reading theory. I also passed "Intermediate Algorithm Scripting" section two times just for fluent understanding, at first time I thought that projects of this course would be very tough, but at the second time I realize that it wouldn't be as tough as I thought. Finally I wrote algorithms for all projects of this course very easily and you can check them in my <a href="#Certifications"> Certifications </a> section. I am grateful to this course. Because of it I started to love writing algorithms and logic.   </span>,
        date: '01.03.2022'
    },
    {
        header: 'Javascript DOM methods',
        text: <span>Because, previous course had only JS algorithms part I realized that I need knowledge about DOM methods. At this time I already had an idea about my next project, so I found "Javascript and the DOM" course at udacity and started it. During that course I also watched some tutorials and tested things in JS. After 2 weeks I finished it and earned basic knowledge that I needed.So I was ready to complete my new idea now.</span>,
        date: '22.03.2022'
    },
    {
        header: 'Food generator project',
        text: <span> Despite the fact that this <a href="https://thelastdance.github.io/Food-Generator/food%20generator%20project.html" target="_blank" rel="noreferrer">project</a> is one of my first, it's my favourite one. And in my opinion, the best one, because all other projects are part of courses or some practising/testing, and only that has my own idea, also I think it's the most useful one. I wrote this project using only html,css and JS. If be honest, I spent much time to make database for this project, because I didn't find any suitable free API and I also wanted to add in the database georgian food with nice images to make this project useful for me and my friends. You just need to select ingredients <u>(dont forget to add oil)</u> and programm will generate dishes for you. </span>,
        date: '08.04.2022'
    },
    {
        header: 'CodeWars',
        text: <span> I actively started to use CodeWars resource on 14.04.2022, because I really missed algorithms and realized that I need a little workout on my regular expression skills. In 2.5 weeks I passed much tasks (kata's) and level upped my rank to 5 kyu.   </span>,
        date: '02.05.2022'
    },
    {
        header: 'BrightLights project',
        text: <span> Then I have worked on another <a href="https://thelastdance.github.io/BrightLights/index.html" target="_blank" rel="noreferrer">project</a> , the main aim of this project was to train some webdev techniques: like drop-down navbar on mouseover, burger-menu, sliders and absolute positioning. Like always, I just found suitable template on Figma and made a small changes depending on my tasks. I wanted to make everything by myself, without any tutorial help. I also had an idea to try make slider with changable css property display to none using JS, of course it's not the best way to write slider, but at that moment I was excited to try this.    </span>,
        date: '19.05.2022'
    },
    {
        header: 'FreeCodeCamp libraries course review',
        text: <span> Next few days I spent to get general information about frameworks and libraries that I was going to learn in future months. So on 27.05.2022 I started "FreeCodeCamp Front End Development Libraries" course, and honestly I am not very satisfied with that one, because information in that course is very old and incomplete. So after each section I was able to find additional course on youtube to get more modern and complete information about each library. </span>,
        date: '27.05.2022'
    },
    {
        header: 'Bootstrap section',
        text: <span> I have finished Bootstrap freeCodeCamp section during one day (on 27.05.2022) and of course I understood this knowledge was not enough. Then I chose a really great <a href="https://www.youtube.com/watch?v=-qfEOE4vtxE" target="_blank" rel="noreferrer">video course</a> about Bootstrap on FreeCodeCamp's youtube channel, which I highly recommend. So for next 4-5 days I was learning Bootstrap css library from that course. I understood that I can make much things, without using any JS code and for that I just need to a little bit customize bootstrap templates.</span>,
        date: '02.06.2022'
    },
    {
        header: 'Jquery and SASS + real project',
        text: <span> I passed basic Jquery section on FreeCodeCamp, but didn't go too deep. I think Jquery isn't actual in 2022 year, because you can do the same things using just vanilla JS now. Then I passed SASS section and for better knowledge also watched <a href="https://www.youtube.com/watch?v=_a5j7KoflTs" target="_blank" rel="noreferrer">this video course </a>. After that I realized that I am ready to try myself and write new project using libraries that I already learned (Bootstrap and SASS). At that time a had an option to make a real project for my friend, she has her own tour-company in Tbilisi. So I started to make <a href="https://thelastdance.github.io/FreeTour/index.html" target="_blank" rel="noreferrer">website</a> for this company using only html, Bootstrap and SASS. I had an aim to try do this without any JS, just to test myself in Bootstrap. I made this site very fast and in future we will just add text content to this website. </span>,
        date: '14.06.2022'
    },
    {
        header: 'React section + calculator project',
        text: <span> On 15.06.2022 I started to learn React framework from FreeCodeCamp and I have done it in one week, of course I realized that it couldn't be enough again, and I understood that react section is also very old there, because using functional components is much easier than class components, so I decided to learn React hooks to start using functional components and be familiar with both. I found one youtube <a href="https://www.youtube.com/watch?v=9KJxaFHotqI" target="_blank" rel="noreferrer">course</a> about hooks on russian language (I know russian, so usually I use several languages for googling). After good understanding of the most needful hooks I started to practise. At some time I understood that I am ready to make project from FreeCodeCamp's course and I chose the most hard one - <a href="https://thelastdance.github.io/React-Calculator/" target="_blank" rel="noreferrer">Calculator</a>. The most difficult things in that project were dealing with numbers in JS, like rounding them, also I worked much on regular expressions to avoid bugs in calculation display with many operators, dots and so on.</span>,
        date: '24.07.2022'
    },
    {
        header: 'Redux and Framer Motion + todo list',
        text: <span> Then I started to learn Redux and it seemed a little difficult to me, I didn't understand it entirely, but again I realized that FreeCodeCamp has an old information, so I chose another <a href="https://www.youtube.com/watch?v=zrs7u6bdbUw" target="_blank" rel="noreferrer">youtube tutorial</a> about Redux/Redux Toolkit, honestly I didn't like that one, because tutor was in a little bit rush, but anyway I understrand many things and made his project. So then I passed <a href="https://www.youtube.com/watch?v=C0fBnil_Im4&list=PLiZoB8JBsdznQv3kAEvTzDP2qjaUI8Vo7">second tutorial</a> on russian language. After these courses I used only Redux Toolkit, because it's just easier and more modern. During this time I also learned basics of Framer Motion animation library and finally made a simple <a href="https://thelastdance.github.io/ToDo-List/" target="_blank" rel="noreferrer">to-do list project</a> using, Redux toolkit, React, Framer Motion and Bootstrap, also I saved all todo's in localStorage using Redux persist library. </span>,
        date: '06.08.2022'
    },
    {
        header: 'FreeCodeCamp libraries projects',
        text: <span> In next some days I finished the rest of the freeCodeCamp's course. Then I started to make other FreeCodeCamp's projects, honsetly all of them seemed easy to me. I spent 2-3 days on each of these projects and you can check them in <a href="#Projects">projects section</a>   </span>,
        date: '26.08.2022'
    }
]


export { timeline_data };