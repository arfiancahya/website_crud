import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './post/postList.css';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDeletPost,  searchPost } from '../actions/actionPost';




class PostList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            offset: 0,
            posts: [],
            orgtableData: [],
            perPage: 10,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
        const data = this.state.orgtableData;

        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            posts: slice
        })

    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios
            .get(`/api/post/order`)
            .then(res => {
                console.log(res.data.data);

                const data = res.data.data;

                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);


                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData: res.data.data,
                    posts: slice
                })
            });
    }

    handleClick(id) {
        this.props.dispatch(getDeletPost(id));
        this.getData();
    }

    updateSeacrh(e) {
        this.props.dispatch(searchPost(e.target.value));
    }

    render() {
        let searchFilter = this.state.posts.filter((posts) => {
            return posts.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
        })
        return (
            <Fragment>
                <div>
                    <input type="search" name="search" placeholder="Search Post in Here ...." onChange={(e) => this.updateSeacrh(e)} />
                    <button>Search</button>
                </div>
                <div >
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Authors</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchFilter.map(posts => {
                                return <tr key={posts.id}>
                                    <td>{posts.title}</td>
                                    <td id="limit">{posts.description}</td>
                                    <td>{this.props.authors}</td>
                                    <td>
                                        <Link to={`post-list/${posts.id}`}><button className="details">Details</button></Link>
                                        <Link to={`edit/${posts.id}`}><button className="edit" >Edit</button></Link>
                                        <button type="button" className="remove" onClick={() => this.handleClick(posts.id)}>Remove</button>
                                    </td>
                                </tr>
                            })
                            }
                        </tbody>
                    </table>
                </div>


                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />

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
