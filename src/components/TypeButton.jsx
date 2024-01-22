import '../Button.css'

export default function TypeButton(type) {

  const selectType = (e) => {
    const button = e.currentTarget;
    button.classList.toggle('selected');
  }

  return(
    <>
      <button className={`${type} custom-btn`} onClick={selectType}>{type}</button>
    </>
  )
}
