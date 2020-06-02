import React, { Component } from 'react'
import ToggleExample from './ToggleExample'

class Examples extends Component {
    render() {
        const { examples } = this.props
        // console.log('sentences_arr')
        // console.log(examples)
        return(
            <div style={{width: '100%', marginTop: '15px', paddingTop: '25px'}}>
                <ToggleExample examples={examples} />
            </div>
        )
    }
}


export default Examples
