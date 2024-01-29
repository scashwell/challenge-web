import { useState } from "react";
import { VideoCategory, Video } from "../types.tsx";
import { useData } from "../utils/apiUtils.tsx";
import { convertTimeStringToMinutes, getColor, scrollToElement, truncate } from "../utils/helper.tsx";
import { BibleProjectLogo } from "./BibleProjectLogo.tsx";
import { Line } from "./Line.tsx";
import { RightChevron } from "./RightChevron.tsx";
import { Tag } from "./Tag.tsx";
import { Text } from "./Text.tsx";
import { YouTubeElement } from "./YouTubeElement.tsx";

const SCREEN_WIDTH_BREAKPOINT = 1024;

function VideoTile({ video, onSelectVideo }: { video: Video, onSelectVideo: (video: Video) => void }) {
    const { title, description, subtitle, images } = video;

    const handleClick = () => {
        onSelectVideo(video);
    };

    return (
        <li className='video-tile'>
            <img
                className='preview-image'
                onClick={handleClick}
                src={images.small}
                alt={`${title} preview`}/>
            {video._new && <Tag text='NEW' />}
            <Text
                text={title}
                style={{ marginTop: '0.5rem', fontWeight: '500' }}/>
            <Text
                text={truncate(description, 100)}
                color='light-gray'
                size='small'
                style={{ marginTop: '0.5rem' }}/>
            <div className='video-tile-footer'>
                <Text
                    text={convertTimeStringToMinutes(subtitle)}
                    color='light-gray'
                    size='small'
                    style={{ fontWeight: '500' }}/>

                <div
                    className='circle'
                    onClick={handleClick}
                >
                    <RightChevron/>
                </div>
            </div>
        </li>
    )
}

function VideoList({ videos, onSelectVideo }: { videos: Video[], onSelectVideo: (video: Video) => void }) {
    const videoList = videos.map((video, index) => {
        if (index === 0) {
            video._new = true;
        }
        return (
            <VideoTile
                video={video}
                key={video.id}
                onSelectVideo={onSelectVideo}
            />
        )
    })

    return (
        <ul className='video-list'>{videoList}</ul>
    )
}

function VideoCategorySection({ videoCategory, selectedVideo, error }: {
    videoCategory: VideoCategory,
    selectedVideo: Video | null,
    error: string | null
}) {

    const { title, description } = videoCategory;

    return (
        <div
            id='video-category-container'
            className='video-category-container'
        >
            <div className='video-category-description'>
                <h1 style={{ color: getColor('white') }}>{title}</h1>
                <Line/>
                <Text
                    color="white"
                    text={description}
                    style={{ fontWeight: '500' }}
                />
            </div>
            <div>
                {error &&
                    <Text
                        text={error}
                        color='white'
                        style={{ textAlign: 'center' }}
                    />
                }
                {selectedVideo &&
                    <YouTubeElement
                        videoId={selectedVideo.youtubeId}
                        title={selectedVideo.title}
                    />
                }
            </div>
        </div>
    )
}

export const App = () => {
    const result = useData('api/data.json') as { data: { videoCategory: VideoCategory } };
    const [ selectedVideo, setSelectedVideo ] = useState<Video | null>(null);
    const [ error, setError ] = useState<string | null>(null);

    const handleVideoSelect = (video: Video) => {
        const urlParams = new URLSearchParams(window.location.search);
        setError(null);

        scrollToElement('video-category-container', window.innerWidth < SCREEN_WIDTH_BREAKPOINT ? 'center' : 'start');

        if (urlParams.has('debug') && Math.random() > .7) {
            setSelectedVideo(null);
            setError("There's been an error. Please try again.");
            return;
        } else {
            setSelectedVideo(video);
        }
    }

    return (
        <>
            <div className='banner background-image'>
                <div className='page-container'>
                    <BibleProjectLogo/>
                    {result &&
                        <VideoCategorySection
                            videoCategory={result.data.videoCategory}
                            selectedVideo={selectedVideo}
                            error={error}
                        />
                    }
                </div>
            </div>
            <div className='page-container'>
                {result &&
                    <VideoList
                        videos={result.data.videoCategory.videos}
                        onSelectVideo={handleVideoSelect}
                    />
                }
            </div>
        </>
    );
};
