import React, { ReactNode } from 'react';

interface CoverProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;  // Add children prop of type ReactNode
}

const Banner: React.FC<CoverProps> = ({ subtitle, title, children }) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    );
}

export default Banner;
