import prisma from './prisma';

export async function getMeals() {
  return await prisma.meal.findMany();
}
