import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDeletPost, getPostList } from '../actions/actionPost';


class PostList extends Component {
    handleClick(id) {
        this.props.dispatch(getDeletPost(id));
        this.props.dispatch(getPostList());
    }

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
                                    <Link to={`edit/${posts.id}`}><button className="edit" >Edit</button></Link>
                                    <button type="button" className="remove" onClick= {() => this.handleClick(posts.id)}>Remove</button>
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
