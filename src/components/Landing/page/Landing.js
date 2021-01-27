import React from 'react';
import Banner from '../components/Banner/Banner';
import AppInfo from "../components/AppInfo/AppInfo";
import DevInfo from '../components/DevInfo/DevInfo';
//import'./Landing.css';

const Landing = (props)=>{
  return (
    <div >
      <Banner/>
      <AppInfo/>
      <DevInfo/>
    </div>
  );
};

export default Landing ;