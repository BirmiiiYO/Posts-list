import { useAppSelector } from '../../hooks/redux';
import { IPost } from '../../models/Post';
import { postAPI } from '../../services/postService';
import { RequestDataState } from '../../store/Reducers/RequestDataSlice';
import PostItem from '../Post/PostItem';
import { Empty } from 'antd';
import { Spin } from 'antd';

function Posts() {
  const { filter, limit, activePage, sortBy } = useAppSelector((state) => state.requestDataReducer);

  const dataRequest: RequestDataState = {
    filter,
    limit,
    activePage,
    sortBy,
  };
  const { data: posts, isLoading, isError } = postAPI.useGetPostsQuery(dataRequest);
  return (
    <div>
      <div>{isLoading ? <Spin /> : ''}</div>
      <div>{isError ? <h1>Smth went wrong</h1> : ''}</div>

      {posts === undefined ? (
        ''
      ) : posts.length >= 1 ? (
        posts.map((data: IPost) => <PostItem key={data.id} {...data} />)
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Posts;
