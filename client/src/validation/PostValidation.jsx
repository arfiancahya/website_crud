  
const PostValidation = (values) => {
    const errors = {};
  
    if (!values.title || values.title === "") {
      errors.title = "Judul harus diisi";
    }
  
    if (!values.description || values.description === "") {
      errors.description = "Content harus diisi";
    }
  
  
    return errors
  };
  
  export default PostValidation;