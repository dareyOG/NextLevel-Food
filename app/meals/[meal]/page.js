import Image from 'next/image';
import { getMeal } from '@/lib/meals';

import style from './page.module.css'

async function MealDetailPage({ params }) {

  const meal = await getMeal(params.meal)

  // replace line breaks with <br/> tag
  meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

  return <>
    <header className={style.header}>
      <div className={style.image}>
        <Image src={meal.image} alt={meal.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className={style.headerText}>
        <h1>{meal.title}</h1>
        <p className={style.creator}> by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
        <p className={style.summary}>{meal.summary}</p>
      </div>
    </header>
    <main>
      <p className={style.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
    </main>
  </>;
}

export default MealDetailPage;