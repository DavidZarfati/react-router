export default function Prodotti({ prodotti }) {
    return (
        <>
            <h2>benvenuto nei prodotti</h2>
            {Array.isArray(prodotti) && prodotti.length > 0 ? (
                prodotti.map((prodotto, index) => (
                    <h1 key={index}>{prodotto.title}</h1>
                ))
            ) : (
                <p>Nessun prodotto disponibile.</p>
            )}
        </>
    )
}