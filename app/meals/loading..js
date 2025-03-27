import style from './loading.module.css';

function mealsLoader() {
  return <p className={style.loading}>Fetching meals...</p>;
}

export default mealsLoader;
