import React, { ReactNode } from 'react';

interface CoverProps {
    coverClass?: string;
    children?: ReactNode;  // Add children prop of type ReactNode
}

const Cover: React.FC<CoverProps> = (props) => {
    const { coverClass, children } = props;
    return (
        <header className={coverClass}>
            {children}
        </header>
    );
}

export default Cover;

Cover.defaultProps = {
    coverClass: "defaultHero"
};
