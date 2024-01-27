export function Line({ width = '3rem', color = 'var(--white)' }: { width?: string, color?: string }) {
    const lineStyle = {
        height: '1px',
        width: width,
        backgroundColor: color,
        margin: '1rem 0'
    }

    return (
        <div style={lineStyle}></div>
    )
}
