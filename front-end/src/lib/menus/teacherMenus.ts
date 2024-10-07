import { FaRectangleList } from 'react-icons/fa6';
import { GoGitPullRequestClosed } from 'react-icons/go';
import { Menu } from 'MenuTypes';

export const teacherMenus: Menu[] = [
  {
    name: 'Professor',
    permission: 'TEACHER',
    menu: [
      {
        name: 'Perfil do Professor',
        href: '/',
        icon: GoGitPullRequestClosed,
        permission: 'TEACHER',
      },
      {
        name: 'Alunos',
        href: '/',
        icon: FaRectangleList,
        permission: 'TEACHER',
      },
    ]
  },
];
