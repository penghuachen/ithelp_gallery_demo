import React from 'react';

const routes = [
  {
    path: 'info/:id',
    component: React.lazy(() => import('../containers/Info'))
  },
  {
    path: '/gallerylist',
    component: React.lazy(() => import('../containers/GalleryList'))
  }
];

export default routes;