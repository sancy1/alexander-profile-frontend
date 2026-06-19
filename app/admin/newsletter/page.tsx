
// // app/admin/newsletter/page.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import {  
//   Users,  
//   Search,  
//   Mail,  
//   Calendar,  
//   Trash2,  
//   ArrowLeft,  
//   RefreshCw,  
//   ChevronDown,  
//   ChevronUp,  
//   UserCheck,  
//   UserX,  
//   Activity
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';
// import {  
//   Table,  
//   TableBody,  
//   TableCell,  
//   TableHead,  
//   TableHeader,  
//   TableRow
// } from '@/components/ui/table';
// import {  
//   AlertDialog,  
//   AlertDialogAction,  
//   AlertDialogCancel,  
//   AlertDialogContent,  
//   AlertDialogDescription,  
//   AlertDialogFooter,  
//   AlertDialogHeader,  
//   AlertDialogTitle,
// } from '@/components/ui/alert-dialog';
// import { useNewsletter } from '@/hooks/useNewsletter';
// import Navigation from '@/components/navigation';
// import { formatDistanceToNow } from 'date-fns';

// export default function NewsletterPage() {  
//   const router = useRouter();  
//   const {    
//     subscribers = [],    
//     loading,    
//     error,    
//     deleteSubscriber,    
//     deleteAllSubscribers,    
//     fetchSubscribers,    
//     fetchDeletedSubscribers,    
//     deletedSubscribers = []  
//   } = useNewsletter();  

//   const [searchTerm, setSearchTerm] = useState('');  
//   const [selectedSubscriber, setSelectedSubscriber] = useState<number | null>(null);  
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);  
//   const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);  
//   const [sortField, setSortField] = useState<'subscribed_at' | 'email'>('subscribed_at');  
//   const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');  

//   // Trigger initial telemetry sync loops safely inside runtime side effects
//   useEffect(() => {
//     fetchSubscribers?.();
//     fetchDeletedSubscribers?.();
//   }, []);

//   // Search filter  
//   const filteredSubscribers = subscribers.filter(subscriber => {    
//     if (!searchTerm) return true;    
//     return subscriber.email?.toLowerCase().includes(searchTerm.toLowerCase());  
//   });  

//   // Sort subscribers  
//   const sortedSubscribers = [...filteredSubscribers].sort((a, b) => {    
//     let comparison = 0;    
//     if (sortField === 'subscribed_at') {      
//       comparison = new Date(a.subscribed_at).getTime() - new Date(b.subscribed_at).getTime();    
//     } else if (sortField === 'email') {      
//       comparison = (a.email || '').localeCompare(b.email || '');    
//     }    
//     return sortDirection === 'asc' ? comparison : -comparison;  
//   });  

//   const handleSort = (field: typeof sortField) => {    
//     if (sortField === field) {      
//       setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');    
//     } else {      
//       setSortField(field);      
//       setSortDirection('desc');    
//     }  
//   };  

//   const handleDelete = async () => {    
//     if (selectedSubscriber) {      
//       await deleteSubscriber(selectedSubscriber);      
//       setSelectedSubscriber(null);      
//       setShowDeleteDialog(false);    
//     }  
//   };  

//   const handleDeleteAll = async () => {    
//     await deleteAllSubscribers();    
//     setShowDeleteAllDialog(false);  
//   };  

//   const formatDate = (dateString: string) => {    
//     try {
//       return formatDistanceToNow(new Date(dateString), { addSuffix: true });  
//     } catch {
//       return 'Recent';
//     }
//   };  

//   if (loading) {    
//     return (      
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:to-gray-900">        
//         <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />      
//       </div>    
//     );  
//   }  

//   return (    
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">      
//       <Navigation />      
//       <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-7xl mx-auto">        
//         <motion.div          
//           initial={{ opacity: 0, y: 20 }}          
//           animate={{ opacity: 1, y: 0 }}          
//           transition={{ duration: 0.5 }}          
//           className="space-y-6"        
//         >          
//           {/* Header */}          
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">            
//             <div>              
//               <Button                
//                 variant="ghost"                
//                 size="sm"                
//                 onClick={() => router.push('/admin')}                
//                 className="mb-2 -ml-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"              
//               >                
//                 <ArrowLeft className="w-4 h-4 mr-1" /> Back to Dashboard              
//               </Button>              
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">                
//                 Newsletter Subscribers              
//               </h1>              
//               <p className="text-slate-600 dark:text-gray-400 mt-1 text-sm">                
//                 {subscribers.length} active subscribers • {deletedSubscribers.length} un-subscribers tracking indexes
//               </p>            
//             </div>            
//             <div className="flex items-center gap-2">              
//               <Button                
//                 variant="outline"                
//                 size="sm"                
//                 onClick={() => router.push('/admin/deleted-subscribers')}                
//                 className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/40 dark:hover:bg-red-950/20 bg-white dark:bg-gray-900 font-medium"              
//               >                
//                 <UserX className="w-4 h-4 mr-1" /> View Trash ({deletedSubscribers.length})              
//               </Button>              
//               {subscribers.length > 0 && (                
//                 <Button                  
//                   variant="outline"                  
//                   size="sm"                  
//                   onClick={() => setShowDeleteAllDialog(true)}                  
//                   className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/40 dark:hover:bg-red-950/20 bg-white dark:bg-gray-900"                
//                 >                  
//                   <Trash2 className="w-4 h-4 mr-1" /> Purge Database                
//                 </Button>              
//               )}              
//               <Button                
//                 variant="outline"                
//                 size="sm"                
//                 onClick={() => {                  
//                   fetchSubscribers?.();                  
//                   fetchDeletedSubscribers?.();                
//                 }}                
//                 className="border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-slate-50 dark:hover:bg-gray-800"              
//               >                
//                 <RefreshCw className="w-4 h-4" />              
//               </Button>            
//             </div>          </div>          

//           {/* Stats Metrics Layer Banner */}          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">            
//             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
//               <CardContent className="p-4 flex items-center justify-between">                
//                 <div>                  
//                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Pool</p>                  
//                   <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">{subscribers.length}</p>                
//                 </div>                
//                 <UserCheck className="w-5 h-5 text-purple-500" />              
//               </CardContent>            
//             </Card>            
//             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
//               <CardContent className="p-4 flex items-center justify-between">                
//                 <div>                  
//                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Opt-Outs</p>                  
//                   <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">{deletedSubscribers.length}</p>                
//                 </div>                
//                 <UserX className="w-5 h-5 text-red-500" />              
//               </CardContent>            
//             </Card>            
//             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
//               <CardContent className="p-4 flex items-center justify-between">                
//                 <div>                  
//                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Logs</p>                  
//                   <p className="text-2xl font-bold mt-1">{subscribers.length + deletedSubscribers.length}</p>                
//                 </div>                
//                 <Users className="w-5 h-5 text-emerald-500" />              
//               </CardContent>            
//             </Card>            
//             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
//               <CardContent className="p-4 flex items-center justify-between">                
//                 <div>                  
//                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Status Rate</p>                  
//                   <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">                      
//                     {subscribers.length > 0 ? '+100%' : '0%'}                    
//                   </p>                
//                 </div>                
//                 <Activity className="w-5 h-5 text-blue-500" />              
//               </CardContent>            
//             </Card>          
//           </div>          

//           {/* Search Management Unit */}          
//           <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">            
//             <CardContent className="p-4">              
//               <div className="flex flex-col sm:flex-row gap-3">                
//                 <div className="relative flex-1">                  
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />                  
//                   <Input                    
//                     placeholder="Search tracking index logs by email string..."                    
//                     value={searchTerm}                    
//                     onChange={(e) => setSearchTerm(e.target.value)}                    
//                     className="pl-9 h-10 bg-white dark:bg-gray-950"                  
//                   />                
//                 </div>                
//                 {searchTerm && (
//                   <Button                  
//                     variant="ghost"                  
//                     size="sm"                  
//                     onClick={() => setSearchTerm('')}                  
//                     className="text-slate-500 dark:text-slate-400 underline text-xs"                
//                   >                  
//                     Clear Search Buffer
//                   </Button>
//                 )}
//               </div>            
//             </CardContent>          
//           </Card>          

//           {/* Subscribers Table Frame */}          
//           <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">            
//             <CardContent className="p-0 overflow-x-auto">              
//               <Table>                
//                 <TableHeader>                  
//                   <TableRow className="bg-slate-50 dark:bg-gray-900/50">                    
//                     <TableHead                      
//                       className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"                      
//                       onClick={() => handleSort('email')}                    
//                     >                      
//                       <div className="flex items-center gap-1 font-semibold">                        
//                         Subscriber Email                        
//                         {sortField === 'email' && (                          
//                           sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />                        
//                         )}                      
//                       </div>                    
//                     </TableHead>                    
//                     <TableHead                      
//                       className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"                      
//                       onClick={() => handleSort('subscribed_at')}                    
//                     >                      
//                       <div className="flex items-center gap-1 font-semibold">                        
//                         Subscription Timestamp                        
//                         {sortField === 'subscribed_at' && (                          
//                           sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />                        
//                         )}                      
//                       </div>                    
//                     </TableHead>                    
//                     <TableHead className="font-semibold">State</TableHead>                    
//                     <TableHead className="text-right font-semibold">Actions Link</TableHead>                  
//                   </TableRow>                
//                 </TableHeader>                
//                 <TableBody>                  
//                   {sortedSubscribers.length === 0 ? (                    
//                     <TableRow>                      
//                       <TableCell colSpan={4} className="text-center py-12 text-slate-500">                        
//                         <div className="flex flex-col items-center gap-2">                          
//                           <Users className="w-8 h-8 text-slate-300" />                          
//                           <p className="text-sm font-medium">No subscriber models registered inside this system directory array stack.</p>                          
//                           {searchTerm && (                            
//                             <Button variant="ghost" size="sm" onClick={() => setSearchTerm('')} className="mt-1 text-xs underline">                              
//                               Reset Buffer Filter                            
//                             </Button>                          
//                           )}                        
//                         </div>                      
//                       </TableCell>                    
//                     </TableRow>                  
//                   ) : (                    
//                     sortedSubscribers.map((subscriber) => (                      
//                       <TableRow                        
//                         key={subscriber.id}                        
//                         className="hover:bg-slate-50 dark:hover:bg-gray-900/40 cursor-pointer transition-colors"                        
//                         onClick={() => router.push(`/admin/newsletter/${subscriber.id}`)}                      
//                       >                        
//                         <TableCell className="font-medium">                          
//                           <div className="flex items-center gap-2 max-w-[280px] truncate">                            
//                             <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />                            
//                             <a                              
//                               href={`mailto:${subscriber.email}`}                              
//                               className="text-purple-600 dark:text-purple-400 font-mono text-xs hover:underline block truncate"                              
//                               onClick={(e) => e.stopPropagation()}                            
//                             >                              
//                               {subscriber.email}                            
//                             </a>                          
//                           </div>                        
//                         </TableCell>                        
//                         <TableCell className="text-xs text-slate-500 font-mono">                          
//                           <div className="flex items-center gap-2">                            
//                             <Calendar className="w-3 h-3" />                            
//                             {formatDate(subscriber.subscribed_at)}                          
//                           </div>                        
//                         </TableCell>                        
//                         <TableCell>                          
//                           <Badge                            
//                             variant={subscriber.is_active ? 'default' : 'outline'}                            
//                             className={subscriber.is_active                              
//                               ? 'bg-emerald-500 text-white border-0'                              
//                               : 'bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-slate-300 border-0'                            
//                             }                          
//                           >                            
//                             {subscriber.is_active ? 'Active Connection' : 'Stale Token'}                          
//                           </Badge>                        
//                         </TableCell>                        
//                         <TableCell className="text-right">                          
//                           <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>                            
//                             <Button                              
//                               variant="ghost"                              
//                               size="icon"                              
//                               className="h-8 w-8 text-slate-500 hover:text-red-600"                              
//                               onClick={() => {                                
//                                 setSelectedSubscriber(subscriber.id);                                
//                                 setShowDeleteDialog(true);                              
//                               }}                              
//                               title="Trash Subscriber"                            
//                             >                              
//                               <Trash2 className="w-4 h-4" />                            
//                             </Button>                          
//                           </div>                        
//                         </TableCell>                      
//                       </TableRow>                    
//                     ))                  )}                
//                 </TableBody>              
//               </Table>            
//             </CardContent>          
//           </Card>        
//         </motion.div>      
//       </div>      

//       {/* Delete Item Target Matrix Confirmation Dialog */}      
//       <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>        
//         <AlertDialogContent className="bg-white dark:bg-gray-900 border">          
//           <AlertDialogHeader>            
//             <AlertDialogTitle>Execute Subscriber Document Unlink?</AlertDialogTitle>            
//             <AlertDialogDescription>              
//               Are you sure you want to delete this subscriber tracking channel route? This flags the entry path structure into local trash memory blocks.            
//             </AlertDialogDescription>          
//           </AlertDialogHeader>          
//           <AlertDialogFooter>            
//             <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>            
//             <AlertDialogAction onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700">              
//               Drop Tracking Channels            
//             </AlertDialogAction>          
//           </AlertDialogFooter>        
//         </AlertDialogContent>      
//       </AlertDialog>      

//       {/* Delete Complete Batch Database Selection Dialog */}      
//       <AlertDialog open={showDeleteAllDialog} onOpenChange={setShowDeleteAllDialog}>        
//         <AlertDialogContent className="bg-white dark:bg-gray-900 border">          
//           <AlertDialogHeader>            
//             <AlertDialogTitle>Execute Full Production Directory Wipe?</AlertDialogTitle>            
//             <AlertDialogDescription>              
//               Warning: Confirming will execute a complete drop array trigger path across all <strong>{subscribers.length}</strong> active newsletter listeners instantly.            
//             </AlertDialogDescription>          
//           </AlertDialogHeader>          
//           <AlertDialogFooter>            
//             <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>            
//             <AlertDialogAction onClick={handleDeleteAll} className="bg-red-600 text-white hover:bg-red-700">              
//               Confirm Complete Directory Wipe            
//             </AlertDialogAction>          
//           </AlertDialogFooter>        
//         </AlertDialogContent>      
//       </AlertDialog>    
//     </div>  
//   );
// }








































// app/admin/newsletter/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {  
  Users,  
  Search,  
  Mail,  
  Calendar,  
  Trash2,  
  ArrowLeft,  
  RefreshCw,  
  ChevronDown,  
  ChevronUp,  
  UserCheck,  
  UserX,  
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {  
  Table,  
  TableBody,  
  TableCell,  
  TableHead,  
  TableHeader,  
  TableRow
} from '@/components/ui/table';
import {  
  AlertDialog,  
  AlertDialogAction,  
  AlertDialogCancel,  
  AlertDialogContent,  
  AlertDialogDescription,  
  AlertDialogFooter,  
  AlertDialogHeader,  
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useNewsletter } from '@/hooks/useNewsletter';
import Navigation from '@/components/navigation';
import { formatDistanceToNow } from 'date-fns';

export default function NewsletterPage() {  
  const router = useRouter();  
  const {    
    subscribers = [],    
    loading,    
    error,    
    deleteSubscriber,    
    deleteAllSubscribers,    
    fetchSubscribers,    
    fetchDeletedSubscribers,    
    deletedSubscribers = []  
  } = useNewsletter();  

  const [searchTerm, setSearchTerm] = useState('');  
  const [selectedSubscriber, setSelectedSubscriber] = useState<number | null>(null);  
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);  
  const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);  
  const [sortField, setSortField] = useState<'subscribed_at' | 'email'>('subscribed_at');  
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');  

  // ✨ FIXED: Added correct fetch hooks dependencies so fresh states sync accurately on updates
  useEffect(() => {
    fetchSubscribers?.();
    fetchDeletedSubscribers?.();
  }, [fetchSubscribers, fetchDeletedSubscribers]);

  // Search filter  
  const filteredSubscribers = subscribers.filter(subscriber => {    
    if (!searchTerm) return true;    
    return subscriber.email?.toLowerCase().includes(searchTerm.toLowerCase());  
  });  

  // Sort subscribers  
  const sortedSubscribers = [...filteredSubscribers].sort((a, b) => {    
    let comparison = 0;    
    if (sortField === 'subscribed_at') {      
      comparison = new Date(a.subscribed_at).getTime() - new Date(b.subscribed_at).getTime();    
    } else if (sortField === 'email') {      
      comparison = (a.email || '').localeCompare(b.email || '');    
    }    
    return sortDirection === 'asc' ? comparison : -comparison;  
  });  

  const handleSort = (field: typeof sortField) => {    
    if (sortField === field) {      
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');    
    } else {      
      setSortField(field);      
      setSortDirection('desc');    
    }  
  };  

  const handleDelete = async () => {    
    if (selectedSubscriber) {      
      await deleteSubscriber(selectedSubscriber);      
      setSelectedSubscriber(null);      
      setShowDeleteDialog(false);    
    }  
  };  

  const handleDeleteAll = async () => {    
    await deleteAllSubscribers();    
    setShowDeleteAllDialog(false);  
  };  

  const formatDate = (dateString: string) => {    
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });  
    } catch {
      return 'Recent';
    }
  };  

  if (loading) {    
    return (      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:to-gray-900">        
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />      
      </div>    
    );  
  }  

  return (    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">      
      <Navigation />      
      {/* ✨ ADJUSTMENT: Rebalanced responsive wrapper margins around your interface block containers */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-7xl mx-auto my-2 sm:my-4 lg:my-6">        
        <motion.div          
          initial={{ opacity: 0, y: 20 }}          
          animate={{ opacity: 1, y: 0 }}          
          transition={{ duration: 0.5 }}          
          className="space-y-6"        
        >          
          {/* Header */}          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">            
            <div>              
              <Button                
                variant="ghost"                
                size="sm"                
                onClick={() => router.push('/admin')}                
                className="mb-2 -ml-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"              
              >                
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Dashboard              
              </Button>              
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">                
                Newsletter Subscribers              
              </h1>              
              <p className="text-slate-600 dark:text-gray-400 mt-1 text-sm">                
                {subscribers.length} active subscribers • {deletedSubscribers.length} un-subscribers tracking indexes
              </p>            
            </div>            
            <div className="flex items-center gap-2">              
              <Button                
                variant="outline"                
                size="sm"                
                onClick={() => router.push('/admin/deleted-subscribers')}                
                className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/40 dark:hover:bg-red-950/20 bg-white dark:bg-gray-900 font-medium"              
              >                
                <UserX className="w-4 h-4 mr-1" /> View Trash ({deletedSubscribers.length})              
              </Button>              
              {subscribers.length > 0 && (                
                <Button                  
                  variant="outline"                  
                  size="sm"                  
                  onClick={() => setShowDeleteAllDialog(true)}                  
                  className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/40 dark:hover:bg-red-950/20 bg-white dark:bg-gray-900"                
                >                  
                  <Trash2 className="w-4 h-4 mr-1" /> Purge Database                
                </Button>              
              )}              
              <Button                
                variant="outline"                
                size="sm"                
                onClick={() => {                  
                  fetchSubscribers?.();                  
                  fetchDeletedSubscribers?.();                
                }}                
                className="border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-slate-50 dark:hover:bg-gray-800"              
              >                
                <RefreshCw className="w-4 h-4" />              
              </Button>            
            </div>          
          </div>          

          {/* Stats Metrics Layer Banner */}          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">            
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
              <CardContent className="p-4 flex items-center justify-between">                
                <div>                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Pool</p>                  
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">{subscribers.length}</p>                
                </div>                
                <UserCheck className="w-5 h-5 text-purple-500" />              
              </CardContent>            
            </Card>            
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
              <CardContent className="p-4 flex items-center justify-between">                
                <div>                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Opt-Outs</p>                  
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">{deletedSubscribers.length}</p>                
                </div>                
                <UserX className="w-5 h-5 text-red-500" />              
              </CardContent>            
            </Card>            
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
              <CardContent className="p-4 flex items-center justify-between">                
                <div>                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Logs</p>                  
                  <p className="text-2xl font-bold mt-1">{subscribers.length + deletedSubscribers.length}</p>                
                </div>                
                <Users className="w-5 h-5 text-emerald-500" />              
              </CardContent>            
            </Card>            
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
              <CardContent className="p-4 flex items-center justify-between">                
                <div>                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Status Rate</p>                  
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">                      
                    {subscribers.length > 0 ? '+100%' : '0%'}                    
                  </p>                
                </div>                
                <Activity className="w-5 h-5 text-blue-500" />              
              </CardContent>            
            </Card>          
          </div>          

          {/* Search Management Unit */}          
          <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">            
            <CardContent className="p-4">              
              <div className="flex flex-col sm:flex-row gap-3">                
                <div className="relative flex-1">                  
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />                  
                  <Input                    
                    placeholder="Search tracking index logs by email string..."                    
                    value={searchTerm}                    
                    onChange={(e) => setSearchTerm(e.target.value)}                    
                    className="pl-9 h-10 bg-white dark:bg-gray-950"                  
                  />                
                </div>                
                {searchTerm && (
                  <Button                  
                    variant="ghost"                  
                    size="sm"                  
                    onClick={() => setSearchTerm('')}                  
                    className="text-slate-500 dark:text-slate-400 underline text-xs"                
                  >                  
                    Clear Search Buffer
                  </Button>
                )}
              </div>            
            </CardContent>          
          </Card>          

          {/* Subscribers Table Frame */}          
          <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">            
            <CardContent className="p-0 overflow-x-auto">              
              <Table>                
                <TableHeader>                  
                  <TableRow className="bg-slate-50 dark:bg-gray-900/50">                    
                    <TableHead                      
                      className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"                      
                      onClick={() => handleSort('email')}                    
                    >                      
                      <div className="flex items-center gap-1 font-semibold">                        
                        Subscriber Email                        
                        {sortField === 'email' && (                          
                          sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />                        
                        )}                      
                      </div>                    
                    </TableHead>                    
                    <TableHead                      
                      className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"                      
                      onClick={() => handleSort('subscribed_at')}                    
                    >                      
                      <div className="flex items-center gap-1 font-semibold">                        
                        Subscription Timestamp                        
                        {sortField === 'subscribed_at' && (                          
                          sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />                        
                        )}                      
                      </div>                    
                    </TableHead>                    
                    <TableHead className="font-semibold">State</TableHead>                    
                    <TableHead className="text-right font-semibold">Actions Link</TableHead>                  
                  </TableRow>                
                </TableHeader>                
                <TableBody>                  
                  {sortedSubscribers.length === 0 ? (                    
                    <TableRow>                      
                      <TableCell colSpan={4} className="text-center py-12 text-slate-500">                        
                        <div className="flex flex-col items-center gap-2">                          
                          <Users className="w-8 h-8 text-slate-300" />                          
                          <p className="text-sm font-medium">No subscriber models registered inside this system directory array stack.</p>                          
                          {searchTerm && (                            
                            <Button variant="ghost" size="sm" onClick={() => setSearchTerm('')} className="mt-1 text-xs underline">                              
                              Reset Buffer Filter                            
                            </Button>                          
                          )}                        
                        </div>                      
                      </TableCell>                    
                    </TableRow>                  
                  ) : (                    
                    sortedSubscribers.map((subscriber) => (                      
                      <TableRow                        
                        key={subscriber.id}                        
                        className="hover:bg-slate-50 dark:hover:bg-gray-900/40 cursor-pointer transition-colors"                        
                        onClick={() => router.push(`/admin/newsletter/${subscriber.id}`)}                      
                      >                        
                        <TableCell className="font-medium">                          
                          <div className="flex items-center gap-2 max-w-[280px] truncate">                            
                            <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />                            
                            <a                               
                              href={`mailto:${subscriber.email}`}                              
                              className="text-purple-600 dark:text-purple-400 font-mono text-xs hover:underline block truncate"                              
                              onClick={(e) => e.stopPropagation()}                            
                            >                              
                              {subscriber.email}                            
                            </a>                          
                          </div>                        
                        </TableCell>                        
                        <TableCell className="text-xs text-slate-500 font-mono">                          
                          <div className="flex items-center gap-2">                            
                            <Calendar className="w-3 h-3" />                            
                            {formatDate(subscriber.subscribed_at)}                          
                          </div>                        
                        </TableCell>                        
                        <TableCell>                          
                          <Badge                            
                            variant={subscriber.is_active ? 'default' : 'outline'}                            
                            className={subscriber.is_active                               
                              ? 'bg-emerald-500 text-white border-0'                               
                              : 'bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-slate-300 border-0'                            
                            }                          
                          >                            
                            {subscriber.is_active ? 'Active Connection' : 'Stale Token'}                          
                          </Badge>                        
                        </TableCell>                        
                        <TableCell className="text-right">                          
                          <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>                            
                            <Button                              
                              variant="ghost"                              
                              size="icon"                              
                              className="h-8 w-8 text-slate-500 hover:text-red-600"                              
                              onClick={() => {                                
                                setSelectedSubscriber(subscriber.id);                                
                                setShowDeleteDialog(true);                              
                              }}                              
                              title="Trash Subscriber"                            
                            >                              
                              <Trash2 className="w-4 h-4" />                            
                            </Button>                          
                          </div>                        
                        </TableCell>                      
                      </TableRow>                    
                    ))                  )}                
                </TableBody>              
              </Table>            
            </CardContent>          
          </Card>        
        </motion.div>      
      </div>      

      {/* Delete Item Target Matrix Confirmation Dialog */}      
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>        
        <AlertDialogContent className="bg-white dark:bg-gray-900 border">          
          <AlertDialogHeader>            
            <AlertDialogTitle>Execute Subscriber Document Unlink?</AlertDialogTitle>            
            <AlertDialogDescription>              
              Are you sure you want to delete this subscriber tracking channel route? This flags the entry path structure into local trash memory blocks.            
            </AlertDialogDescription>          
          </AlertDialogHeader>          
          <AlertDialogFooter>            
            <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>            
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700">              
              Drop Tracking Channels            
            </AlertDialogAction>          
          </AlertDialogFooter>        
        </AlertDialogContent>      
      </AlertDialog>      

      {/* Delete Complete Batch Database Selection Dialog */}      
      <AlertDialog open={showDeleteAllDialog} onOpenChange={setShowDeleteAllDialog}>        
        <AlertDialogContent className="bg-white dark:bg-gray-900 border">          
          <AlertDialogHeader>            
            <AlertDialogTitle>Execute Full Production Directory Wipe?</AlertDialogTitle>            
            <AlertDialogDescription>              
              Warning: Confirming will execute a complete drop array trigger path across all <strong>{subscribers.length}</strong> active newsletter listeners instantly.            
            </AlertDialogDescription>          
          </AlertDialogHeader>          
          <AlertDialogFooter>            
            <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>            
            <AlertDialogAction onClick={handleDeleteAll} className="bg-red-600 text-white hover:bg-red-700">              
              Confirm Complete Directory Wipe            
            </AlertDialogAction>          
          </AlertDialogFooter>        
        </AlertDialogContent>      
      </AlertDialog>    
    </div>  
  );
}