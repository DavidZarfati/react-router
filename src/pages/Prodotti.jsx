import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Prodotti({ prodotti }) {
    return (
        <>
            <h2>benvenuto nei prodotti</h2>
            <ul>
                {Array.isArray(prodotti) && prodotti.length > 0 ? (
                    prodotti.map((prodotto, index) => (
                        <li key={index} className="d-flex align-items-center">
                            <div className="sinistro">
                                <img src={prodotto.image} alt="" />
                            </div>
                            <div className="destro p-2">
                                <h3>prodotto : {prodotto.title}</h3>
                                <h5>prezzo : {prodotto.price}$ </h5>
                                <h6>descrizione : {prodotto.description}</h6>
                                <NavLink to={prodotto.path} data-text={prodotto.title}>
                                    {prodotto.title}
                                </NavLink>

                            </div>
                        </li>
                    ))
                ) : (
                    <p>Nessun prodotto disponibile.</p>
                )}
            </ul>
        </>
    )
}