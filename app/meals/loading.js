import styles from './loading.module.css';

function mealsLoader() {
  return <p className={styles.loading}>Fetching meals...</p>;
}

export default mealsLoader;
