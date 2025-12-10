import { useEffect, useState } from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProdottoLayout() {
    const { id } = useParams();
    const [prodotto, setProdotto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setProdotto(null);
        setLoading(true);
        setError(null);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (!res.data || !res.data.id) {
                    setError("Prodotto non trovato");
                    console.log("Non trovato");
                    navigate("/prodotti");
                } else {
                    setProdotto(res.data);
                }
            })
            .catch(err => {
                console.log("errore:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    const { title, price, description, image } = prodotto || {};

    return (
        <>
            <section>
                {loading ? (
                    <div>Caricamento...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{title || "Titolo non disponibile"}</h5>
                            <p className="card-text">{description || "Descrizione non disponibile"}</p>
                            <p className="card-text"><strong>Prezzo:</strong> {price ? `${price} €` : "Prezzo non disponibile"}</p>
                        </div>
                        <img src={image || "..."} className="card-img-bottom" alt={title || "..."} />
                    </div>
                )}
                <h1>Pagina del singolo prodotto {id}</h1>
                <button onClick={(() => {
                    const nextProd = parseInt(id)
                    navigate(`/prodotti/${nextProd - 1}`)
                })}>Indietro</button>
                <button onClick={(() => {
                    const nextProd = parseInt(id)
                    navigate(`/prodotti/${nextProd + 1}`)
                })}>Avanti</button>

                <br />
                <NavLink to={`/`} >
                    Torna alla Home
                </NavLink>
                <br />
                <NavLink to={`/prodotti`} >
                    Torna alla sezione prodotti
                </NavLink>
            </section >
        </>
    );
}