
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface SuggestPilgrimageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuggestPilgrimageModal = ({ isOpen, onClose }: SuggestPilgrimageModalProps) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !location || !description) {
      toast({
        title: "Missing Information",
        description: "Please fill out all fields to submit your suggestion.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Suggestion Submitted!",
        description: "Thank you for your pilgrimage suggestion. Our team will review it soon.",
        duration: 5000,
      });
      setIsSubmitting(false);
      setName('');
      setLocation('');
      setDescription('');
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Suggest a Pilgrimage</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div>
            <Label htmlFor="pilgrimage-name" className="text-lg">Pilgrimage Name</Label>
            <Input 
              id="pilgrimage-name" 
              className="text-lg py-6"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Varanasi Ganga Aarti"
            />
          </div>
          
          <div>
            <Label htmlFor="location" className="text-lg">Location</Label>
            <Input 
              id="location" 
              className="text-lg py-6"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Varanasi, Uttar Pradesh"
            />
          </div>
          
          <div>
            <Label htmlFor="description" className="text-lg">Description & Significance</Label>
            <Textarea 
              id="description" 
              className="text-lg min-h-[150px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What makes this pilgrimage special? Why should others visit this place?"
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} className="text-lg py-6">
              Cancel
            </Button>
            <Button 
              type="submit"
              className="text-lg py-6 bg-sacred-primary hover:bg-sacred-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Suggestion"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestPilgrimageModal;
