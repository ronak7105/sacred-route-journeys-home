
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  guide?: {
    name: string;
    phone: string;
  };
  bus?: {
    driver: string;
    phone: string;
  };
}

const EmergencyModal = ({ isOpen, onClose, guide, bus }: EmergencyModalProps) => {
  const handleCall = (name: string, phone: string) => {
    // In a real app, this would use the Web Telephony API
    // For now, we'll just simulate a call with a toast
    toast({
      title: `Calling ${name}`,
      description: `Connecting to ${phone}...`,
      duration: 5000,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-red-600">Emergency Help</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <p className="text-lg">Who would you like to contact?</p>
          
          {guide && (
            <Button 
              className="w-full py-6 text-lg flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700"
              onClick={() => handleCall(guide.name, guide.phone)}
            >
              <PhoneCall className="h-6 w-6" />
              Call Guide: {guide.name}
              <span className="font-semibold">{guide.phone}</span>
            </Button>
          )}
          
          {bus && (
            <Button 
              className="w-full py-6 text-lg flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700"
              onClick={() => handleCall(bus.driver, bus.phone)}
            >
              <PhoneCall className="h-6 w-6" />
              Call Bus Driver
              <span className="font-semibold">{bus.phone}</span>
            </Button>
          )}
          
          <Button 
            className="w-full py-6 text-lg flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700"
            onClick={() => handleCall("Emergency Support", "+91 112")}
          >
            <PhoneCall className="h-6 w-6" />
            Call Emergency Services
            <span className="font-semibold">112</span>
          </Button>
        </div>
        
        <DialogFooter>
          <Button onClick={onClose} variant="outline" className="text-lg py-6">
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EmergencyModal;
