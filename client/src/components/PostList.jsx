import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDeletPost, getPostList, searchPost } from '../actions/actionPost';



class PostList extends Component {
    handleClick(id) {
        this.props.dispatch(getDeletPost(id));
        this.props.dispatch(getPostList());
    }

    updateSeacrh(e) {
        this.props.dispatch(searchPost(e.target.value));
    }

    render() {
        let searchFilter = this.props.posts.filter((posts) => {
            return posts.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
        })
        const postItem = searchFilter.map(posts => {
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
                                    <button type="button" className="remove" onClick={() => this.handleClick(posts.id)}>Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        });
        return (
            <Fragment>
                <div>
                    <input type="search" name="search" placeholder="Search Post in Here ...." onChange={(e) => this.updateSeacrh(e)} />
                    <button>Search</button>
                </div>
                <table className="atas">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Authors</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
                {postItem}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.Post.posts,
        search: state.Post.search,
        authors: state.Post.authors
    }
}

export default connect(mapStateToProps, null)(PostList);
