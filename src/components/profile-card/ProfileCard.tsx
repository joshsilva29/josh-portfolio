import "./profilecard.css"

function ProfileCard() {
    let imgPath = "../../../images/profile-pic.jpg";
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
            <img src={imgPath} alt="picture of josh" id="profile-pic"/>
        </div>
    )
}

export default ProfileCard;