import "./Card.css";

const Card = () => {
    const hallo = () =>{
        console.log("ik ben kaartje 1");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>eerste kaart</h2>
            </header>
            <section>
                lorem ipsum nogwat nogwat nogwat
            </section>
        </article>
    )
}

export default Card;