import React from 'react';
import Chart from 'react-apexcharts';
import styles from './MyRatings.module.scss';

const MyRatings = () => {
  const options = {
    chart: {
      type: 'donut',
      animations: { enabled: false }
    },
    plotOptions: {
      pie: {
        donut: { size: '75%' }
      }
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['#fff']
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    tooltip: { enabled: false },
    colors: ['#79c849', '#ff6f3f', '#44c2f1']
  };

  const series = [40, 30, 30];

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.value}>60</div>
          <div className={styles.label}>Umumiy reyting</div>
        </div>
        <div className={styles.card}>
          <div className={styles.value}>40</div>
          <div className={styles.label}>HR Management kursi</div>
        </div>
        <div className={styles.card}>
          <div className={styles.value}>20</div>
          <div className={styles.label}>Islom Moliya kursi</div>
        </div>
      </div>

      <div className={styles.chartSection}>
        <div className={styles.chart}>
          <Chart options={options} series={series} type="donut" width={324} height={324} />
        </div>

        <div className={styles.progressList}>
          <div className={styles.progressItem}>
            <div className={styles.text}>
              <span>Uy vazifalar</span><span>18</span>
            </div>
            <div className={styles.progress}>
              <div className={styles.fill} style={{ width: '80%', backgroundColor: '#79c849' }}></div>
            </div>
          </div>
          <div className={styles.progressItem}>
            <div className={styles.text}>
              <span>Testlar</span><span>15</span>
            </div>
            <div className={styles.progress}>
              <div className={styles.fill} style={{ width: '60%', backgroundColor: '#44c2f1' }}></div>
            </div>
          </div>
          <div className={styles.progressItem}>
            <div className={styles.text}>
              <span>Quizlar</span><span>22</span>
            </div>
            <div className={styles.progress}>
              <div className={styles.fill} style={{ width: '90%', backgroundColor: '#ff6f3f' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.list}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.title}>
              <span>❓</span> Kompaniyada uchraydigan muammolarga HR beradigan yechim...
            </div>
            <div className={styles.meta}>
              <span>⭐ 15</span>
              <span>17 Sentyabr, 2024 12:25</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRatings;
