import React from "react";
import { useParams } from "react-router-dom";

export default function Prodotto({ prodotti }) {
    const { id } = useParams();
    const prodotto = Array.isArray(prodotti) ? prodotti.find(p => String(p.id) === String(id)) : null;
    if (!prodotto) return <div>Prodotto non trovato</div>;
    const { title, price, description, image } = prodotto;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Prezzo: {price} €</p>
            </div>
            <img src={image} className="card-img-bottom" alt={title} />
        </div>
    );
}
