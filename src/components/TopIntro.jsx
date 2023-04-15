import gif from '../assets/giphy.gif'
import Typer from './Typer';
import ProjectBlock from './ProjectBlock';
import RecentProjects from '../utils/RecentProjects';


const TopIntro = () => {

    const typerProps = {
        text: ["Welcome to my page 🧤", "Stay cool 🥶 🥶"],
        typingDelay: 1500,
        speed: 50,
        eraseDelay: 4000,
        eraseSpeed: 100,
        colorful: true,
    }



    return (

        <div className="flex flex-col md:flex-row rounded-2xl">
            <div className="flex md:w-1/2 w-full items-center justify-center">
                <div className='max-w-sm overflow-hidden rounded-xl shadow-xl'>
                    <img className="rounded-t-xl" src={gif} />
                    <div className='py-4 '>
                        <span className='p-4'>
                            <Typer text={typerProps.text}
                                typingDelay={typerProps.typingDelay}
                                speed={typerProps.speed}
                                eraseDelay={typerProps.eraseDelay}
                                eraseSpeed={typerProps.eraseSpeed}
                                colorful={typerProps.colorful} /></span>
                    </div>
                </div>

            </div>
            <div className="md:w-2/3 mt-12 md:mt-0 w-full p-4">
                <h1 className="block text-2xl font-semibold border-b border-gray-300 md:pb-2">Welcome to my internet home 😬, please take off your shoes 👞.</h1>

                <div className='mt-4'>
                    <span id="self-intro" className='block'>
                        A fullstack dev currently tinkering with data science and web3 development.
                    </span>
                </div>
                <div className='rounded-xl shadow-xl md:mt-8 p-4'>
                    <span className='block mb-2'>
                        My recent projects 📌:
                    </span>
                    <div className='flex flex-col md:flex-row gap-6 p-4'>
                        {RecentProjects.map((project, i) => {
                            return (
                                <ProjectBlock
                                    key={i}
                                    link={project.link}
                                    dark={project.dark}
                                    logo={project.logo}
                                    objectStyle={project.objectStyle}
                                />
                            )
                        }
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopIntro;