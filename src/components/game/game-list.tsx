'use client';

import React, { useMemo } from 'react';
import GameItem from './game-item';
import SkeletonLoading from '../layouts/skeleton-loading';
import { useRootContext } from '@/hooks/user-root-context';
import useFetchGames from '@/hooks/use-fetch-game';
import { Game } from '@/contexts/root-context';

const GameList = () => {
    useFetchGames();

    const { state } = useRootContext();
    const {
        games: { data, loading },
    } = state;

    const hasGames = !loading && data.length > 0;

    // Generate skeleton loaders
    const skeletonLoaders = useMemo(
        () =>
            Array.from({ length: 12 }, (_, i) => (
                <SkeletonLoading key={i} className="" />
            )),
        []
    );

    return (
        <div className="grid grid-cols-3 gap-2 px-4 mt-1 overflow-y-auto">
            {hasGames
                ? data.map((game: Game) => (
                      <GameItem key={game.id} game={game} />
                  ))
                : skeletonLoaders}
        </div>
    );
};

export default GameList;
