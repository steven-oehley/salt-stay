'use client';

import { useFormStatus } from 'react-dom';

import { clsx } from 'clsx';
import { LucideLoader2 } from 'lucide-react';

import { Button } from '../ui';

interface SubmitBtnProps {
  label: string;
  className?: string;
  size?: 'sm' | 'lg' | 'default' | 'icon';
}

const SubmitBtn = ({ label, className, size = 'lg' }: SubmitBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <Button className={clsx('mt-4', className)} size={size} type='submit'>
      {pending ? <LucideLoader2 className='animate-spin' /> : null}
      {label}
    </Button>
  );
};
export default SubmitBtn;
