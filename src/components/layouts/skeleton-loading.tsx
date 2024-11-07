import React from 'react';

interface SkeletonLoadingPorps extends React.HTMLProps<HTMLDivElement> {}

const SkeletonLoading: React.FC<SkeletonLoadingPorps> = (props) => {
    return (
        <div
            {...props}
            className={
                'w-full h-full bg-gray-300 rounded-md animate-pulse grid aspect-square'
            }
        ></div>
    );
};

export default SkeletonLoading;
