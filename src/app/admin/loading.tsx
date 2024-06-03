import { Loader2, Ellipsis } from 'lucide-react';

import * as React from 'react';

// export interface IAppProps {}

export default function AdminLoading(props: any) {
  return (
    <div className="flex justify-center">
      <Loader2 className="size-24 animate-spin mt-20 text-indigo-900" />
    </div>
  );
}
