
import PropTypes from 'prop-types';
function TopRatedProduct(props){

  function handleTopRated(){
    props.topRatedFunc();
   
  } 

  return(
    <>
    <button onClick={handleTopRated}>Top Rating</button>
    </>
  )
  
}

TopRatedProduct.propTypes = {
  topRatedFunc: PropTypes.func.isRequired, // Ensures topRatedFunc is a function and required
};
export default TopRatedProduct;