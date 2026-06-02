import { useState } from 'react';
import type { ReactNode } from 'react';
import { FormContext } from './formContextData';
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
