import React, { useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react";

const options = [
  { key: 1, text: 'Präsens', value: 'Präsens' },
  { key: 2, text: 'Präteritum', value: 'Präteritum' },
  { key: 3, text: 'Futur I', value: 'Futur I' },
]

const DropdownClearable = (props) => {
  // const [verb_tense, setVerbTense] = useState('Set Tense');
  const [open, setOpen] = useState(false);

  useEffect(() => {
  }, [props.passed_tense]);

  return(
    <Dropdown open={open} toggle={() => setOpen(!open)}>
      <DropdownToggle theme="success">{props.passed_tense}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => props.setTense('Präsens')} >Präsens</DropdownItem>
        <DropdownItem onClick={() => props.setTense('Präteritum')} >Präteritum</DropdownItem>
        <DropdownItem onClick={() => props.setTense('Futur I')} >Futur I</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropdownClearable