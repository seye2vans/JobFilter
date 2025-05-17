// components/navbar.tsx
import Link from "next/link";
import { Briefcase } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold text-gray-800">RemoteJobs</span>
        </Link>
      </div>
    </header>
  );
}