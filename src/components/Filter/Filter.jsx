import propTypes from 'prop-types';

const Filter = ({ filter, onFilter }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" name="filter" onChange={onFilter} value={filter} />
      </label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onFilter: propTypes.func.isRequired,
  filter: propTypes.string.isRequired,
};
