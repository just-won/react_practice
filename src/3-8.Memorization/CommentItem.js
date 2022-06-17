import React, { Profiler, memo, useState, useMemo } from 'react'
import './CommentItem.css'

const CommentItem = ({title, content, likes, onClick}) => {

    const [clickCount, setClickCount] = useState(0);

    function onRenderCallback (
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions
    ) {
        console.log(`actualDuration(${title} : ${actualDuration})`);
    }

    const handleClick = () => {
        onClick();
        setClickCount((prev) => prev + 1);
        alert(`${title} 눌림`);
    };

    // useMemo는 특정 값을 Memorization하기위해 사용
    const rate = useMemo(() => {
        console.log("rate check");
        return likes > 10 ? "Good" : "Bad";
    }, [likes]);

    return (
        <Profiler id="CommentItem" onRender={onRenderCallback}>
            <div className="CommentItem" onClick={handleClick}>
                <span>{title}</span>
                <br/>
                <span>{content}</span>
                <br/>
                <span>{likes}</span>
                <br/>
                <span>{rate}</span>
                <br/>
                <span>{clickCount}</span>
            </div>
        </Profiler>
    )
}

export default memo(CommentItem)