import PropTypes from "prop-types"

function Iron(props) {
function handelIron(){
props.ironFunc();
}

  return (
    <div>
      <button onClick={handelIron}>Iron</button>
      
    </div>
  )
}
Iron.propTypes = {
  ironFunc: PropTypes.func.isRequired,
};

export default Iron