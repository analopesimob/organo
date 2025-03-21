import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  const aoMudar = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
	  <option value=""></option>
        {props.itens &&
          props.itens.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default ListaSuspensa;
