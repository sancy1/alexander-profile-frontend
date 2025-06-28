
// import React from 'react';

// const LoadingSpinner = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-500"></div>
//     </div>
//   );
// };

// export default LoadingSpinner;









// components/global-loader.tsx
// components/global-loader.tsx
import { cn } from "@/lib/utils"

export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className={cn(
            "absolute inset-0 rounded-full border-4 border-t-emerald-500 border-r-emerald-500 border-b-transparent border-l-transparent",
            "animate-spin"
          )} />
          <div className={cn(
            "absolute inset-1 rounded-full border-4 border-t-emerald-400 border-r-emerald-400 border-b-transparent border-l-transparent",
            "animate-spin [animation-delay:-0.45s]"
          )} />
          <div className={cn(
            "absolute inset-2 rounded-full border-4 border-t-emerald-300 border-r-emerald-300 border-b-transparent border-l-transparent",
            "animate-spin [animation-delay:-0.15s]"
          )} />
        </div>
        <p className="text-sm text-emerald-600">Loading...</p>
      </div>
    </div>
  )
}