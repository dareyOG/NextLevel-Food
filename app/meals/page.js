import Link from 'next/link';
import style from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';

function MealsPage() {
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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}

export default MealsPage;
