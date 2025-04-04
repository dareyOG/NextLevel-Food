import { Suspense } from 'react';
import Link from 'next/link';

import { getMeals } from '@/lib/meals';
import MealsGrid from '@/components/meals/meals-grid';

import style from './page.module.css';


// this component fetches the meals data
async function Meals() {
  const meals = await getMeals();
  // console.log(meals);
  return <MealsGrid meals={meals} />;
}

function MealsPage() {
  // async function MealsPage() {
  // const meals = await getMeals();
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious meal created <span className={style.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself; It&apos;s easy and fun!</p>
        <p className={style.cta}>
          <Link href={'/meals/share'}>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={style.main}>
        {/* <MealsGrid meals={meals} /> */}
        <Suspense fallback={<p className={style.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
