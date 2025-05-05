
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  meals: string[];
  accommodation: string;
}

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  pilgrimageName: string;
  duration: string;
  itinerary: ItineraryDay[];
}

const ItineraryModal = ({ isOpen, onClose, pilgrimageName, duration, itinerary }: ItineraryModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-sacred-dark">
            {pilgrimageName} - {duration} Itinerary
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-8">
          {itinerary.map((day) => (
            <div key={day.day} className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-3 text-sacred-primary">
                Day {day.day}: {day.title}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">Activities:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {day.activities.map((activity, index) => (
                      <li key={index} className="text-gray-700">{activity}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Meals:</h4>
                  <p className="text-gray-700">{day.meals.join(', ')}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2">Accommodation:</h4>
                  <p className="text-gray-700">{day.accommodation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <DialogFooter>
          <Button onClick={onClose} className="text-lg py-6">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ItineraryModal;
