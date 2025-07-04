import React, { useState } from 'react';
import styles from './RatingsPage.module.scss';
import MyRatings from './MyRatings';
import OverallRatings from './OverallRatings';


const RatingsPage = () => {
  const [activeTab, setActiveTab] = useState('my');

  return (
    <div className={styles.wrapper}>
        <h2 className={styles.heading}>Reytinglar</h2>
      <div className={styles.tabs}>
        <button 
          className={activeTab === 'my' ? styles.active : ''}
          onClick={() => setActiveTab('my')}
        >
          Mening reytinglarim
        </button>
        <button 
          className={activeTab === 'overall' ? styles.active : ''}
          onClick={() => setActiveTab('overall')}
        >
          Umumiy reytinglar
        </button>
      </div>
      

      <div className={styles.tabContent}>
        {activeTab === 'my' && <MyRatings />}
        {activeTab === 'overall' && <OverallRatings />}
      </div>
    </div>
  );
};

export default RatingsPage;
