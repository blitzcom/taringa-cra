export const filters = {
  hot: {
    displayName: 'Destacados',
    exact: true,
    id: 'hot',
    pathname: '/global',
    url: '/feed/global',
  },
  recents: {
    displayName: 'Recientes',
    exact: false,
    id: 'recents',
    pathname: '/global/recents',
    url: '/feed/global?sort=recent',
  },
  tops: {
    displayName: 'Tops',
    exact: false,
    id: 'tops',
    pathname: '/global/tops',
    url: '/feed/global/tops/week',
  },
}
