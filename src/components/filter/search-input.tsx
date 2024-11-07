import React, { useEffect, useState } from 'react';
import SearchIcon from '../assets/search-icon';
import { useRootContext } from '@/hooks/user-root-context';

const SearchInput = () => {
    const { dispatch, state } = useRootContext();
    const {
        filters: { search },
    } = state;

    const [searchInput, setSearchInput] = useState(search);

    // Debounce logic
    useEffect(() => {
        const handler = setTimeout(() => {
            dispatch({
                type: 'SET_FILTERS',
                payload: {
                    search: searchInput,
                },
            });
        }, 300); // Set debounce delay (e.g., 300ms)

        return () => {
            clearTimeout(handler); // Clear timeout if input changes before delay ends
        };
    }, [searchInput, dispatch]);

    const handleOnChangeSearch = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchInput(event.target.value); // Update local input value
    };

    // Handle clear search
    const handleOnClickClearSearch = () => {
        setSearchInput('');
        dispatch({
            type: 'SET_FILTERS',
            payload: {
                search: '',
            },
        });
    };

    return (
        <label className="relative block text-gray-400 basis-full focus-within:text-gray-600">
            <SearchIcon className="absolute w-5 h-5 transform -translate-y-1/2 cursor-pointer text-tertiary top-1/2 left-3" />
            <input
                autoComplete="off"
                value={searchInput}
                onChange={handleOnChangeSearch}
                type="text"
                name="Search"
                id="search"
                placeholder="Search Games"
                className="block w-full pl-10 py-[0.5rem] text-gray-500 placeholder-gray-400 bg-white border border-primary rounded-md appearance-none form-input focus:outline-none"
            />
            {search && search.length > 0 && (
                <svg
                    onClick={handleOnClickClearSearch}
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                    className="absolute w-5 h-5 transform -translate-y-1/2 cursor-pointer top-1/2 right-3"
                >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            )}
        </label>
    );
};

export default SearchInput;
