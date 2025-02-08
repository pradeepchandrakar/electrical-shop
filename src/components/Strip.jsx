import PropTypes from "prop-types"

function Strip(props) {
function handelStrip(){
props.stripFunc();
}

  return (
    <div>
      <button onClick={handelStrip}>Strip</button>
      
    </div>
  )
}
Strip.propTypes = {
  stripFunc: PropTypes.func.isRequired,
};

export default Strip