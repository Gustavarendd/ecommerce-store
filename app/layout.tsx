import { Urbanist } from 'next/font/google';

import ToastProvider from '@/providers/toast-provider';
import ModalProvider from '@/providers/modal-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import './globals.css';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'Store',
  description: 'E-commerce-shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
