'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProductForm() {
  return (
    <form>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="text" name="name" required></Input>
      </div>
    </form>
  );
}
