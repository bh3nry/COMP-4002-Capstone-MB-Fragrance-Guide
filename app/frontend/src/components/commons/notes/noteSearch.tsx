import "./noteSearch.css";


export function SearchInput({
    searchValue,
    messages,
    handleSearchChange
    }:
    {
        searchValue: string, 
        messages: string[],
        handleSearchChange: (newValue: string) => void
    }) {
    return (
        <form className="formContainer">
            <input
                type="text"
                value={searchValue}
                onChange={e => handleSearchChange(e.target.value)}
                placeholder="Search scent note..."
            />

            {messages?.map((message, index) => 
                <div 
                    className="error"
                    key={index}
                >
                    {message}
                </div>
            )}
        </form>
    );
};

export default SearchInput;