function Host(props) {
        return (
            <div key={props.valueHost?.name}>
                <h3>{props.valueHost?.name}</h3>
                <img src={props.valueHost?.picture} alt="propriétaire"></img>
            </div>
    )
}

export default Host