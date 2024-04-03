import './ui/global.css'
import { poppins } from '@/app/ui/fonts';
import Header from './components/Header/Header';
import { Providers } from './GlobalRedux/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
