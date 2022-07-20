import "./share.css";
import {PermMedia,Label, Room, EmojiEmotions} from "@mui/icons-material"

export default function Share(){
    return (
        <div className="share">
            <div className="shareTop">
                <img src="/assets/images.jpeg" alt="" className="shareProfileImg" />
                <input placeholder="Whats's on your mind" className="shareInput"/>
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareOptionIcon"/>
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareOptionIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareOptionIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareOptionIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>

                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}