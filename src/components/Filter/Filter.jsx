import { FilterWrap } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(selectFilterValue);
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
