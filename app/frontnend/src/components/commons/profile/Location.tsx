import React from "react";
import useReco from "../../../hooks/useReco";
import { useRecommendations } from "../../../hooks/useLocation";
import type { Fragrance } from "../../../apis/scentRepoData";
import "./location.css";

/**
 * Component for displaying fragrance recommendations on the profile page.
 * Uses useReco to call ScentService.findCologne, which then calls
 * ScentRepo.getAllFragrances to filter the fragrances by their matching notes.
 * useRecommendations calls RecommendationService, which then calls
 * RecommendationRepository.getAll to look up fragrance sale locations
 * @param userNote array of note strings added on the homepage via shared context
 * @returns a JSX element that renders a list of recommended fragrances with sale locations
 */
const Recommendations = ({ userNote }: { userNote: string[] }): React.JSX.Element => {

    // filters fragrances by notes via ScentService and ScentRepo
    const { recommendations } = useReco(userNote);

    // gets all sale location data via the service and repository
    const locationData = useRecommendations();

    return (
        <section className="recommendations">
            <h2>Recommended For You</h2>

            {userNote.length === 0 && (
                <p className="recommendations__empty">
                    Add some notes on the homepage to get recommendations.
                </p>
            )}

            {userNote.length > 0 && recommendations.length === 0 && (
                <p className="recommendations__empty">
                    No recommendations found for your current notes.
                </p>
            )}

            <ul className="recommendations__list">
                {recommendations.map((rec: Fragrance) => {

                    // this will match the filtered fragrance to its sale locations from repository
                    const location = locationData.find((r) => r.fragrance.id === rec.id);

                    return (
                        <li key={rec.id} className="recommendations__item">
                            <h3 className="recommendations__name">{rec.name}</h3>
                            {location && (
                                <ul className="recommendations__locations">
                                    {location.saleLocations.map((l) => (
                                        <li key={l} className="recommendations__location">{l}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default Recommendations;