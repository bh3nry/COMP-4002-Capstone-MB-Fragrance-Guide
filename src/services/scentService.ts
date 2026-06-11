import type { Fragrance } from "../apis/scentRepoData";
import * as ScentRepoMethod from "../apis/scentRepo";

const findCologne = (userNotes: string[]): Set<Fragrance> => {
    const fragranceList: Fragrance[] = ScentRepoMethod.getAllFragrances()
    const matchedFragrances = fragranceList.filter(fragrance => 
        userNotes.some(note => fragrance.notes.includes(note))
    );
    const fragranceSet = new Set(Object.values(matchedFragrances))
    return fragranceSet
}

export default findCologne