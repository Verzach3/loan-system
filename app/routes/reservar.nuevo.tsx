import {useNavigate} from "@remix-run/react";

function ReservarNuevo() {
    const navigate = useNavigate();
    return (
        <div>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
        <button>
            Reservar
        </button>
            <button onClick={() => navigate("/reservar")}>
                Atras
            </button>
        </div>
    )
}

export default ReservarNuevo;