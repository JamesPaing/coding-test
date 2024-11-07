import React, { SVGProps } from 'react';

const Close: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
            className="absolute w-5 h-5 transform -translate-y-1/2 cursor-pointer top-1/2 right-3"
            {...props}
        >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
    );
};

export default Close;
