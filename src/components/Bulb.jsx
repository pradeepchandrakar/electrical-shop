
import PropTypes from "prop-types"

 function Bulb(props) {

  function handleBulb(){
    props.bulbFunc();
  }
  return (
    <div>
      <button onClick={handleBulb}>Bulb</button>
    </div>
  )
}
Bulb.propTypes = {
  bulbFunc: PropTypes.func.isRequired,
};
export default Bulb;
