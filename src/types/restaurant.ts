export type MenuItem = {
  category: string;
  items: Array<{
    title: string;
    price: string;
    description: string;
  }>;
};
export type Restaurant = {
  name: string;
  logo: string;
  styling: {
    primaryColor: string;
    secondaryColor: string;
  };
  menuItems: Array<{
    label: string;
    src: string;
  }>;
  wallpaper: {
    slogan: string;
    image: string;
    buttons: Array<{
      label: string;
      src: string;
    }>;
  };
  about: {
    title: string;
    image?: string;
    sections: Array<string>;
  };
  menu: Array<{
    title?: string;
    items: Array<MenuItem>;
  }>;
};
