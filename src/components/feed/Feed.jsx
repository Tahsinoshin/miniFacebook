import "./feed.css";
import Share from "../../components/share/Share";
import Post from "../../components/post/Post"
<<<<<<< HEAD
=======
import {Posts} from "../../dummyData";
>>>>>>> 9362f5e8d0625408435e3913809f78f229fefcc2


export default function Feed(){
    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
<<<<<<< HEAD
                <Post/>
                <Post/>
                <Post/>
                <Post/>
=======
                {Posts.map(p=>(
                     <Post key={p.id} post={p}/>

                ))}
               
>>>>>>> 9362f5e8d0625408435e3913809f78f229fefcc2
            
            </div>
            
        </div>
    )
}