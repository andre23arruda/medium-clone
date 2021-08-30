import styles from './styles.module.scss'


function Footer() {
    return (
        <footer className={ `${ styles.footer } text-muted text-center` }>
            Copyright ©
            <a href="https://github.com/andre23arruda">
                André Arruda
            </a>{' '}
            {new Date().getFullYear()}.
        </footer>
    )
}

export default Footer
