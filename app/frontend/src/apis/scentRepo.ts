import type { Fragrance } from "./scentRepoData"; 
import { fragranceData } from "./scentRepoData";

export const getAllFragrances = (): Fragrance[] => {
    return fragranceData
}