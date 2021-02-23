
const Button = (props) => {

  return (
    <div className="button">
      <p>{props.value}</p>
      <div className="underline"></div>
    </div>
  );
};


const Buttons = () => {

  const names = ['HOME', 'PROJECTS', 'CONTACT', 'PERSONAL', 'RESUME'];

  const list = names.map(name => {
    return <Button value={name} key={names.indexOf(name)} />
  })

  return (
    <div className="toolbar">
      {list}
    </div>

  )
}



export default Buttons;