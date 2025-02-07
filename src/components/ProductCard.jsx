import PropTypes from "prop-types";

function ProductCard({ proDetail }) {
  const { name, rating, imageUrl, price,detail } = proDetail;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} height="200px" width="200px" />
      <h2>{name}</h2>
      <span>💲 {price}</span>
      <p>{detail}</p>
      <span>⭐ {rating}</span>
    </div>
  );
}

ProductCard.propTypes = {
  proDetail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired, 
    detail:PropTypes.string.isRequired,
    // Fixed 'prsies' to 'price'
  }).isRequired,
};

export default ProductCard;
