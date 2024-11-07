import { Game, RootContext } from '@/contexts/root-context';
import gamesData from '@/data/games.data';
import { useEffect, useContext, useMemo } from 'react';

const useFetchGames = () => {
    const { state, dispatch } = useContext(RootContext);

    const fetchGames = async () => {
        dispatch({ type: 'SET_GAMES_LOADING', payload: true });

        try {
            // Extract filter values
            const { category, search, gameProviders } = state.filters;

            // Mocking the API call with filters included
            const result = await new Promise<Game[]>((resolve) => {
                setTimeout(() => {
                    const filteredData = gamesData.filter((game) => {
                        let matches = true;

                        // Apply category filter if exists
                        if (category && game.category !== category) {
                            matches = false;
                        }

                        // Apply search filter if exists
                        if (
                            search &&
                            !game.name
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        ) {
                            matches = false;
                        }

                        // Apply game provider filter if exists
                        if (
                            gameProviders &&
                            gameProviders.length > 0 &&
                            !gameProviders.includes(game.provider!)
                        ) {
                            matches = false;
                        }

                        return matches;
                    });

                    resolve(filteredData);
                }, 3000);
            });

            dispatch({ type: 'SET_GAMES', payload: result });
        } catch (error) {
            console.error('Failed to fetch items:', error);
            dispatch({ type: 'SET_GAMES_LOADING', payload: false });
        }
    };

    // Memoize specific filter values for dependency tracking
    const filtersToWatch = useMemo(() => {
        const { category, search, gameProviders } = state.filters;
        return { category, search, gameProviders };
    }, [
        state.filters.category,
        state.filters.search,
        state.filters.gameProviders,
    ]);

    useEffect(() => {
        fetchGames();
    }, [filtersToWatch]); // Refetch whenever filters change
};

export default useFetchGames;
