import style from './loading.module.css';

function MealsLoader() {
  return <p className={style.loading}>Fetching meals...</p>;
}

export default MealsLoader;
