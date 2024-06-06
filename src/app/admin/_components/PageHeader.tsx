import React from 'react';
import { ReactNode } from 'react';

type Props = {};

function PageHeader({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl mb-4">New Product</h1>;
}

export default PageHeader;
