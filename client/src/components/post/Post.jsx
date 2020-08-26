import React, { Fragment } from 'react';

const post = (props) => {
    return (
        <Fragment>
            <div className="main">
                <div className="judul">
                    <h2>Post</h2>
                    <p>Dashboard - Post</p>
                </div>

                <div className="card">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Add Title" onChange={props.form} />
                    <label htmlFor="description">Blog Content</label>
                    <textarea name="description" id="description" cols="50" rows="10" placeholder="Add Content" onChange={props.form} />
                    <button className="publish">Publish</button>
                </div>
            </div>
        </Fragment>
    );
}

export default post;
