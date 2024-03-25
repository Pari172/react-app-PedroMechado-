import {Post as Ipost} from './Main';
interface Props{
    post: Ipost;
}
export const ShowPost=(props:Props)=>{
    const {post} = props;
    return (
        <div className=''>
            <div className='title'>
                <h1>{post.title}</h1>
            </div>
            <div className='name'>
                <h1>{post.name}</h1>
            </div>
            <div className='description'>
                <h1>{post.description}</h1>
            </div>
            <div className='username'>
                <p>@{post.UserName}</p>
            </div>
            
        </div>
    );
}