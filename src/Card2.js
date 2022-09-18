import "./Card.css";

const Card2 = () => {
    const hallo = () =>{
        console.log("ik ben kaartje 2");
    }
    return(
        <article onClick={hallo}>
            <header>
                <h2>tweede kaart</h2>
            </header>
            <section>
                lorem ipsum nogwat nogwat nogwat
            </section>
        </article>
    )
}

export default Card2;