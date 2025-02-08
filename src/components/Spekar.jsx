import PropTypes from "prop-types"

function Spekar(props) {
function handelSpekar(){
props.spekarFunc();

}

  return (
    <div>
      <button onClick={handelSpekar}>Spekar</button>
      
    </div>
  )
}
Spekar.propTypes = {
  spekarFunc: PropTypes.func.isRequired,
};

export default Spekar