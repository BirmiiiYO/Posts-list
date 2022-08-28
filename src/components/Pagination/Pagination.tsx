import { FC } from 'react';
import './pagination.scss';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { requestDataSlice } from '../../store/Reducers/RequestDataSlice';

const Pagin: FC = () => {
  const dispatch = useAppDispatch();
  const { activePage } = useAppSelector((state) => state.requestDataReducer);

  const { setActivePage, setTotalForPage } = requestDataSlice.actions;
  const onShowSizeChange = (page: number, pageSize: number) => {
    dispatch(setActivePage(page));
    dispatch(setTotalForPage(pageSize));
  };

  return (
    <div className="pagination">
      <Pagination onChange={onShowSizeChange} defaultCurrent={activePage} total={100} />
    </div>
  );
};

export default Pagin;
