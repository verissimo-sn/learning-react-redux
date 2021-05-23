import { connect } from 'react-redux';

import Card from '../Card';

const Sort = ({ min, max }) => {
  return (
    <Card title="Sorteio de um numeros" blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{ parseInt(Math.random() * (max - min)) + min }</strong>
        </span>
      </div>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToProps)(Sort);