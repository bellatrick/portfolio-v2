import Preloader from '../components/Preloader';
import '../public/css/plugins.css';
import '../public/css/style.css';
import { Roboto, Syne } from 'next/font/google';
import './globals.css';
import State from '/context/context';
import { Toaster } from '../@/components/ui/toaster';
/** google fonts */
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap'
});
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
  display: 'swap'
});

/** Font family */
const fontFamily = `${roboto.variable} ${syne.variable} `;

export const metadata = {
  title: "Busayo Samuel's project portfolio",
  description:
    'This portfolio contains carefully curated Busayos favorite works over the years. '
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={fontFamily}>
      <body>
        <State>
          <div className='jara_tm_all_wrap'>
            <Preloader />
            {children}
          </div>
        </State>
        <Toaster />
      </body>
    </html>
  );
}
