import React, { Fragment } from 'react';


const Pages = (props) => {
    return (
        <Fragment>
            <div className="post">
            <table>
                <tbody>
                    <tr> 
                        <td>{props.data.title}</td>
                        <td>{props.data.description}</td>
                        <td>Authors</td>
                        <td>
                            <button className="edit" onClick={() => props.edit(props.data.id)}>Edit</button>
                            <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table> 
            </div>
        </Fragment>
    );
}

export default Pages;
