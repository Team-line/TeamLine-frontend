import { Almarai } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
config.autoAddCss = false;

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic"],
  weight: ['300', '400', '700', '800'],
});

export const metadata = {
  title: "تيم لاين | منصة إدارة المشاريع",
  description: "تيم لاين — منصة احترافية لإدارة المشاريع وتنظيم فرق العمل. تابع مهامك، وزّع الأدوار، وأنجز أكثر.",
  keywords: ["إدارة مشاريع", "فريق عمل", "تنظيم مهام", "تيم لاين"],
  openGraph: {
    title: "تيم لاين | منصة إدارة المشاريع",
    description: "نظّم فريقك وأنجز مشاريعك بكفاءة مع تيم لاين.",
    siteName: "تيم لاين",
    locale: "ar_SA",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${almarai.className}`} suppressHydrationWarning>
        <body>
            <Provider>
              <div className="dark:bg-black min-h-lvh">
                {children}
              </div>
            </Provider>
      </body>
    </html>
  );
}
