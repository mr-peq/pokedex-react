import '../Button.css'

export default function TypeButton(type) {
  return(
    <>
      <button className={type}>{type}</button>
    </>
  )
}
