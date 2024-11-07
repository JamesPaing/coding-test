import React, { useCallback } from 'react';
import SvgWrapper from '../wrappers/SvgWrapper';
import { Game } from '@/contexts/root-context';
import { useRootContext } from '@/hooks/user-root-context';
import Favorite from '../assets/favourite';
import NonFavorite from '../assets/non-favourite';
import Image from 'next/image';

interface GameItemProps extends React.HTMLProps<HTMLDivElement> {
    game: Game;
}

const GameItem: React.FC<GameItemProps> = ({ game, ...divProps }) => {
    const {
        dispatch,
        state: { favourites },
    } = useRootContext();

    const handleOnClickFavourite = useCallback(
        (gameId: number) => {
            const newFavourites = new Set(favourites);

            if (newFavourites.has(gameId)) {
                newFavourites.delete(gameId);
            } else {
                newFavourites.add(gameId);
            }

            dispatch({
                type: 'SET_FAVOURITES',
                payload: Array.from(newFavourites),
            });
        },
        [dispatch, favourites]
    );

    return (
        <div className="relative overflow-hidden rounded-lg" {...divProps}>
            {/* <div
                onClick={() => handleOnClickFavourite(game.id!)}
                className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 font-bold text-white cursor-pointer rounded-tr-md"
                style={{
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                    backgroundColor: 'rgba(169, 169, 169, 0.4)', // Transparent gray background
                }}
            > */}
            <div
                onClick={() => handleOnClickFavourite(game.id!)}
                className="absolute top-0 right-0 w-8 h-8 font-bold text-white bg-no-repeat cursor-pointer bg-fav-mask"
            >
                <div className="absolute top-[1px] right-[1px]">
                    {favourites?.includes(game.id!) ? (
                        <Favorite className="size-4" />
                    ) : (
                        <NonFavorite className="size-4" />
                    )}
                </div>
            </div>

            <SvgWrapper
                width={512}
                height={512}
                sizes="xl"
                loading="lazy"
                className="w-full h-full col-start-1 row-start-1 bg-cover rounded-md"
                unoptimized
                quality={100}
                alt={game.name}
                src={game.image}
            />
        </div>
    );
};

export default GameItem;
