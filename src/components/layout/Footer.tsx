import Link from "next/link";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="hover:underline text-sm">UdemyClone Business</Link>
            <Link href="/" className="hover:underline text-sm">Teach on UdemyClone</Link>
            <Link href="/" className="hover:underline text-sm">Get the app</Link>
            <Link href="/" className="hover:underline text-sm">About us</Link>
            <Link href="/" className="hover:underline text-sm">Contact us</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/" className="hover:underline text-sm">Careers</Link>
            <Link href="/" className="hover:underline text-sm">Blog</Link>
            <Link href="/" className="hover:underline text-sm">Help and Support</Link>
            <Link href="/" className="hover:underline text-sm">Affiliate</Link>
            <Link href="/" className="hover:underline text-sm">Investors</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/" className="hover:underline text-sm">Terms</Link>
            <Link href="/" className="hover:underline text-sm">Privacy policy</Link>
            <Link href="/" className="hover:underline text-sm">Cookie settings</Link>
            <Link href="/" className="hover:underline text-sm">Sitemap</Link>
            <Link href="/" className="hover:underline text-sm">Accessibility statement</Link>
          </div>
          <div className="flex justify-start md:justify-end">
            <button className="flex items-center gap-2 border border-white px-6 py-2 hover:bg-gray-800 transition-all">
              <Globe className="h-4 w-4" />
              <span>English</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-4">
          <Link href="/" className="text-2xl font-bold text-white">
            UdemyClone
          </Link>
          <p className="text-xs text-gray-400">© 2026 UdemyClone, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
