function Number_Btn({id, onClickFunc}) {
  return (
    <><span className="number-btn" onClick={() => onClickFunc(id)}>{id}</span></>
  )
}

export default Number_Btn