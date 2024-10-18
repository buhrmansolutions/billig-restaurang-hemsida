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
};
