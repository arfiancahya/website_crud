import React, { Fragment } from 'react';
import { BrowserRouter as Router,  Link } from "react-router-dom";


const Pages = (props) => {
    return (
        <Fragment>
            <Router>
                <div className="post">
                    <table>
                        <tbody>
                            <tr>
                                <td>{props.data.title}</td>
                                <td>{props.data.description}</td>
                                <td>Authors</td>
                                <td>
                                    <Link to="/edit"><button className="edit" onClick={() => props.edit(props.data)}>Edit</button></Link>
                                    <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Router>
        </Fragment>
    );
}

export default Pages;
