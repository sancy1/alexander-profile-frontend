
// // app/admin/contacts/[id]/page.tsx
// 'use client';

// import { useEffect, useState } from 'react';
// import { useRouter, useParams } from 'next/navigation';
// import { motion } from 'framer-motion';
// import {  
//   ArrowLeft,  
//   User,  
//   Mail,  
//   Phone,  
//   Eye,  
//   EyeOff,  
//   Trash2,  
//   CheckCircle,  
//   Pencil,
//   XCircle
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useContacts } from '@/hooks/useContacts';
// import Navigation from '@/components/navigation';
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
// import { format } from 'date-fns';

// export default function ContactDetailPage() {  
//   const router = useRouter();  
//   const params = useParams();  
//   const id = Number(params.id);    
  
//   const { contacts, deleteContact, markAsRead, markAsUnread, updateContact } = useContacts();  
//   const [contact, setContact] = useState<any>(null);  
//   const [loading, setLoading] = useState(true);  
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);  
//   const [isEditing, setIsEditing] = useState(false);  
//   const [editData, setEditData] = useState<any>({});  

//   useEffect(() => {    
//     if (contacts.length > 0) {      
//       const found = contacts.find(c => c.id === id);      
//       if (found) {        
//         setContact(found);        
//         setEditData({ ...found });        
//         setLoading(false);      
//       } else {        
//         router.push('/admin/contacts');      
//       }    
//     }  
//   }, [contacts, id, router]);  

//   if (loading) {    
//     return (      
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:to-gray-900">        
//         <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />      
//       </div>    
//     );  
//   }  

//   if (!contact) return null;  

//   const handleDelete = async () => {    
//     await deleteContact(contact.id);    
//     router.push('/admin/contacts');  
//   };  

//   const handleToggleRead = async () => {    
//     // Instantly switch values locally to avoid layout flicker
//     const updatedStatus = !contact.is_read;
//     setContact((prev: any) => ({ ...prev, is_read: updatedStatus }));

//     if (!contact.is_read) {      
//       await markAsRead(contact.id);    
//     } else {      
//       await markAsUnread(contact.id);    
//     }    
//   };  

//   const handleSaveEdit = async () => {    
//     const result = await updateContact(contact.id, editData);    
//     if (result?.success) {      
//       setContact(result.data);      
//       setIsEditing(false);    
//     } else {
//       // Fallback state update if payload response parsing is implicit
//       setContact({ ...editData });
//       setIsEditing(false);
//     } 
//   };  

//   const parseSafeDate = (dateString: string) => {
//     try {
//       return format(new Date(dateString), 'PPP p');
//     } catch {
//       return 'Date Unknown';
//     }
//   };

//   return (    
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">      
//       <Navigation />      
//       <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-4xl mx-auto">        
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
//                 onClick={() => router.push('/admin/contacts')}                
//                 className="mb-2 -ml-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"              
//               >                
//                 <ArrowLeft className="w-4 h-4 mr-1" /> Back to Contacts              
//               </Button>              
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">                
//                 Contact Details              
//               </h1>              
//               <p className="text-slate-600 dark:text-gray-400 mt-1 text-sm">                
//                 Review message intent context metrics and operational parameters.
//               </p>            
//             </div>            
//             <div className="flex items-center gap-2">              
//               <Button                
//                 variant="outline"                
//                 size="sm"                
//                 onClick={handleToggleRead}                
//                 className={contact.is_read                   
//                   ? 'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-gray-800 dark:hover:bg-gray-900 bg-white dark:bg-gray-900'                   
//                   : 'border-emerald-200 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-900/40 dark:hover:bg-emerald-950/20 bg-white dark:bg-gray-900'                
//                 }              
//               >                
//                 {contact.is_read ? (                  
//                   <><EyeOff className="w-4 h-4 mr-1 text-slate-500" /> Mark Unread</>                
//                 ) : (                  
//                   <><Eye className="w-4 h-4 mr-1 text-emerald-500" /> Mark Read</>                
//                 )}              
//               </Button>              
//               <Button                
//                 variant="outline"                
//                 size="sm"                
//                 onClick={() => {
//                   if(isEditing) setEditData({ ...contact });
//                   setIsEditing(!isEditing);
//                 }}                
//                 className="border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-900/40 dark:hover:bg-purple-950/20 bg-white dark:bg-gray-900"              
//               >                
//                 <Pencil className="w-4 h-4 mr-1" /> {isEditing ? 'Cancel' : 'Edit'}              
//               </Button>              
//               <Button                
//                 variant="outline"                
//                 size="sm"                
//                 onClick={() => setShowDeleteDialog(true)}                
//                 className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/30 bg-white dark:bg-gray-900"              
//               >                
//                 <Trash2 className="w-4 h-4 mr-1" /> Delete              
//               </Button>            
//             </div>          </div>          

//           {/* Contact Info Card */}          
//           <Card className="border border-slate-100 dark:border-gray-800 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">            
//             <CardHeader>              
//               <div className="flex items-center gap-3">                  
//                 <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/10 rounded-xl flex-shrink-0">                    
//                   <User className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />                  
//                 </div>                  
//                 <div className="w-full min-w-0">                    
//                   <CardTitle className="text-2xl tracking-tight text-slate-900 dark:text-slate-50">                      
//                     {isEditing ? (                        
//                       <Input                          
//                         type="text"                          
//                         value={editData.name || ''}                          
//                         onChange={(e) => setEditData({ ...editData, name: e.target.value })}                          
//                         className="h-9 font-normal max-w-sm bg-white dark:bg-gray-950 mt-1"                        
//                       />                      
//                     ) : (                        
//                       contact.name                      
//                     )}                    
//                   </CardTitle>                    
//                   <CardDescription className="flex flex-wrap items-center gap-2 mt-1.5">                      
//                     <Badge                         
//                       variant={contact.is_read ? 'outline' : 'default'}                        
//                       className={contact.is_read                           
//                         ? 'bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-slate-300 border-0'                           
//                         : 'bg-emerald-500 text-white hover:bg-emerald-600 border-0'                        
//                       }                      
//                     >                        
//                       {contact.is_read ? 'Read' : 'Unread'}                      
//                     </Badge>                      
//                     <span className="text-xs font-mono text-slate-400">                        
//                       {parseSafeDate(contact.created_at)}                      
//                     </span>                    
//                   </CardDescription>                  
//                 </div>                
//               </div>            
//             </CardHeader>            
//             <CardContent className="space-y-6">              
//               {/* Contact Details Grid */}              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">                
//                 <div className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-gray-950/50 border border-slate-100/50 dark:border-gray-800/30 rounded-xl">                  
//                   <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />                  
//                   <div className="w-full min-w-0">                    
//                     <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Email Address</p>                    
//                     {isEditing ? (                      
//                       <Input                        
//                         type="email"                        
//                         value={editData.email || ''}                        
//                         onChange={(e) => setEditData({ ...editData, email: e.target.value })}                        
//                         className="h-8 bg-white dark:bg-gray-950 mt-1 text-xs"                      
//                       />                    
//                     ) : (                      
//                       <a href={`mailto:${contact.email}`} className="text-sm font-mono text-emerald-600 dark:text-emerald-400 hover:underline block truncate">                        
//                         {contact.email}                      
//                       </a>                    
//                     )}                  
//                   </div>                
//                 </div>                
//                 <div className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-gray-950/50 border border-slate-100/50 dark:border-gray-800/30 rounded-xl">                  
//                   <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />                  
//                   <div className="w-full min-w-0">                    
//                     <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Phone Connection</p>                    
//                     {isEditing ? (                      
//                       <Input                        
//                         type="text"                        
//                         value={editData.phone || ''}                        
//                         onChange={(e) => setEditData({ ...editData, phone: e.target.value })}                        
//                         className="h-8 bg-white dark:bg-gray-950 mt-1 text-xs"                      
//                       />                    
//                     ) : (                      
//                       <p className="text-sm text-slate-700 dark:text-slate-300 font-mono truncate">
//                         {contact.phone || 'None Provided'}
//                       </p>                    
//                     )}                  
//                   </div>                
//                 </div>              
//               </div>              

//               {/* Subject Field Container */}              
//               <div className="space-y-1.5">                
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Subject Context Header</p>                
//                 {isEditing ? (                  
//                   <Input                    
//                     type="text"                    
//                     value={editData.subject || ''}                    
//                     onChange={(e) => setEditData({ ...editData, subject: e.target.value })}                    
//                     className="w-full bg-white dark:bg-gray-950"                  
//                   />                ) : (                  
//                   <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 border border-transparent py-1">                    
//                     {contact.subject || 'No Subject line provided'}                  
//                   </h3>                )}              
//               </div>              

//               {/* Message Payload Content Body */}              
//               <div className="space-y-1.5">                
//                 <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Message Content Body</p>                
//                 {isEditing ? (                  
//                   <Textarea                    
//                     value={editData.message || ''}                    
//                     onChange={(e) => setEditData({ ...editData, message: e.target.value })}                    
//                     rows={7}                    
//                     className="w-full bg-white dark:bg-gray-950 resize-none leading-relaxed"                  
//                   />                ) : (                  
//                   <div className="p-4 bg-slate-50 dark:bg-gray-950/60 border border-slate-100 dark:border-gray-800/40 rounded-xl text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed shadow-inner font-sans">                    
//                     {contact.message}                  
//                   </div>                )}              
//               </div>              

//               {/* Edit Block Trigger Control Footer */}              
//               {isEditing && (                
//                 <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-gray-800">                  
//                   <Button                    
//                     onClick={handleSaveEdit}                    
//                     className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:opacity-90 shadow-sm"                  
//                   >                    
//                     <CheckCircle className="w-4 h-4 mr-1.5" /> Save Data Changes                  
//                   </Button>                  
//                   <Button                    
//                     variant="ghost"                    
//                     onClick={() => {                      
//                       setIsEditing(false);                      
//                       setEditData({ ...contact });                    
//                     }}                  
//                     className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
//                   >                    
//                     Discard Changes
//                   </Button>                
//                 </div>              
//               )}            
//             </CardContent>          
//           </Card>        
//         </motion.div>      
//       </div>      

//       {/* Single Item Clear Record Intent Dialog */}      
//       <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>        
//         <AlertDialogContent className="bg-white dark:bg-gray-900 border">          
//           <AlertDialogHeader>            
//             <AlertDialogTitle>Execute Communication Document Wipe?</AlertDialogTitle>            
//             <AlertDialogDescription>              
//               Are you sure you want to delete this contact message from <strong>{contact.name}</strong>? 
//               This cleanses historical records completely out of running telemetry modules.            
//             </AlertDialogDescription>          
//           </AlertDialogHeader>          
//           <AlertDialogFooter>            
//             <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>            
//             <AlertDialogAction onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700">              
//               Purge Document            
//             </AlertDialogAction>          
//           </AlertDialogFooter>        
//         </AlertDialogContent>      
//       </AlertDialog>    
//     </div>  
//   );
// }









































// app/admin/contacts/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {  
  ArrowLeft,  
  User,  
  Mail,  
  Phone,  
  Eye,  
  EyeOff,  
  Trash2,  
  CheckCircle,  
  Pencil
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useContacts } from '@/hooks/useContacts';
import Navigation from '@/components/navigation';
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
import { format } from 'date-fns';

export default function ContactDetailPage() {  
  const router = useRouter();  
  const params = useParams();  
  const id = Number(params.id);    
  
  const { contacts, deleteContact, markAsRead, markAsUnread, updateContact, fetchContacts } = useContacts();  
  const [contact, setContact] = useState<any>(null);  
  const [loading, setLoading] = useState(true);  
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);  
  const [isEditing, setIsEditing] = useState(false);  
  const [editData, setEditData] = useState<any>({});  

  // 1. Run ONCE on mount to ensure we have data if the user refreshes directly on this page
  useEffect(() => {
    if (contacts.length === 0) {
      fetchContacts().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  // 2. Keep local component state in sync with the global hook array when it scales/changes
  useEffect(() => {    
    if (contacts.length > 0) {      
      const found = contacts.find(c => c.id === id);      
      if (found) {        
        setContact(found);        
        setEditData({ ...found });        
      } else if (!loading) {
        router.push('/admin/contacts');      
      }    
    }  
  }, [contacts, id, router, loading]);  

  if (loading || !contact) {    
    return (      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:to-gray-900">        
        <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />      
      </div>    
    );  
  }  

  const handleDelete = async () => {    
    await deleteContact(contact.id);    
    router.push('/admin/contacts');  
  };  

  const handleToggleRead = async () => {    
    const currentStatus = contact.is_read;
    const updatedStatus = !currentStatus;
    
    // Optimistic UI Update
    setContact((prev: any) => ({ ...prev, is_read: updatedStatus }));

    try {
      if (!currentStatus) {      
        await markAsRead(contact.id);    
      } else {      
        await markAsUnread(contact.id);    
      }
      // ✅ Removed fetchContacts() loop trigger. The hook updates global array locally.
    } catch (err) {
      // Rollback state if network failed
      setContact((prev: any) => ({ ...prev, is_read: currentStatus }));
    }
  };  

  const handleSaveEdit = async () => {    
    const result = await updateContact(contact.id, editData);    
    if (result?.success) {      
      setContact(result.data);      
      setIsEditing(false);    
    } else {
      setContact({ ...editData });
      setIsEditing(false);
    } 
    // ✅ Removed fetchContacts() loop trigger.
  };  

  const parseSafeDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'PPP p');
    } catch {
      return 'Date Unknown';
    }
  };

  return (    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950">      
      <Navigation />      
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-4xl mx-auto">        
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
                onClick={() => router.push('/admin/contacts')}                
                className="mb-2 -ml-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"              
              >                
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Contacts              
              </Button>              
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">                
                Contact Details              
              </h1>              
              <p className="text-slate-600 dark:text-gray-400 mt-1 text-sm">                
                Review message intent context metrics and operational parameters.
              </p>            
            </div>            
            <div className="flex items-center gap-2">              
              <Button                
                variant="outline"                
                size="sm"                
                onClick={handleToggleRead}                
                className={contact.is_read                    
                  ? 'border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-gray-800 dark:hover:bg-gray-900 bg-white dark:bg-gray-900'                    
                  : 'border-emerald-200 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-900/40 dark:hover:bg-emerald-950/20 bg-white dark:bg-gray-900'                
                }              
              >                
                {contact.is_read ? (                  
                  <><EyeOff className="w-4 h-4 mr-1 text-slate-500" /> Mark Unread</>                
                ) : (                  
                  <><Eye className="w-4 h-4 mr-1 text-emerald-500" /> Mark Read</>                
                )}              
              </Button>              
              <Button                
                variant="outline"                
                size="sm"                
                onClick={() => {
                  if(isEditing) setEditData({ ...contact });
                  setIsEditing(!isEditing);
                }}                
                className="border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-900/40 dark:hover:bg-purple-950/20 bg-white dark:bg-gray-900"              
              >                
                <Pencil className="w-4 h-4 mr-1" /> {isEditing ? 'Cancel' : 'Edit'}              
              </Button>              
              <Button                
                variant="outline"                
                size="sm"                
                onClick={() => setShowDeleteDialog(true)}                
                className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/30 bg-white dark:bg-gray-900"              
              >                
                <Trash2 className="w-4 h-4 mr-1" /> Delete              
              </Button>            
            </div>          </div>          

          {/* Contact Info Card */}          
          <Card className="border border-slate-100 dark:border-gray-800 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">            
            <CardHeader>              
              <div className="flex items-center gap-3">                  
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/10 rounded-xl flex-shrink-0">                    
                  <User className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />                  
                </div>                  
                <div className="w-full min-w-0">                    
                  <CardTitle className="text-2xl tracking-tight text-slate-900 dark:text-slate-50">                      
                    {isEditing ? (                        
                      <Input                          
                        type="text"                          
                        value={editData.name || ''}                          
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}                          
                        className="h-9 font-normal max-w-sm bg-white dark:bg-gray-950 mt-1"                        
                      />                      
                    ) : (                        
                      contact.name                      
                    )}                  
                  </CardTitle>                    
                  <CardDescription className="flex flex-wrap items-center gap-2 mt-1.5">                      
                    <Badge                         
                      variant={contact.is_read ? 'outline' : 'default'}                        
                      className={contact.is_read                            
                        ? 'bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-slate-300 border-0'                            
                        : 'bg-emerald-500 text-white hover:bg-emerald-600 border-0'                        
                      }                      
                    >                        
                      {contact.is_read ? 'Read' : 'Unread'}                      
                    </Badge>                      
                    <span className="text-xs font-mono text-slate-400">                        
                      {parseSafeDate(contact.created_at)}                      
                    </span>                    
                  </CardDescription>                  
                </div>                
              </div>            
            </CardHeader>            
            <CardContent className="space-y-6">              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">                
                <div className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-gray-950/50 border border-slate-100/50 dark:border-gray-800/30 rounded-xl">                  
                  <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />                  
                  <div className="w-full min-w-0">                    
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Email Address</p>                    
                    {isEditing ? (                      
                      <Input                        
                        type="email"                        
                        value={editData.email || ''}                        
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}                        
                        className="h-8 bg-white dark:bg-gray-950 mt-1 text-xs"                      
                      />                    
                    ) : (                      
                      <a href={`mailto:${contact.email}`} className="text-sm font-mono text-emerald-600 dark:text-emerald-400 hover:underline block truncate">                        
                        {contact.email}                      
                      </a>                    
                    )}                  
                  </div>                
                </div>                
                <div className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-gray-950/50 border border-slate-100/50 dark:border-gray-800/30 rounded-xl">                  
                  <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />                  
                  <div className="w-full min-w-0">                    
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Phone Connection</p>                    
                    {isEditing ? (                      
                      <Input                        
                        type="text"                        
                        value={editData.phone || ''}                        
                        onChange={(e) => setEditData({ ...editData, phone: e.target.value })}                        
                        className="h-8 bg-white dark:bg-gray-950 mt-1 text-xs"                      
                      />                    
                    ) : (                      
                      <p className="text-sm text-slate-700 dark:text-slate-300 font-mono truncate">
                        {contact.phone || 'None Provided'}
                      </p>                    
                    )}                  
                  </div>                
                </div>              
              </div>              

              <div className="space-y-1.5">                
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Subject Context Header</p>                
                {isEditing ? (                  
                  <Input                    
                    type="text"                    
                    value={editData.subject || ''}                    
                    onChange={(e) => setEditData({ ...editData, subject: e.target.value })}                    
                    className="w-full bg-white dark:bg-gray-950"                  
                  />                ) : (                  
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 border border-transparent py-1">                    
                    {contact.subject || 'No Subject line provided'}                  
                  </h3>                )}              
              </div>              

              <div className="space-y-1.5">                
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Message Content Body</p>                
                {isEditing ? (                  
                  <Textarea                    
                    value={editData.message || ''}                    
                    onChange={(e) => setEditData({ ...editData, message: e.target.value })}                    
                    rows={7}                    
                    className="w-full bg-white dark:bg-gray-950 resize-none leading-relaxed"                  
                  />                ) : (                  
                  <div className="p-4 bg-slate-50 dark:bg-gray-950/60 border border-slate-100 dark:border-gray-800/40 rounded-xl text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed shadow-inner font-sans">                    
                    {contact.message}                  
                  </div>                )}              
              </div>              

              {isEditing && (                
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-gray-800">                  
                  <Button                    
                    onClick={handleSaveEdit}                    
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:opacity-90 shadow-sm"                  
                  >                    
                    <CheckCircle className="w-4 h-4 mr-1.5" /> Save Data Changes                  
                  </Button>                  
                  <Button                    
                    variant="ghost"                    
                    onClick={() => {                      
                      setIsEditing(false);                      
                      setEditData({ ...contact });                    
                    }}                  
                    className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  >                    
                    Discard Changes
                  </Button>                
                </div>              
              )}            
            </CardContent>          
          </Card>        
        </motion.div>      
      </div>      

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>        
        <AlertDialogContent className="bg-white dark:bg-gray-900 border">          
          <AlertDialogHeader>            
            <AlertDialogTitle>Execute Communication Document Wipe?</AlertDialogTitle>            
            <AlertDialogDescription>              
              Are you sure you want to delete this contact message from <strong>{contact.name}</strong>? 
              This cleanses historical records completely out of running telemetry modules.            
            </AlertDialogDescription>          
          </AlertDialogHeader>          
          <AlertDialogFooter>            
            <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>            
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700">              
              Purge Document            
            </AlertDialogAction>          
          </AlertDialogFooter>        
        </AlertDialogContent>      
      </AlertDialog>    
    </div>  
  );
}