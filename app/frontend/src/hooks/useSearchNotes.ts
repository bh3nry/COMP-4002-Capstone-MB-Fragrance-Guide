import { useState } from "react";
import * as searchService from "../services/searchService";

export function useSearchNotes() {
    const [searchValue, setSearchValue] = useState<string>("");

    function trySearch(): {isValid: boolean, errors: string[]} {
        const validation = searchService.validateSearch(searchValue)

        return validation;
    };

    return {
        searchValue,
        setSearchValue,
        trySearch
    };
}