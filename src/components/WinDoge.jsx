import { useState } from "react";
function WinDoge(){
    const [doge, SetDoge] = useState("");

    async function DogeAPI() {
    
        const data = await fetch('https://dog.ceo/api/breeds/image/random');

        const doge = await data.json();

        console.log(doge);

        SetDoge(doge.message);
    }

    return (
        <div className="Doge">
            <h2>Hello</h2>
            <img src={doge} />
            <button onClick={DogeAPI}>Get Doge</button>
        </div>
    )
};




export default WinDoge;