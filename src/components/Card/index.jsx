import  './styles.css';

function getColor(componentProps) {
  if(componentProps.red) return "Red";
  if(componentProps.green) return "Green";
  if(componentProps.blue) return "Blue";
  if(componentProps.purple) return "Purple";

  return "";
}

const Card = props => {
  return (
    <div className={`Card ${getColor(props)}`}>
      <div className="Header">
        <span className="Title">{props.title}</span>
      </div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  );
}

export default Card;