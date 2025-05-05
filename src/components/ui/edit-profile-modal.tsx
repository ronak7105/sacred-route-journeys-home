
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Pen } from 'lucide-react';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: {
    name: string;
    age: number;
    email: string;
  };
  onSave: (userData: {
    name: string;
    age: number;
    email: string;
    phone?: string;
    emergencyContact?: string;
  }) => void;
}

const EditProfileModal = ({ isOpen, onClose, userData, onSave }: EditProfileModalProps) => {
  const [name, setName] = useState(userData.name);
  const [age, setAge] = useState(userData.age.toString());
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !age || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSaving(true);
    
    // Update the profile data
    setTimeout(() => {
      onSave({
        name,
        age: parseInt(age),
        email,
        phone,
        emergencyContact
      });
      
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully.",
        duration: 3000,
      });
      
      setIsSaving(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
            <Pen className="h-6 w-6 mr-2" /> Edit Profile
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div>
            <Label htmlFor="name" className="text-lg">Full Name</Label>
            <Input 
              id="name" 
              className="text-lg py-6"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="age" className="text-lg">Age</Label>
            <Input 
              id="age" 
              className="text-lg py-6"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              min="1"
              max="120"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-lg">Email</Label>
            <Input 
              id="email" 
              className="text-lg py-6"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-lg">Phone Number</Label>
            <Input 
              id="phone" 
              className="text-lg py-6"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Optional"
            />
          </div>
          
          <div>
            <Label htmlFor="emergency-contact" className="text-lg">Emergency Contact</Label>
            <Input 
              id="emergency-contact" 
              className="text-lg py-6"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              placeholder="Optional"
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} className="text-lg py-6">
              Cancel
            </Button>
            <Button 
              type="submit"
              className="text-lg py-6 bg-sacred-primary hover:bg-sacred-primary/90"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
