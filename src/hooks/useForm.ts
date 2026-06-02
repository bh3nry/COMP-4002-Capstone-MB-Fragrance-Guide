import { useContext } from 'react';
import type { FormContextValue } from './formContextData';
import { FormContext } from './formContextData';

export const useForm = (): FormContextValue => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('The useForm hook cannot see outside of the FormProvider Component');
  }

  return context;
};
