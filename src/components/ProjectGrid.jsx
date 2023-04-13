import { useEffect } from 'react';
import { useState } from 'react';
import SVGLinks from './SVGLinks';

const ProjectGrid = (props) => {

    const [image, setImage] = useState(props.image);

    useEffect(() => {
        console.log(props)
    }, [props])

    return (
        <div className="rounded-lg w-full">
            <div className={`h-[250px] w-auto border-b-2 border-gray-300`}>
                <img src={image} className={
                    `w-full rounded-t-lg h-[250px] z-30
                    ${props.dark ? `bg-black` : ``}  
                    ${props.light ? `object-contain border-2 ` : ``}
                    ${props.cover ? `object-cover` : ``}
                    ${props.contain ? `object-contain` : ``}
                    `
                }
                />
            </div>
            <div className={`p-4 border-2 rounded-b-lg border-t-0 space-y-4`}>
                <div className="font-semibold text-xl">{props.title}</div>
                <div>
                    {props.description}
                </div>
                {/* <div className='pt-8'>
                    <p className='break-normal'>
                        {props.build.map((b, i) => {
                            return (
                                <word className={`${i > 0 ? `ml-4` : ``} font-mono text-gray-100 bg-slate-700 p-2 rounded-lg text-sm`}>{b}</word>
                            )
                        })}
                    </p>
                </div> */}
                <div className='pt-8 flex justify-start items-center gap-x-4'>
                    <div className='flex'>
                        {props?.site?.link !== "" &&
                            <SVGLinks path1={props?.site?.path1} viewbox={props?.site?.viewbox} link={props?.site?.link} />
                        }
                    </div>
                    <div>
                        {props?.code?.link !== "" &&
                            <SVGLinks path1={props?.code?.path1} viewbox={props?.code?.viewbox} link={props?.code?.link} />
                        }
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
}

export default ProjectGrid;