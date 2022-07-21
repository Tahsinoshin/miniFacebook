import "./post.css"
import {MoreVert} from "@mui/icons-material"
import { Users } from "../../dummyData";

export default function Post({post}) {

    const user= Users.filter(u=>u.id===1)

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>


                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
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
