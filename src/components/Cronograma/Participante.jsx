import React, {useState} from "react";
import "./cronograma.css";

export function Participante({nome, image_url,titulo,horario_loc,descricao,descricaoEscondida,instagram,linkedin}) {
    
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className="participante">
                <div className="part-half-1">
                    <img src={image_url} className="part-logo" alt="Logo do participante"/>
                    <h1>{nome}</h1>              
                </div>
                <div className="part-half-2">
                    <p className="part-title">{titulo}</p>
                    <p className="part-time">{horario_loc}</p>
                    <p className="part-desc">
                        {descricao}
                    {visible && <span>{descricaoEscondida}</span>}
                    </p>

                    {
                    descricaoEscondida && 
                        <button 
                        className="btn-more"
                        onClick={() => setVisible(!visible)}>
                        {visible ? "Ler menos" : "Ler mais"}
                        </button>
                    }
                    
                    <div className="part-conections">
                        {instagram &&
                            <div className="part-insta part-rede">
                            <img src="https://cdn.discordapp.com/attachments/593999593386278912/980605402255351818/logotipo-do-instagram.png" alt="instagram"/>  
                            <span>{instagram}</span>
                            </div>
                        }
                        {
                            linkedin &&
                            <div className="part-link part-rede">
                                <img src="https://cdn.discordapp.com/attachments/593999593386278912/980605726479241216/logotipo-do-linkedin.png" alt="linkedin"/> 
                                <span>{linkedin}</span>
                            </div>     
                        }
                    </div>                
                </div>
            </div>
        </>
    )

}