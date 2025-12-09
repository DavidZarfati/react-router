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
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex flex-column justify-content-flex-start">
                            {navLinks.map((link, index) => (
                                <li key={index} className="nav-item">
                                    <a className="nav-link active" aria-current="page" href={link.path}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}