export default function Header() {
    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Chi siamo",
            path: "/chi-siamo"
        },
        {
            title: "Prodotti",
            path: "/prodotti"
        },
    ]

    return (
        <header>
            {/* <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.path}> {link.title}</a>
                    </li>
                ))}
            </ul> */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/chi-siamo">Chi Siamo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/prodotti">Prodotti</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}