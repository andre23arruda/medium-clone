import Link from 'next/link'
import styles from './styles.module.scss'

function Navbar() {
    return (
        <nav className="p-3 navbar navbar-expand-md navbar-dark bg-dark">
            <Link href="/">
                <img className={styles.navbarBrand } src="/medium.png"  width="200"/>
            </Link>

            <Link href="https://aa-blog-wagtail.herokuapp.com/admin/pages/">
                <button className="btn btn-secondary d-block ml-auto">Quer escrever?</button>
            </Link>
        </nav>
    )
}

export default Navbar
