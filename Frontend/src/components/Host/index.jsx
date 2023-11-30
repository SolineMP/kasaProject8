import './host.css'

function Host(props) {
        return (
            <div key={props.valueHost?.name} className="iddentification__aside--name">
                <h3 className="iddentification__aside--nameOf">{props.valueHost?.name}</h3>
                <img src={props.valueHost?.picture} alt="propriétaire" className="iddentification__aside--img"></img>
            </div>
    )
}

export default Host