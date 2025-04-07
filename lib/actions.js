'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { saveMeal } from "./meals"

const isInvalidText = (text) => {
    return !text || text.trim() === '';
}

export const shareMeal = async (state, formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };
    // console.log(meal);

    if (isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(meal.instructions) || isInvalidText(meal.creator) || isInvalidText(meal.creator_email) || !meal.creator_email.includes('@') || !meal.image || meal.image.size === 0) {
        // throw new Error("Invalid input. Please check your data.");
        return {
            message: 'Invalid input. Please check your data.'
        }
    }

    await saveMeal(meal);

    // Revalidate the meals page cache
    revalidatePath('/meals');

    // Redirect to the meals page
    redirect('/meals');
};