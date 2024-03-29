import axios from "axios";
import { useState } from "react"

function PostForm() {
  const [formData, setFormData] = useState({ 
    authorName: '',
  })
  const [formDataId, setFormDataId] = useState<number>();
  const [httpMethod, setHttpMethod] = useState<string>('post');

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
    setHttpMethod(e.target.value)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDataId(Number(e.target.value));  
  }
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
    console.log('click');
    e.preventDefault();
    if(httpMethod == 'post'){
        try {
            const response = await axios.post('http://localhost:3000/post', formData);
            console.log('Response:', response.data);
          } catch (error) {
            console.error('Error:', error);
          }
    }   
    else if(httpMethod == 'patch'){
        try {
            const response = await axios.patch('http://localhost:3000/post/'+formDataId, formData);
            console.log('Response:', response.data);
          } catch (error) {
            console.error('Error:', error);
          }
    }
    else if(httpMethod == 'delete'){
        try {
            const response = await axios.delete('http://localhost:3000/post/'+formDataId);
            console.log('Response:', response.data);
          } catch (error) {
            console.error('Error:', error);
          }
    }
    
  }
  return (
    <form onSubmit={handleSubmit}>
        <select onChange={selectChange}>
            <option value="post">Add</option>
            <option value="patch">Update</option>
            <option value="delete">Delete</option>
        </select>
        {httpMethod == 'post'? <>
            <input type="text" name="authorName" value={formData.authorName} onChange={handleChange} placeholder="authorName"/>
            <input type="submit" value="SUBMIT"/>
        </>
        :null}
        {httpMethod == 'patch'? <>
            <input type="number" name="id" value={formDataId} onChange={handleIdChange} placeholder="ID"/>
            <input type="text" name="authorName" value={formData.authorName} onChange={handleChange} placeholder="authorName"/>
            <input type="submit" value="SUBMIT"/>
        </>
        :null}
        {httpMethod == 'delete'? <>
            <input type="number" name="id" value={formDataId} onChange={handleIdChange} placeholder="ID"/>
            <input type="submit" value="SUBMIT"/>
        </>
        :null}
    </form>
  )
}

export default PostForm
