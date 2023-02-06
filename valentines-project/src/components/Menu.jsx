import { useState } from "react";
import './menu.css';
export default function Menu() {
    const [ wines, setWines ] = useState()
    const getWines = (reds) => {
        fetch(`https://api.sampleapis.com/wines/${reds}`)
        .then(res => res.json())
        .then(setWines)
        .catch(alert)
    
    }

    return (
        <article>
            <div>
                <button onClick={ () => getWines('reds')}>Red Wines</button>
                <button onClick={ () => getWines('whites')}>White Wines</button>
            </div>
            {!wines
            ? <h2>Welcome</h2>
            : <section className="wine-container">
                {wines.map(wine => (
                    <div key={wine.id} className="wine-container">
                        <img src={wine.image} alt={wine.title}/>
                        <h3>{wine.title}</h3>
                        <p>{wine.description}</p>
                        </div>
             ))}
            </section>
        }
        </article>
    );
}