import React from 'react'


function AddPhoto(props) {

  const { onAddPhoto } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const imageLink = event.target.link.value;
    const description = event.target.description.value;
    const post = {
      id: Number(new Date()),
      imageLink: imageLink,
      description: description,
    }
    if (description && imageLink) {
      onAddPhoto(post)
    }
    
  }

  return (
    <>
      
      <h1>Photowall</h1>
      <div className="form">
      <form onSubmit={handleSubmit}>
        
        <input type="text" placeholder="LinK" name="link" />
          <input type="text" placeholder="Descriptions" name="description" />
          <button className="button">Post</button>
      </form>
      </div>
    </>
  );
}

export default AddPhoto
