function getColor(color = 'dark-gray') {
    return color.startsWith('#') ? color : `var(--${color})`
}

function truncate(value: string, limit: number) {
    if (value.length > limit) {
        // Find the closest space so that we don't truncate in the middle of a word
        const lastSpaceIndex = value.lastIndexOf(' ', limit);

        return value.slice(0, lastSpaceIndex).trimEnd() + '...';
    }
    return value;
}

function convertTimeStringToMinutes(timeString: string) {
    const [minutes, seconds] = timeString.split(':').map(Number);

    // Calculate the total duration in minutes
    const totalMinutes = minutes + Math.round(seconds / 60);

    // Create the human-readable format
    return totalMinutes === 1 ? `${totalMinutes} minute` : `${totalMinutes} minutes`;
}

function scrollToElement(elementId: string, position: ScrollLogicalPosition = 'start') {
    const element = document.getElementById(elementId);

    if (element) {
        const rect = element.getBoundingClientRect();

        // Check if the element is already in view
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth
        ) {
            return;
        }

        element.scrollIntoView({ behavior: 'smooth', block: position });
    }
}

export {
    getColor,
    truncate,
    convertTimeStringToMinutes,
    scrollToElement
}
