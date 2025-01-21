export interface AnimatedDrawerScreenProps {
  title: string;
}
export type DrawerMenuItemProps = {
  menuItems: TextButtonProps[];
};

export interface MenuItem {
  active: boolean;
  label: string;
  screenName: string;
}
