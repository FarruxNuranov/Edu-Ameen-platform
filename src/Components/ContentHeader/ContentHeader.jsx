// src/components/ContentHeader/ContentHeader.jsx
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './ContentHeader.module.scss';
import { Daramod } from '../../utils/getimage';

const ContentHeader = ({
  title = 'Bosh sahifa',
  revenue = '12 500',
  revenueLink = '/revenue-history',
  revenueLinkText = 'Daromad tarixi',
}) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.actions}>
        <div className={styles.stat}>
         <img className={styles.icon} src={Daramod} alt="" />
          <span className={styles.value}>{revenue}</span>
        </div>
        <Link to={revenueLink} className={styles.link}>
          {revenueLinkText}
        </Link>
      </div>
    </div>
  );
};

export default ContentHeader;
