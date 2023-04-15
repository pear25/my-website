const ProjectBlock = (props) => {
    return (
        <div className='md:w-1/3 w-full'>
            <a href={props.link} target='_blank' rel='noopener noreferrer'>
                <img src={props.logo} className={`${props.dark ? `bg-black` : ``} object-${props.objectStyle} w-full h-full rounded-xl mb-4`} />
            </a>
        </div>
    )
}

export default ProjectBlock