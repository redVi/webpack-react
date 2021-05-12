import styles from './home.module.css';
import car from 'assets/images/car.jpg';

export default function HomePage () {
  return (
    <div className={styles.home}>
      <h1>Hello</h1>
      <img src={car} alt="Car" />
    </div>
  );
}
