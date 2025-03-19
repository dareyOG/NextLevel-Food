import MealItem from './meal-item';
import style from './meals-grid.module.css';

function MealsGrid({ meals }) {
  return (
    <ul className={style.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
