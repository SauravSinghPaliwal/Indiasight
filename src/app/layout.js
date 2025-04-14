// // src/app/layout.js
// import './globals.css';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'INDIAN SIGHT',
//   description: 'DESCRIPTION',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
// app/layout.jsx
// import Header from './components/Header';
// import Footer from './components/Footer';
// import './globals.css';

// export const metadata = {
//   title: 'Indian Sight - Intelligent Solutions',
//   description: 'We craft intelligent solutions, prioritizing accessibility',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-gray-50">
//         <Header />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
// src/app/layout.js
// src/app/layout.js
// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Indian Sight",
  description: "We craft intelligent solutions, prioritizing accessibility",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
