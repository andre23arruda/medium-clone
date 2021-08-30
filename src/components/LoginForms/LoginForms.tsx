import styles from './styles.module.scss'


function LoginForms() {
    return (
        <form className={ `${ styles.formSignin } p-5` }>
            <div className="text-center">
                <img className="mb-4" src="/medium-icon-24.jpg"  width="100"/>
            </div>

            <h1 className="h3 mb-3 font-weight-normal text-center">Login</h1>

            <label htmlFor="inputEmail">Email</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Seu melhor email" required />

            <label htmlFor="inputPassword" className="mt-3">Senha</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="******" required />

            <button className="mt-4 btn btn-lg btn-primary btn-block" type="submit">Bora lá</button>
        </form>
    )
}

export default LoginForms
