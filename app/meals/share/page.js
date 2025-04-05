import ImagePicker from '@/components/meals/image-picker';
import style from './page.module.css'
import { shareMeal } from '@/lib/actions';

function ShareMealPage() {

  return <>
    <header className={style.header}>
      <h1>Share your <span className={style.highlight}>favorite meal</span></h1>
      <p>Or any other meal you feel needs sharing!</p>
    </header>
    <main className={style.main}>
      <form className={style.form} action={shareMeal}>
        <div className={style.row}>
          <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id='name' name='name' required />
          </p>
          <p>
            <label htmlFor="email">Your email</label>
            <input type="email" id='email' name='email' required />
          </p>
        </div>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' name='title' required />
        </p>
        <p>
          <label htmlFor="summary">Short Summary</label>
          <input type="text" id='summary' name='summary' required />
        </p>
        <ImagePicker name={'image'} label={'Select image'} />
        <p>
          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions"
            name="instructions"
            rows="10"
            required></textarea>
        </p>
        <p className={style.actions}>
          <button type='submit'>Share Meal</button>
        </p>
      </form>
    </main>
  </>;
}

export default ShareMealPage;
