import { useState } from 'react';

export function useHeart(initialValue = false) {
    const [liked, setLiked] = useState(initialValue);

    const toggleLike = () => setLiked((prev) => !prev);

    return { liked, toggleLike };
}