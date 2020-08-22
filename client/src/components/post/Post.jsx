import React from 'react';

const Post = (props) => {
    return (
        <div className = "post">
            <div className= "foto">
                <h1>Hallo</h1>
            </div>

            <div className="konten">
                <p className="title"> {props.title} </p>
                <p className="body" > {props.body} </p>
            </div>
            
        </div>
    );
}

export default Post;
