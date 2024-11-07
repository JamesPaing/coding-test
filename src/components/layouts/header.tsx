import React from 'react';
import SvgWrapper from '@/components/wrappers/SvgWrapper';
import { USER_BALANCE } from '@/data/sample.data';
import thousandSeperator from '@/helpers/thousand-separator';

const Header = () => {
    return (
        <nav className="flex items-center justify-between p-2 shadow-md">
            <div className="flex items-center justify-start">
                <SvgWrapper
                    className="w-4 h-4 mr-3"
                    src={'/assets/header/menu.svg'}
                    alt="Menu"
                />
                <SvgWrapper
                    className="w-auto h-5"
                    src={'/assets/header/fun88.svg'}
                    alt="FUN88"
                />
            </div>
            <div className="flex items-center justify-end">
                <div className="flex items-center">
                    <SvgWrapper
                        // -mt-1 is a style hack here
                        className="w-auto h-5 mr-2 -mt-1"
                        alt="Wallet"
                        src={'/assets/header/wallet.svg'}
                    />
                    <div className="text-lg font-semibold text-primary">
                        ${thousandSeperator(USER_BALANCE)}
                    </div>
                </div>
                <SvgWrapper
                    className="w-auto h-8 mx-2"
                    alt="divider"
                    src="/assets/header/divider.svg"
                />
                <SvgWrapper
                    alt="Account"
                    src="/assets/header/user.svg"
                    className="w-6 h-6"
                />
            </div>
        </nav>
    );
};

export default Header;
