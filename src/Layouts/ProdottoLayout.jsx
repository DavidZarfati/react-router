import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function ProdottoLayout() {
    const { id } = useParams()
    // console.log(id);

    return (
        <>
            <section>
                <h1>Pagina del singolo prodotto {id}</h1>
            </section>
        </>
    )
}