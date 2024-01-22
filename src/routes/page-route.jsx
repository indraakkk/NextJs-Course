import { createBrowserRouter } from 'react-router-dom';

import Posts, { loader as postsLoader } from './posts';
import NewPost, { action as newPostAction } from './new-post';
import PostDetails, { loader as PostDetailsLoader } from './post-details';
import RootLayout from './root-layout';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails />, loader: PostDetailsLoader },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
