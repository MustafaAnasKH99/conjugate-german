// import React, { useState, useEffect } from 'react';


import React, { Component } from 'react'
import ToggleExample from './ToggleExample'

class Examples extends Component {
    render() {
        const { examples } = this.props
        console.log('sentences_arr')
        console.log(examples)
        return(
            <div style={{width: '100%', marginTop: '15px'}}>
                <h1>Something</h1>
                <ToggleExample examples={examples} />
                {/* <h2>{examples[Math.floor((Math.random() * examples.length) + 1)]}</h2> */}
                {/* {
                    sentences_arr.map(item => <span>{item}</span>)
                } */}
            </div>
        )
    }
}


export default Examples
// const Examples = async ( examples ) => {
//     useEffect(() => {
        
//     }, [examples]);
//     return(
//         <div style={{width: '100%', marginTop: '15px'}}>
//             <h1>Something</h1>
//         </div>
//     )

// }
