import React from "react";
import "./cronograma.css";

export function Participante() {
    return (
        <>
            <div className="participante">
                <div className="part-half-1">
                    <img src="https://cdn.discordapp.com/attachments/593999593386278912/980589318127108117/user.png" className="part-logo" alt="Logo do participante"/>
                    <h1>Ana Coelho</h1>              
                </div>
                <div className="part-half-2">
                    <p className="part-title">Atividade Cultural - Dança flamenca</p>
                    <p className="part-time">19:30 hrs - 20:30 hrs / Anf 1</p>
                    <p className="part-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, nulla ut luctus euismod, tortor erat sagittis nisi, vitae elementum massa nisi sit amet elit.</p>
                    <div className="part-conections">
                        <div className="part-insta">
                            <img src="https://cdn.discordapp.com/attachments/593999593386278912/980605402255351818/logotipo-do-instagram.png" alt="instagram"/>  
                            <span>@ana_coelho</span>
                        </div>
                        <div className="part-link">
                            <img src="https://cdn.discordapp.com/attachments/593999593386278912/980605726479241216/logotipo-do-linkedin.png" alt="linkedin"/> 
                            <span>Ana Coelho</span>
                        </div>     
                    </div>                
                </div>
            </div>
        </>
    )

}