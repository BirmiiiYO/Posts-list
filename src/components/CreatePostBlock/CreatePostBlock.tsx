import { FC, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { IPost } from '../../models/Post';
import { postAPI } from '../../services/postService';

import './createPostBlock.scss';

const CreatePostBlock: FC = () => {
  const { activeForm } = useAppSelector((state) => state.createPostReducer);
  const [createPost] = postAPI.useCreatePostMutation();

  const [name, setName] = useState('');
  const [title, setTtile] = useState('');
  const [body, setBody] = useState('');

  const HandleSubmit = async () => {
    const NewPost: IPost = {
      body: body,
      id: `${100}`,
      likes: 0,
      name: name,
      title: title,
    };
    await createPost(NewPost);
  };
  return (
    <div className="postBlock" style={activeForm ? { display: 'block' } : { display: 'none' }}>
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

        {/* <input type="submit" /> */}
        <button onClick={HandleSubmit}>aDD</button>
      </form>
    </div>
  );
};

export default CreatePostBlock;
