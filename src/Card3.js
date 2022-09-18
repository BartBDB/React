import "./Card.css";

const Card3 = () => {
    const hallo = () =>{
        console.log("ik ben kaartje 3");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>derde kaart</h2>
            </header>
            <section>
                lorem ipsum nogwat nogwat nogwat
            </section>
        </article>
    )
}

export default Card3;