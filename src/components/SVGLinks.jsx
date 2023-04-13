const SVGLinks = (props) => {
    return (
        <a href={props.link}
            rel="noopener noreferrer"
            target="_blank"
            className="text-gray-500 hover:text-gray-900">
            <svg className="w-5 h-5" fill="currentColor"
                viewBox={props.viewbox !== undefined ? props.viewbox : `0 0 24 24`} aria-hidden="true">
                <path d={props.path1} />
                <path d={props.path2} /></svg>
            <span className="sr-only">{props.details}</span>
        </a>
    )
}

export default SVGLinks;