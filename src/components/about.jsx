import Typed from "react-typed";


function About() {
    const lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus blanditiis voluptatem voluptate debitis, eveniet exercitationem nostrum ipsam ducimus dolorum est delectus officia odit magni excepturi molestiae laborum dolore. Eos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus blanditiis voluptatem voluptate debitis, eveniet exercitationem nostrum ipsam ducimus dolorum est delectus officia odit magni excepturi molestiae laborum dolore. Eos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus blanditiis voluptatem voluptate debitis, eveniet exercitationem nostrum ipsam ducimus dolorum est delectus officia odit magni excepturi molestiae laborum dolore. Eos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus blanditiis voluptatem voluptate debitis, eveniet exercitationem nostrum ipsam ducimus dolorum est delectus officia odit magni excepturi molestiae laborum dolore. Eos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus blanditiis voluptatem voluptate debitis, eveniet exercitationem nostrum ipsam ducimus dolorum est delectus officia odit magni excepturi molestiae laborum dolore. Eos! Ea esse rerum aliquid ratione quasi quas dolorem, maiores eligendi molestiae quidem, illum cum sint. Laborum magni optio vero? Ut, rerum dolor?Mollitia at minima aperiam veniam itaque non perferendis necessitatibus, rerum adipisci! Odio maxime fugit, quos, facilis optio vitae, reprehenderit nostrum iure officiis natus harum deleniti perspiciatis libero esse accusantium consequatur?Aperiam officia expedita nobis cum id provident laborum adipisci hic nihil repudiandae eveniet neque, error itaque praesentium voluptatem recusandae inventore. Libero iste quos minus neque! Perferendis sequi assumenda quos necessitatibus?Beatae saepe quos placeat veniam, facilis odit labore nam corporis inventore tempore doloremque eius sint, officiis earum, magnam deserunt optio. Excepturi quis ducimus voluptatum deserunt nobis? Similique saepe recusandae numquam.Iste illum animi iusto doloremque possimus tempore corporis, asperiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus blanditiis voluptatem voluptate debitis, eveniet exercitationem nostrum ipsam ducimus dolorum est delectus officia odit magni excepturi molestiae laborum dolore. Eos!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus blanditiis voluptatem voluptate debitis, eveniet exercitationem nostrum ipsam ducimus dolorum est delectus officia odit magni excepturi molestiae laborum dolore. Eos! a delectus laboriosam consequuntur repudiandae blanditiis nostrum. Deserunt fugit mollitia quisquam eum dolorum, accusantium accusamus dolore sed corrupti incidunt ullam ipsa.Voluptate recusandae accusamus quos optio repellat cum ipsa nobis. Praesentium facere dolorum temporibus? Id libero consequuntur dolores doloribus, distinctio, totam enim facere dolorum veniam ut mollitia optio ipsam laborum molestiae?Quae mollitia iusto blanditiis suscipit in odit aspernatur repudiandae impedit aliquid distinctio quasi maiores laudantium soluta praesentium, animi accusantium eos eligendi voluptate doloribus a minus similique ratione, deserunt vel? Molestiae.Vel praesentium fugiat exercitationem voluptatibus rerum harum nihil iure molestiae molestias, unde amet tempora recusandae dolore ab? Asperiores doloremque amet, magnam minus repudiandae impedit perspiciatis possimus corporis veritatis sint officiis!Quas, repellat debitis voluptatum asperiores temporibus unde vitae Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus blanditiis voluptatem voluptate debitis, eveniet exercitationem nostrum ipsam ducimus dolorum est delectus officia odit magni excepturi molestiae laborum dolore. Eos! delectus doloribus Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus blanditiis voluptatem voluptate debitis, eveniet exercitationem nostrum ipsam ducimus dolorum est delectus officia odit magni excepturi molestiae laborum dolore. Eos! veritatis error numquam laborum, ea dicta quam deleniti possimus accusantium officia vero odit explicabo iure reprehenderit mollitia? Asperiores, natus tempora?Inventore doloremque vitae totam blanditiis! Cumque aspernatur corrupti consectetur accusamus autem inventore provident perferendis aliquam impedit ab nulla quod magnam voluptates facilis beatae, ut, porro quasi culpa praesentium atque facere!"

    return (
        <div id="About" className="about">
            <div className="about_2">
                <div className="photoDiv">
                    <p>{lorem.replace(/\s|\?/gi, "")}</p>
                </div>
                <div className="about_text">
                    <div className="autotyping">
                        <h2>Hello, I am <span>David</span></h2>
                        <Typed
                            strings={[
                                "Web",
                                "",
                                "Web developer"
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                        />
                    </div>
                    <div className="my_story">
                        <p>
                            I am from Tbilisi, Georgia. With 3+ years of experience in web development, I have honed my skills in React, Node.js, PostgreSQL, unit testing and more.
                            I am enthusiastic about leveraging my technical expertise and analytical mindset to create innovative web solutions
                            and contribute effectively to dynamic development teams. From a young age, I had a passion for computers, exploring Windows OS, and enjoying computer games.
                            My affinity for logical subjects over theoretical ones led me to a deep interest in algorithms and problem-solving so development always was dream job for me.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;