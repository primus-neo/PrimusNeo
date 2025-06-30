// src/app/layout.tsx
import '../styles/globals.css';
import React from 'react';
import NavBar from './_components/navigation/navbar';
import Footer from './_components/navigation/footer';
export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <div className="min-h-screen bg-black text-white font-switzer">
        <NavBar />
        <main className="flex-1 pt-16">
        {children}
        </main>
        <Footer />
      </div>
      </body>
    </html>
  );
};

export default RootLayout;