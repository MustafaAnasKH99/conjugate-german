import React, { useState, useEffect } from 'react'
import { number } from 'prop-types';

const ToggleExample = (examples) => {
    const [ random, setRandom ] = useState(0)

    function randomize(){
        console.log('working ..')
        let random_number = Math.floor((Math.random() * examples.examples.length) + 1)
        setRandom(random_number)
    }
    console.log(examples.examples[random])
    return ( 
        <div>
            <h2>{examples.examples[random][0]}</h2>
            <h2>{examples.examples[random][1]}</h2>
            <button onClick={() => randomize()}>toggle</button>
        </div>
     );
}
 
export default ToggleExample;
