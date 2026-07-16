import React from "react";
import useReco from "../../../hooks/useReco";
import { useLocation } from "../../../hooks/useLocation";
import "./location.css";

/**
 * Component for displaying fragrance recommendations on the profile page.
 * Uses useReco to call ScentService.findCologne, which then calls
 * ScentRepo.getAllFragrances to filter the fragrances by their matching notes.
 * useLocation calls locService, which then calls
 * locRepo.getAll to look up fragrance sale locations
 * @param userNote array of note strings added on the homepage via shared context
 * @returns a JSX element that renders a list of recommended fragrances with sale locations
 */
const Recommendations = ({ userNote }: { userNote: string[] }): React.JSX.Element => {

    // filters fragrances by notes via ScentService and ScentRepo
    const { recommendations } = useReco(userNote);

    // gets all sale location data via the service and repository
    const locationData = useLocation();

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
                {recommendations.map((rec) => {

                    // this will match the filtered fragrance to its sale locations
                    const location = locationData.find((r) => r.fragranceId === rec.id);

                    return (
                        <li key={rec.id} className="recommendations__item">
                            <h3 className="recommendations__name">{rec.Name}</h3>
                            {location && location.saleLocations && (
                            <ul className="recommendations__locations">
                                {location.saleLocations.map((l: { name: string }) => (
                                    <li key={l.name} className="recommendations__location">{l.name}</li>
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