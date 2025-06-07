import Link from 'next/link';

import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import { LucideMenu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NAV_LINKS_ARRAY } from '@/constants/routes';

import SignOutLink from './sign-out-link';
import UserIcon from './user-icon';

const LinksDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className='flex max-w-[100px] cursor-pointer gap-4'
          variant='outline'
        >
          <LucideMenu className='h-8 w-8' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='w-56' sideOffset={10}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <Button
                className='w-full cursor-pointer capitalize'
                variant='ghost'
              >
                Sign In
              </Button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <Button
                className='w-full cursor-pointer capitalize'
                variant='ghost'
              >
                Sign Up
              </Button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {NAV_LINKS_ARRAY.map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              <Link className='w-full capitalize' href={link.href}>
                <span>{link.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>{' '}
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropDown;
