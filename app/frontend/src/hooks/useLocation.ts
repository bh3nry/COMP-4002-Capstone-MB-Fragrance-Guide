import { useState, useEffect } from "react";
import { locService } from "../services/locService";
import type { RecommendationLocation } from "../apis/locRepoData";

export function useLocation(): RecommendationLocation[] {
    const [locationData, setLocationData] = useState<RecommendationLocation[]>([]);

    useEffect(() => {
        locService.getAll()
            .then((data) => setLocationData(data))
            .catch((error) => console.error("Failed to fetch locations:", error));
    }, []);

    return locationData;
}