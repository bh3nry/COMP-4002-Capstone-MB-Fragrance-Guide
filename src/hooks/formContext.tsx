import { useState } from 'react';
import type { ReactNode } from 'react';
import { FormContext } from './formContextData';
import type { Notes } from '../components/notes/notes-data';

type FormProviderProps = {
    children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
    const [ userNote, setUserNote ] = useState<string[]>([])

    const [ fragrance, setFragrance ] = useState<string[]>([])

    const [ notes, setNotes ] = useState<Notes[]>([]);

    return (
        <FormContext.Provider value={{ userNote, setUserNote, fragrance, setFragrance, notes, setNotes }}>
            {children}
        </FormContext.Provider>
    );
}