'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={'/icons/hamburger.svg'}
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white p-5">
          <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Navigation menu for mobile devices with links to different sections of the application
          </SheetDescription>
          <Link href={'/'} className=" cursor-pointer items-center gap-1 flex px-4 mb-7 ">
            <Image src={'/icons/logo.svg'} alt="Horizon Logo" width={34} height={34} />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>
          <div className="mobile-nav-sheet">
            <SheetClose asChild>
              <nav className="flex flex-col h-full gap-6 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathname.startsWith(`${link.route}/`) || pathname === link.route;
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        key={link.label}
                        href={link.route}
                        className={cn('mobile-nav-sheet_close w-full', {
                          'bg-bankGradient': isActive,
                        })}
                      >
                        <Image
                          src={link.imgURL}
                          alt={link.label}
                          width={20}
                          height={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive,
                          })}
                        />
                        <p
                          className={cn('text-16 font-semibold text-black-2', {
                            'text-white': isActive,
                          })}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                User
              </nav>
            </SheetClose>
            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
