import prisma from './prisma';

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

