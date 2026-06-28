import { useState } from 'react';
import type { ReactNode } from 'react';
import { FormContext } from './formContextData';
import type { ProfileData, ScentTag } from '../components/commons/profile/profile-data';
import type { Notes, FavouriteFragrance } from '../types/notesType';
import { mockNotesData } from '../api/mockNotesData';

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

  const [favNotes, setFavNotes] = useState<Notes[]>(mockNotesData);

  const [favFragrances, setFavFragrances] = useState<FavouriteFragrance[]>([]);

    return (
        <FormContext.Provider value={{ userNote, setUserNote, profile, setProfile, selectedTags, setSelectedTags, favNotes, setFavNotes, favFragrances, setFavFragrances }}>
            {children}
        </FormContext.Provider>
    );
};
