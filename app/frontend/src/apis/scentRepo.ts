const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

export interface Fragrance {
    id: number
    Name: string
    Notes: string[]
}

export const getAllFragrances = async (): Promise<Fragrance[] | undefined> => {
    try {
        // Fetch req to the frontend
        const response = await fetch(`${BASE_URL}/api/v1/scents`)
        const { data } = await response.json()
        return data
    } catch (error: unknown) {
        console.log(error)
    }
}