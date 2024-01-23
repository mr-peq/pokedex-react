import '../Button.css'

export default function TypeButton(props) {

  const {
    onTypeChange,
    name,
  } = props;

  return(
    <>
      <button className={`${name} custom-btn`} onClick={onTypeChange}>{name}</button>
    </>
  )
}
