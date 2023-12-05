import { Social } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="p-4 md:px-10 lg:px-20 shadow-lg bg-white flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <h1 className="font-semibold text-xl hidden md:block">
          Muhammad Naufal Farras
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {Social.map((social) => (
          <Link
            key={social.id}
            href={social.url}
            target="_blank"
            className="md:hover:opacity-70"
          >
            <social.icon className="w-8 h-8 text-slate-800" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
