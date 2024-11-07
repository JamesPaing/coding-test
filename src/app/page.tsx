import GameProvider from '@/components/game-provider/game-provider';
import GameList from '@/components/game/game-list';
import Banner from '@/components/layouts/banner';
import Filter from '@/components/layouts/filter';
import { RootContextProvider } from '@/contexts/root-context';
import React from 'react';

const page = () => {
    return (
        <RootContextProvider>
            <main className="flex flex-col h-screen">
                <Banner />
                <Filter />
                <GameList />
            </main>
            <GameProvider />
        </RootContextProvider>
    );
};

export default page;
