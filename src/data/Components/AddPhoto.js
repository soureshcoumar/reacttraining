import React from 'react'

function AddPhoto(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const imageLink = event.target.link.value
    const description = event.target.description.value
    const post = {
      id: Number(new Date()),
      imageLink: imageLink,
      description: description,
    }
    if (description && imageLink) {
      props.startAddingPost(post)
      props.onHistory.push('/')
    }
  }

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="LinK" name="link" />
          <input type="text" placeholder="Descriptions" name="description" />
          <button className="button">Post</button>
        </form>
      </div>
    </>
  )
}

export default AddPhoto
