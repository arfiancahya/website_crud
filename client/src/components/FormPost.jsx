import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';

const renderInput = (props) => (
    <input  {...props.input} type="text" />
)

const mapStateToProps = (state) => {
    return {
        title: state.Post.posts.title,
        description: state.Post.posts.description,
        authors: state.Post.authors
    }
}


class FormPost extends Component {
    render() {
        const FormPost = props => {
            const { handleSubmit, pristine, reset, submitting } = this.props
            return (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title</label>
                        <div>
                            <Field
                                name="title"
                                component={renderInput}
                                type="text"
                                placeholder="Add Your Title"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Content</label>
                        <div>
                            <Field name="description" component="textarea" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" > Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                    </div>
                </form>
            );
        }
        return (
            <Fragment>
                <FormPost />
            </Fragment>
        );
    }
}

FormPost = reduxForm({
    form: "formCreatePost",
    enableReinitialize: true,
})(FormPost);

export default connect(mapStateToProps, null)(FormPost);
