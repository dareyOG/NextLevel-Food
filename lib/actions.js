'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { saveMeal } from "./meals"

export const shareMeal = async (formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };
    console.log(meal);
    await saveMeal(meal);

    // Revalidate the meals page cache
    revalidatePath('/meals');

    // Redirect to the meals page
    redirect('/meals');
};