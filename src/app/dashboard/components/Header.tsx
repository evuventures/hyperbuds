// "use client";

import Image from 'next/image';
import React from 'react';
import { UserAvatar } from './UserAvatar';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./hooks/drawer";

const navIcons = [
  { src: '/images/icons-dashboard/i-home.svg', alt: 'Dashboard' },
  { src: '/images/icons-dashboard/i-search.svg', alt: 'Search' },
  { src: '/images/icons-dashboard/i-plus.svg', alt: 'Go live' },
  { src: '/images/icons-dashboard/i-chat.svg', alt: 'chat' },
  { src: '/images/icons-dashboard/i-calender.svg', alt: 'Calender' },
  { src: '/images/icons-dashboard/i-profile.svg', alt: 'Profile', hiddenOnDesktop: true },
  { src: '/images/icons-dashboard/i-settings.svg', alt: 'Settings' },
  { src: '/images/icons-dashboard/i-mode.svg', alt: 'Dark mode', onlyDesktop: true },
];

interface HeaderProps {
  user: {
    username?: string;
    email: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="flex sticky top-0 z-50 justify-between items-center p-5 bg-white">

      {/* Logo */}
      <h1 className="text-3xl lg:text-5xl font-semibold text-[#A259FF]">HyperBuds</h1>

      {/* Desktop Icons */}
      <div className="hidden gap-5 justify-between items-center p-5 bg-white rounded-2xl shadow-md lg:w-lg md:flex">
        {navIcons
          .filter(icon => !icon.hiddenOnDesktop)
          .map((icon, idx) => (
            <div
              key={idx}
              className={`flex gap-3 items-center ${icon.onlyDesktop ? 'hidden md:flex' : ''}`}
            >
              <Image
                src={icon.src}
                width={28}
                height={28}
                alt={icon.alt}
                loading="lazy"
                className='transition-all duration-300 cursor-pointer hover:scale-120'
              />

              <span className="text-base text-[#5D7285] md:hidden">{icon.alt}</span>
            </div>
          ))}
      </div>

      {/* Notification & User */}
      <div className="flex gap-4 items-center">
        {/* Notification Icon */}
        <Image
          src="/images/icons-dashboard/i-notification.svg"
          alt="Notifications"
          width={30}
          height={30}
          loading="lazy"
          className="hidden transition-all duration-300 cursor-pointer hover:scale-120 md:flex"
        />

        {/* User Avatar */}
        <div className='hidden md:flex'>
          <UserAvatar name={user.username || user.email} size="w-10 h-10" />
        </div>

        {/* Mobile Drawer */}
        <div className="md:hidden">
          <Drawer direction="right">
            <DrawerTrigger>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer text-[#A259FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </DrawerTrigger>

            <DrawerContent className="">
              <div className='flex overflow-y-auto flex-col gap-10 h-full'>
                <div>
                  <DrawerHeader className="relative px-8">
                    <div className="flex justify-between items-center w-full">
                      <DrawerTitle className="text-3xl font-medium text-[#A259FF]">
                        HyperBuds
                      </DrawerTitle>
                      <DrawerClose>
                        <button className="text-5xl font-bold primary-color hover:text-black">
                          x
                        </button>
                      </DrawerClose>
                    </div>
                  </DrawerHeader>

                  {/* Drawer Icons */}
                  <div className="flex flex-col gap-10 items-start p-5">
                    {navIcons.map((icon, idx) => (
                      <div key={idx} className="flex gap-3 items-center">
                        <Image
                          src={icon.src}
                          width={22}
                          height={22}
                          alt={icon.alt}
                        />
                        <span className="text-base text-[#5D7285]">{icon.alt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='p-5'>
                  <button className='flex gap-4 p-4 w-70 bg-[#5D7285] rounded-lg text-white text-base font-medium'>
                    <Image
                      src="/images/icons-dashboard/i-logout.svg"
                      width={30}
                      height={27}
                      alt="notification"
                    />
                    Logout
                  </button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header >
  );
};
