import SVGLinks from './SVGLinks'

const SVGInfo = [
    {
        link: 'https://www.linkedin.com/in/piersontl/',
        details: 'Linkedin page',
        path1: "M 20.447 20.452 h -3.554 v -5.569 c 0 -1.328 -0.027 -3.037 -1.852 -3.037 c -1.853 0 -2.136 1.445 -2.136 2.939 v 5.667 H 9.351 V 9 h 3.414 v 1.561 h 0.046 c 0.477 -0.9 1.637 -1.85 3.37 -1.85 c 3.601 0 4.267 2.37 4.267 5.455 v 6.286 Z M 5.337 7.433 a 2.062 2.062 0 0 1 -2.063 -2.065 a 2.064 2.064 0 1 1 2.063 2.065 Z m 1.782 13.019 H 3.555 V 9 h 3.564 v 11.452 Z M 22.225 0 H 1.771 C 0.792 0 0 0.774 0 1.729 v 20.542 C 0 23.227 0.792 24 1.771 24 h 20.451 C 23.2 24 24 23.227 24 22.271 V 1.729 C 24 0.774 23.2 0 22.222 0 h 0.003 Z",
        path2: null,
        viewbox: '0 0 24 24'
    },
    {
        link: 'https://www.github.com/pear25',
        details: 'Github page',
        path1: "M 12 0.297 c -6.63 0 -12 5.373 -12 12 c 0 5.303 3.438 9.8 8.205 11.385 c 0.6 0.113 0.82 -0.258 0.82 -0.577 c 0 -0.285 -0.01 -1.04 -0.015 -2.04 c -3.338 0.724 -4.042 -1.61 -4.042 -1.61 C 4.422 18.07 3.633 17.7 3.633 17.7 c -1.087 -0.744 0.084 -0.729 0.084 -0.729 c 1.205 0.084 1.838 1.236 1.838 1.236 c 1.07 1.835 2.809 1.305 3.495 0.998 c 0.108 -0.776 0.417 -1.305 0.76 -1.605 c -2.665 -0.3 -5.466 -1.332 -5.466 -5.93 c 0 -1.31 0.465 -2.38 1.235 -3.22 c -0.135 -0.303 -0.54 -1.523 0.105 -3.176 c 0 0 1.005 -0.322 3.3 1.23 c 0.96 -0.267 1.98 -0.399 3 -0.405 c 1.02 0.006 2.04 0.138 3 0.405 c 2.28 -1.552 3.285 -1.23 3.285 -1.23 c 0.645 1.653 0.24 2.873 0.12 3.176 c 0.765 0.84 1.23 1.91 1.23 3.22 c 0 4.61 -2.805 5.625 -5.475 5.92 c 0.42 0.36 0.81 1.096 0.81 2.22 c 0 1.606 -0.015 2.896 -0.015 3.286 c 0 0.315 0.21 0.69 0.825 0.57 C 20.565 22.092 24 17.592 24 12.297 c 0 -6.627 -5.373 -12 -12 -12",
        path2: null,
        viewbox: '0 0 24 24'
    },
    {
        link: 'mailto:piersonlim@gmail.com',
        details: 'Email @',
        path1: "M 2.003 5.884 L 10 9.882 l 7.997 -3.998 A 2 2 0 0 0 16 4 H 4 a 2 2 0 0 0 -1.997 1.884 Z",
        path2: "m 18 8.118 l -8 4 l -8 -4 V 14 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 8.118 Z",
        viewbox: "0 0 18 18",
        viewbox: '0 0 20 20'
    },

]

const Footer = () => {
    return (


        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">

                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    {/* <img src={cat} className="h-8 mr-3" alt="FlowBite Logo" /> */}
                    <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Pierson Lim</a>. A tailwind and vite project.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">

                        {SVGInfo.map(x => {
                            return (
                                <SVGLinks key={x.details} link={x.link} details={x.details} path1={x.path1} path2={x.path2} viewbox={x.viewbox} />
                            )
                        })}
                        {/* <a href="https://www.linkedin.com/in/piersontl/" className="text-gray-500 hover:text-gray-900">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M 20.447 20.452 h -3.554 v -5.569 c 0 -1.328 -0.027 -3.037 -1.852 -3.037 c -1.853 0 -2.136 1.445 -2.136 2.939 v 5.667 H 9.351 V 9 h 3.414 v 1.561 h 0.046 c 0.477 -0.9 1.637 -1.85 3.37 -1.85 c 3.601 0 4.267 2.37 4.267 5.455 v 6.286 Z M 5.337 7.433 a 2.062 2.062 0 0 1 -2.063 -2.065 a 2.064 2.064 0 1 1 2.063 2.065 Z m 1.782 13.019 H 3.555 V 9 h 3.564 v 11.452 Z M 22.225 0 H 1.771 C 0.792 0 0 0.774 0 1.729 v 20.542 C 0 23.227 0.792 24 1.771 24 h 20.451 C 23.2 24 24 23.227 24 22.271 V 1.729 C 24 0.774 23.2 0 22.222 0 h 0.003 Z" /> </svg>
                            <span className="sr-only">Linkedin page</span>
                        </a>
                        <a href="https://github.com/pear25" className="text-gray-500 hover:text-gray-900">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M 12 0.297 c -6.63 0 -12 5.373 -12 12 c 0 5.303 3.438 9.8 8.205 11.385 c 0.6 0.113 0.82 -0.258 0.82 -0.577 c 0 -0.285 -0.01 -1.04 -0.015 -2.04 c -3.338 0.724 -4.042 -1.61 -4.042 -1.61 C 4.422 18.07 3.633 17.7 3.633 17.7 c -1.087 -0.744 0.084 -0.729 0.084 -0.729 c 1.205 0.084 1.838 1.236 1.838 1.236 c 1.07 1.835 2.809 1.305 3.495 0.998 c 0.108 -0.776 0.417 -1.305 0.76 -1.605 c -2.665 -0.3 -5.466 -1.332 -5.466 -5.93 c 0 -1.31 0.465 -2.38 1.235 -3.22 c -0.135 -0.303 -0.54 -1.523 0.105 -3.176 c 0 0 1.005 -0.322 3.3 1.23 c 0.96 -0.267 1.98 -0.399 3 -0.405 c 1.02 0.006 2.04 0.138 3 0.405 c 2.28 -1.552 3.285 -1.23 3.285 -1.23 c 0.645 1.653 0.24 2.873 0.12 3.176 c 0.765 0.84 1.23 1.91 1.23 3.22 c 0 4.61 -2.805 5.625 -5.475 5.92 c 0.42 0.36 0.81 1.096 0.81 2.22 c 0 1.606 -0.015 2.896 -0.015 3.286 c 0 0.315 0.21 0.69 0.825 0.57 C 20.565 22.092 24 17.592 24 12.297 c 0 -6.627 -5.373 -12 -12 -12" /></svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="mailto:piersonlim@gmail.com" className="text-gray-500 hover:text-gray-900">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 18 18" aria-hidden="true">
                                <path d="M 2.003 5.884 L 10 9.882 l 7.997 -3.998 A 2 2 0 0 0 16 4 H 4 a 2 2 0 0 0 -1.997 1.884 Z" />
                                <path d="m 18 8.118 l -8 4 l -8 -4 V 14 a 2 2 0 0 0 2 2 h 12 a 2 2 0 0 0 2 -2 V 8.118 Z" />
                            </svg>
                            <span className="sr-only">Email</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>



    )
}

export default Footer;