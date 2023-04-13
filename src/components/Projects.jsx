import Navbar from "./Navbar"
import ProjectGrid from "./ProjectGrid"
import projects from "../utils/ProjectDetails";

const Projects = () => {

    return (
        <>
            <Navbar />
            <div className="md:space-y-8">
                <div className="grid lg:grid-cols-3 gmd:grid-cols-2 gap-x-4 gap-y-4 md:p-12 p-4">
                    {projects.map((project, i) => {
                        return (

                            <ProjectGrid
                                image={project.image}
                                cover={project.cover}
                                contain={project.contain}
                                dark={project?.dark}
                                light={project?.light}
                                title={project.title}
                                build={project.build}
                                description={project.description}
                                site={project.site}
                                code={project.code}
                            />

                        )

                    })}
                </div>
                {/* <div className="flex md:flex-row flex-col justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
                    <Project image={hkstp} title={'HKSTP Talent Game On'}
                        description={'Talent Game On 2K23 is a gamification platform for recruitment process in HKSTP, developed as a web game, where users are prompted to solve puzzle games. '} />
                    <Project image={moneed} title={'Moneed'}
                        description={'Final year project aiming to integrate a money management interface together with a group transaction bill-splitting feature.'} />
                    <Project light={true} image={cat} title={'Pearsonal page'}
                        description={'My current personal page, showcasing some of my projects and more stuff about me. More updates to come soon, stay tuned!!'} />
                </div>
                <div className="flex mt-8 md:mt-0 md:flex-row flex-col justify-center items-center md:space-x-8 space-y-4 md:space-y-0">


                    <Project dark={true} image={CH} title={'NFC Business Card'}
                        description={'Created NFC business cards marketed towards students to expand their network. Reaching 5000 users within 1 week of launch.'} />
                    <Project image={gym} title={'Upcoming Android Studio project'}
                        description={'Upcoming project to be finished at May 2023, features a fitness lifestyle app that allows users to track their progress and provide sound recommendations to their fitness goals. '} />
                </div> */}
            </div>
        </>
    )
}

export default Projects