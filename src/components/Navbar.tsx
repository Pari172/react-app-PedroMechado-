import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import "../App.css";
import { signOut } from "firebase/auth";
export function Navbar(){
    const [user,loading,error] = useAuthState(auth);
    const signUserOut=async ()=>{
        await signOut(auth);
    }
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            {!user ? <><Link to="/Login">Login</Link></> : <><Link to='/CreatePost'>Create Post</Link></>}
            <div className="info">
                {user && (<>
                    <p>{user?.displayName}</p>
                    <img src={user?.photoURL || ""} width='50' height='50'/>
                    <button onClick={signUserOut}>Log out</button>
                </>)}
            </div>
        </div>
    );
}