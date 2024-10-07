declare module 'MenuTypes' {
  export interface MenuLine {
    name: string;
    href: string;
    icon?: any;
    permission: string;
    is_new?: boolean;
  }

  export interface Menu {
    name: string;
    permission: string;
    menu: MenuLine[];
  }
}
