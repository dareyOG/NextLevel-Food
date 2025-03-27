import MealItem from './meal-item';
import style from './meals-grid.module.css';

function MealsGrid({ meals }) {
  return (
    <ul className={style.meals}>
      {meals.map(meal => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default MealsGrid;
