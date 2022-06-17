import React, { useCallback } from 'react'
import CommentItem from './CommentItem'

const Comments = ({commentList}) => {

    // useCallback는 특정 함수를 Memorization할때 사용
    const handleClick = () => {
        console.log('눌림');
    };

    return (
        <div>
            {commentList.map(comment => 
                <CommentItem
                    key={comment.id}
                    title={comment.title}
                    content={comment.content}
                    likes={comment.likes}
                    onClick={handleClick}
                />
            )}
        </div>
    )
}

export default Comments