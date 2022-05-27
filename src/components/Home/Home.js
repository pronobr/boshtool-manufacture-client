import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Freature from './Feature/Freature';
import Notify from './Notify/Notify';
import Review from './Review/Review';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Freature></Freature>
            <BusinessSummary></BusinessSummary>
            <Tools></Tools>
            <Review></Review>
            <Notify></Notify>
        </div>
    );
};

export default Home;