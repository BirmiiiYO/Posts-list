import { Button } from 'antd';
import { FC } from 'react';
import { IPost } from '../../models/Post';
import './post.scss';

const Post: FC<IPost> = (data) => {
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
        <Button>Change</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default Post;
