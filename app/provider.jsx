'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { Toaster } from "react-hot-toast"; // 👈 استيراد الـ Toaster

export const Provider = ({ children }) => {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: { staleTime: 1000 * 60 * 5 },
      },
    });
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} /> 
        
       <Toaster 
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
            success: {
                  duration: 3000,
                  style: {
                  background: '#10B981',
                  color: '#fff',
                  },
            },
            error: {
                  duration: 5000,
                  style: {
                  background: '#EF4444',
                  color: '#fff',
                  },
            },
            style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "12px 20px",
            }
            }}
      />
      </QueryClientProvider>
    </ThemeProvider>
  );
};