'use client';

import React from 'react';
import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import Logo from '@/components/icons/Logo';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import { useLoading } from '@/context/LoadingContext';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { setLoading } = useLoading();

  const handleLinkClick = (href: string) => {
    if (pathname !== href) {
      setLoading(true);
      router.push(href);
    }
  };

  const linkClassName = (href: string) => {
    return `inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer rounded-md p-1 ${
      pathname === href ? 'text-pink-500 font-bold' : 'text-zinc-200 hover:text-zinc-100'
    }`;
  };

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        <Link href="/" aria-label="Logo" className="cursor-pointer rounded-full transform duration-100 ease-in-out">
          <Logo />
        </Link>
        <nav className="ml-6 space-x-2 lg:block">
          <button onClick={() => handleLinkClick('/')} className={linkClassName('/')}>
            Pricing
          </button>
          {user && (
            <button onClick={() => handleLinkClick('/account')} className={linkClassName('/account')}>
              Account
            </button>
          )}
        </nav>
      </div>
      <div className="flex justify-end space-x-8">
        {user ? (
          <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
            <input type="hidden" name="pathName" value={pathname} />
            <button type="submit" className={linkClassName('/signout')}>
              Sign out
            </button>
          </form>
        ) : (
          <button onClick={() => handleLinkClick('/signin')} className={linkClassName('/signin')}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
