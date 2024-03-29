import './FormComponent.style.scss';
import CommentForm from './Forms/CommentForm';
import PostForm from './Forms/PostForm';
import ProfileForm from './Forms/ProfileForm';
import TagForm from './Forms/TagForm';
import UserForm from './Forms/UserForm';

interface FormComponentProps{
    tableName: string
}

function FormComponent({tableName}: FormComponentProps) {

  return (
    <div className='mainFormContainer'>
        {tableName == 'user' ? <UserForm/>: null}
        {tableName == 'profile' ? <ProfileForm/>: null}
        {tableName == 'post' ? <PostForm/>: null}
        {tableName == 'comment' ? <CommentForm/>: null}
        {tableName == 'tag' ? <TagForm/>: null}
    </div>
  )
}

export default FormComponent
