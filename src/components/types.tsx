export interface IPostState {
  posts: IPost[];
}

export interface IPost {
  id?: number;
  title: string;
  body: string;
}
