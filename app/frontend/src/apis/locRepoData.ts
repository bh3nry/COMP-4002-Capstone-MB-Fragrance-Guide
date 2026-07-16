export type RecommendationLocation = {
    id: number;
    fragranceId: number;
    saleLocations: { id: number; name: string; locationId: number }[];
}