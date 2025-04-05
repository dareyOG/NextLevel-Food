import fs from 'node:fs'

import prisma from './prisma';

import slugify from 'slugify';
import xss from 'xss';

export async function getMeals() {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return prisma.meal.findMany();
  } catch (error) {
    // console.error('Error fetching meals:', error.message);
    throw new Error('Failed to fetch meals');
  }
}

export function getMeal(slug) {
  if (!slug) throw new Error("Invalid slug provided");

  try {
    // const meal = prisma.meal.findUnique({ where: { slug } })
    const meal = prisma.meal.findFirst({ where: { slug } })
    if (!meal) throw new Error("Meal not found");

    return meal
  } catch (error) {
    console.error('Error fetching meal:', error.message);
    // throw new Error('Failed to fetch meal');
  }
}

export async function saveMeal(meal) {
  // create slug from meal title
  meal.slug = slugify(meal.title, { lower: true })

  // remove harmful contents from meal instruction
  meal.instructions = xss(meal.instructions)

  // get file extension
  const extension = meal.image.name.split('.').pop()

  // get file name
  const fileName = `${meal.slug}.${extension}`

  // create directory
  const imagesDir = './public/images';
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const filePath = `${imagesDir}/${fileName}`;

  const bufferedImage = Buffer.from(await meal.image.arrayBuffer());

  // write image to file
  fs.writeFileSync(filePath, bufferedImage, (error) => {
    if (error) throw new Error("Saving image failed");
  });

  // meal image path
  meal.image = `/images/${fileName}`

  // save meal data to database
  await prisma.meal.create({ data: meal })
}

