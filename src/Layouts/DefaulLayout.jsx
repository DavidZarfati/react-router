import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function DefaultLayout() {
    return (
        <>
            <div className="d-flex">
                <div className="navbar">
                    <Header />
                </div>
                <div className="contenuto">
                    <main>
                        <Outlet />
                    </main>

                    <Footer />
                </div>
            </div>
        </>
    )
}