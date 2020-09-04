import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class PostList extends Component {
    render() {
        const postItem = this.props.posts.map(posts => {
            return (
                <div key={posts.id}>
                    <table>
                        <tbody>
                            <tr>
                                <td>{posts.title}</td>
                                <td>{posts.description}</td>
                                <td>{this.props.authors}</td>
                                <td>
                                    <button className="edit" >Edit</button>
                                    <button className="remove">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        });
        return (
            <Fragment>
                {postItem}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.Post.posts,
        authors: state.Post.authors
    }
}

export default connect(mapStateToProps, null)(PostList);
