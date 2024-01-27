export function YouTubeElement({ videoId, title = 'YouTubeVideo' }: { videoId: string, title?: string }) {
    return (
        <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%'}}>
            <iframe
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '0.75rem',
                    border: 'none',
                    maxHeight: '90vh'
                }}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow='autoplay'
                allowFullScreen
            ></iframe>
        </div>
    )
}
