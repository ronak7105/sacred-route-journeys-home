
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Vote as VoteIcon } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';
import SuggestPilgrimageModal from '@/components/ui/suggest-pilgrimage-modal';

const VotePage = () => {
  // This would be fetched from an API in a real implementation
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      name: "Badrinath Temple",
      location: "Uttarakhand",
      duration: "8 days",
      description: "One of the most sacred Hindu temples dedicated to Lord Vishnu.",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      votes: 124
    },
    {
      id: 2,
      name: "Golden Temple",
      location: "Amritsar, Punjab",
      duration: "5 days",
      description: "The holiest Gurdwara and the most important pilgrimage site of Sikhism.",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      votes: 98
    },
    {
      id: 3,
      name: "Vaishno Devi",
      location: "Jammu and Kashmir",
      duration: "7 days",
      description: "One of the most revered Hindu shrines dedicated to Mata Rani.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      votes: 156
    },
    {
      id: 4,
      name: "Somnath Temple",
      location: "Gujarat",
      duration: "6 days",
      description: "One of the twelve Jyotirlingas dedicated to Lord Shiva.",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      votes: 87
    }
  ]);

  const [votedFor, setVotedFor] = useState<number | null>(null);
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleVote = (id: number) => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please log in to vote on pilgrimages.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    
    if (votedFor === id) {
      // User is un-voting
      setDestinations(destinations.map(dest => 
        dest.id === id ? { ...dest, votes: dest.votes - 1 } : dest
      ));
      setVotedFor(null);
      toast({
        title: "Vote Removed",
        description: "Your vote has been removed.",
        duration: 3000,
      });
    } else if (votedFor === null) {
      // User is voting for the first time
      setDestinations(destinations.map(dest => 
        dest.id === id ? { ...dest, votes: dest.votes + 1 } : dest
      ));
      setVotedFor(id);
      toast({
        title: "Vote Recorded",
        description: "Your vote has been recorded. Thank you!",
        duration: 3000,
      });
    } else {
      // User is changing their vote
      setDestinations(destinations.map(dest => 
        dest.id === id ? { ...dest, votes: dest.votes + 1 } : 
        dest.id === votedFor ? { ...dest, votes: dest.votes - 1 } : dest
      ));
      setVotedFor(id);
      toast({
        title: "Vote Changed",
        description: "Your vote has been updated to the new selection.",
        duration: 3000,
      });
    }
  };

  const handleSuggestPilgrimage = () => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please log in to suggest new pilgrimages.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    
    setIsSuggestModalOpen(true);
  };

  return (
    <Layout>
      <section className="py-12 bg-sacred-light min-h-screen">
        <div className="container-page">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-sacred-dark mb-4">Vote on Our Next Pilgrimage</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us decide the next sacred destination we should add to our offerings. 
              Your vote matters in shaping our community's spiritual journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map(destination => (
              <Card key={destination.id} className="overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold">{destination.name}</CardTitle>
                      <CardDescription className="text-lg">{destination.location} • {destination.duration}</CardDescription>
                    </div>
                    <div className="bg-sacred-primary text-white px-4 py-2 rounded-lg">
                      <span className="font-bold text-lg">{destination.votes}</span>
                      <span className="ml-1">votes</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">{destination.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full text-lg py-6 ${votedFor === destination.id ? 'bg-sacred-secondary' : ''}`}
                    onClick={() => handleVote(destination.id)}
                  >
                    <VoteIcon className="mr-2 h-5 w-5" />
                    {votedFor === destination.id ? 'Your Vote' : 'Vote for this destination'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-4">
              Don't see a destination you'd like to visit?
            </p>
            <Button 
              size="lg" 
              className="text-lg py-6"
              onClick={handleSuggestPilgrimage}
            >
              <Heart className="mr-2 h-5 w-5" /> Suggest a Pilgrimage Site
            </Button>
          </div>
        </div>
      </section>
      
      <SuggestPilgrimageModal
        isOpen={isSuggestModalOpen}
        onClose={() => setIsSuggestModalOpen(false)}
      />
    </Layout>
  );
};

export default VotePage;
