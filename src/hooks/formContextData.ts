import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export type FormContextValue = {
  userNote: string[];
  setUserNote: Dispatch<SetStateAction<string[]>>;
};

// Context contains the state value & setter method in formContext.tsx
export const FormContext = createContext<FormContextValue | undefined>(undefined);
