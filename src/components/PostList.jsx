import React from 'react';
import PostItem from '../components/PostItem'

class PostList extends React.Component{
    constructor(props) {
        super(props);
    }
render(){
    return(
        <div>
           {
               this.props.posts.map((post) => {
                    return <PostItem
                        userId = {post.userId}
                        id = {post.id}
                        title = {post.title}
                        body = {post.body}
                    />
                })
           } 
        </div>
    )

}
}

export default PostList;