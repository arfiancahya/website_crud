import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class FilelList extends Component {
    render() {
        // let searchFilter = this.state.files.filter((files) => {
        //     return files.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
        // })
        return (
            <Fragment>
                <div>
                    {/* <input type="search" name="search" placeholder="Search Post in Here ...." onChange={(e) => this.updateSeacrh(e)} />
                    <button>Search</button> */}
                </div>
                <div >
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Authors</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.files.map(files => {
                                return <tr key={files.id}>
                                    <td>{files.name}</td>
                                    <td id="limit">{files.type}</td>
                                    <td>{this.props.authors}</td>
                                    {/* <td>
                                        <Link to={`detail/${posts.id}`}><button className="details">Details</button></Link>
                                        <Link to={`edit/${posts.id}`}><button className="edit" >Edit</button></Link>
                                        <button type="button" className="remove" onClick={() => this.handleClick(posts.id)}>Remove</button>
                                    </td> */}
                                </tr>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        files: state.File.files,
        search: state.Post.search,
        authors: state.Post.authors
    }
}

export default connect(mapStateToProps, null)(FilelList);
