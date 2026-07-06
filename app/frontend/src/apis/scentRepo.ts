export interface Fragrance {
    id: number
    Name: string
    Notes: string[]
}

export const getAllFragrances = async (): Promise<Fragrance[] | undefined> => {
    try {
        // Fetch req to the frontend
        const response = await fetch("http://localhost:3000/api/v1/scents")
        const { data } = await response.json()
        return data
    } catch (error: unknown) {
        console.log(error)
    }
}