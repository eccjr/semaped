import React from "react";
import "./equipe.css";

export function SwiperItem({foto, nome, cargo}) {
    return (
        <>
            <div className="slider-item">
                <img src={`./${foto}`}  alt="equipe" />
                <h1>{nome}</h1>
                <h2>{cargo}</h2>
            </div>
        </>
    )

}