import * as scentRepo from "../repository/scentRepository.js"

export const getAllFromScentRepo = async () => {
    try {
        console.log("Scent Service: Calling Scent Repo ...")
        return await scentRepo.getScentsFromDb()
    } catch (error) {
        
    }
}