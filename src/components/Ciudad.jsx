import React from "react";
import './Ciudad.css'

export default function Ciudad({city}) {
if(city){
        return (
            <div className="ciudad">
                    <div className="container">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div><b>Temperatura:</b> {city.temp} ºC</div>
                            <div><b>Clima:</b> {city.weather}</div>
                            <div><b>Viento:</b> {city.wind} km/h</div>
                            <div><b>Cantidad de nubes:</b> {city.clouds}</div>
                            <div><b>Latitud:</b> {city.latitud}º</div>
                            <div><b>Longitud:</b> {city.longitud}º</div>
                        </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>
            No se encontró la ciudad buscada
            </div>
        )
    }
}