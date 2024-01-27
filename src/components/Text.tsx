import { CSSProperties } from "react";
import { getColor } from "../utils/helper.tsx";

export function Text({ text, color, size, style }: { text: string, color?: string, size?: string, style?: CSSProperties }) {
    let fontSize: string;
    let lineHeight: string;

    switch (size) {
        case 'small':
            fontSize = '0.875rem';
            lineHeight = '1.25rem';
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
        <p style={paragraphStyle}>{text}</p>
    )
}
