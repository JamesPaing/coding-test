import React, { FC, SVGProps } from 'react';

interface CategoryItemProps extends React.HTMLProps<HTMLDivElement> {
    SvgComponent: FC<SVGProps<SVGSVGElement>>;
    text: string;
    active?: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
    text,
    SvgComponent,
    onClick,
    active,
}) => {
    const textColor = active ? 'text-primary underline' : 'text-tertiary';

    return (
        <div
            onClick={onClick}
            className="flex flex-col items-center w-auto gap-0 cursor-pointer px-auto snap-start"
        >
            <SvgComponent className={textColor} />
            <div
                className={`flex-1 -mt-1 text-sm uppercase text-nowrap ${textColor}`}
            >
                {text}
            </div>
        </div>
    );
};

export default CategoryItem;
