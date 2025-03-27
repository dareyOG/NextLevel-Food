import prisma from './prisma';

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return prisma.meal.findMany();
}
