import { createContext } from "react";
import type { Dispatch, SetStateAction } from 'react';

export type FormContextValue = {
    userNote: string[];
    setUserNote: Dispatch<SetStateAction<string[]>>;
};

export const FormContext = createContext<FormContextValue | undefined>(undefined);

