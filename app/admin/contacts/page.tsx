
// // // app/admin/contacts/page.tsx
// // 'use client';

// // import { useState } from 'react';
// // import { useRouter, useSearchParams } from 'next/navigation';
// // import { motion } from 'framer-motion';
// // import { 
// //    MessageSquare, 
// //    Search, 
// //    Mail, 
// //    User, 
// //    Eye, 
// //    EyeOff,
// //   Trash2,
// //   ArrowLeft,
// //   RefreshCw,
// //   ChevronDown,
// //   ChevronUp,
// //   Clock
// // } from 'lucide-react';
// // import { Button } from '@/components/ui/button';
// // import { Card, CardContent } from '@/components/ui/card';
// // import { Input } from '@/components/ui/input';
// // import { Badge } from '@/components/ui/badge';
// // import { 
// //    Table, 
// //    TableBody, 
// //    TableCell, 
// //    TableHead, 
// //    TableHeader, 
// //    TableRow 
// // } from '@/components/ui/table';
// // import {
// //   AlertDialog,
// //   AlertDialogAction,
// //   AlertDialogCancel,
// //   AlertDialogContent,
// //   AlertDialogDescription,
// //   AlertDialogFooter,
// //   AlertDialogHeader,
// //   AlertDialogTitle,
// // } from '@/components/ui/alert-dialog';
// // import { useContacts } from '@/hooks/useContacts';
// // import Navigation from '@/components/navigation';
// // import { formatDistanceToNow } from 'date-fns';

// // export default function ContactsPage() {
// //   const router = useRouter();
// //   const searchParams = useSearchParams();
// //   const filterParam = searchParams.get('filter');
  
// //   const { 
// //     contacts, 
// //     loading, 
// //     error, 
// //     deleteContact,
// //     deleteAllContacts,
// //     markAsRead,
// //     markAsUnread,
// //     fetchContacts,
// //     stats
// //   } = useContacts();

// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedContact, setSelectedContact] = useState<number | null>(null);
// //   const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);
// //   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
// //   const [sortField, setSortField] = useState<'created_at' | 'name' | 'email'>('created_at');
// //   const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

// //   // Filter contacts based on URL param
// //   const filteredContacts = contacts.filter(contact => {
// //     if (filterParam === 'unread') return !contact.is_read;
// //     if (filterParam === 'recent') {
// //       const sevenDaysAgo = new Date();
// //       sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
// //       return new Date(contact.created_at) >= sevenDaysAgo;
// //     }
// //     return true;
// //   });

// //   // Search filter
// //   const searchedContacts = filteredContacts.filter(contact => {
// //     if (!searchTerm) return true;
// //     const search = searchTerm.toLowerCase();
// //     return (
// //       contact.name.toLowerCase().includes(search) ||
// //       contact.email.toLowerCase().includes(search) ||
// //       contact.subject.toLowerCase().includes(search) ||
// //       contact.message.toLowerCase().includes(search)
// //     );
// //   });

// //   // Sort contacts
// //   const sortedContacts = [...searchedContacts].sort((a, b) => {
// //     let comparison = 0;
// //     if (sortField === 'created_at') {
// //       comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
// //     } else if (sortField === 'name') {
// //       comparison = a.name.localeCompare(b.name);
// //     } else if (sortField === 'email') {
// //       comparison = a.email.localeCompare(b.email);
// //     }
// //     return sortDirection === 'asc' ? comparison : -comparison;
// //   });

// //   const handleSort = (field: typeof sortField) => {
// //     if (sortField === field) {
// //       setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
// //     } else {
// //       setSortField(field);
// //       setSortDirection('desc');
// //     }
// //   };

// //   const handleDelete = async () => {
// //     if (selectedContact) {
// //       await deleteContact(selectedContact);
// //       setSelectedContact(null);
// //       setShowDeleteDialog(false);
// //     }
// //   };

// //   const handleDeleteAll = async () => {
// //     await handleDeleteAllContacts();
// //     setShowDeleteAllDialog(false);
// //   };

// //   const handleDeleteAllContacts = async () => {
// //     await deleteAllContacts();
// //   };

// //   const formatDate = (dateString: string) => {
// //     try {
// //       return formatDistanceToNow(new Date(dateString), { addSuffix: true });
// //     } catch {
// //       return 'Recent';
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
// //         <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
// //       <Navigation />
// //       <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-7xl mx-auto">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           className="space-y-6"
// //         >
// //           {/* Header */}
// //           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
// //             <div>
// //               <Button
// //                 variant="ghost"
// //                 size="sm"
// //                 onClick={() => router.push('/admin')}
// //                 className="mb-2 -ml-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
// //               >
// //                 <ArrowLeft className="w-4 h-4 mr-1" /> Back to Dashboard
// //               </Button>
// //               <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
// //                 Contact Submissions
// //               </h1>
// //               <p className="text-slate-600 dark:text-gray-400 mt-1 text-sm">
// //                 {contacts.length} total submissions • {stats?.unread_contacts || 0} unread
// //               </p>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               {contacts.length > 0 && (                <Button
// //                   variant="outline"
// //                   size="sm"
// //                   onClick={() => setShowDeleteAllDialog(true)}
// //                   className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/30 font-semibold"
// //                 >
// //                   <Trash2 className="w-4 h-4 mr-1" /> Delete All
// //                 </Button>
// //               )}              <Button
// //                 variant="outline"
// //                 size="sm"
// //                 onClick={() => fetchContacts()}
// //                 className="border-slate-200 hover:bg-slate-50 dark:border-gray-800 dark:hover:bg-gray-900 bg-white dark:bg-gray-900"
// //               >
// //                 <RefreshCw className="w-4 h-4" />
// //               </Button>
// //             </div>
// //           </div>

// //           {/* Stats Cards Layout Banner */}
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
// //               <CardContent className="p-4 flex items-center justify-between">
// //                 <div>
// //                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total</p>
// //                   <p className="text-2xl font-bold mt-1">{stats?.total_contacts || 0}</p>
// //                 </div>
// //                 <MessageSquare className="w-5 h-5 text-emerald-500" />
// //               </CardContent>
// //             </Card>
// //             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
// //               <CardContent className="p-4 flex items-center justify-between">
// //                 <div>
// //                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Unread</p>
// //                   <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">{stats?.unread_contacts || 0}</p>
// //                 </div>
// //                 <Mail className="w-5 h-5 text-red-500" />
// //               </CardContent>
// //             </Card>
// //             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
// //               <CardContent className="p-4 flex items-center justify-between">
// //                 <div>
// //                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Read</p>
// //                   <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">{stats?.read_contacts || 0}</p>
// //                 </div>
// //                 <Eye className="w-5 h-5 text-emerald-500" />
// //               </CardContent>
// //             </Card>
// //             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
// //               <CardContent className="p-4 flex items-center justify-between">
// //                 <div>
// //                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">7 Days</p>
// //                   <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">{stats?.recent_contacts_7_days || 0}</p>
// //                 </div>
// //                 <Clock className="w-5 h-5 text-blue-500" />
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Search Bar Block */}
// //           <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
// //             <CardContent className="p-4">
// //               <div className="flex flex-col sm:flex-row gap-3">
// //                 <div className="relative flex-1">
// //                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
// //                   <Input
// //                     placeholder="Search by name, email, subject..."
// //                     value={searchTerm}
// //                     onChange={(e) => setSearchTerm(e.target.value)}
// //                     className="pl-9 h-10 bg-white dark:bg-gray-950"
// //                   />
// //                 </div>
// //                 <div className="flex gap-2">
// //                   <Button
// //                     variant={filterParam === 'unread' ? 'default' : 'outline'}
// //                     size="sm"
// //                     onClick={() => router.push(filterParam === 'unread' ? '/admin/contacts' : '/admin/contacts?filter=unread')}
// //                     className={filterParam === 'unread' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-white dark:bg-gray-900'}
// //                   >
// //                     <Mail className="w-4 h-4 mr-1" /> Unread
// //                   </Button>
// //                   <Button
// //                     variant={filterParam === 'recent' ? 'default' : 'outline'}
// //                     size="sm"
// //                     onClick={() => router.push(filterParam === 'recent' ? '/admin/contacts' : '/admin/contacts?filter=recent')}
// //                     className={filterParam === 'recent' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-white dark:bg-gray-900'}
// //                   >
// //                     <Clock className="w-4 h-4 mr-1" /> Recent
// //                   </Button>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>

// //           {/* Contacts Management Data Table */}
// //           <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
// //             <CardContent className="p-0 overflow-x-auto">
// //               <Table>
// //                 <TableHeader>
// //                   <TableRow className="bg-slate-50 dark:bg-gray-900/50">
// //                     <TableHead 
// //                       className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
// //                       onClick={() => handleSort('name')}
// //                     >
// //                       <div className="flex items-center gap-1 font-semibold">
// //                         Name                        {sortField === 'name' && (
// //                           sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
// //                         )}
// //                       </div>
// //                     </TableHead>
// //                     <TableHead 
// //                       className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
// //                       onClick={() => handleSort('email')}
// //                     >
// //                       <div className="flex items-center gap-1 font-semibold">
// //                         Email                        {sortField === 'email' && (
// //                           sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
// //                         )}
// //                       </div>
// //                     </TableHead>
// //                     <TableHead className="font-semibold">Subject</TableHead>
// //                     <TableHead 
// //                       className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
// //                       onClick={() => handleSort('created_at')}
// //                     >
// //                       <div className="flex items-center gap-1 font-semibold">
// //                         Received                        {sortField === 'created_at' && (
// //                           sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
// //                         )}
// //                       </div>
// //                     </TableHead>
// //                     <TableHead className="font-semibold">Status</TableHead>
// //                     <TableHead className="text-right font-semibold">Actions</TableHead>
// //                   </TableRow>
// //                 </TableHeader>
// //                 <TableBody>
// //                   {sortedContacts.length === 0 ? (
// //                     <TableRow>
// //                       <TableCell colSpan={6} className="text-center py-12 text-slate-500">
// //                         <div className="flex flex-col items-center gap-2">
// //                           <MessageSquare className="w-8 h-8 text-slate-300" />
// //                           <p className="text-sm font-medium">No system contact inquiries matched criteria index layout parameters.</p>
// //                           {searchTerm && (
// //                             <Button variant="ghost" size="sm" onClick={() => setSearchTerm('')} className="mt-1 text-xs underline">
// //                               Clear Search Index Filter
// //                             </Button>
// //                           )}
// //                         </div>
// //                       </TableCell>
// //                     </TableRow>
// //                   ) : (
// //                     sortedContacts.map((contact) => (
// //                       <TableRow 
// //                         key={contact.id}
// //                         className="hover:bg-slate-50 dark:hover:bg-gray-900/40 cursor-pointer transition-colors"
// //                         onClick={() => router.push(`/admin/contacts/${contact.id}`)}
// //                       >
// //                         <TableCell className="font-medium">
// //                           <div className="flex items-center gap-2 max-w-[180px] truncate">
// //                             <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
// //                             {contact.name}
// //                           </div>
// //                         </TableCell>
// //                         <TableCell>
// //                           <a 
// //                             href={`mailto:${contact.email}`}
// //                             className="text-emerald-600 dark:text-emerald-400 hover:underline font-mono text-xs truncate max-w-[200px] block"
// //                             onClick={(e) => e.stopPropagation()}
// //                           >
// //                             {contact.email}
// //                           </a>
// //                         </TableCell>
// //                         <TableCell>
// //                           <span className="line-clamp-1 text-slate-700 dark:text-slate-300 max-w-[220px]">{contact.subject}</span>
// //                         </TableCell>
// //                         <TableCell className="text-xs text-slate-500 font-mono">
// //                           {formatDate(contact.created_at)}
// //                         </TableCell>
// //                         <TableCell>
// //                           <Badge 
// //                             variant={contact.is_read ? 'outline' : 'default'}
// //                             className={contact.is_read 
// //                                ? 'bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-slate-300 border-0' 
// //                                : 'bg-emerald-500 hover:bg-emerald-600 text-white border-0'
// //                             }
// //                           >
// //                             {contact.is_read ? 'Read' : 'Unread'}
// //                           </Badge>
// //                         </TableCell>

// //                         <TableCell className="text-right">
// //                           <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>
// //                             <Button
// //                               variant="ghost"
// //                               size="icon"
// //                               className="h-8 w-8 text-slate-500 hover:text-emerald-600"
// //                               onClick={() => contact.is_read ? markAsUnread(contact.id) : markAsRead(contact.id)}
// //                               title={contact.is_read ? 'Mark as unread' : 'Mark as read'}
// //                             >
// //                               {contact.is_read ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
// //                             </Button>
// //                             <Button
// //                               variant="ghost"
// //                               size="icon"
// //                               className="h-8 w-8 text-slate-500 hover:text-red-600"
// //                               onClick={() => {
// //                                 setSelectedContact(contact.id);
// //                                 setShowDeleteDialog(true);
// //                               }}
// //                               title="Delete"
// //                             >
// //                               <Trash2 className="w-4 h-4" />
// //                             </Button>
// //                           </div>
// //                         </TableCell>

                        
// //                       </TableRow>
// //                     ))
// //                   )}
// //                 </TableBody>
// //               </Table>
// //             </CardContent>
// //           </Card>
// //         </motion.div>
// //       </div>

// //       {/* Single Delete Confirmation Dialog */}
// //       <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
// //         <AlertDialogContent className="bg-white dark:bg-gray-900 border">
// //           <AlertDialogHeader>
// //             <AlertDialogTitle>Purge Communication Data Record?</AlertDialogTitle>
// //             <AlertDialogDescription>
// //               Are you sure you want to delete this contact message? This action removes the tracking path permanently from database architectures.
// //             </AlertDialogDescription>
// //           </AlertDialogHeader>
// //           <AlertDialogFooter>
// //             <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>
// //             <AlertDialogAction onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700">
// //               Purge Record
// //             </AlertDialogAction>
// //           </AlertDialogFooter>
// //         </AlertDialogContent>
// //       </AlertDialog>

// //       {/* Batch Delete All Confirmation Dialog */}
// //       <AlertDialog open={showDeleteAllDialog} onOpenChange={setShowDeleteAllDialog}>
// //         <AlertDialogContent className="bg-white dark:bg-gray-900 border">
// //           <AlertDialogHeader>
// //             <AlertDialogTitle>Confirm Hard Wipe Execution?</AlertDialogTitle>
// //             <AlertDialogDescription>
// //               Warning: Proceeding wipes out every contact collection structure match inside memory matrices immediately. 
// //               <br />
// //               <br />
// //               <strong>{contacts.length}</strong> inquiries will be permanently removed.
// //             </AlertDialogDescription>
// //           </AlertDialogHeader>
// //           <AlertDialogFooter>
// //             <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>
// //             <AlertDialogAction onClick={handleDeleteAll} className="bg-red-600 text-white hover:bg-red-700">
// //               Confirm Complete Wipe
// //             </AlertDialogAction>
// //           </AlertDialogFooter>
// //         </AlertDialogContent>
// //       </AlertDialog>
// //     </div>
// //   );
// // }




































// // app/admin/contacts/page.tsx
// 'use client';

// import { useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { motion } from 'framer-motion';
// import { 
//    MessageSquare, 
//    Search, 
//    Mail, 
//    User, 
//    Eye, 
//    EyeOff,
//   Trash2,
//   ArrowLeft,
//   RefreshCw,
//   ChevronDown,
//   ChevronUp,
//   Clock
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';
// import { 
//    Table, 
//    TableBody, 
//    TableCell, 
//    TableHead, 
//    TableHeader, 
//    TableRow 
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
// import { useContacts } from '@/hooks/useContacts';
// import Navigation from '@/components/navigation';
// import { formatDistanceToNow } from 'date-fns';

// export default function ContactsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const filterParam = searchParams.get('filter');
  
//   const { 
//     contacts, 
//     loading, 
//     error, 
//     deleteContact,
//     deleteAllContacts,
//     markAsRead,
//     markAsUnread,
//     fetchContacts,
//     stats
//   } = useContacts();

//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedContact, setSelectedContact] = useState<number | null>(null);
//   const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);
//   const [sortField, setSortField] = useState<'created_at' | 'name' | 'email'>('created_at');
//   const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

//   // Filter contacts based on URL param
//   const filteredContacts = contacts.filter(contact => {
//     if (filterParam === 'unread') return !contact.is_read;
//     if (filterParam === 'recent') {
//       const sevenDaysAgo = new Date();
//       sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
//       return new Date(contact.created_at) >= sevenDaysAgo;
//     }
//     return true;
//   });

//   // Search filter
//   const searchedContacts = filteredContacts.filter(contact => {
//     if (!searchTerm) return true;
//     const search = searchTerm.toLowerCase();
//     return (
//       contact.name.toLowerCase().includes(search) ||
//       contact.email.toLowerCase().includes(search) ||
//       contact.subject.toLowerCase().includes(search) ||
//       contact.message.toLowerCase().includes(search)
//     );
//   });

//   // Sort contacts
//   const sortedContacts = [...searchedContacts].sort((a, b) => {
//     let comparison = 0;
//     if (sortField === 'created_at') {
//       comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
//     } else if (sortField === 'name') {
//       comparison = a.name.localeCompare(b.name);
//     } else if (sortField === 'email') {
//       comparison = a.email.localeCompare(b.email);
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
//     if (selectedContact) {
//       await deleteContact(selectedContact);
//       setSelectedContact(null);
//       setShowDeleteDialog(false);
//     }
//   };

//   const handleDeleteAll = async () => {
//     await handleDeleteAllContacts();
//     setShowDeleteAllDialog(false);
//   };

//   const handleDeleteAllContacts = async () => {
//     await deleteAllContacts();
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
//         <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
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
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                 Contact Submissions
//               </h1>
//               <p className="text-slate-600 dark:text-gray-400 mt-1 text-sm">
//                 {contacts.length} total submissions • {stats?.unread_contacts || 0} unread
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               {contacts.length > 0 && (                <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() => setShowDeleteAllDialog(true)}
//                   className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/30 font-semibold"
//                 >
//                   <Trash2 className="w-4 h-4 mr-1" /> Delete All
//                 </Button>
//               )}              <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => fetchContacts()}
//                 className="border-slate-200 hover:bg-slate-50 dark:border-gray-800 dark:hover:bg-gray-900 bg-white dark:bg-gray-900"
//               >
//                 <RefreshCw className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>

//           {/* Stats Cards Layout Banner */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
//               <CardContent className="p-4 flex items-center justify-between">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total</p>
//                   <p className="text-2xl font-bold mt-1">{stats?.total_contacts || 0}</p>
//                 </div>
//                 <MessageSquare className="w-5 h-5 text-emerald-500" />
//               </CardContent>
//             </Card>
//             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
//               <CardContent className="p-4 flex items-center justify-between">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Unread</p>
//                   <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">{stats?.unread_contacts || 0}</p>
//                 </div>
//                 <Mail className="w-5 h-5 text-red-500" />
//               </CardContent>
//             </Card>
//             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
//               <CardContent className="p-4 flex items-center justify-between">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Read</p>
//                   <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">{stats?.read_contacts || 0}</p>
//                 </div>
//                 <Eye className="w-5 h-5 text-emerald-500" />
//               </CardContent>
//             </Card>
//             <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
//               <CardContent className="p-4 flex items-center justify-between">
//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">7 Days</p>
//                   <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">{stats?.recent_contacts_7_days || 0}</p>
//                 </div>
//                 <Clock className="w-5 h-5 text-blue-500" />
//               </CardContent>
//             </Card>
//           </div>

//           {/* Search Bar Block */}
//           <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
//             <CardContent className="p-4">
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <div className="relative flex-1">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                   <Input
//                     placeholder="Search by name, email, subject..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="pl-9 h-10 bg-white dark:bg-gray-950"
//                   />
//                 </div>
//                 <div className="flex gap-2">
//                   <Button
//                     variant={filterParam === 'unread' ? 'default' : 'outline'}
//                     size="sm"
//                     onClick={() => router.push(filterParam === 'unread' ? '/admin/contacts' : '/admin/contacts?filter=unread')}
//                     className={filterParam === 'unread' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-white dark:bg-gray-900'}
//                   >
//                     <Mail className="w-4 h-4 mr-1" /> Unread
//                   </Button>
//                   <Button
//                     variant={filterParam === 'recent' ? 'default' : 'outline'}
//                     size="sm"
//                     onClick={() => router.push(filterParam === 'recent' ? '/admin/contacts' : '/admin/contacts?filter=recent')}
//                     className={filterParam === 'recent' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-white dark:bg-gray-900'}
//                   >
//                     <Clock className="w-4 h-4 mr-1" /> Recent
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Contacts Management Data Table */}
//           <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
//             <CardContent className="p-0 overflow-x-auto">
//               <Table>
//                 <TableHeader>
//                   <TableRow className="bg-slate-50 dark:bg-gray-900/50">
//                     <TableHead 
//                       className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
//                       onClick={() => handleSort('name')}
//                     >
//                       <div className="flex items-center gap-1 font-semibold">
//                         Name                        {sortField === 'name' && (
//                           sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
//                         )}
//                       </div>
//                     </TableHead>
//                     <TableHead 
//                       className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
//                       onClick={() => handleSort('email')}
//                     >
//                       <div className="flex items-center gap-1 font-semibold">
//                         Email                        {sortField === 'email' && (
//                           sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
//                         )}
//                       </div>
//                     </TableHead>
//                     <TableHead className="font-semibold">Subject</TableHead>
//                     <TableHead 
//                       className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
//                       onClick={() => handleSort('created_at')}
//                     >
//                       <div className="flex items-center gap-1 font-semibold">
//                         Received                        {sortField === 'created_at' && (
//                           sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
//                         )}
//                       </div>
//                     </TableHead>
//                     <TableHead className="font-semibold">Status</TableHead>
//                     <TableHead className="text-right font-semibold">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {sortedContacts.length === 0 ? (
//                     <TableRow>
//                       <TableCell colSpan={6} className="text-center py-12 text-slate-500">
//                         <div className="flex flex-col items-center gap-2">
//                           <MessageSquare className="w-8 h-8 text-slate-300" />
//                           <p className="text-sm font-medium">No system contact inquiries matched criteria index layout parameters.</p>
//                           {searchTerm && (
//                             <Button variant="ghost" size="sm" onClick={() => setSearchTerm('')} className="mt-1 text-xs underline">
//                               Clear Search Index Filter
//                             </Button>
//                           )}
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ) : (
//                     sortedContacts.map((contact) => (
//                       <TableRow 
//                         key={contact.id}
//                         className="hover:bg-slate-50 dark:hover:bg-gray-900/40 cursor-pointer transition-colors"
//                         onClick={() => router.push(`/admin/contacts/${contact.id}`)}
//                       >
//                         <TableCell className="font-medium">
//                           <div className="flex items-center gap-2 max-w-[180px] truncate">
//                             <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
//                             {contact.name}
//                           </div>
//                         </TableCell>
//                         <TableCell>
//                           <a 
//                             href={`mailto:${contact.email}`}
//                             className="text-emerald-600 dark:text-emerald-400 hover:underline font-mono text-xs truncate max-w-[200px] block"
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             {contact.email}
//                           </a>
//                         </TableCell>
//                         <TableCell>
//                           <span className="line-clamp-1 text-slate-700 dark:text-slate-300 max-w-[220px]">{contact.subject}</span>
//                         </TableCell>
//                         <TableCell className="text-xs text-slate-500 font-mono">
//                           {formatDate(contact.created_at)}
//                         </TableCell>
//                         <TableCell>
//                           <Badge 
//                             variant={contact.is_read ? 'outline' : 'default'}
//                             className={contact.is_read 
//                                ? 'bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-slate-300 border-0' 
//                                : 'bg-emerald-500 hover:bg-emerald-600 text-white border-0'
//                             }
//                           >
//                             {contact.is_read ? 'Read' : 'Unread'}
//                           </Badge>
//                         </TableCell>

//                         <TableCell className="text-right">
//                           <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>
//                             <Button
//                               variant="ghost"
//                               size="icon"
//                               className="h-8 w-8 text-slate-500 hover:text-emerald-600"
//                               onClick={async (e) => {
//                                 e.stopPropagation(); // Prevents row navigation trigger
//                                 if (contact.is_read) {
//                                   await markAsUnread(contact.id);
//                                 } else {
//                                   await markAsRead(contact.id);
//                                 }
//                               }}
//                               title={contact.is_read ? 'Mark as unread' : 'Mark as read'}
//                             >
//                               {contact.is_read ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//                             </Button>
//                             <Button
//                               variant="ghost"
//                               size="icon"
//                               className="h-8 w-8 text-slate-500 hover:text-red-600"
//                               onClick={(e) => {
//                                 e.stopPropagation(); // Prevents row navigation trigger
//                                 setSelectedContact(contact.id);
//                                 setShowDeleteDialog(true);
//                               }}
//                               title="Delete"
//                             >
//                               <Trash2 className="w-4 h-4" />
//                             </Button>
//                           </div>
//                         </TableCell>
//                       </TableRow>
//                     ))
//                   )}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>

//       {/* Single Delete Confirmation Dialog */}
//       <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
//         <AlertDialogContent className="bg-white dark:bg-gray-900 border">
//           <AlertDialogHeader>
//             <AlertDialogTitle>Purge Communication Data Record?</AlertDialogTitle>
//             <AlertDialogDescription>
//               Are you sure you want to delete this contact message? This action removes the tracking path permanently from database architectures.
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>
//             <AlertDialogAction onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700">
//               Purge Record
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>

//       {/* Batch Delete All Confirmation Dialog */}
//       <AlertDialog open={showDeleteAllDialog} onOpenChange={setShowDeleteAllDialog}>
//         <AlertDialogContent className="bg-white dark:bg-gray-900 border">
//           <AlertDialogHeader>
//             <AlertDialogTitle>Confirm Hard Wipe Execution?</AlertDialogTitle>
//             <AlertDialogDescription>
//               Warning: Proceeding wipes out every contact collection structure match inside memory matrices immediately. 
//               <br />
//               <br />
//               <strong>{contacts.length}</strong> inquiries will be permanently removed.
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>
//             <AlertDialogAction onClick={handleDeleteAll} className="bg-red-600 text-white hover:bg-red-700">
//               Confirm Complete Wipe
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// }
























































// app/admin/contacts/page.tsx
'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
   MessageSquare, 
   Search, 
   Mail, 
   User, 
   Eye, 
   EyeOff,
  Trash2,
  ArrowLeft,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Clock
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
import { useContacts } from '@/hooks/useContacts';
import Navigation from '@/components/navigation';
import { formatDistanceToNow } from 'date-fns';

export default function ContactsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  const { 
    contacts, 
    loading, 
    error, 
    deleteContact,
    deleteAllContacts,
    markAsRead,
    markAsUnread,
    fetchContacts,
    stats
  } = useContacts();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState<number | null>(null);
  const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [sortField, setSortField] = useState<'created_at' | 'name' | 'email'>('created_at');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Filter contacts based on URL param
  const filteredContacts = contacts.filter(contact => {
    if (filterParam === 'unread') return !contact.is_read;
    if (filterParam === 'recent') {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      return new Date(contact.created_at) >= sevenDaysAgo;
    }
    return true;
  });

  // Search filter
  const searchedContacts = filteredContacts.filter(contact => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      contact.name.toLowerCase().includes(search) ||
      contact.email.toLowerCase().includes(search) ||
      contact.subject.toLowerCase().includes(search) ||
      contact.message.toLowerCase().includes(search)
    );
  });

  // Sort contacts
  const sortedContacts = [...searchedContacts].sort((a, b) => {
    let comparison = 0;
    if (sortField === 'created_at') {
      comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    } else if (sortField === 'name') {
      comparison = a.name.localeCompare(b.name);
    } else if (sortField === 'email') {
      comparison = a.email.localeCompare(b.email);
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
    if (selectedContact) {
      await deleteContact(selectedContact);
      setSelectedContact(null);
      setShowDeleteDialog(false);
    }
  };

  const handleDeleteAll = async () => {
    await handleDeleteAllContacts();
    setShowDeleteAllDialog(false);
  };

  const handleDeleteAllContacts = async () => {
    await deleteAllContacts();
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
        <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">
      <Navigation />
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-7xl mx-auto">
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
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Contact Submissions
              </h1>
              <p className="text-slate-600 dark:text-gray-400 mt-1 text-sm">
                {contacts.length} total submissions • {stats?.unread_contacts || 0} unread
              </p>
            </div>
            <div className="flex items-center gap-2">
              {contacts.length > 0 && (                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDeleteAllDialog(true)}
                  className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/30 font-semibold"
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Delete All
                </Button>
              )}              <Button
                variant="outline"
                size="sm"
                onClick={() => fetchContacts()}
                className="border-slate-200 hover:bg-slate-50 dark:border-gray-800 dark:hover:bg-gray-900 bg-white dark:bg-gray-900"
              >
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Stats Cards Layout Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total</p>
                  <p className="text-2xl font-bold mt-1">{stats?.total_contacts || 0}</p>
                </div>
                <MessageSquare className="w-5 h-5 text-emerald-500" />
              </CardContent>
            </Card>
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Unread</p>
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">{stats?.unread_contacts || 0}</p>
                </div>
                <Mail className="w-5 h-5 text-red-500" />
              </CardContent>
            </Card>
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Read</p>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">{stats?.read_contacts || 0}</p>
                </div>
                <Eye className="w-5 h-5 text-emerald-500" />
              </CardContent>
            </Card>
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">7 Days</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">{stats?.recent_contacts_7_days || 0}</p>
                </div>
                <Clock className="w-5 h-5 text-blue-500" />
              </CardContent>
            </Card>
          </div>

          {/* Search Bar Block */}
          <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search by name, email, subject..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 h-10 bg-white dark:bg-gray-950"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={filterParam === 'unread' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => router.push(filterParam === 'unread' ? '/admin/contacts' : '/admin/contacts?filter=unread')}
                    className={filterParam === 'unread' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-white dark:bg-gray-900'}
                  >
                    <Mail className="w-4 h-4 mr-1" /> Unread
                  </Button>
                  <Button
                    variant={filterParam === 'recent' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => router.push(filterParam === 'recent' ? '/admin/contacts' : '/admin/contacts?filter=recent')}
                    className={filterParam === 'recent' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-white dark:bg-gray-900'}
                  >
                    <Clock className="w-4 h-4 mr-1" /> Recent
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contacts Management Data Table */}
          <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">
            <CardContent className="p-0 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50 dark:bg-gray-900/50">
                    <TableHead 
                      className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
                      onClick={() => handleSort('name')}
                    >
                      <div className="flex items-center gap-1 font-semibold">
                        Name                        {sortField === 'name' && (
                          sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
                      onClick={() => handleSort('email')}
                    >
                      <div className="flex items-center gap-1 font-semibold">
                        Email                        {sortField === 'email' && (
                          sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold">Subject</TableHead>
                    <TableHead 
                      className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-300"
                      onClick={() => handleSort('created_at')}
                    >
                      <div className="flex items-center gap-1 font-semibold">
                        Received                        {sortField === 'created_at' && (
                          sortDirection === 'asc' ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="text-right font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedContacts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-12 text-slate-500">
                        <div className="flex flex-col items-center gap-2">
                          <MessageSquare className="w-8 h-8 text-slate-300" />
                          <p className="text-sm font-medium">No system contact inquiries matched criteria index layout parameters.</p>
                          {searchTerm && (
                            <Button variant="ghost" size="sm" onClick={() => setSearchTerm('')} className="mt-1 text-xs underline">
                              Clear Search Index Filter
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    sortedContacts.map((contact) => (
                      <TableRow 
                        key={contact.id}
                        className="hover:bg-slate-50 dark:hover:bg-gray-900/40 cursor-pointer transition-colors"
                        onClick={() => router.push(`/admin/contacts/${contact.id}`)}
                      >
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2 max-w-[180px] truncate">
                            <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
                            {contact.name}
                          </div>
                        </TableCell>
                        <TableCell>
                          <a 
                            href={`mailto:${contact.email}`}
                            className="text-emerald-600 dark:text-emerald-400 hover:underline font-mono text-xs truncate max-w-[200px] block"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {contact.email}
                          </a>
                        </TableCell>
                        <TableCell>
                          <span className="line-clamp-1 text-slate-700 dark:text-slate-300 max-w-[220px]">{contact.subject}</span>
                        </TableCell>
                        <TableCell className="text-xs text-slate-500 font-mono">
                          {formatDate(contact.created_at)}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={contact.is_read ? 'outline' : 'default'}
                            className={contact.is_read 
                               ? 'bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-slate-300 border-0' 
                               : 'bg-emerald-500 hover:bg-emerald-600 text-white border-0'
                            }
                          >
                            {contact.is_read ? 'Read' : 'Unread'}
                          </Badge>
                        </TableCell>

                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-slate-500 hover:text-emerald-600"
                              onClick={async (e) => {
                                e.stopPropagation(); // Prevents row click navigation trigger
                                if (contact.is_read) {
                                  await markAsUnread(contact.id);
                                } else {
                                  await markAsRead(contact.id);
                                }
                              }}
                              title={contact.is_read ? 'Mark as unread' : 'Mark as read'}
                            >
                              {contact.is_read ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-slate-500 hover:text-red-600"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevents row click navigation trigger
                                setSelectedContact(contact.id);
                                setShowDeleteDialog(true);
                              }}
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Single Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent className="bg-white dark:bg-gray-900 border">
          <AlertDialogHeader>
            <AlertDialogTitle>Purge Communication Data Record?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this contact message? This action removes the tracking path permanently from database architectures.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700">
              Purge Record
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Batch Delete All Confirmation Dialog */}
      <AlertDialog open={showDeleteAllDialog} onOpenChange={setShowDeleteAllDialog}>
        <AlertDialogContent className="bg-white dark:bg-gray-900 border">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Hard Wipe Execution?</AlertDialogTitle>
            <AlertDialogDescription>
              Warning: Proceeding wipes out every contact collection structure match inside memory matrices immediately. 
              <br />
              <br />
              <strong>{contacts.length}</strong> inquiries will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteAll} className="bg-red-600 text-white hover:bg-red-700">
              Confirm Complete Wipe
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}