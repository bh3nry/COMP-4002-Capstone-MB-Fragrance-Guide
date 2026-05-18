import { useState } from "react";
import type { SearchBarProps } from "./search-data";
import "./searchbar.css";

export function SearchBar({ onSearch, placeholder = "Search" }: SearchBarProps) {
    const [query, setQuery] = useState("");

    return (
        <form className="search-bar-wrapper" action="#"
            onSubmit={(e) => { e.preventDefault(); onSearch?.(query); }}>

            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="5" stroke="#92927D" strokeWidth="1.8" />
                <line x1="12" y1="12" x2="17" y2="17" stroke="#92927D" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="search-input"
            />

            {query.length > 0 && (
                <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="clear-button"
                    aria-label="Clear search"
                >
                    X
                </button>
            )}

            <input type="submit" value="Search" className="submit-button" />
        </form>
    );
}

export default SearchBar;