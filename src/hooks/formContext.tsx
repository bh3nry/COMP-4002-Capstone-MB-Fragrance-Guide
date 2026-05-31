import { useState } from 'react';
import type { ReactNode } from 'react';
import { FormContext } from './formContextData';

type FormProviderProps = {
  children: ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [userNote, setUserNote] = useState<string[]>([]);

  return (
    <FormContext.Provider value={{ userNote, setUserNote }}>
      {children}
    </FormContext.Provider>
  );
};
