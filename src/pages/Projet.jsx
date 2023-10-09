import React from "react";
import { useParams } from 'react-router-dom';

import { Carousel } from "@material-tailwind/react";


//Datas :
import projects from "../data/projects";

export default function Projet() {
    let { id } = useParams();
    const [theProject, setTheProject] = React.useState({ id: 1, name: "", date: "", titre1: "", description: "", technologie: "", thumbnail:"", images: [] });

    React.useEffect(() => {
        setTheProject(projects.find(project => project.id == id));
    }, []);
    return (
        <div className="md:mx-[10vw] mx-[2vw] ">
            <h1 className="text-4xl text-[#002233] mt-[5vh]">{theProject.name}</h1>
            <p className="italic">{theProject.date}</p>
            <p className="mt-2">{theProject.titre1}</p>

            <div className="mt-[5vh] grid lg:grid-cols-2 gap-4">
                <div>
                    <Carousel
                        className=""
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                                />
                            ))}
                            </div>
                        )}
                    >
                        {theProject.images.map((el, i) => (
                            <img key={i}
                                src={el}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        ))}
                        
                    </Carousel>
                    <p dangerouslySetInnerHTML={{ __html: theProject.technologie.replace(/\n/g, "<br>") }}></p>
                </div>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: theProject.description.replace(/\n/g, "<br>") }}></p>
                </div>
            </div>
        </div>
    );
}