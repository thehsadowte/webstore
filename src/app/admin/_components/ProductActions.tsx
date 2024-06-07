import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

import React, { startTransition, useTransition } from 'react';

import { useRouter } from 'next/navigation';
import { toggleProductAvailability } from '../_actions/products';

export function ActiveToggleDropdownItem({
  id,
  isAvailableForPurchase,
}: {
  id: string;
  isAvailableForPurchase: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleProductAvailability(id, !isAvailableForPurchase);
          router.refresh();
        });
      }}>
      {isAvailableForPurchase ? 'Deactivate' : 'Activate'}
    </DropdownMenuItem>
  );
}
