import "./profilecard.css"
import { useState } from "react";

function ProfileCard() {
    const [loaded, setLoaded] = useState(false);
    let imgPath = import.meta.env.BASE_URL + "images/profile-pic.jpg";
    console.log(imgPath);

    return (
        <div className="flex-row flex-wrap-reverse" id="profile-card">
            <div>
                <div id="about-title">hi, i'm josh!</div>
                <div id="about-info">
                    <div id="top-about-info">
                        first-year cs grad student /
                        <div>stevens institute of technology</div>
                    </div>
                    <div>
                        bs in cs /
                        <div>university of maryland</div>
                    </div>
                </div>
            </div>
            {
                !loaded && (
                    <div className="loading-profile"/>
                )
            }
            <img
                src={imgPath}
                alt="picture of josh"
                id="profile-pic"
                className={`fade-in ${loaded ? 'loaded': ''}`}
                onLoad={() => setLoaded(true)}
                style={{ display: loaded ? 'block' : 'none' }}
            />
        </div>
    )
}



export default ProfileCard;