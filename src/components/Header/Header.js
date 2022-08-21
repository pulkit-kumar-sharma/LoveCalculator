import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header}>
    <div id={styles["title"]}>Love Calculator</div>
    <div id={styles["description"]}>Find Love Compatibility & Chances Of Successful Love Relationship</div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
