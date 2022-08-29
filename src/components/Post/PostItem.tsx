import { DeleteOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import { NotificationPlacement } from 'antd/lib/notification';
import React, { FC } from 'react';

import { IPost } from '../../models/Post';
import { postAPI } from '../../services/postService';

import './post.scss';

const Post: FC<IPost> = (data) => {
  const [deletePost] = postAPI.useDeletePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();
  const [likePost] = postAPI.useLikePostMutation();

  const openNotification = (placement: NotificationPlacement, value: string) => {
    notification.info({
      message: value,
      placement,
    });
  };

  const HandleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    deletePost(data);
    setTimeout(() => openNotification('bottomRight', `Deleted successfully`), 1100);
  };
  function incrementLikes() {
    const likes = data.likes === undefined ? 0 : data.likes + 1;
    likePost({ ...data, likes });
    setTimeout(
      () => openNotification('bottomRight', `You liked post created by '${data.name}'`),
      800,
    );
  }
  const HandleUpdate = (e: React.MouseEvent) => {
    const title = prompt('New title', data.title) as string;
    const name = prompt('New name', data.name) as string;
    const body = prompt('New text', data.body) as string;
    updatePost({ ...data, title, name, body });
    setTimeout(
      () => openNotification('bottomRight', `You edit post created by '${data.name}'`),
      1100,
    );
  };

  return (
    <div className="block">
      <div className="title">
        <h1>{data.title}</h1>
        <label>by: {data.name}</label>
        <label>like: {data.likes}</label>
      </div>

      <div className="text">
        <span>{data.body}</span>
      </div>
      <div className="btns">
        <Button type="primary" onClick={HandleUpdate}>
          Change
        </Button>
        <Button type="primary" onClick={incrementLikes}>
          LIKE
        </Button>
        <Button type="primary" onClick={HandleRemove}>
          Delete <DeleteOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Post;
