import { useMemo } from 'react';
import * as ScentService from '../services/scentService';
import type { Fragrance } from '../apis/scentRepoData';

const useReco = (userNotes: string[]): { recommendations: Fragrance[] } => {
  const recommendations = useMemo(() => {
    return Array.from(ScentService.findCologne(userNotes));
  }, [userNotes]);

  return { recommendations };
};

export { useReco };
