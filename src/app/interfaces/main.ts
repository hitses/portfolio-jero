export interface Contact {
  status: number;
  data: {
    mess: string;
  };
}

export interface Jobs {
  company: string;
  date: string;
  icons: string[];
  link: string;
  paragraphs: string[];
}

export interface Studies {
  center: string;
  date: string;
  icons: string[];
  link: string;
  paragraphs: string[];
}
