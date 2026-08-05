import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { FormContext } from './formContextData';
import type { ProfileData, ScentTag } from '../components/commons/profile/profile-data';
import type { Notes, FavouriteFragrance } from '../types/notesType';
import { mockNotesData } from '../apis/mockNotesData';

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

  // Rate limiting using sessionStorage
  // Components that rely on this: Header + Home
  const [scentCount, setScentCount] = useState<number>(() =>
    Number(sessionStorage.getItem("tries")) || 0
  );

  useEffect(() => {
    sessionStorage.setItem("tries", String(scentCount));
  }, [scentCount]);

  const { isSignedIn } = useAuth();
  const outOfTries = !isSignedIn && scentCount >= 3;

  return (
    <FormContext.Provider value={{ 
      userNote, 
      setUserNote, 
      profile, 
      setProfile, 
      selectedTags, 
      setSelectedTags, 
      favNotes, 
      setFavNotes, 
      favFragrances,
      setFavFragrances,
      scentCount,
      setScentCount,
      outOfTries
      }}>
        {children}
    </FormContext.Provider>
  );
};
