import { lazy, Suspense } from 'react';
import styles from './home.module.css';
import car from 'assets/images/car.jpg';
import { capitalize } from 'utils/capitalize';
const Title = lazy(() => import(/* webpackChunkName: 'TitleComponent' */ 'components/Title'));

export default function HomePage () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.home}>
        <Title />
        <h2>{'yello' |> capitalize}</h2>
        <img src={car} alt="Car" />
      </div>
    </Suspense>
  );
}
