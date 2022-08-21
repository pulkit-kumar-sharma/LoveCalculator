import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPage.module.css';
import Header from "../../components/Header/Header";
import LoveForm from "../../components/LoveForm/LoveForm";
import Disclaimer from "../../components/Disclaimer/Disclaimer";


const MainPage = () => (
  <div className={styles.MainPage} style={{
    background: `url('${process.env.PUBLIC_URL}/loveBackgroundImage.jpeg')`
  }}>
    <Header></Header>
    <LoveForm></LoveForm>
    <Disclaimer></Disclaimer>
  </div>
);

MainPage.propTypes = {};

MainPage.defaultProps = {};

export default MainPage;
