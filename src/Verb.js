import React, { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import Examples from './Examples'

import './App.css';

const Verb = ({ passed_verb, passed_tense }) => {
  const [hasError, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  let something = {
    tense: passed_tense,
    verb: passed_verb
  }
  async function fetchData(){
    const res = await fetch('https://aqueous-scrubland-30732.herokuapp.com/conjugate', {
      method: "POST",
      body: JSON.stringify(something)
    });
    res
    .json()
    .then(res => {
      setData(res);
      setLoading(false)
    })
    .catch(err => setErrors(err));
  }

  useEffect(() => {
    console.log('component updated')
    fetchData()
  }, [passed_verb, passed_tense]);

  if(loading === true){
    return (
      <div className="verbs-conjugated-loader">
        <RingLoader color={'#123abc'} loading={loading} />
      </div>
    )      
  } else if (hasError !== false){
    return <h2>Sorry, something went wrong. Please try again at a later time</h2>
  } else {
    return (
      <div>
        <Examples examples={data.examples} />
        <div className="verbs-conjugated" dangerouslySetInnerHTML={{ __html: data.verbs.html }} />
      </div>
    )
  }
}

export default Verb;
