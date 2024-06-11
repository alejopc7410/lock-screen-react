function NumberBtn({id, onClickFunc, icon}) {
  return (
    <><span className="number-btn" onClick={() => onClickFunc(id)}>{id}{icon}</span></>
  )
}

export default NumberBtn