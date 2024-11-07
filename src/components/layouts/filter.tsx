'use client';

import React from 'react';
import SearchCategoryItem from '../filter/search-category-item';
import { categoryList } from '@/data/categories.data';
import CategoryItem from '../filter/category-item';
import { useRootContext } from '@/hooks/user-root-context';
import SearchInputArea from '../filter/search-input-area';

const Filter = () => {
    const { state, dispatch } = useRootContext();
    const {
        filters: { category, searchVisible },
    } = state;

    const handleClick = (categoryId: number) => {
        dispatch({ type: 'SET_FILTERS', payload: { category: categoryId } });
    };

    return (
        <div>
            <div className="flex gap-3 w-full px-4 pt-2 sticky top-[98px] overflow-y-hidden">
                <SearchCategoryItem />
                <div className="block w-[1px] h-[40px] bg-[#88888880]" />
                <div className="flex basis-[80%] items-center w-full gap-5 xl:gap-20 overflow-x-auto overflow-y-hidden hide-scrollbar snap-proximity snap-x">
                    {categoryList.map((cat, i) => (
                        <CategoryItem
                            active={category === cat.id}
                            onClick={() => handleClick(cat.id)}
                            key={i}
                            text={cat.text}
                            SvgComponent={cat.icon}
                        />
                    ))}
                </div>
            </div>
            {searchVisible && (
                <div className="w-full mt-1">
                    <SearchInputArea />
                </div>
            )}
        </div>
    );
};

export default Filter;
