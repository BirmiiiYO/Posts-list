export interface IPost {
  name: string;
  title: string;
  body: string;
  likes: number;
  id: string;
}

export interface GetPosts {
  posts: Array<IPost>;
}
