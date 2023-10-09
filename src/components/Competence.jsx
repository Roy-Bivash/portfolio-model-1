import React from "react";

export default function Competances(props){
    return(
        <div className="mx-[10px] flex flex-col items-center shadow-lg border py-2 rounded-xl">
            <img src={props.img} className="transition w-[70%] aspect-square object-contain" />
            <p className="mt-[15px] text-lg text-center">{props.nom}</p>
        </div>
    )
}