// src/pages/HomePage/HomePage.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import styles from './HomePage.module.scss'
import News from "../News/News";
import ProgressCards from "../ProgressCards/ProgressCards";
import TopRatings from "../TopRatings/TopRatings";





export default function HomePage() {
  return (
  <>
<News/>
<div className={styles.container}>
<ProgressCards />
</div>
<TopRatings/>

  </>
  );
}
