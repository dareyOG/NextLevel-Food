import prisma from './prisma';

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  // throw new Error('Failed to fetch meals');

  return prisma.meal.findMany();
}
