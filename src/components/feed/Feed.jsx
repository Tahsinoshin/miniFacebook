import "./feed.css";
import Share from "../../components/share/Share";
import Post from "../../components/post/Post"
import {Posts} from "../../dummyData";
import StoryReel from "../../components/storyReel/StoryReel"

import { useState } from "react";
import { useEffect } from "react";



export default function Feed({ fullName }){

    const [renderFeed, setRenderFeed] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect (() => {
    fetch("http://localhost:4000/api/post", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(
        obj =>{ 
          setPosts(obj);
        }
    );
  }, [renderFeed])


    return(
        <div className="feed">
            <div className="feedWrapper">
               <StoryReel/>
               < form action="/profile" method="post" enctype="multipart/form-data">
                    <input type="file" name="avatar" />
                    <button type="submit">post story</button>
                </form>
                <Share renderFeed={ renderFeed } setRenderFeed={ setRenderFeed } fullName={ fullName }/>
                { 
                    posts.map((p) => {
                    return <Post key = { p.key } post = { p } />;
                    }) 
                }
               
            
            </div>
            
        </div>
    )
}