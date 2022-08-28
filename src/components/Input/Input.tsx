import { Button } from 'antd';
import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createPostSlice } from '../../store/Reducers/createPostSlice';
import { requestDataSlice } from '../../store/Reducers/RequestDataSlice';
import './input.scss';

const Input: FC = () => {
  const dispatch = useAppDispatch();
  const { setActiveForm } = createPostSlice.actions;
  const { setFilterData } = requestDataSlice.actions;
  const { activeForm } = useAppSelector((state) => state.createPostReducer);
  const { filter } = useAppSelector((state) => state.requestDataReducer);
  return (
    <>
      <div className="input">
        <input
          placeholder="Find what you need"
          value={filter}
          onChange={(e) => dispatch(setFilterData(e.target.value))}
        />
      </div>
      <div className="forBtn">
        <Button
          type="primary"
          style={{ marginBottom: '10px' }}
          onClick={() => dispatch(setActiveForm())}
        >
          {activeForm ? 'Close form to add' : 'Add new post'}
        </Button>
      </div>
    </>
  );
};

export default Input;
