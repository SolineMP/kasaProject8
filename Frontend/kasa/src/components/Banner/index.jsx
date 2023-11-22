import "./banner.css"

function Banner(props) {
    return (
        <div className="banner"> 
            <img className="banner__Img" src={props.bannerName} alt="bannière du site Kasa" /> 
            <p className="banner__text">{props.text}</p> 
        </div>
    )
}

export default Banner