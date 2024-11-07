import React from 'react';
import SearchMenuIcon from '../assets/search-menu-icon';
import { useRootContext } from '@/hooks/user-root-context';
import SearchInput from './search-input';

const SearchInputArea = () => {
    const { dispatch } = useRootContext();

    // Handle game provider visibility
    const handleOnClickGameProvider = () => {
        dispatch({
            type: 'SET_GAME_PROVIDER_VISIBILITY',
            payload: true,
        });
    };

    return (
        <div className="flex w-full px-4 mb-4">
            <SearchInput />
            <div className="basis-[20%] cursor-pointer max-w-[44px] rounded-md ml-3 py-[0.5rem] flex items-center justify-center border border-tertiary">
                <SearchMenuIcon
                    onClick={handleOnClickGameProvider}
                    className="size-5 text-tertiary"
                />
            </div>
        </div>
    );
};

export default SearchInputArea;
