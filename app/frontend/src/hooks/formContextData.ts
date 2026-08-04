import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { ProfileData, ScentTag } from '../components/commons/profile/profile-data';
import type { Notes, FavouriteFragrance } from '../types/notesType';

export type FormContextValue = {
  userNote: string[];
  setUserNote: Dispatch<SetStateAction<string[]>>;
  profile: ProfileData;
  setProfile: Dispatch<SetStateAction<ProfileData>>;
  selectedTags: ScentTag[];
  setSelectedTags: Dispatch<SetStateAction<ScentTag[]>>;
  favNotes: Notes[];
  setFavNotes: Dispatch<SetStateAction<Notes[]>>;
  favFragrances: FavouriteFragrance[];
  setFavFragrances: Dispatch<SetStateAction<FavouriteFragrance[]>>;
  scentCount: number;
  setScentCount: Dispatch<SetStateAction<number>>;
  outOfTries: boolean;
};

// Context contains the state value & setter method in formContext.tsx
export const FormContext = createContext<FormContextValue | undefined>(undefined);
