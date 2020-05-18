import React, { useState, useEffect } from 'react';
import { Button, FormInput, InputGroup, InputGroupAddon, InputGroupText } from "shards-react";
import DropdownClearable from './DropdownClearable'


const InputVerb = ({ passed_verb, setVerb, passed_tense, setTense }) => {
    const [verb, setInputVerb] = useState({});
    useEffect(() => {
      }, [passed_verb]);
    return(
        <div style={{width: '100%', marginTop: '15px'}}>
            <InputGroup>
                <InputGroupAddon type="prepend">
                    <DropdownClearable passed_tense={passed_tense} setTense={setTense} />
                </InputGroupAddon>
                <FormInput onChange={(e) => setInputVerb(e.target.value)} placeholder='Ein Verb hier' />
                <InputGroupAddon type="append">
                <Button style={{backgroundColor: '#c94e50'}} theme="primary" onClick={() => setVerb(verb)} >Konjugieren!</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}
  

export default InputVerb
