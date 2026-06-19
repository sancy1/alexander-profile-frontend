// // app/login/page.tsx
// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { Mail, Lock, LogIn, ArrowRight, AlertCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { useAuth } from '@/hooks/useAuth';
// import Navigation from '@/components/navigation';
// import { Alert, AlertDescription } from '@/components/ui/alert';

// const loginSchema = z.object({
//   email: z.string().email('Please enter a valid email address'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
// });

// type LoginFormValues = z.infer<typeof loginSchema>;

// export default function LoginPage() {
//   // Explicitly typecast the hook response to resolve the '{} | null' compiler restriction
//   const auth = useAuth() as {
//     login: (email: string, password: string) => Promise<void>;
//     isLoading: boolean;
//   };
  
//   const { login, isLoading } = auth;
//   const [error, setError] = useState<string | null>(null);

//   const form = useForm<LoginFormValues>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//   });

//   const onSubmit = async (data: LoginFormValues) => {
//     setError(null);
//     try {
//       await login(data.email, data.password);
//     } catch (err: any) {
//       console.error('Login runtime error caught:', err);
//       if (err.response?.data?.message) {
//         setError(err.response.data.message);
//       } else if (err.response?.data?.non_field_errors) {
//         setError(err.response.data.non_field_errors[0]);
//       } else if (err.message) {
//         setError(err.message);
//       } else {
//         setError('Invalid email or password. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
//       <Navigation />
//       <div className="container mx-auto px-4 pt-32 pb-16 max-w-md">
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//           <Card className="border border-slate-100 shadow-xl bg-white/80 dark:bg-gray-900/80 dark:border-gray-800 backdrop-blur-sm">
//             <CardHeader className="space-y-1 text-center">
//               <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
//                 <LogIn className="w-8 h-8 text-white" />
//               </div>
//               <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                 Welcome Back
//               </CardTitle>
//               <CardDescription>Sign in to access your secure admin control network</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                   {error && (
//                     <Alert variant="destructive" className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900/50">
//                       <AlertCircle className="h-4 w-4" />
//                       <AlertDescription>{error}</AlertDescription>
//                     </Alert>
//                   )}
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email Address</FormLabel>
//                         <FormControl>
//                           <div className="relative">
//                             <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
//                             <Input
//                               {...field}
//                               type="email"
//                               placeholder="alexander@example.com"
//                               className="pl-10 h-12 bg-white/50 dark:bg-gray-950/50 border-slate-200 focus:border-emerald-500"
//                               disabled={isLoading}
//                             />
//                           </div>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Password</FormLabel>
//                         <FormControl>
//                           <div className="relative">
//                             <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
//                             <Input
//                               {...field}
//                               type="password"
//                               placeholder="Enter security token password"
//                               className="pl-10 h-12 bg-white/50 dark:bg-gray-950/50 border-slate-200 focus:border-emerald-500"
//                               disabled={isLoading}
//                             />
//                           </div>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <Button
//                     type="submit"
//                     className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold shadow-lg shadow-emerald-500/25 transition-all duration-300"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? (
//                       <div className="flex items-center gap-2">
//                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                         Verifying Session...
//                       </div>
//                     ) : (
//                       <div className="flex items-center gap-2">
//                         Sign In <ArrowRight className="w-4 h-4" />
//                       </div>
//                     )}
//                   </Button>
//                 </form>
//               </Form>
//             </CardContent>
//             <CardFooter className="flex justify-center border-t border-slate-100 dark:border-gray-800 pt-6">
//               <p className="text-sm text-slate-600 dark:text-gray-400">
//                 Don't have access?{' '}
//                 <a href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline">
//                   Contact Platform Admin
//                 </a>
//               </p>
//             </CardFooter>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
















































// // app/login/page.tsx
// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { Mail, Lock, LogIn, ArrowRight, AlertCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { useAuth } from '@/hooks/useAuth';
// import Navigation from '@/components/navigation';
// import { Alert, AlertDescription } from '@/components/ui/alert';

// const loginSchema = z.object({
//   email: z.string().email('Please enter a valid email address'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
// });

// type LoginFormValues = z.infer<typeof loginSchema>;

// export default function LoginPage() {
//   // Explicitly typecast the hook response to resolve the '{} | null' compiler restriction
//   const auth = useAuth() as {
//     login: (email: string, password: string) => Promise<void>;
//     isLoading: boolean;
//   };
  
//   const { login, isLoading } = auth;
//   const [error, setError] = useState<string | null>(null);

//   const form = useForm<LoginFormValues>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//   });

//   const onSubmit = async (data: LoginFormValues) => {
//     setError(null);
//     try {
//       await login(data.email, data.password);
//     } catch (err: any) {
//       console.error('Login runtime error caught:', err);
//       if (err.response?.data?.message) {
//         setError(err.response.data.message);
//       } else if (err.response?.data?.non_field_errors) {
//         setError(err.response.data.non_field_errors[0]);
//       } else if (err.message) {
//         setError(err.message);
//       } else {
//         setError('Invalid email or password. Please try again.');
//       }
//     }
//   };

//   return (
//     // FIX: Changed structure to a flex container that perfectly centers the card item elements
//     <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
//       <Navigation />
      
//       {/* FIX: Centered the login card horizontally and vertically across desktop and mobile */}
//       <div className="flex-grow flex items-center justify-center px-4 pt-24 pb-12">
//         <motion.div 
//           className="w-full max-w-md" 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }}
//         >
//           <Card className="border border-slate-100 shadow-xl bg-white/80 dark:bg-gray-900/80 dark:border-gray-800 backdrop-blur-sm">
//             <CardHeader className="space-y-1 text-center">
//               <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
//                 <LogIn className="w-8 h-8 text-white" />
//               </div>
//               <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                 Welcome Back
//               </CardTitle>
//               <CardDescription>Sign in to access your secure admin control network</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                   {error && (
//                     <Alert variant="destructive" className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900/50">
//                       <AlertCircle className="h-4 w-4" />
//                       <AlertDescription>{error}</AlertDescription>
//                     </Alert>
//                   )}
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email Address</FormLabel>
//                         <FormControl>
//                           <div className="relative">
//                             <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
//                             <Input
//                               {...field}
//                               type="email"
//                               placeholder="alexander@example.com"
//                               className="pl-10 h-12 bg-white/50 dark:bg-gray-950/50 border-slate-200 focus:border-emerald-500"
//                               disabled={isLoading}
//                             />
//                           </div>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Password</FormLabel>
//                         <FormControl>
//                           <div className="relative">
//                             <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
//                             <Input
//                               {...field}
//                               type="password"
//                               placeholder="Enter security token password"
//                               className="pl-10 h-12 bg-white/50 dark:bg-gray-950/50 border-slate-200 focus:border-emerald-500"
//                               disabled={isLoading}
//                             />
//                           </div>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <Button
//                     type="submit"
//                     className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold shadow-lg shadow-emerald-500/25 transition-all duration-300"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? (
//                       <div className="flex items-center gap-2">
//                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                         Verifying Session...
//                       </div>
//                     ) : (
//                       <div className="flex items-center gap-2">
//                         Sign In <ArrowRight className="w-4 h-4" />
//                       </div>
//                     )}
//                   </Button>
//                 </form>
//               </Form>
//             </CardContent>
//             <CardFooter className="flex justify-center border-t border-slate-100 dark:border-gray-800 pt-6">
//               <p className="text-sm text-slate-600 dark:text-gray-400">
//                 Don't have access?{' '}
//                 <a href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline">
//                   Contact Platform Admin
//                 </a>
//               </p>
//             </CardFooter>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// }





































// app/login/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, LogIn, ArrowRight, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useAuth } from '@/hooks/useAuth';
import Navigation from '@/components/navigation';
import { Alert, AlertDescription } from '@/components/ui/alert';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const auth = useAuth() as {
    login: (email: string, password: string) => Promise<void>;
    isLoading: boolean;
  };
  
  const { login, isLoading } = auth;
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setError(null);
    try {
      await login(data.email, data.password);
    } catch (err: any) {
      console.error('Login runtime error caught:', err);
      
      // Deeply extract messages from Axios/Fetch response wrappers safely
      if (err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.response?.data?.non_field_errors) {
        setError(err.response.data.non_field_errors[0]);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('Invalid email or password. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center px-4 pt-24 pb-12">
        <motion.div 
          className="w-full max-w-md" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <Card className="border border-slate-100 shadow-xl bg-white/80 dark:bg-gray-900/80 dark:border-gray-800 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
              <CardDescription>Sign in to access your secure admin control network</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit(onSubmit)(e);
                  }} 
                  className="space-y-6"
                >
                  <AnimatePresence mode="popLayout">
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Alert variant="destructive" className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900/50">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                              {...field}
                              type="email"
                              placeholder="alexander@example.com"
                              className="pl-10 h-12 bg-white/50 dark:bg-gray-950/50 border-slate-200 focus:border-emerald-500"
                              disabled={isLoading}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                              {...field}
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Enter security token password"
                              className="pl-10 pr-10 h-12 bg-white/50 dark:bg-gray-950/50 border-slate-200 focus:border-emerald-500"
                              disabled={isLoading}
                            />
                            <button
                              type="button"
                              tabIndex={-1}
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors focus:outline-none"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold shadow-lg shadow-emerald-500/25 transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Verifying Session...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>Sign In</span> <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-slate-100 dark:border-gray-800 pt-6">
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Don't have access?{' '}
                <a href="/contact" className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline">
                  Contact Platform Admin
                </a>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}