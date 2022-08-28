import React, { FC } from 'react';

import { Button, PageHeader } from 'antd';

import 'antd/dist/antd.css';
import './header.scss';
import { useAppDispatch } from '../../hooks/redux';
import { requestDataSlice } from '../../store/Reducers/RequestDataSlice';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { setActiveSortBy } = requestDataSlice.actions;
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title="Posts"
        subTitle="create by BirmiiiYooo"
        extra={[
          <Button type="primary" onClick={() => dispatch(setActiveSortBy('name'))}>
            by Name
          </Button>,
          <Button type="primary" onClick={() => dispatch(setActiveSortBy('title'))}>
            by Title
          </Button>,
          <Button type="primary" onClick={() => dispatch(setActiveSortBy('likes'))}>
            By likes
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
};
export default Header;
