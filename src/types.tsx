type ImageSizes = {
    large: string;
    medium: string;
    mini: string;
    small: string;
}

type Video = {
    color: string;
    description: string;
    id: string;
    durationSeconds: number;
    images: ImageSizes;
    shareUrl: string;
    subtitle: string;
    title: string;
    publishDate: string;
    youtubeId: string;
}

type VideoCategory = {
    title: string;
    color: string;
    description: string;
    id: string;
    images: ImageSizes;
    numVideos: number;
    videos: Video[];
}

export type {
    VideoCategory,
    Video
}
