import { useSelector } from "react-redux";
function CarsContainer() {
    const state = useSelector((state) => {
        return state
    })
    return (
        <section>
            <h2>Cars in stock:</h2>
            <p>Volvos: {state.volvo}</p>
            <p>Audis: {state.audi}</p>
            <p>Skodas: {state.skoda}</p>
        </section>
    );
}

export default CarsContainer;