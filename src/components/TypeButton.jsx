import '../Button.css'

export default function TypeButton(props) {

  const {
    setQueryTypes,
    type,
  } = props;

  const selectType = (e) => {
    const button = e.currentTarget;
    button.classList.toggle('selected');
    setTypes();
  }

  const setTypes = () => {
    const selectedButtons = document.querySelectorAll('.custom-btn.selected');
    const types = [];
    selectedButtons.forEach((button) => {
      types.push(button.innerText);
    });
    setQueryTypes(types);
  }

  return(
    <>
      <button className={`${type} custom-btn`} onClick={selectType}>{type}</button>
    </>
  )
}
