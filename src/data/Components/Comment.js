import React from 'react'



function Comment(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value          
        props.startAddingComment(comment, props.id)
        e.target.comment.value = ''
    }
    //console.log(comments)
    
    return (
        
        <div className='comment'>
            {
               
                props.comments.map((comment, index) => {
                    return(
                        <p key={index}> { comment }</p>
                    )
                }) 
            }
            <form className='comment-form' onSubmit={handleSubmit}> 
                <input type="text" placeholder="comment" name="comment" />
                <input type="submit" hidden/>
            </form>
            
        </div>
    )
}

export default Comment
