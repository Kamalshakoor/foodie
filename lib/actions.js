'use server'

import { redirect } from 'next/navigation'; 
import { saveMeal } from "./meals"
import { revalidatePath } from 'next/cache';


export async function shareMeal(FormData) {
    const meal = {
      title: FormData.get('title'),
      summary: FormData.get('summary'),
      image: FormData.get('image'),
      instructions: FormData.get('instructions'),
      creator: FormData.get('name'),
      creator_email: FormData.get('email'),
    }
    await saveMeal(meal);
    revalidatePath(`/meals`);
    redirect(`/meals/${meal.slug}`);
  }
