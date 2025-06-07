'use client';

import { SignOutButton } from '@clerk/nextjs';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

const SignOutLink = () => {
  const handleLogout = () => {
    toast.success('You have successfully logged out.');
  };
  return (
    <SignOutButton redirectUrl='/'>
      <Button className='w-full text-left' onClick={handleLogout}>
        Logout
      </Button>
    </SignOutButton>
  );
};
export default SignOutLink;
