import PropTypes from "prop-types"



function Fan(props) {

  function handelFan(){
    props.fanFunc();
  }
  return (
    <div>
      <button onClick={handelFan}>Fan</button>
    </div>
  )
}
Fan.propTypes = {
  fanFunc: PropTypes.func.isRequired,
};

export default Fan
