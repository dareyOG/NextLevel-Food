import Image from 'next/image';
import style from './meal-item.module.css';
import Link from 'next/link';

function MealItem({ meal }) {
  const { title, image, slug, summary, creator } = meal;

  return (
    <article className={style.meal}>
      <header>
        <div className={style.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={style.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={style.content}>
        <p className={style.summary}>{summary}</p>
        <div className={style.actions}>
          <Link href={`meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}

export default MealItem;
