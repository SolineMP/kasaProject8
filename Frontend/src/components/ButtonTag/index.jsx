function ButtonTag(props) {
    return props.valueTag?.map(element => 
        <button key={Math.random()} className="iddentification__button">{element}</button>
    )
}

export default ButtonTag 
