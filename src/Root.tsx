import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const Root: React.FC<Props> = ({ children }) => {
  return <Router>{children}</Router>;
};

export default Root;
