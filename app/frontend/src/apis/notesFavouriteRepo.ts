const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;


export async function addFavouriteNotes(
    notesId: number,
    sessionToken: string
) {
    const queryUrl = `${BASE_URL}/notes/${notesId}/favourite`
    const response = await fetch(
        queryUrl,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }
    );

    if(!response.ok) {
        throw new Error("Error adding note to favourites");
    }
}

export async function deleteFavouriteNotes(
    notesId: number,
    sessionToken: string
) {
    const queryUrl = `${BASE_URL}/notes/${notesId}/favourite`
    const response = await fetch(
        queryUrl,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }
    );

    if(!response.ok) {
        throw new Error("Error removing note from favourites");
    }
}