import * as ScentRepoMethod from "../apis/scentRepo";

const findCologne = async (userNotes: string[]) => {
    try {
        const fragranceList = await ScentRepoMethod.getAllFragrances()
        if (fragranceList) {
            const matchedFragrances = fragranceList.filter(
                fragrance => userNotes
                .some(note => fragrance.Notes
                .includes(note))
            );
            return matchedFragrances
        }
    } catch (error: unknown) {
        console.log(error)
    }
}

export { findCologne }