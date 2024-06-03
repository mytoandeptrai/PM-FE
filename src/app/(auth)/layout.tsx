import Footer from '@/components/common/footer';
import { CommonNavbar } from '@/components/common/nav-bar';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-w-min overflow-hidden">
      <CommonNavbar />
      {children}
      <Footer />
    </div>
  );
}
