import { Button, notification } from 'antd';
import { NotificationPlacement } from 'antd/lib/notification';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IPost } from '../../models/Post';
import { postAPI } from '../../services/postService';
import { createPostSlice } from '../../store/Reducers/createPostSlice';

import './createPostBlock.scss';

const CreatePostBlock: FC = () => {
  const dispatch = useAppDispatch();
  const { setActiveCreateForm } = createPostSlice.actions;
  const { activeFormCreate } = useAppSelector((state) => state.createPostReducer);
  const [createPost] = postAPI.useCreatePostMutation();

  const [name, setName] = useState('');
  const [title, setTtile] = useState('');
  const [body, setBody] = useState('');

  const openNotification = (placement: NotificationPlacement) => {
    notification.info({
      message: `New post added successfully`,
      placement,
    });
  };

  const HandleSubmit = async () => {
    const NewPost: IPost = {
      body: body ? body : 'no text',
      id: ``,
      likes: 0,
      name: name ? name : 'no name',
      title: title ? title : 'no title',
    };
    await createPost(NewPost);
    setName('');
    setBody('');
    setTtile('');
    dispatch(setActiveCreateForm());
    openNotification('bottomRight');
  };
  return (
    <div
      className="postBlock"
      style={activeFormCreate ? { display: 'block' } : { display: 'none' }}
    >
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          value={title}
          onChange={(e) => setTtile(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="body"
        />
        <Button type="primary" onClick={HandleSubmit}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default CreatePostBlock;
