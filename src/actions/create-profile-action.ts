'use server';

// @/actions/create-profile-action.ts
import { type ActionFunctionResult } from '@/types/types';

export const createProfileAction = async (
  prevState: unknown,
  formData: FormData,
): Promise<ActionFunctionResult> => {
  try {
    const formDataObj = Object.fromEntries(formData.entries());

    // Your profile creation logic here
    // e.g., database save, validation, etc.
    console.log('Creating profile with data:', formDataObj);
    // On success:
    return {
      message: 'Profile created successfully!',
      status: 'success',
    };
  } catch (error) {
    // On error:
    console.error('Error creating profile:', error);
    return {
      message: 'Failed to create profile. Please try again.',
      status: 'error',
    };
  }
};
