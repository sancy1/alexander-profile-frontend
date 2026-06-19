

// // app/admin/page.tsx
// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import { User as UserIcon, Mail, LogOut, Shield, Settings, LayoutDashboard } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Avatar, AvatarFallback } from '@/components/ui/avatar';
// import { Badge } from '@/components/ui/badge';
// import { useAuth } from '@/hooks/useAuth';
// import Navigation from '@/components/navigation';

// export default function AdminPage() {
//   // Explicitly typecast useAuth context to resolve the '{} | null' errors
//   const auth = useAuth() as {
//     user: { email: string } | null;
//     isAuthenticated: boolean;
//     isLoading: boolean;
//     logout: () => void;
//   };

//   const { user, isAuthenticated, isLoading, logout } = auth;
//   const router = useRouter();
//   const [initials, setInitials] = useState('AD');

//   useEffect(() => {
//     if (!isLoading && !isAuthenticated) {
//       router.push('/login');
//     }
//   }, [isAuthenticated, isLoading, router]);

//   useEffect(() => {
//     if (user?.email) {
//       const parts = user.email.split('@')[0].split('.');
//       // Explicitly type parameter 'name' as string to solve the implicit any error
//       const computed = parts.map((name: string) => name[0]).join('').toUpperCase().slice(0, 2);
//       setInitials(computed || 'AD');
//     }
//   }, [user]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
//         <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
//       </div>
//     );
//   }

//   if (!user) return null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
//       <Navigation />
//       <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-6xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }}
//           className="space-y-8"
//         >
//           {/* Header Section */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//             <div>
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                 Admin Dashboard
//               </h1>
//               <p className="text-slate-600 dark:text-gray-400 mt-1">Session identity confirmed. Welcome back.</p>
//             </div>
//             <Button
//               onClick={logout}
//               variant="outline"
//               className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/30 transition-all duration-300"
//             >
//               <LogOut className="w-4 h-4 mr-2" /> Sign Out
//             </Button>
//           </div>

//           {/* User Profile Card */}
//           <Card className="border border-slate-100 dark:border-gray-800 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
//             <CardHeader>
//               <div className="flex items-center gap-4">
//                 <Avatar className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500">
//                   <AvatarFallback className="text-white text-xl font-bold">{initials}</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <CardTitle className="text-2xl flex items-center gap-2">
//                     {user.email.split('@')[0]}
//                     <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-0">
//                       <Shield className="w-3 h-3 mr-1" /> Root Admin
//                     </Badge>
//                   </CardTitle>
//                   <CardDescription className="flex items-center gap-2 mt-1">
//                     <Mail className="w-4 h-4" /> {user.email}
//                   </CardDescription>
//                 </div>
//               </div>
//             </CardHeader>
//           </Card>

//           {/* Dashboard Grid Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <Card className="border border-slate-100 dark:border-gray-800 shadow-lg bg-white/80 dark:bg-gray-900/80 hover:shadow-xl transition-all duration-300">
//               <CardHeader>
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-emerald-100 dark:bg-emerald-950/50 rounded-lg">
//                     <UserIcon className="w-5 h-5 text-emerald-600" />
//                   </div>
//                   <CardTitle className="text-lg">System Profile</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-slate-600 dark:text-gray-400">Manage infrastructure and core microservice tokens.</p>
//                 <Button variant="ghost" className="mt-4 text-emerald-600 hover:text-emerald-700 dark:hover:bg-emerald-950/20 px-0">
//                   View Profile →
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="border border-slate-100 dark:border-gray-800 shadow-lg bg-white/80 dark:bg-gray-900/80 hover:shadow-xl transition-all duration-300">
//               <CardHeader>
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-purple-100 dark:bg-purple-950/50 rounded-lg">
//                     <Settings className="w-5 h-5 text-purple-600" />
//                   </div>
//                   <CardTitle className="text-lg">Application Settings</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-slate-600 dark:text-gray-400">Configure global gateway API variables and environment switches.</p>
//                 <Button 
//                   onClick={() => router.push('/admin/change-password')} 
//                   variant="ghost" 
//                   className="mt-4 text-purple-600 hover:text-purple-700 dark:hover:bg-purple-950/20 px-0"
//                 >
//                   Manage Settings →
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="border border-slate-100 dark:border-gray-800 shadow-lg bg-white/80 dark:bg-gray-900/80 hover:shadow-xl transition-all duration-300">
//               <CardHeader>
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-blue-100 dark:bg-blue-950/50 rounded-lg">
//                     <LayoutDashboard className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <CardTitle className="text-lg">Data Telemetry</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-slate-600 dark:text-gray-400">View performance indices and cluster status routing metrics.</p>
//                 <Button variant="ghost" className="mt-4 text-blue-600 hover:text-blue-700 dark:hover:bg-blue-950/20 px-0">
//                   View Stats →
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }































// // app/admin/page.tsx
// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import { 
//    Mail, 
//    LogOut, 
//    Shield, 
//    Settings, 
//    LayoutDashboard,
//   MessageSquare,
//   Users,
//   TrendingUp,
//   UserX
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Avatar, AvatarFallback } from '@/components/ui/avatar';
// import { Badge } from '@/components/ui/badge';
// import { useAuth } from '@/hooks/useAuth';
// import { useContacts } from '@/hooks/useContacts';
// import { useNewsletter } from '@/hooks/useNewsletter';
// import Navigation from '@/components/navigation';

// export default function AdminPage() {
//   const auth = useAuth() as {
//     user: { email: string } | null;
//     isAuthenticated: boolean;
//     isLoading: boolean;
//     logout: () => void;
//   };
//   const { user, isAuthenticated, isLoading, logout } = auth;
//   const { stats: contactStats, fetchStats: fetchContactStats } = useContacts();
//   const { subscribers, deletedSubscribers } = useNewsletter();
//   const router = useRouter();
//   const [initials, setInitials] = useState('AD');

//   useEffect(() => {
//     if (!isLoading && !isAuthenticated) {
//       router.push('/login');
//     }
//   }, [isAuthenticated, isLoading, router]);

//   useEffect(() => {
//     if (user?.email) {
//       const parts = user.email.split('@')[0].split('.');
//       const computed = parts.map((name: string) => name[0]).join('').toUpperCase().slice(0, 2);
//       setInitials(computed || 'AD');
//     }
//   }, [user]);

//   useEffect(() => {
//     if (isAuthenticated) {
//       fetchContactStats();
//     }
//   }, [isAuthenticated, fetchContactStats]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
//         <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
//       </div>
//     );
//   }

//   if (!user) return null;

//   // Stats Cards Data
//   const statsCards = [    {      title: 'Total Contacts',      value: contactStats?.total_contacts || 0,      icon: MessageSquare,      bgColor: 'bg-blue-50 dark:bg-blue-950/30',      iconColor: 'text-blue-600',      onClick: () => router.push('/admin/contacts'),    },    {      title: 'Unread Messages',      value: contactStats?.unread_contacts || 0,      icon: Mail,      bgColor: 'bg-red-50 dark:bg-red-950/30',      iconColor: 'text-red-600',      onClick: () => router.push('/admin/contacts?filter=unread'),    },    {      title: 'Active Subscribers',      value: subscribers?.length || 0,      icon: Users,      bgColor: 'bg-purple-50 dark:bg-purple-950/30',      iconColor: 'text-purple-600',      onClick: () => router.push('/admin/newsletter'),    },    {      title: 'Recent (7 days)',      value: contactStats?.recent_contacts_7_days || 0,      icon: TrendingUp,      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',      iconColor: 'text-emerald-600',      onClick: () => router.push('/admin/contacts?filter=recent'),    },  ];

//   // Admin Action Cards
//   const actionCards = [    {      title: 'Manage Contacts',      description: 'View, filter, and manage all contact form submissions.',      icon: MessageSquare,      color: 'from-emerald-500 to-teal-500',      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',      iconColor: 'text-emerald-600',      buttonText: 'View All Contacts',      onClick: () => router.push('/admin/contacts'),      count: contactStats?.total_contacts || 0,    },    {      title: 'Newsletter Management',      description: 'Manage active subscribers and view deleted subscribers.',      icon: Users,      color: 'from-purple-500 to-indigo-500',      bgColor: 'bg-purple-50 dark:bg-purple-950/30',      iconColor: 'text-purple-600',      buttonText: 'Manage Subscribers',      onClick: () => router.push('/admin/newsletter'),      count: subscribers?.length || 0,    },    {      title: 'Deleted Subscribers',      description: 'View and manage deleted/unsubscribed subscribers.',      icon: UserX,      color: 'from-red-500 to-rose-500',      bgColor: 'bg-red-50 dark:bg-red-950/30',      iconColor: 'text-red-600',      buttonText: 'View Deleted',      onClick: () => router.push('/admin/deleted-subscribers'),      count: deletedSubscribers?.length || 0,    },  ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
//       <Navigation />
//       <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-6xl mx-auto">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }}
//           className="space-y-8"
//         >
//           {/* Header Section */}
//           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
//             <div>
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                 Admin Dashboard
//               </h1>
//               <p className="text-slate-600 dark:text-gray-400 mt-1">Session identity confirmed. Welcome back.</p>
//             </div>
//             <Button
//               onClick={logout}
//               variant="outline"
//               className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/30 transition-all duration-300"
//             >
//               <LogOut className="w-4 h-4 mr-2" /> Sign Out
//             </Button>          </div>

//           {/* User Profile Card */}
//           <Card className="border border-slate-100 dark:border-gray-800 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
//             <CardHeader>
//               <div className="flex items-center gap-4">
//                 <Avatar className="w-16 h-16 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-500/20">
//                   <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xl font-bold">{initials}</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <CardTitle className="text-2xl flex items-center gap-2">
//                     {user.email.split('@')[0]}
//                     <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-0">
//                       <Shield className="w-3 h-3 mr-1" /> Root Admin
//                     </Badge>                  </CardTitle>
//                   <CardDescription className="flex items-center gap-2 mt-1">
//                     <Mail className="w-4 h-4" /> {user.email}
//                   </CardDescription>
//                 </div>
//               </div>
//             </CardHeader>
//           </Card>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {statsCards.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <Card 
//                   className="border border-slate-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white dark:bg-gray-900"
//                   onClick={stat.onClick}
//                 >
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
//                           {stat.title}
//                         </p>
//                         <h3 className="text-3xl font-bold mt-2 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
//                           {stat.value}
//                         </h3>
//                       </div>
//                       <div className={`p-3 rounded-xl ${stat.bgColor}`}>
//                         <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           {/* Action Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {actionCards.map((action, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 + 0.3 }}
//               >
//                 <Card className="border border-slate-100 dark:border-gray-800 shadow-lg bg-white/80 dark:bg-gray-900/80 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
//                   <div>
//                     <CardHeader>
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                           <div className={`p-2 ${action.bgColor} rounded-lg`}>
//                             <action.icon className={`w-5 h-5 ${action.iconColor}`} />
//                           </div>
//                           <CardTitle className="text-lg">{action.title}</CardTitle>
//                         </div>
//                         {action.count > 0 && (
//                           <Badge className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-0">
//                             {action.count}
//                           </Badge>
//                         )}
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <CardDescription className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
//                         {action.description}
//                       </CardDescription>
//                     </CardContent>
//                   </div>
//                   <div className="p-6 pt-0">
//                     <Button 
//                       onClick={action.onClick}
//                       className={`w-full bg-gradient-to-r ${action.color} text-white hover:opacity-90 transition-opacity`}
//                     >
//                       {action.buttonText} →
//                     </Button>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           {/* Settings Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Card className="border border-slate-100 dark:border-gray-800 shadow-lg bg-white/80 dark:bg-gray-900/80 hover:shadow-xl transition-all duration-300">
//               <CardHeader>
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-purple-100 dark:bg-purple-950/50 rounded-lg">
//                     <Settings className="w-5 h-5 text-purple-600" />
//                   </div>
//                   <CardTitle className="text-lg">Security Settings</CardTitle>                </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
//                   Update your password and security preferences.
//                 </p>
//                 <Button 
//                   onClick={() => router.push('/admin/change-password')}
//                   className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90 transition-opacity"
//                 >
//                   Change Password →
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="border border-slate-100 dark:border-gray-800 shadow-lg bg-white/80 dark:bg-gray-900/80 hover:shadow-xl transition-all duration-300">
//               <CardHeader>
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-blue-100 dark:bg-blue-950/50 rounded-lg">
//                     <LayoutDashboard className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <CardTitle className="text-lg">Data Telemetry</CardTitle>                </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
//                   View performance metrics and system statistics.
//                 </p>
//                 <Button 
//                   onClick={() => router.push('/admin/contacts')}
//                   className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
//                 >
//                   View Dashboard →
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }








































// app/admin/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Mail, 
  LogOut, 
  Shield, 
  Settings, 
  LayoutDashboard,
  MessageSquare,
  Users,
  TrendingUp,
  UserX
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useContacts } from '@/hooks/useContacts';
import { useNewsletter } from '@/hooks/useNewsletter';
import Navigation from '@/components/navigation';

export default function AdminPage() {
  const auth = useAuth() as {
    user: { email: string } | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    logout: () => void;
  };
  const { user, isAuthenticated, isLoading, logout } = auth;
  
  // Destructure fetchContacts instead of fetchStats to load initial dataset metrics
  const { stats: contactStats, fetchContacts } = useContacts();
  const { subscribers, deletedSubscribers } = useNewsletter();
  const router = useRouter();
  const [initials, setInitials] = useState('AD');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  useEffect(() => {
    if (user?.email) {
      const parts = user.email.split('@')[0].split('.');
      const computed = parts.map((name: string) => name[0]).join('').toUpperCase().slice(0, 2);
      setInitials(computed || 'AD');
    }
  }, [user]);

  // Execute underlying collection loop to populate analytics array context
  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts();
    }
  }, [isAuthenticated, fetchContacts]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  // Stats Cards Data
  const statsCards = [
    {
      title: 'Total Contacts',
      value: contactStats?.total_contacts || 0,
      icon: MessageSquare,
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      iconColor: 'text-blue-600',
      onClick: () => router.push('/admin/contacts'),
    },
    {
      title: 'Unread Messages',
      value: contactStats?.unread_contacts || 0,
      icon: Mail,
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      iconColor: 'text-red-600',
      onClick: () => router.push('/admin/contacts?filter=unread'),
    },
    {
      title: 'Active Subscribers',
      value: subscribers?.length || 0,
      icon: Users,
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      iconColor: 'text-purple-600',
      onClick: () => router.push('/admin/newsletter'),
    },
    {
      title: 'Recent (7 days)',
      value: contactStats?.recent_contacts_7_days || 0,
      icon: TrendingUp,
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      iconColor: 'text-emerald-600',
      onClick: () => router.push('/admin/contacts?filter=recent'),
    },
  ];

  // Admin Action Cards
  const actionCards = [
    {
      title: 'Manage Contacts',
      description: 'View, filter, and manage all contact form submissions.',
      icon: MessageSquare,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      iconColor: 'text-emerald-600',
      buttonText: 'View All Contacts',
      onClick: () => router.push('/admin/contacts'),
      count: contactStats?.total_contacts || 0,
    },
    {
      title: 'Newsletter Management',
      description: 'Manage active subscribers and view deleted subscribers.',
      icon: Users,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      iconColor: 'text-purple-600',
      buttonText: 'Manage Subscribers',
      onClick: () => router.push('/admin/newsletter'),
      count: subscribers?.length || 0,
    },
    {
      title: 'Deleted Subscribers',
      description: 'View and manage deleted/unsubscribed subscribers.',
      icon: UserX,
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      iconColor: 'text-red-600',
      buttonText: 'View Deleted',
      onClick: () => router.push('/admin/deleted-subscribers'),
      count: deletedSubscribers?.length || 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
      <Navigation />
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-slate-600 dark:text-gray-400 mt-1">Session identity confirmed. Welcome back.</p>
            </div>
            <Button
              onClick={logout}
              variant="outline"
              className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/30 transition-all duration-300"
            >
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </Button>
          </div>

          {/* User Profile Card */}
          <Card className="border border-slate-100 dark:border-gray-800 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-500/20">
                  <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xl font-bold">{initials}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {user.email.split('@')[0]}
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-0">
                      <Shield className="w-3 h-3 mr-1" /> Root Admin
                    </Badge>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Mail className="w-4 h-4" /> {user.email}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card 
                  className="border border-slate-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white dark:bg-gray-900"
                  onClick={stat.onClick}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          {stat.title}
                        </p>
                        <h3 className="text-3xl font-bold mt-2 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                          {stat.value}
                        </h3>
                      </div>
                      <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                        <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionCards.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Card className="border border-slate-100 dark:border-gray-800 shadow-lg bg-white/80 dark:bg-gray-900/80 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 ${action.bgColor} rounded-lg`}>
                            <action.icon className={`w-5 h-5 ${action.iconColor}`} />
                          </div>
                          <CardTitle className="text-lg">{action.title}</CardTitle>
                        </div>
                        {action.count > 0 && (
                          <Badge className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-0">
                            {action.count}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                        {action.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                  <div className="p-6 pt-0">
                    <Button 
                      onClick={action.onClick}
                      className={`w-full bg-gradient-to-r ${action.color} text-white hover:opacity-90 transition-opacity`}
                    >
                      {action.buttonText} →
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Settings Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-slate-100 dark:border-gray-800 shadow-lg bg-white/80 dark:bg-gray-900/80 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-950/50 rounded-lg">
                    <Settings className="w-5 h-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">Security Settings</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
                  Update your password and security preferences.
                </p>
                <Button 
                  onClick={() => router.push('/admin/change-password')}
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90 transition-opacity"
                >
                  Change Password →
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-slate-100 dark:border-gray-800 shadow-lg bg-white/80 dark:bg-gray-900/80 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-950/50 rounded-lg">
                    <LayoutDashboard className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Data Telemetry</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-gray-400 mb-4">
                  View performance metrics and system statistics.
                </p>
                <Button 
                  onClick={() => router.push('/admin/contacts')}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
                >
                  View Dashboard →
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}