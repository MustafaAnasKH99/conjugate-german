import React, { useState, useEffect } from 'react'
import EngTranslation from './EngTranslation'
import './App.css'

const ToggleExample = (examples) => {
    const [ random, setRandom ] = useState(0)

    function randomize(){
        console.log('working ..')
        let random_number = Math.floor((Math.random() * (examples.examples.length - 1)) + 1)
        setRandom(random_number)
    }
    console.log(examples.examples[random])
    return ( 
        <div>
            <div>
                <EngTranslation randomize={randomize} translation={examples.examples[random][1]} sentence={examples.examples[random][0]} />
            </div>
        </div>
     );
}
 
export default ToggleExample;
