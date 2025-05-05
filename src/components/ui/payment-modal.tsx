
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { CreditCard, IndianRupee, Check } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  pilgrimageName: string;
}

type PaymentMethod = 'credit-card' | 'upi' | 'net-banking';

const PaymentModal = ({ isOpen, onClose, amount, pilgrimageName }: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Booking Confirmed!",
        description: `Your pilgrimage to ${pilgrimageName} has been booked successfully.`,
        duration: 5000,
      });
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Payment Options</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="text-center mb-4">
            <p className="text-lg">Total Amount:</p>
            <p className="text-3xl font-bold flex items-center justify-center">
              <IndianRupee className="h-6 w-6 mr-1" />
              {amount.toLocaleString('en-IN')}
            </p>
          </div>
          
          <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as PaymentMethod)}>
            <div className="flex items-center space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-gray-50">
              <RadioGroupItem value="credit-card" id="credit-card" />
              <Label htmlFor="credit-card" className="text-lg flex items-center cursor-pointer">
                <CreditCard className="h-5 w-5 mr-2" />
                Credit/Debit Card
              </Label>
            </div>
            
            <div className="flex items-center space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-gray-50">
              <RadioGroupItem value="upi" id="upi" />
              <Label htmlFor="upi" className="text-lg cursor-pointer">UPI Payment</Label>
            </div>
            
            <div className="flex items-center space-x-2 border p-4 rounded-lg cursor-pointer hover:bg-gray-50">
              <RadioGroupItem value="net-banking" id="net-banking" />
              <Label htmlFor="net-banking" className="text-lg cursor-pointer">Net Banking</Label>
            </div>
          </RadioGroup>
          
          {paymentMethod === 'credit-card' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="card-number" className="text-lg">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" className="text-lg py-6" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry" className="text-lg">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" className="text-lg py-6" />
                </div>
                <div>
                  <Label htmlFor="cvv" className="text-lg">CVV</Label>
                  <Input id="cvv" placeholder="123" className="text-lg py-6" maxLength={3} />
                </div>
              </div>
              
              <div>
                <Label htmlFor="name" className="text-lg">Name on Card</Label>
                <Input id="name" placeholder="John Doe" className="text-lg py-6" />
              </div>
            </div>
          )}
          
          {paymentMethod === 'upi' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="upi-id" className="text-lg">UPI ID</Label>
                <Input id="upi-id" placeholder="yourname@upi" className="text-lg py-6" />
              </div>
            </div>
          )}
          
          {paymentMethod === 'net-banking' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="bank" className="text-lg">Select Bank</Label>
                <select id="bank" className="w-full h-14 px-4 text-lg border rounded-lg">
                  <option value="">Select your bank</option>
                  <option value="sbi">State Bank of India</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="axis">Axis Bank</option>
                </select>
              </div>
            </div>
          )}
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="text-lg py-6">
            Cancel
          </Button>
          <Button 
            onClick={handlePayment} 
            className="text-lg py-6 bg-sacred-primary hover:bg-sacred-primary/90" 
            disabled={isProcessing}
          >
            {isProcessing ? (
              "Processing..."
            ) : (
              <>
                <Check className="mr-2 h-5 w-5" />
                Pay Now
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
