import { connect} from 'react-redux';

import Card from '../Card';

const Average = ({ min, max }) => {
  return (
    <Card title="Media dos numeros" green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(max+min)/2}</strong>
        </span>
      </div>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToProps)(Average);