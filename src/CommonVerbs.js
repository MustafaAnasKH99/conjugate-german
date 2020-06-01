import React, { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';

import './CommonVerbs.css'

import emoji from 'react-easy-emoji'

const CommonVerbs = ({ setVerb }) => {

  const [hasError, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [common_data, setCommonData] = useState({});

  async function fetchData(){
    const resVerbs = await fetch('https://aqueous-scrubland-30732.herokuapp.com/common-verbs', {
      method: "POST",
    });
    resVerbs
    .json()
    .then(res => {
        console.log('res')
        setCommonData(res)
        setLoading(false)
    })
    .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData()
  }, []);
   

  if(loading === true){
    return (
      <div>
        <RingLoader color={'#123abc'} loading={loading} />
      </div>
    )   
  } else {
    return (
        <div className="verbs-container">
            <h3 style={{color: '#17c671'}}>Common German Verbs { emoji('😻 🢃') } </h3>
        { 
          JSON.parse(common_data.html).map((el, index) => (
            <p key={index} onClick={() => setVerb(el)}>{el}</p>
          ))
        }
        </div>
      );
  }
}

export default CommonVerbs;
