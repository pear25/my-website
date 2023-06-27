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
            </div>
        </>
    )
}

export default Projects