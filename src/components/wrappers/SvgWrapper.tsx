import Image, { ImageProps } from 'next/image';
import React from 'react';

const SvgWrapper: React.FC<ImageProps> = ({
    src,
    alt,
    width = 32,
    height = 32,
    className,
    ...resProps
}) => {
    return (
        <Image
            src={src}
            alt={alt || 'SVG Image'}
            width={width}
            height={height}
            {...resProps}
            className={className}
        />
    );
};

export default SvgWrapper;
