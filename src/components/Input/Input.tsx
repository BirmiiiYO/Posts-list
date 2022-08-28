import { Button } from 'antd';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createPostSlice } from '../../store/Reducers/createPostSlice';
import './input.scss';

const Input: FC = () => {
  const dispatch = useAppDispatch();
  const { setActiveForm } = createPostSlice.actions;
  const { activeForm } = useAppSelector((state) => state.createPostReducer);
  return (
    <>
      <div className="input">
        <input placeholder="Find what you need" />
      </div>
      <Button onClick={() => dispatch(setActiveForm())}>
        {activeForm ? 'Close form to add' : 'Add new post'}
      </Button>
    </>
  );
};

export default Input;
