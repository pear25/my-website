import { useState } from 'react';

const Project = (props) => {

    const [image, setImage] = useState(props.image);

    return (
        <div className="md:w-1/3 w-full rounded-lg">
            <div className={`h-[250px] w-auto border-b-2 border-gray-300`}>
                <img src={image} className={props.dark ? `bg-black rounded-t-lg h-[250px] object-contain w-full` :
                    props.light ? `rounded-t-lg h-[250px] object-cover w-full border-2 border-b-0` : `rounded-t-lg h-[250px] object-cover w-full`} />
            </div>
            <div className={props.light ? `p-4 border-2 rounded-b-lg border-t-0 space-y-4` : `p-4 border-2 rounded-b-lg border-t-0 space-y-4`}>
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