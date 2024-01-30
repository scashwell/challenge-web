import { getColor } from "../utils/helper.tsx";

export function Line({ width = '3rem', color = 'white' }: { width?: string, color?: string }) {
    const lineStyle = {
        height: '1px',
        width: width,
        backgroundColor: getColor(color),
        margin: '1rem 0'
    }

    return (
        <div style={lineStyle}></div>
    )
}
