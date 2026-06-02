import { useState } from 'react';
import type { ReactNode } from 'react';
import { FormContext } from './formContextData';
<<<<<<< HEAD
import type { ProfileData, ScentTag } from '../components/commons/profile/profile-data';

type FormProviderProps = {
  children: ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [userNote, setUserNote] = useState<string[]>([]);

  const [profile, setProfile] = useState<ProfileData>({
    displayName: "",
    bio: ""
  });

  const [selectedTags, setSelectedTags] = useState<ScentTag[]>([]);

    return (
        <FormContext.Provider value={{ userNote, setUserNote, profile, setProfile, selectedTags, setSelectedTags }}>
            {children}
        </FormContext.Provider>
    );
};
=======
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
>>>>>>> 23605d7 (feat: implemented form that updates the status of your current favourite fragrance.)
