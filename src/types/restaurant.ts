export type Restaurant = {
  name: string;
  slogan: string;
  logo: string;
  menuItems: Array<{
    label: string;
    src: string;
  }>;
};
