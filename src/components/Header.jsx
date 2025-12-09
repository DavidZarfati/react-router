import styles from "./HeaderModule.module.css"
import { NavLink } from "react-router-dom"
export default function Header() {
    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/chi-siamo"
        },
        {
            title: "Prodotti",
            path: "/prodotti"
        },
    ]

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.menuList}>
                    {navLinks.map((link, index) => (
                        // <li key={index}>
                        //     <NavLink to={link.path} className={styles["menu-link"]}>{link.title}</NavLink>
                        // </li>
                        <li>
                            <a key={index} href={link.path} data-text={link.title}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <ul>
                    {/* <li>
                        <a key={index} href={link.path} data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>
                    </li> */}
                    {/* <li>
                        <a href="#" data-text="&nbsp;About">&nbsp;About&nbsp;</a>
                    </li>
                    <li>
                        <a href="#" data-text="&nbsp;Services">&nbsp;Services&nbsp;</a>
                    </li>
                    <li>
                        <a href="#" data-text="&nbsp;Blog">&nbsp;Blog&nbsp;</a>
                    </li>
                    <li>
                        <a href="#" data-text="&nbsp;Contact">&nbsp;Contact&nbsp;</a>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}