import { LucideSearch } from 'lucide-react';

import { Input } from '@/components/ui/input';

const NavSearch = () => {
  return (
    <div className='relative max-w-sm'>
      <LucideSearch className='text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2' />
      <Input
        className='dark:bg-muted pl-10'
        placeholder='Find A Sea Side Rental....'
      />
    </div>
  );
};

export default NavSearch;
