import { useAppSelector } from '../../hooks/redux';
import { IPost } from '../../models/Post';
import { postAPI } from '../../services/postService';
import { RequestDataState } from '../../store/Reducers/RequestDataSlice';
import PostItem from '../Post/PostItem';

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
      <div>{isLoading ? 'Loading...' : ''}</div>
      <div>{isError ? 'Smth went wrong' : ''}</div>

      {posts && posts.map((data: IPost) => <PostItem key={data.id} {...data} />)}
    </div>
  );
}

export default Posts;
