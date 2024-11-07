'use client';

import React, { useCallback, useState } from 'react';
import { footerData } from '@/data/footer.data';

const Footer = () => {
    const [activeTab, setActiveTab] = useState<string>('Sports');

    const isActiveTab = useCallback(
        (tabName: string): boolean => {
            return (
                activeTab.toLocaleLowerCase() === tabName.toLocaleLowerCase()
            );
        },
        [activeTab]
    );

    return (
        <footer
            className={
                'fixed bottom-0 w-full h-[60px] bg-white flex-none flex items-center justify-evenly'
            }
        >
            {footerData.map(({ title, Icon, id }) => {
                const isActive = isActiveTab(title);
                const textColor = isActive ? 'text-primary' : 'text-[#888888]';
                return (
                    <div
                        key={id}
                        className="flex flex-col items-center gap-0 cursor-pointer px-auto"
                        onClick={() => setActiveTab(title)}
                    >
                        <div
                            className={`p-1.5 aspect-square flex items-center justify-center ${
                                isActive
                                    ? 'bg-[url(/assets/footer/active-border.svg)] bg-no-repeat bg-center bg-cover'
                                    : ''
                            } ${textColor}`}
                        >
                            <Icon className="size-6" />
                        </div>
                        <span
                            className={`text-sm w-full text-wrap line-clamp-1 truncate overflow-hidden ${textColor}`}
                        >
                            {title}
                        </span>
                    </div>
                );
            })}
        </footer>
    );
};

export default Footer;
