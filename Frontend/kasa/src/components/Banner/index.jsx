import "./banner.css"

function Banner(props) {
    return (
        <div> 
            <img className="banner__Img" src={props.bannerName} alt="bannière du site Kasa" /> 
            <p>{props.text}</p> 
        </div>
    )
}

export default Banner