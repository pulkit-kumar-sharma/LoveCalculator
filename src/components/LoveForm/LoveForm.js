import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoveForm.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

const LoveForm = () => {

  const firstPersonName = React.useRef(null);
  const secondPersonName = React.useRef(null);
  const [lovePercent, setLovePercent] = useState(0);
  const [loveResult, setLoveResult] = useState('');
  const [displayResult, setDisplayResult] = useState(false);

  async function handleSubmit (event) {
    event.preventDefault();
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    };

    await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${secondPersonName.current.value}&fname=${firstPersonName.current.value}`, options)
    .then(response => response.json())
    .then(response => {
      setLovePercent(response.percentage);
      setLoveResult(response.result);
      setDisplayResult(true);
    })
    .catch(err => console.error(err));
  };

  const handleReset = event => {
    setDisplayResult(false);
  }

  const Results = () => (
    <div id={styles["result"]}> 
      <h1 id={styles["resultPercent"]}> Love Between {firstPersonName.current.value} & {secondPersonName.current.value} Is {lovePercent}%</h1>
      <h2 id={styles["resultRecommendation"]}>Recommendation : {loveResult}</h2>
    </div>
  )


  return (
    <div className={styles.LoveForm}>
      <Form id={styles["form"]} onSubmit={handleSubmit} >
        <Form.Group id={styles["formInput"]} className="mb-3" >
          <Form.Control id={styles["formInputText"]} ref={firstPersonName} type="text" placeholder="Enter Person 1 Name" autoComplete='off' />
        </Form.Group>
        <Form.Group id={styles["formInput"]} className="mb-3">
          <Form.Control id={styles["formInputText"]} ref={secondPersonName} type="text" placeholder="Enter Person 2 Name" autoComplete='off' />
        </Form.Group>
        <Button id={styles["submitButton"]} variant="primary" type="submit">
          Calculate Love
        </Button>
        <Button id={styles["resetButton"]} onClick={handleReset} variant="primary" type="reset">
          Reset
        </Button>
      </Form>

      { displayResult && <Results/> }
    </div>
  )
};

LoveForm.propTypes = {};

LoveForm.defaultProps = {};

export default LoveForm;
