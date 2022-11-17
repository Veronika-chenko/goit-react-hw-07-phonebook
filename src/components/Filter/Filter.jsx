// import PropTypes from 'prop-types';
import { FilterWrap } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setFilterValue(e.target.value));
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

// #1 (attention)
// dispatch(value); error
