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

    let loveCalculated = calculateLove();
    setLovePercent(loveCalculated.percentage);
    setLoveResult(loveCalculated.result);
    setDisplayResult(true);

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

  function sumOfDigits(num)
  {
      let sum = 0;
      while (num > 0) {
          sum += (num % 10);
          num /= 10;
      }
      return sum;
  }

  function calculateLove() {
    let output = {
      percentage : 0,
      result : "Very Poor Match. Better Luck Next Time"
    };
    let perc = 0;
    let fsum = 0;
    for (let i = 0; i < firstPersonName.current.value.length; i++) {
      fsum += firstPersonName.current.value.charAt(i).charCodeAt(0);
    }

    let ssum = 0;
    for (let i = 0; i < secondPersonName.current.value.length; i++) {
      ssum += secondPersonName.current.value.charAt(i).charCodeAt(0);
    }

    perc = (sumOfDigits(fsum) + sumOfDigits(ssum)) + 40;
    if (perc > 100)
      perc = 100;

    perc = perc.toFixed(2);

    output.percentage = perc;
    if(perc > 40 && perc <= 60){
      output.result = "Not a Good Match. Try Someone Better";
    }
    else if(perc > 60 && perc <= 80){
      output.result = "Good Match, But Not The Best";
    }
    else if(perc > 80){
      output.result = "Good Match. Go For It";
    }

    return output;
  }


  return (
    <div className={styles.LoveForm}>
      <Form id={styles["form"]} onSubmit={handleSubmit} >
        <Form.Group id={styles["formInput"]} className="mb-3" >
          <Form.Control id={styles["formInputText"]} ref={firstPersonName} type="text" required="required" placeholder="Enter Person 1 Name" autoComplete='off' />
        </Form.Group>
        <Form.Group id={styles["formInput"]} className="mb-3">
          <Form.Control id={styles["formInputText"]} ref={secondPersonName} type="text" required="required" placeholder="Enter Person 2 Name" autoComplete='off' />
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
