function ButtonTag(props) {
    return props.valueTag?.map(element => 
        <button key={Math.random()}>{element}</button>
    )
}

export default ButtonTag 
