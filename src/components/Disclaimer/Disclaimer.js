import React from 'react';
import PropTypes from 'prop-types';
import styles from './Disclaimer.module.css';

const Disclaimer = () => (
  <div className={styles.Disclaimer}>
    <p><i>Note : This is an app created for fun. Don't Take It Seriously. 
      The Results Displayed here don't mean anything in real Life.</i></p>
  </div>
);

Disclaimer.propTypes = {};

Disclaimer.defaultProps = {};

export default Disclaimer;
