import React, { useCallback } from 'react';
import SearchMenu from '../assets/search-icon';
import CategoryItem from './category-item';
import { useRootContext } from '@/hooks/user-root-context';

interface SearchProps extends React.HTMLProps<HTMLDivElement> {}

const SearchCategoryItem: React.FC<SearchProps> = ({}) => {
    const { state, dispatch } = useRootContext();

    // Memoize the handler to avoid unnecessary re-creations
    const handleOnClickSearchCategory = useCallback(() => {
        const newVisibility = !state.filters.searchVisible;
        if (newVisibility !== state.filters.searchVisible) {
            dispatch({
                type: 'SET_SEARCH_VISIBILITY',
                payload: newVisibility,
            });
        }
    }, [state.filters.searchVisible, dispatch]);

    return (
        <div
            onClick={handleOnClickSearchCategory}
            className="flex flex-col items-center basis-[15%]"
        >
            <CategoryItem
                active={state.filters.searchVisible}
                SvgComponent={SearchMenu}
                text="search"
            />
        </div>
    );
};

export default SearchCategoryItem;
