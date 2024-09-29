'use server'

import { redirect } from "next/dist/server/api-utils";
import { saveMeal } from "./meals"

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
   
  }
