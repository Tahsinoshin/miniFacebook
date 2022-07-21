import "./post.css"
import {MoreVert} from "@mui/icons-material"
<<<<<<< HEAD

export default function Post() {
=======
import { Users } from "../../dummyData";

export default function Post({post}) {

    const user= Users.filter(u=>u.id===1)

>>>>>>> 9362f5e8d0625408435e3913809f78f229fefcc2
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
<<<<<<< HEAD
                    <img className="postProfileImg" src="/assets/index.png" alt="" />
                    <span className="postUsername">USERRRR</span>
                    <span className="postDate">5 min ago</span>
=======
                    <img className="postProfileImg" src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
>>>>>>> 9362f5e8d0625408435e3913809f78f229fefcc2


                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>

            </div>
            <div className="postCenter">
<<<<<<< HEAD
                <span className="postText">hey its my first post</span>
=======
                <span className="postText">{post.desc}</span>
>>>>>>> 9362f5e8d0625408435e3913809f78f229fefcc2
                <img className="postImg" src="assets/images.png"  alt=""/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft"></div>
                <div className="postBottomRight"></div>

            </div>

        </div>
      
    </div>
  )
}
