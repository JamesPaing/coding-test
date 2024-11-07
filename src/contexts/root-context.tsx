'use client';

import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';

// Define the structure of the game
export interface Game {
    id?: number;
    name: string;
    image: string;
    category?: number;
    provider?: number;
}

// Define the structure of game provider
export interface GameProvider {
    id?: number;
    name: string;
    icon: string;
}

interface RootContextProps {
    gameProvider: {
        loading: boolean;
        data: GameProvider[];
        visible: boolean;
    };
    filters: {
        category?: number;
        search?: string;
        searchVisible?: boolean;
        gameProviders?: number[];
        loading?: boolean;
    };
    games: {
        loading: boolean;
        data: Game[];
    };
    favourites: number[];
}

// Define action types
type RootAction =
    | { type: 'SET_GAME_PROVIDERS_LOADING'; payload: boolean }
    | { type: 'SET_GAME_PROVIDERS'; payload: GameProvider[] }
    | { type: 'SET_GAME_PROVIDER_VISIBILITY'; payload: boolean }
    | { type: 'SET_GAMES_LOADING'; payload: boolean }
    | { type: 'SET_GAMES'; payload: Game[] }
    | { type: 'SET_FILTERS_LOADING'; payload: boolean }
    | { type: 'SET_FILTERS'; payload: Partial<RootContextProps['filters']> }
    | { type: 'SET_SEARCH_VISIBILITY'; payload: boolean }
    | { type: 'SET_FAVOURITES'; payload: number[] };

// Define the context type
export interface GameContextProps {
    state: RootContextProps;
    dispatch: Dispatch<RootAction>;
}

const setDataState = (
    state: RootContextProps,
    key: keyof RootContextProps,
    data: Partial<RootContextProps[keyof RootContextProps]>
): RootContextProps => ({
    ...state,
    [key]: {
        ...state[key],
        loading: false,
        ...data,
    },
});

const setLoadingState = (
    state: RootContextProps,
    key: keyof RootContextProps,
    loading: boolean
): RootContextProps => ({
    ...state,
    [key]: {
        ...state[key],
        loading,
    },
});

// Initial state
const initialState: RootContextProps = {
    gameProvider: {
        data: [],
        loading: false,
        visible: false,
    },
    filters: {
        category: 1,
        gameProviders: [],
        loading: false,
        search: '',
        searchVisible: false,
    },
    games: {
        data: [],
        loading: false,
    },
    favourites: [],
};

// Reducer function
const rootReducer = (
    state: RootContextProps,
    action: RootAction
): RootContextProps => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_GAME_PROVIDERS_LOADING':
            return setLoadingState(state, 'gameProvider', payload);
        case 'SET_GAME_PROVIDERS':
            return setDataState(state, 'gameProvider', { data: payload });
        case 'SET_GAMES_LOADING':
            return setLoadingState(state, 'games', payload);
        case 'SET_GAMES':
            return setDataState(state, 'games', { data: payload });
        case 'SET_FILTERS_LOADING':
            return setLoadingState(state, 'filters', payload);
        case 'SET_FILTERS':
            return setDataState(state, 'filters', payload);
        case 'SET_SEARCH_VISIBILITY':
            return setDataState(state, 'filters', { searchVisible: payload });
        case 'SET_GAME_PROVIDER_VISIBILITY':
            return setDataState(state, 'gameProvider', { visible: payload });
        case 'SET_FAVOURITES':
            return { ...state, favourites: payload };
        default:
            return state;
    }
};

// Create context
export const RootContext = createContext<GameContextProps>({
    state: initialState,
    dispatch: () => {},
});

// Provider component
export const RootContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer<
        React.Reducer<RootContextProps, RootAction>
    >(rootReducer, initialState);

    return (
        <RootContext.Provider value={{ state, dispatch }}>
            {children}
        </RootContext.Provider>
    );
};
