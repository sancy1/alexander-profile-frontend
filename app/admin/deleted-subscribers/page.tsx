
// app/admin/deleted-subscribers/page.tsx
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
  UserCheck,  
  UserX,  
  Clock,  
  RotateCcw,  
  AlertTriangle
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

export default function DeletedSubscribersPage() {  
  const router = useRouter();  
  const {    
    subscribers = [],
    deletedSubscribers = [],    
    loading,    
    reactivateSubscriber,    
    deleteDeletedSubscriber,    
    clearAllDeleted,    
    fetchDeletedSubscribers,    
    fetchSubscribers  
  } = useNewsletter();  

  const [searchTerm, setSearchTerm] = useState('');  
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);  
  const [selectedId, setSelectedId] = useState<number | null>(null);  
  const [showReactivateDialog, setShowReactivateDialog] = useState(false);  
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);  
  const [showClearAllDialog, setShowClearAllDialog] = useState(false);  
  const [isProcessing, setIsProcessing] = useState(false);  

  useEffect(() => {
    fetchDeletedSubscribers?.();
    fetchSubscribers?.();
  }, []);

  // Search filter  
  const filteredDeleted = deletedSubscribers.filter(subscriber => {    
    if (!searchTerm) return true;    
    return subscriber.email?.toLowerCase().includes(searchTerm.toLowerCase());  
  });  

  const handleReactivate = async () => {    
    if (selectedEmail) {      
      setIsProcessing(true);      
      await reactivateSubscriber(selectedEmail);      
      await fetchSubscribers?.();      
      await fetchDeletedSubscribers?.();      
      setSelectedEmail(null);      
      setShowReactivateDialog(false);      
      setIsProcessing(false);    
    }  
  };  

  const handleDelete = async () => {    
    if (selectedId) {      
      await deleteDeletedSubscriber(selectedId);      
      setSelectedId(null);      
      setShowDeleteDialog(false);    
    }  
  };  

  const handleClearAll = async () => {    
    await clearAllDeleted();    
    setShowClearAllDialog(false);  
  };  

  const formatDate = (dateString: string) => {    
    try {
      if (!dateString) return 'Unsubscribed';
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });  
    } catch {
      return 'Recent';
    }
  };  

  if (loading) {    
    return (      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:to-gray-900">        
        <div className="w-16 h-16 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin" />      
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
              <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">                
                Deleted Subscribers              
              </h1>              
              <p className="text-slate-600 dark:text-gray-400 mt-1 text-sm">                
                {deletedSubscribers.length} total indexes flagged in off-grid archives
              </p>            
            </div>            
            <div className="flex items-center gap-2">              
              <Button                
                variant="outline"                
                size="sm"                
                onClick={() => router.push('/admin/newsletter')}                
                className="border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-900/50 dark:hover:bg-purple-950/30 bg-white dark:bg-gray-900"              
              >                
                <Users className="w-4 h-4 mr-1" /> Active List ({subscribers.length})              
              </Button>              
              {deletedSubscribers.length > 0 && (                
                <Button                  
                  variant="outline"                  
                  size="sm"                  
                  onClick={() => setShowClearAllDialog(true)}                  
                  className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/30 bg-white dark:bg-gray-900"                
                >                  
                  <AlertTriangle className="w-4 h-4 mr-1" /> Clear Archives                
                </Button>              
              )}              
              <Button                
                variant="outline"                
                size="sm"                
                onClick={() => {                  
                  fetchDeletedSubscribers?.();                  
                  fetchSubscribers?.();                
                }}                
                className="border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:bg-slate-50 dark:hover:bg-gray-800"              
              >                
                <RefreshCw className="w-4 h-4" />              
              </Button>            
            </div>          </div>          

          {/* Metric Stack Layer */}          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">            
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
              <CardContent className="p-4 flex items-center justify-between">                
                <div>                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Dropped</p>                  
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">{deletedSubscribers.length}</p>                
                </div>                
                <UserX className="w-5 h-5 text-red-500" />              
              </CardContent>            
            </Card>            
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
              <CardContent className="p-4 flex items-center justify-between">                
                <div>                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Recoverable</p>                  
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">{deletedSubscribers.length}</p>                
                </div>                
                <RotateCcw className="w-5 h-5 text-emerald-500" />              
              </CardContent>            
            </Card>            
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
              <CardContent className="p-4 flex items-center justify-between">                
                <div>                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Live Pool Cache</p>                  
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">{subscribers.length}</p>                
                </div>                
                <UserCheck className="w-5 h-5 text-purple-500" />              
              </CardContent>            
            </Card>            
            <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">              
              <CardContent className="p-4 flex items-center justify-between">                
                <div>                  
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Bounce Index</p>                  
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">0%</p>                
                </div>                
                <Clock className="w-5 h-5 text-blue-500" />              
              </CardContent>            
            </Card>          </div>          

          {/* Search Management Unit */}          
          <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">            
            <CardContent className="p-4">              
              <div className="flex flex-col sm:flex-row gap-3">                
                <div className="relative flex-1">                  
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />                  
                  <Input                    
                    placeholder="Search deactivated channels by email query index..."                    
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
                    Reset Search Buffer
                  </Button>
                )}
              </div>            
            </CardContent>          
          </Card>          

          {/* Deleted Subscribers Table */}          
          <Card className="border border-slate-100 dark:border-gray-800 shadow bg-white dark:bg-gray-900">            
            <CardContent className="p-0 overflow-x-auto">              
              <Table>                
                <TableHeader>                  
                  <TableRow className="bg-slate-50 dark:bg-gray-900/50">                    
                    <TableHead className="font-semibold">Archived Target Identification</TableHead>                    
                    <TableHead className="font-semibold">Opt-Out Handshake Event</TableHead>                    
                    <TableHead className="font-semibold">DB Deactivation Point</TableHead>                    
                    <TableHead className="text-right font-semibold">Operational Controls</TableHead>                  
                  </TableRow>                
                </TableHeader>                
                <TableBody>                  
                  {filteredDeleted.length === 0 ? (                    
                    <TableRow>                      
                      <TableCell colSpan={4} className="text-center py-12 text-slate-500">                        
                        <div className="flex flex-col items-center gap-2">                          
                          <Users className="w-8 h-8 text-slate-300" />                          
                          <p className="text-sm font-medium">No tracking entries match parameters within deleted storage logs.</p>                          
                          {searchTerm && (                            
                            <Button variant="ghost" size="sm" onClick={() => setSearchTerm('')} className="mt-1 text-xs underline">                              
                              Clear Search Cache Filter                            
                            </Button>                          
                          )}                        
                        </div>                      
                      </TableCell>                    
                    </TableRow>                  
                  ) : (                    
                    filteredDeleted.map((subscriber) => (                      
                      <TableRow                        
                        key={subscriber.id}                        
                        className="hover:bg-slate-50 dark:hover:bg-gray-900/40 transition-colors"                      
                      >                        
                        <TableCell className="font-medium">                          
                          <div className="flex items-center gap-2 max-w-[280px] truncate">                            
                            <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />                            
                            <span className="line-through text-slate-400 font-mono text-xs block truncate">                              
                              {subscriber.email}                            
                            </span>                          
                          </div>                        
                        </TableCell>                        
                        <TableCell className="text-xs font-mono text-slate-500">                          
                          <div className="flex items-center gap-2">                            
                            <Calendar className="w-3 h-3 text-slate-400" />                            
                            {formatDate(subscriber.unsubscribed_at || subscriber.updated_at)}                          
                          </div>                        
                        </TableCell>                        
                        <TableCell className="text-xs font-mono text-slate-500">                          
                          <div className="flex items-center gap-2">                            
                            <Clock className="w-3 h-3 text-slate-400" />                            
                            {formatDate(subscriber.deleted_at || subscriber.created_at)}                          
                          </div>                        
                        </TableCell>                        
                        <TableCell className="text-right">                          
                          <div className="flex items-center justify-end gap-1">                            
                            <Button                              
                              variant="ghost"                              
                              size="sm"                              
                              className="h-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 text-xs font-semibold"                              
                              onClick={() => {                                
                                setSelectedEmail(subscriber.email);                                
                                setShowReactivateDialog(true);                              
                              }}                              
                              title="Reactivate Pipeline Map"                            
                            >                              
                              <RotateCcw className="w-3.5 h-3.5 mr-1" /> Re-Map Pipe                            
                            </Button>                            
                            <Button                              
                              variant="ghost"                              
                              size="icon"                              
                              className="h-8 w-8 text-slate-400 hover:text-red-600 dark:hover:bg-red-950/30"                              
                              onClick={() => {                                
                                setSelectedId(subscriber.id);                                
                                setShowDeleteDialog(true);                              
                              }}                              
                              title="Wipe Hard Disk Record"                            
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

          {/* Auxiliary Guide Banner */}          
          <Card className="border border-amber-100 dark:border-amber-900/30 shadow bg-amber-50/50 dark:bg-amber-950/10">            
            <CardContent className="p-4 flex items-start gap-3">              
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />              
              <div>                
                <p className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">                  
                  Archived Registry Context Node Overviews                
                </p>                
                <p className="text-xs text-amber-700 dark:text-amber-500/80 mt-1 leading-relaxed">                  
                  Deactivated profiles here trace standard manual unsubscribes. Re-mapping routes pushes users right back to running operational pipeline matrices instantly. Erasing data targets cuts downstream links permanently.
                </p>              
              </div>            
            </CardContent>          
          </Card>        
        </motion.div>      
      </div>      

      {/* Reactivate Vector Path Dialog Map */}      
      <AlertDialog open={showReactivateDialog} onOpenChange={setShowReactivateDialog}>        
        <AlertDialogContent className="bg-white dark:bg-gray-900 border">          
          <AlertDialogHeader>            
            <AlertDialogTitle>Re-Engage Active Network Handshake?</AlertDialogTitle>            
            <AlertDialogDescription>              
              Are you sure you want to reactivate <strong className="font-mono text-xs text-slate-800 dark:text-slate-200">{selectedEmail}</strong>? 
              This hot-swaps data streams straight out of archival state buckets back into production listeners.            
            </AlertDialogDescription>          
          </AlertDialogHeader>          
          <AlertDialogFooter>            
            <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>            
            <AlertDialogAction              
              onClick={handleReactivate}              
              className="bg-emerald-600 text-white hover:bg-emerald-700"              
              disabled={isProcessing}            
            >              
              {isProcessing ? (                
                <div className="flex items-center gap-2">                  
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />                  
                  Syncing Maps...                
                </div>              
              ) : (                
                'Confirm Re-Link'              
              )}            
            </AlertDialogAction>          
          </AlertDialogFooter>        
        </AlertDialogContent>      
      </AlertDialog>      

      {/* Permanently Scrub Object Record Matrix Dialog */}      
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>        
        <AlertDialogContent className="bg-white dark:bg-gray-900 border">          
          <AlertDialogHeader>            
            <AlertDialogTitle>Perform Permanent Memory Purge?</AlertDialogTitle>            
            <AlertDialogDescription>              
              Are you sure you want to purge this record block context entirely? This wipes target indexes off disk caches permanently. This step is irreversible.            
            </AlertDialogDescription>          
          </AlertDialogHeader>          
          <AlertDialogFooter>            
            <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>            
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700">              
              Purge Vector Record Key            
            </AlertDialogAction>          
          </AlertDialogFooter>        
        </AlertDialogContent>      
      </AlertDialog>      

      {/* Mass Wipe Complete Archival Cache Stack Block Dialog */}      
      <AlertDialog open={showClearAllDialog} onOpenChange={setShowClearAllDialog}>        
        <AlertDialogContent className="bg-white dark:bg-gray-900 border">          
          <AlertDialogHeader>            
            <AlertDialogTitle>Execute Final Hard Disk Deletion Loop?</AlertDialogTitle>            
            <AlertDialogDescription>              
              Warning: Confirming will trigger a deep sector purge crossing all <strong>{deletedSubscribers.length}</strong> legacy un-subscription logs. This cannot be rolled back.            
            </AlertDialogDescription>          
          </AlertDialogHeader>          
          <AlertDialogFooter>            
            <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>            
            <AlertDialogAction onClick={handleClearAll} className="bg-red-600 text-white hover:bg-red-700">              
              Drop All Legacy Logs            
            </AlertDialogAction>          
          </AlertDialogFooter>        
        </AlertDialogContent>      
      </AlertDialog>    
    </div>  
  );
}