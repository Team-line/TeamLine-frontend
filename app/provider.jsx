'use client'
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from 'react';

export const Provider = ({ children }) => {
      
      return (
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                  {children}
            </ThemeProvider>
      );
}