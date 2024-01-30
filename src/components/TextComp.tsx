import { CSSProperties, ReactNode } from "react";
import { getColor } from "../utils/helper.tsx";

export function TextComp({ children, color, size, style }: {
    children: ReactNode,
    color?: string,
    size?: string,
    style?: CSSProperties
}) {
    let fontSize: string;
    let lineHeight: string;

    switch (size) {
        case 'extra-small':
            fontSize = '0.75rem';
            lineHeight = '1rem';
            break;
        case 'small':
            fontSize = '0.875rem';
            lineHeight = '1.25rem';
            break;
        case 'extra-large':
            fontSize = '1.5rem';
            lineHeight = '2rem';
            break;
        default:
            fontSize = '1rem';
            lineHeight = '1.5rem';
    }

    const paragraphStyle: CSSProperties = {
        color: getColor(color),
        fontSize: fontSize,
        lineHeight: lineHeight,
        ...style
    }
    return (
        <p style={paragraphStyle}>{children}</p>
    )
}
