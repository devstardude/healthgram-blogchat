import React from 'react';
import Banner from '../components/Banner/Banner';
import AppInfo from "../components/AppInfo/AppInfo";
import DevInfo from '../components/DevInfo/DevInfo';
import BottomLinks from '../components/BottomLinks/BottomLinks';
//import'./Landing.css';

const Landing = (props)=>{
  return (
    <div >
      <Banner/>
      <AppInfo/>
      <DevInfo/>
      <BottomLinks/>
    </div>
  );
};

export default Landing ;