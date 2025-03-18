import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

import style from './page.module.css';

const icons = [
  { icon: mealIcon, name: 'meal', alt: 'A delicious meal', paragraph: 'Share & discover recipes' },
  {
    icon: communityIcon,
    name: 'community',
    alt: 'A crowd of people, cooking',
    paragraph: 'Find new friends & like-minded people'
  },
  {
    icon: eventsIcon,
    name: 'events',
    alt: 'A crowd of people at a cooking event',
    paragraph: 'Participate in exclusive events'
  }
];

function CommunityPage() {
  return (
    <>
      <header className={style.header}>
        <h1>
          One shared passion: <span className={style.highlight}>Food</span>{' '}
        </h1>
        <p>join our community and share your favorite recipes</p>
      </header>
      <main className={style.main}>
        <h2>Community Perks</h2>

        <ul className={style.perks}>
          {icons.map(icon => (
            <li key={icon.name}>
              <Image src={icon.icon} alt={icon.alt} key={icon.name} />
              <p>{icon.paragraph}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default CommunityPage;
