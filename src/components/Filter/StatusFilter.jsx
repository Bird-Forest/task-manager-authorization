import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectStatusFilter,
  selectTaskCount,
  selectTasks,
} from 'redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';
import { statusFilters } from 'redux/constans';
import {
  BtnAll,
  BtnGreen,
  BtnRed,
  BtnYellow,
} from 'components/UserMenu/UserMenu.styled';

export default function StatusFilter() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const count = useSelector(selectTaskCount);
  const filter = useSelector(selectStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <>
      <BtnAll
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        {tasks.length}
      </BtnAll>
      <BtnRed
        selected={filter === statusFilters.red}
        onClick={() => handleFilterChange(statusFilters.red)}
      >
        {count.red}
      </BtnRed>
      <BtnYellow
        selected={filter === statusFilters.yellow}
        onClick={() => handleFilterChange(statusFilters.yellow)}
      >
        {count.yellow}
      </BtnYellow>
      <BtnGreen
        selected={filter === statusFilters.green}
        onClick={() => handleFilterChange(statusFilters.green)}
      >
        {count.green}
      </BtnGreen>
    </>
  );
}
