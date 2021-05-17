import { FC, createElement } from 'react';

interface HeadingType {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
}

const Heading: FC<HeadingType> = ({ children, type, className }) => createElement(type, { className }, children);

export default Heading;
