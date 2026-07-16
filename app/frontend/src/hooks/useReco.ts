import { useQuery } from '@tanstack/react-query';
import * as ScentService from '../services/scentService';

const useReco = (userNotes: string[]) => {
  const { data: recommendations = [], isPending, error } = useQuery(
    { 
      queryKey: ['recommendations', userNotes],
      queryFn: () => ScentService.findCologne(userNotes),
      // placeholderData: keepPreviousData,
      // if there aren't any notes present the fn won't run
      enabled: userNotes.length > 0
    });
  // Built in error handling. Use when you want to conditionally render the recommendations
  return { recommendations, isPending, error };
};

export default useReco;
