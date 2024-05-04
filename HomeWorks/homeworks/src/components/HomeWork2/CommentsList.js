// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку 
// для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.
import React, { useState } from 'react';
import './CommentsList.css';

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "First comment" },
        { id: 2, text: "Second comment" },
        { id: 3, text: "Third comment" }
    ]);

    const handleDeleteBtn = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };


    return (
        <div className='comments-wrap'>
            <ul className='comments-list'>
                {comments.map((comment) =>
                    <div key={comment.id} className='comment-wrap'>
                        <li className='comment'>{comment.text}</li>
                        <button className='delete-btn' onClick={() => handleDeleteBtn(comment.id)}>Delete</button>
                    </div>
                )}
            </ul>
        </div>
    );
}

export default CommentsList;