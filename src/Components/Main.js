import React, { Component } from 'react';
import Title from './Title';
import Photowall from './PhotoWall'
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'


class Main extends Component {
    constructor() {
        super();              
     
    }


  render() {
    return (
        <>
            <Route exact path="/" render={() => (
                <div>
                    <Title title={'Photowall'} />
                    {/* <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}  /> */}
                </div>
            )} />
            <Route path="/AddPhoto" render={({history}) => (
                {/* <AddPhoto onAddPhoto={(addedPost) => {
                    console.log(addedPost)
                    this.addPhoto(addedPost)
                    history.push("/")
                }}/> */}
             )}/>
            
           
      </>
    )
  }
}

const mapStateToProps = (state) => ({
    posts:state
})

export default connect(mapStateToProps)(Main)