export interface HomeResponse {
  home: Home;
}

interface Home {
  data: Data;
}

interface Data {
  attributes: Attributes;
}

export interface Attributes {
  heading: string;
  Grid: Grid;
  Features: HeadWithList;
  Faq: HeadWithList;
}

export interface HeadWithList {
  Heading: string;
  ListItems: ListItem[];
}

interface ListItem {
  id: string;
  heading: string;
  text: string;
}

export interface Grid {
  id: string;
  Text: string;
  images: Images;
}

interface Images {
  data: Datum[];
}

interface Datum {
  id: string;
  attributes: {
    url: string;
    alternativeText?: any;
  };
}
