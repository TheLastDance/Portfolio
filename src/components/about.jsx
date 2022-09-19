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
                                "Junior",
                                "",
                                "Junior frontend",
                                "",
                                "Junior frontend developer"
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                        />
                    </div>
                    <div className="my_story">
                        <p>I am from Tbilisi, Georgia and I really enjoy coding. From childhood I was very close to PC's, I liked to learn things about windows OS and play computer games.
                            In 2020 year I was graduated from the Ilia State University, Tbilisi with a degree of buisness administration. During my university days, I always preferred mathematical and logic subjects than a theoretical ones.
                            I liked to think about algorithms of mathematical tasks. And because I am little bit introvert person and prefer to work remotly, one day I decided to try and learn frontend developement.
                            After half year of studying I understood that I enjoy it and I want to improve myself in that field. For now I am learning frontend development for more year and I am ready to start my first job.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;