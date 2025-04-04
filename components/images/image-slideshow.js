'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';

import style from './image-slideshow.module.css';

const images = [
  { image: burgerImg, name: 'burger', alt: 'A delicious, juicy burger' },
  { image: curryImg, name: 'curry', alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, name: 'dumpling', alt: 'Steamed dumplings' },
  { image: macncheeseImg, name: 'macncheese', alt: 'Mac and cheese' },
  { image: pizzaImg, name: 'pizza', alt: 'A delicious pizza' },
  { image: schnitzelImg, name: 'schnitzel', alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, name: 'tomato', alt: 'A delicious tomato salad' }
];

function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(currIndex => (currIndex < images.length - 1 ? currIndex + 1 : 0));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.slideshow}>
      {images.map((image, index) => (
        <Image
          key={image.name}
          src={image.image}
          alt={image.alt}
          className={index === currentImageIndex ? style.active : ''}
        />
      ))}
    </div>
  );
}

export default ImageSlideShow;
