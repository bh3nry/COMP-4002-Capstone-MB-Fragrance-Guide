import { useState, useEffect } from "react";
import { locService } from "../services/locService";

type RecLocation = {
    id: number;
    fragranceId: number;
    saleLocations: { id: number; name: string; locationId: number }[];
}

export function useLocation(): RecLocation[] {
    const [locationData, setLocationData] = useState<RecLocation[]>([]);

    useEffect(() => {
        locService.getAll()
            .then((data) => setLocationData(data))
            .catch((error) => console.error("Failed to fetch locations:", error));
    }, []);

    return locationData;
}