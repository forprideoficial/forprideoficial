import logofans from '../../assets/images/logofans.png';
import "./prideFans.css"

function PrideFans() {
    return (
        <div className="PrideFans">
            <div className="logo">
                <img src={logofans} alt="" />
            </div>
            <div className="text">
                <h1>SEJA BEM VINDO!</h1>
                <h2>Aqui começa a diversão de verdade!</h2>
            </div>
            <div className="buttons">
                <a href="/">Entrar</a>
            </div>
            <a href="/">Voltar ao ForPride+</a>
        </div>
    )
}

export { PrideFans }