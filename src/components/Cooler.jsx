import PropTypes from "prop-types"

function Cooler(props) {
function handelCooler(){
props.coolerFunc();
}

  return (
    <div>
      <button onClick={handelCooler}>Cooler</button>
      
    </div>
  )
}
Cooler.propTypes = {
  coolerFunc: PropTypes.func.isRequired,
};

export default Cooler
