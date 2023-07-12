import { createContext } from 'react';

interface FooterLinks {
  mainLinks: string[];
  casesLinks: string[];
  materialsLinks: string[];
  contactInfo: {
    socialMediaLinks: SocialMediaLink[];
    email: string;
    telefone: string;
  };
}

interface SocialMediaLink {
  id: number;
  logo: React.ElementType;
  size: string;
  color: string;
  url: string;
}

const defaultValue: FooterLinks = {
  mainLinks: [],
  casesLinks: [],
  materialsLinks: [],
  contactInfo: {
    socialMediaLinks: [],
    email: '',
    telefone: '',
  },
};

const FooterContext = createContext<FooterLinks>(defaultValue);

export default FooterContext;
