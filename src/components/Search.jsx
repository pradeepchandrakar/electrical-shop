import PropTypes from "prop-types";

function Search({ filterFunc, allProducts }) {
  function handleSearch(searchText) {
    const filteredProducts = allProducts.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    filterFunc(filteredProducts);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search Products..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
}

Search.propTypes = {
  filterFunc: PropTypes.func.isRequired,
  allProducts: PropTypes.array.isRequired,
};

export default Search;
