import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h1>Farmacia Solidaria</h1>
            <div>
                <button>Dermo</button>
                <button>Bebés</button>
                <button>Hogar</button>
                <button>Belleza</button>
                <button>Limpieza</button>
                <button>Cuidado Personal</button>
                <button>Nutrición y Deportes</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar
