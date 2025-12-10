import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function ProdottoLayout() {
    const { id } = useParams()
    // console.log(id);

    return (
        <>
            <section>
                <h1>Pagina del singolo prodotto {id}</h1>
                <NavLink to={`/`} >
                    Torna alla Home
                </NavLink>
                <br />
                <NavLink to={`/prodotti`} >
                    Torna alla sezione prodotti
                </NavLink>
            </section>
        </>
    )
}