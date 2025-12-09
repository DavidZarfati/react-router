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
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.path}> {link.title}</a>
                    </li>
                ))}
            </ul>
        </header>
    )
}