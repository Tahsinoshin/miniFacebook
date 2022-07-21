import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/index.png" alt="" />
                    <span className="postUsername">USERRRR</span>
                    <span className="postDate">5 min ago</span>


                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">hey its my first post</span>
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
