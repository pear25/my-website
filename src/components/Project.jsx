import { useState } from 'react';

const Project = (props) => {

    const [image, setImage] = useState(props.image);

    return (
        <div className="md:w-1/2 lg:w-1/4 w-full rounded-lg">
            <div className={`h-[250px] w-auto border-b-2 border-gray-300`}>
                <img src={image} className={

                    `w-full rounded-t-lg h-[250px]
                    ${props.dark ? `bg-black` : `object-cover`}  
                    ${props.light ? `object-cover border-2 ` : `object-contain`}
                    `

                    // w-full 
                    // ${props.light ? `object-cover border-2 border-b-0` : `object-cover`}`} 
                }
                />
            </div>
            <div className={`p-4 border-2 rounded-b-lg border-t-0 space-y-4`}>
                <div className="font-semibold text-xl">{props.title}</div>
                <div>
                    {props.description}
                </div>
                <div>

                </div>
            </div>

        </div>
    );
}

export default Project;