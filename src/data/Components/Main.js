import React, { Component } from 'react';
import Photowall from './PhotoWall'
import AddPhoto from './AddPhoto';
import Single from './Single';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'



class Main extends Component {

    state = {
        loading: true,
    }

    componentDidMount() {
    this.props.startLoadingPost().then(() => {
        this.setState({loading: false})
            
        })
        this.props.startLoadingComments()
    }
    
    render() {
    return (
        <>
            <h1>
                <Link to='/'>Photowall</Link>
            </h1> 
            <Route exact path="/" render={() => (
                 
                <div>                  
                    <Photowall {...this.props}  />
                </div>
            )} />
            <Route path="/AddPhoto" render={({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )} />
            
             <Route path="/single/:id" render={(params) => (
                <Single  {...this.props} loading = {this.state.loading} {...params} />
             )}/>
            
            
           
      </>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)

}

const mapStateToProps = (state) => ({
    posts: state.postsReducer,
    comments: state.commentsReducer
})

export default connect(mapStateToProps,mapDispatchToProps)(Main)