// import PropTypes from 'prop-types';
import { FilterWrap } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { showFilteredContacts } from 'redux/actions';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const handleInputChange = e => {
    dispatch(showFilteredContacts(e.target.value));
  };

  return (
    <FilterWrap>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        value={filterValue}
        onChange={handleInputChange}
      />
    </FilterWrap>
  );
};

// value={filterValue} onChange={onChange}
// Filter.prototype = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// #1 (attention)
// dispatch(value); error
