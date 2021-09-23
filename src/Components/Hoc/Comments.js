import React from 'react'
import HOC from './Hoc'

 function Comments({count,updateCount}) {
    return (
        <div>
           <span> Comments: {count}</span>
            <button onClick={updateCount}>update Comments</button>
        </div>
    )
}

const EnhancedComments=HOC(Comments)
export default EnhancedComments;
