'use client';

import { useRootContext } from '@/hooks/user-root-context';
import gameProvidersData from '@/data/game-providers.data';
import React, { useEffect, useState, useCallback } from 'react';
import SvgWrapper from '../wrappers/SvgWrapper';
import SearchMenu2 from '../assets/search-menu-icon';

const GameProvider = () => {
    const [selectedProviderIds, setSelectedProviderIds] = useState<number[]>(
        []
    );
    const {
        state: {
            gameProvider: { visible },
            filters: { gameProviders },
        },
        dispatch,
    } = useRootContext();

    // Use useCallback to memoize the click handler
    const handleOnClickProvider = useCallback((gameProviderId: number) => {
        setSelectedProviderIds((prevIds) =>
            prevIds.includes(gameProviderId)
                ? prevIds.filter((id) => id !== gameProviderId)
                : [...prevIds, gameProviderId]
        );
    }, []);

    const handleOnClickProviderClose = () => {
        dispatch({
            type: 'SET_GAME_PROVIDER_VISIBILITY',
            payload: false,
        });
    };

    useEffect(() => {
        if (selectedProviderIds !== gameProviders) {
            dispatch({
                type: 'SET_FILTERS',
                payload: {
                    gameProviders: selectedProviderIds,
                },
            });
        }
    }, [selectedProviderIds, gameProviders, dispatch]);

    return (
        <>
            {visible && <div className="fixed inset-0 z-40 bg-black/50" />}
            <div
                className={`fixed bottom-0 left-0 right-0 bg-white z-50 h-[75vh] max-h-screen  
                    transform ${visible ? 'translate-y-0' : 'translate-y-full'} 
                    transition-transform duration-300 overflow-y-auto`}
                style={{ visibility: visible ? 'visible' : 'hidden' }}
            >
                <div className="flex items-center justify-between px-3 py-2 text-white bg-primary">
                    <div className="flex gap-2">
                        <SearchMenu2 className="size-6" />
                        <span>Game Provider</span>
                        <div className="flex items-center justify-center w-[50px] border border-white rounded-full">
                            119
                        </div>
                    </div>
                    <div
                        onClick={handleOnClickProviderClose}
                        className="text-white"
                    >
                        <SvgWrapper
                            alt="Close"
                            src="/assets/close.svg"
                            className="size-4"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 p-3">
                    {gameProvidersData.map((g) => {
                        const isSelected = gameProviders?.includes(g.id);
                        return (
                            <div
                                key={g.id}
                                onClick={() => handleOnClickProvider(g.id)}
                                className={`${
                                    isSelected ? 'border border-primary' : ''
                                } flex items-center justify-center rounded-md box-content bg-light-gray`}
                            >
                                <SvgWrapper
                                    unoptimized
                                    className="w-[100px]"
                                    alt={g.name}
                                    src={g.icon}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default GameProvider;
