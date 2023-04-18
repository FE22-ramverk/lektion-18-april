import { useSelector } from "react-redux";
function CarsContainer() {
    const volvo = useSelector((state) => {
        return state.volvo
    })
    return (
        <section>
            <h2>Cars in stock:</h2>
            <p>Volvos: {volvo}</p>
        </section>
    );
}

export default CarsContainer;