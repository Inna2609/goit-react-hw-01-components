import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const getRandomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : ''}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.item}
              key={id}
              style={{ backgroundColor: `#${getRandomColor()}` }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default Statistics;
