export default function Prodotti({ prodotti }) {
    return (
        <>
            <h2>benvenuto nei prodotti</h2>
            <ul>
                {Array.isArray(prodotti) && prodotti.length > 0 ? (
                    prodotti.map((prodotto, index) => (
                        <li key={index}>
                            <h3>prodotto : {prodotto.title}</h3>
                            <h5>prezzo : {prodotto.price}$ </h5>
                            <h6>descrizione : {prodotto.description}</h6>
                        </li>
                    ))
                ) : (
                    <p>Nessun prodotto disponibile.</p>
                )}
            </ul>
        </>
    )
}