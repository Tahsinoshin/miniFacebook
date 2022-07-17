import "./topbar.css";
//import Search from "@material-ui/icons/Search";
//import Search from "@mui/icons-material"

export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">miniFacebook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    //<Search/>
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight"></div>

        </div>
    )
}