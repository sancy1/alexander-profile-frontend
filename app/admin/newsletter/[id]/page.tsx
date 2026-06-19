
// app/admin/newsletter/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {  
  ArrowLeft,  
  Mail,  
  Calendar,  
  Trash2,  
  UserCheck,  
  UserX,  
  RefreshCw,  
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useNewsletter } from '@/hooks/useNewsletter';
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

export default function SubscriberDetailPage() {  
  const router = useRouter();  
  const params = useParams();  
  const id = Number(params.id);  
  
  const { subscribers = [], deleteSubscriber, updateSubscriber, fetchSubscribers } = useNewsletter();  
  const [subscriber, setSubscriber] = useState<any>(null);  
  const [loading, setLoading] = useState(true);  
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);  
  const [isUpdating, setIsUpdating] = useState(false);  

  useEffect(() => {    
    if (subscribers.length > 0) {      
      const found = subscribers.find(s => s.id === id);      
      if (found) {        
        setSubscriber(found);        
        setLoading(false);      
      } else {        
        router.push('/admin/newsletter');      
      }    
    }  
  }, [subscribers, id, router]);  

  const handleDelete = async () => {    
    await deleteSubscriber(subscriber.id);    
    router.push('/admin/newsletter');  
  };  

  const handleToggleActive = async () => {    
    setIsUpdating(true);    
    const targetStatus = !subscriber.is_active;

    // Optimistically update status locally to ensure interface snap response
    setSubscriber((prev: any) => ({ ...prev, is_active: targetStatus }));

    const result = await updateSubscriber(subscriber.id, {      
      is_active: targetStatus    
    });    

    if (result?.success) {      
      setSubscriber(result.data);    
    } else if (result && !result.success) {
      // Revert if explicitly failed
      setSubscriber((prev: any) => ({ ...prev, is_active: !targetStatus }));
    }
    setIsUpdating(false);  
  };  

  const parseSafeDate = (dateString: string, pattern: string = 'PPP p') => {
    try {
      if (!dateString) return 'N/A';
      return format(new Date(dateString), pattern);
    } catch {
      return 'Date Index Error';
    }
  };

  if (loading) {    
    return (      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-gray-950 dark:to-gray-900">        
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />      
      </div>    
    );  
  }  

  if (!subscriber) return null;  

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
          {/* Header Controls */}          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">            
            <div>              
              <Button                
                variant="ghost"                
                size="sm"                
                onClick={() => router.push('/admin/newsletter')}                
                className="mb-2 -ml-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"              
              >                
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Subscribers              
              </Button>              
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">                
                Subscriber Details              
              </h1>              
              <p className="text-slate-600 dark:text-gray-400 mt-1 text-sm">                
                Manage routing channels and operational configuration status indexes.
              </p>            
            </div>            
            <div className="flex items-center gap-2">              
              <Button                
                variant="outline"                
                size="sm"                
                onClick={() => {                  
                  fetchSubscribers?.();                  
                  const updated = subscribers.find(s => s.id === id);                  
                  if (updated) setSubscriber(updated);                
                }}                
                className="border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-slate-600 dark:text-slate-300 hover:bg-slate-50"              
              >                
                <RefreshCw className="w-4 h-4" />              
              </Button>              
              <Button                
                variant="outline"                
                size="sm"                
                onClick={() => setShowDeleteDialog(true)}                
                className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/30 bg-white dark:bg-gray-900"              
              >                
                <Trash2 className="w-4 h-4 mr-1" /> Delete Channel              
              </Button>            
            </div>          </div>          

          {/* Core Info Display Frame */}          
          <Card className="border border-slate-100 dark:border-gray-800 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">            
            <CardHeader>              
              <div className="flex items-center justify-between">                
                <div className="flex items-center gap-3">                  
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/30 border border-purple-500/10 rounded-xl">                    
                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />                  
                  </div>                  
                  <div>                    
                    <CardTitle className="text-2xl font-mono tracking-tight text-slate-900 dark:text-slate-50">                      
                      <a href={`mailto:${subscriber.email}`} className="hover:underline">                        
                        {subscriber.email}                      
                      </a>                    
                    </CardTitle>                    
                    <CardDescription className="flex items-center gap-2 mt-1.5">                      
                      <Badge                        
                        variant={subscriber.is_active ? 'default' : 'outline'}                        
                        className={subscriber.is_active                          
                          ? 'bg-emerald-500 text-white border-0'                          
                          : 'bg-slate-100 text-slate-600 dark:bg-gray-800 dark:text-slate-300 border-0'                        
                        }                      
                      >                        
                        {subscriber.is_active ? 'Active Target' : 'Dormant Token'}                      
                      </Badge>                      
                      <span className="text-xs font-mono text-slate-400">                        
                        Registered {parseSafeDate(subscriber.subscribed_at, 'PPP p')}                      
                      </span>                    
                    </CardDescription>                  
                  </div>                
                </div>              
              </div>            
            </CardHeader>            
            <CardContent className="space-y-6">              
              
              {/* Telemetry Architecture Metrics Grid */}              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">                
                <div className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-gray-950/50 border border-slate-100/50 dark:border-gray-800/30 rounded-xl">                  
                  <Calendar className="w-5 h-5 text-slate-400" />                  
                  <div>                    
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Established Inbound</p>                    
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">{parseSafeDate(subscriber.subscribed_at, 'PPP')}</p>                  
                  </div>                
                </div>                
                <div className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-gray-950/50 border border-slate-100/50 dark:border-gray-800/30 rounded-xl">                  
                  <Activity className="w-5 h-5 text-slate-400" />                  
                  <div>                    
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">State Registry</p>                    
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 capitalize mt-0.5">                      
                      {subscriber.is_active ? 'Active Matrix' : 'Disabled Pool'}                    
                    </p>                  
                  </div>                
                </div>                
                <div className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-gray-950/50 border border-slate-100/50 dark:border-gray-800/30 rounded-xl">                  
                  {subscriber.is_active ? (                    
                    <UserCheck className="w-5 h-5 text-emerald-500" />                  
                  ) : (                    
                    <UserX className="w-5 h-5 text-red-500" />                  
                  )}                  
                  <div>                    
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Unique Identity ID</p>                    
                    <p className="text-sm font-mono font-semibold text-slate-800 dark:text-slate-200 mt-0.5">#{subscriber.id}</p>                  
                  </div>                
                </div>              
              </div>              

              {/* Functional Dynamic Control Status Toggle Box */}              
              <div className="p-4 border border-slate-100 dark:border-gray-800 bg-white dark:bg-gray-950/40 rounded-xl shadow-inner">                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">                  
                  <div>                    
                    <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">                      
                      Operational Delivery Pipeline State                    
                    </p>                    
                    <p className="text-xs text-slate-400 mt-0.5">                      
                      {subscriber.is_active                        
                        ? 'This pipeline is currently mapped to run transmission modules targeting this address index frame.'                        
                        : 'Transmissions inside this connection array layer are fully throttled.'}                    
                    </p>                  
                  </div>                  
                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-gray-800">                    
                    <span className="text-xs font-semibold font-mono text-slate-400">                      
                      {subscriber.is_active ? 'ACTIVE_RUN' : 'HALT_POOL'}                    
                    </span>                    
                    <Switch                      
                      checked={subscriber.is_active || false}                      
                      onCheckedChange={handleToggleActive}                      
                      disabled={isUpdating}                      
                      className={`${subscriber.is_active ? 'data-[state=checked]:bg-emerald-500' : 'bg-slate-300 dark:bg-gray-800'}`}                    
                    />                  
                  </div>                
                </div>              
              </div>              

              {/* Inbound/Outbound Audit Timeline Block */}              
              <div className="p-4 border border-slate-100 dark:border-gray-800 bg-white dark:bg-gray-950/40 rounded-xl shadow-inner">                
                <p className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-4">Pipeline Audit Log Timeline</p>                
                <div className="space-y-4 relative before:absolute before:bottom-2 before:top-2 before:left-[3px] before:w-[1px] before:bg-slate-100 dark:before:bg-gray-800">                  
                  <div className="flex items-start gap-3 relative">                    
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10 z-10 flex-shrink-0" />                    
                    <div>                      
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">                        
                        System Inbound Vector Handshake Established                      
                      </p>                      
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">                        
                        {parseSafeDate(subscriber.subscribed_at, 'PPP p')}                      
                      </p>                    
                    </div>                  
                  </div>                  
                  {subscriber.unsubscribed_at && (                    
                    <div className="flex items-start gap-3 relative">                      
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-red-500 ring-4 ring-red-500/10 z-10 flex-shrink-0" />                      
                      <div>                        
                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">                          
                          Opt-Out Trigger Event Flagged                        
                        </p>                        
                        <p className="text-[11px] font-mono text-slate-400 mt-0.5">                          
                          {parseSafeDate(subscriber.unsubscribed_at, 'PPP p')}                        
                        </p>                      
                      </div>                    
                    </div>                  
                  )}                
                </div>              
              </div>            
            </CardContent>          
          </Card>        
        </motion.div>      
      </div>      

      {/* Wipe Tracking Index Channel Confirmation Dialog Frame */}      
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>        
        <AlertDialogContent className="bg-white dark:bg-gray-900 border">          
          <AlertDialogHeader>            
            <AlertDialogTitle>Execute Target Identity Clear Loop?</AlertDialogTitle>            
            <AlertDialogDescription>              
              Are you sure you want to delete this subscriber vector mapping: <strong className="font-mono text-xs text-slate-800 dark:text-slate-200">{subscriber.email}</strong>? 
              This action severs delivery metrics and is irreversible.            
            </AlertDialogDescription>          
          </AlertDialogHeader>          
          <AlertDialogFooter>            
            <AlertDialogCancel className="border-slate-200">Cancel</AlertDialogCancel>            
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 text-white hover:bg-red-700">              
              Drop Identity Channel Pipeline            
            </AlertDialogAction>          
          </AlertDialogFooter>        
        </AlertDialogContent>      
      </AlertDialog>    
    </div>  
  );
}