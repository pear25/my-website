import moneed from '../assets/moneed.jpeg'

const Project = () => {
    return (
        <div className="md:w-1/3 w-full rounded-lg">
            <div className="h-[250px] w-auto border-b-2 border-gray-300">
                <img src={moneed} className="rounded-t-lg h-[250px] object-cover w-full" />
            </div>
            <div className="p-4 border-2 rounded-b-lg border-t-0 space-y-4">
                <div className="font-semibold text-xl">Moneed</div>
                <div>
                    Final year project aiming to integrate a money management interface together with a group transaction bill-splitting feature.
                </div>
                <div>

                </div>
            </div>

        </div>
    );
}

export default Project;