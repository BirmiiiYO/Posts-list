import { FC } from 'react';
import './pagination.scss';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { requestDataSlice } from '../../store/Reducers/RequestDataSlice';

const Pagin: FC = () => {
  const dispatch = useAppDispatch();
  const { activePage } = useAppSelector((state) => state.requestDataReducer);

  const { setActivePage } = requestDataSlice.actions;

  return (
    <div className="pagination">
      <Pagination
        current={activePage}
        onChange={(page) => dispatch(setActivePage(page))}
        total={50}
      />
    </div>
  );
};

export default Pagin;
