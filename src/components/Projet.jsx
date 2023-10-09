import React from "react";
import { Link } from "react-router-dom";

export default function Projet(props){
    return(
        <Link to={`projet/${props.id}`} className="text-center flex flex-col items-center mb-2 cursor-pointer">
            <img className="transition w-full hover:shadow-lg hover:scale-105 hover:contrast-125 aspect-square object-cover" src={props.img} />
            <p className="mt-[5px] text-lg font-bold">{props.text}</p>
        </Link>
    )
}