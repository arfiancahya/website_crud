import React, { Fragment } from 'react';


const Post = (props) => {
    return (
        <Fragment>
            <div className="post">
            <table>
                <tbody>
                    <tr> 
                        <td>{props.data.title}</td>
                        <td>{props.data.description}</td>
                    </tr>
                </tbody>
            </table> 

            <button className="remove" onClick={() => props.remove(props.data.id)}>Edit</button>
            </div>
        </Fragment>
    );
}

export default Post;
