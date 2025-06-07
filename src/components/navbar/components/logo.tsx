import Link from 'next/link';

import { LucideTreePalm } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Logo = () => {
  return (
    <Button className='flex items-center p-4' size='icon'>
      <Link href='/'>
        <LucideTreePalm className='h-12 w-12' />
      </Link>
    </Button>
  );
};
export default Logo;
