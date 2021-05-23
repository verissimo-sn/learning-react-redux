import { connect } from 'react-redux';

import Card from '../Card';

import { alterarNumeroMinimo, alterarNumeroMaximo } from '../../store/actions/numerosAction';

import './styles.css';

const Gap = ({ min, max, alterarMinimo, alterarMaximo }) => {
  return (
    <div className="Gap">
      <Card title="Intervalo de Numeros" red>
        <span>
          <strong>Minimo</strong>
          <input 
            type="number" 
            value={min}
            onChange={event => alterarMinimo(Number(event.target.value))}
          />
        </span>
        <span>
          <strong>Maximo</strong>
          <input 
            type="number" 
            value={max}
            onChange={event => alterarMaximo(Number(event.target.value))}
          />
        </span>
      </Card>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    alterarMinimo(newNumber) {
      const action =  alterarNumeroMinimo(newNumber);
      dispatch(action);
    },

    alterarMaximo(newNumber) {
      const action =  alterarNumeroMaximo(newNumber);
      dispatch(action);
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Gap);