import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { addDoc,collection } from 'firebase/firestore';
import {yupResolver} from '@hookform/resolvers/yup';
import { auth,db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
interface CreateFormData{
    title:string,
    description:string,
    name:string
}
export function Form(){
    const [user,loading,error] = useAuthState(auth);
    const navigate = useNavigate();
    const schema = yup.object().shape({
        title:yup.string().required("Please add title..."),
        description:yup.string().required("Please write description..."),
        name:yup.string().required("Please write Company Name..."),
    });
    const {register,handleSubmit,formState:{errors}} = useForm<CreateFormData>({
        resolver:yupResolver(schema),
    });
    const postRef = collection(db,'Post');
    const onCreatePost=async(data:CreateFormData)=>{
       await addDoc(postRef,{
            // Title:data.title,
            // JobDescription:data.description,
            // CompanyName:data.name,
            ...data,
            UserName:user?.displayName,
            JobID:user?.uid
        });
        navigate('/');
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onCreatePost)}>
                <input placeholder='Title...' {...register('title')}/>
                <p style={{color:"red"}}>{errors.title?.message}</p>
                <input placeholder='Company Name...' {...register('name')}/>
                <p style={{color:"red"}}>{errors.name?.message}</p>
                <input placeholder='Description...' {...register('description')}/>
                <p style={{color:"red"}}>{errors.description?.message}</p>
                {/* <input placeholder='ID...'/> */}
                <input type="submit"/>
            </form>
        </div>
    );
}