import {useNavigate} from "@remix-run/react";

function Reservar_index() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Reseva 1</h1>
            <h1>Reseva 2</h1>
            <h1>Reseva 3</h1>
            <h1>Reseva 4</h1>
            <h1>Reseva 5</h1>
        <button onClick={() => navigate("/reservar/nuevo")}>
            Nuevo
        </button>
        </div>
    )
}

export default Reservar_index;