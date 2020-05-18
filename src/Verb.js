import React, { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';

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
    loading ? setLoading(false) : setLoading(true)
    const res = await fetch('http://localhost:5555/conjugate', {
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

  {console.log(JSON.stringify(data))}
  if(loading === true){
    return (
      <div className="verbs-conjugated-loader">
        <RingLoader color={'#123abc'} loading={loading} />
      </div>
    )      
  } else if (hasError !== false){
    return <h2>Soeery, something went wrong. Try again at a later time</h2>
  } else {
    return (
      <div>
        <div className="verbs-conjugated" dangerouslySetInnerHTML={{ __html: data.html }} />
      </div>
      );
  }
}

export default Verb;
