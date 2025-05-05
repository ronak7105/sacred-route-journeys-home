
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Text } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pilgrimageName: string;
}

const ReviewModal = ({ isOpen, onClose, pilgrimageName }: ReviewModalProps) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!review) {
      toast({
        title: "Review Required",
        description: "Please enter your review before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate review submission
    setTimeout(() => {
      toast({
        title: "Review Submitted!",
        description: `Thank you for sharing your experience of ${pilgrimageName}.`,
        duration: 5000,
      });
      setIsSubmitting(false);
      setReview('');
      setRating(5);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center">
            <Text className="h-6 w-6 mr-2" /> Leave a Review
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div>
            <Label className="text-lg">Pilgrimage</Label>
            <p className="text-xl font-medium text-sacred-primary">{pilgrimageName}</p>
          </div>
          
          <div>
            <Label htmlFor="rating" className="text-lg">Rating</Label>
            <div className="flex items-center space-x-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="text-3xl focus:outline-none"
                >
                  {star <= rating ? "★" : "☆"}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <Label htmlFor="review" className="text-lg">Your Review</Label>
            <Textarea 
              id="review" 
              className="text-lg min-h-[150px]"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your experience of this pilgrimage..."
              required
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
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;
