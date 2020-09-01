const Menu = [{
    header: 'Sections'
  },
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    title: 'Events',
    group: 'apps',
    icon: 'event',
    name: 'Events',
    href: '/events'
  },
  {
    title: 'Volunteers',
    group: 'apps',
    icon: 'group',
    name: 'Volunteers',
    href: '/volunteers'
  }
  // {
  //   title: 'Chat',
  //   group: 'apps',
  //   icon: 'chat_bubble',
  //   target: '_blank',
  //   name: 'Chat',
  //   href: '/chat/messaging'
  // },


  // {
  //   title: 'Login',
  //   group: 'extra',
  //   icon: 'list',
  //   href: '/login'
  // },
  // {
  //   title: 'Empty',
  //   group: 'extra',
  //   icon: 'insert_drive_file',
  //   href: '/empty'
  // },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
