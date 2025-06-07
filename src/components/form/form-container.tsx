'use client';

import { useActionState, useEffect } from 'react';

import { toast } from 'sonner';

import { type actionFunction } from '@/types/types';

import { EMPTY_ACTION_STATE } from './constants';

interface FormContainerProps {
  action: actionFunction;
  children: React.ReactNode;
}

const FormContainer = ({ action, children }: FormContainerProps) => {
  const [state, formAction] = useActionState(action, EMPTY_ACTION_STATE);

  useEffect(() => {
    if (state.message && state.status === 'success') {
      toast.success(state.message);
    } else if (state.message && state.status === 'error') {
      toast(state.message);
    }
  }, [state.message, state.status]);

  return <form action={formAction}>{children}</form>;
};
export default FormContainer;
