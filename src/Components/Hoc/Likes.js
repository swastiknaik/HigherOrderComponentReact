import React from 'react'
import HOC from './Hoc'
function Likes({count,updateCount}) {
    return (
        <div>
             <span> Likes: {count}</span>
            <button onClick={updateCount}>update likes</button>
        </div>
    )
}
const EnhancedLikes = HOC(Likes, 5);
export default EnhancedLikes
