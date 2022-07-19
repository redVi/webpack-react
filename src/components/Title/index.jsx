import styles from './titleStyle.module.css';

export default function Title ({ className = '', title = '' }) {
  return (
    <h1 className={`${styles.title} ${className}`}>{title}</h1>
  );
}
