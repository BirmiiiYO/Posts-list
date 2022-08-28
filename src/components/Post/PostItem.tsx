import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { FC } from 'react';
import { IPost } from '../../models/Post';
import { postAPI } from '../../services/postService';
import './post.scss';

const Post: FC<IPost> = (data) => {
  const [updatePost] = postAPI.useUpdatePostMutation();
  const [deletePost] = postAPI.useDeletePostMutation();
  const [likePost] = postAPI.useLikePostMutation();
  const HandleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    deletePost(data);
  };
  const HandleUpdate = (e: React.MouseEvent) => {
    const title: any = prompt('New title', data.title);
    const name: any = prompt('New name', data.name);
    const body: any = prompt('New text', data.body);
    updatePost({ ...data, title, name, body });
  };
  const incrementLikes = (e: React.MouseEvent) => {
    const likes = data.likes + 1;
    likePost({ ...data, likes });
  };

  const text = data.body;

  return (
    <div className="block">
      <div className="title">
        <h1>{data.title}</h1>
        <label>by: {data.name}</label>
        <label>like: {data.likes}</label>
      </div>
      <span className="text">{text.length >= 100 ? `${text.substr(0, 100)}...` : text}</span>
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
