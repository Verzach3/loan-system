import {Outlet, useNavigate} from "@remix-run/react";

function Reservar() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Reservar</h2>
            <p>Reserva tu cita aquí</p>

            <Outlet/>
        </div>
    )
}

export default Reservar;