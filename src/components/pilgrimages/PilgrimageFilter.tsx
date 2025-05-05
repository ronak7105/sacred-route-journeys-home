
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface FilterValues {
  searchTerm: string;
  traditions: string[];
  difficulty: string;
  priceRange: number[];
  durationRange: number[];
  accessibilityFeatures: string[];
  departureDate: string;
  region: string;
}

interface PilgrimageFilterProps {
  onFilter?: (filters: FilterValues) => void;
}

const PilgrimageFilter = ({ onFilter }: PilgrimageFilterProps) => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [durationRange, setDurationRange] = useState([3, 21]);
  const [searchTerm, setSearchTerm] = useState('');
  const [traditions, setTraditions] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState('any');
  const [accessibilityFeatures, setAccessibilityFeatures] = useState<string[]>([]);
  const [departureDate, setDepartureDate] = useState('');
  const [region, setRegion] = useState('any');

  const handleTraditionChange = (value: string) => {
    if (traditions.includes(value)) {
      setTraditions(traditions.filter((t) => t !== value));
    } else {
      setTraditions([...traditions, value]);
    }
  };

  const handleAccessibilityChange = (value: string) => {
    if (accessibilityFeatures.includes(value)) {
      setAccessibilityFeatures(accessibilityFeatures.filter((f) => f !== value));
    } else {
      setAccessibilityFeatures([...accessibilityFeatures, value]);
    }
  };

  const handleApplyFilters = () => {
    const filterValues: FilterValues = {
      searchTerm,
      traditions,
      difficulty,
      priceRange,
      durationRange,
      accessibilityFeatures,
      departureDate,
      region,
    };
    
    if (onFilter) {
      onFilter(filterValues);
    }
    
    toast({
      title: "Filters Applied",
      description: "Your pilgrimage search has been updated with your filters.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-sacred-dark">Filter Pilgrimages</h2>
      
      {/* Search */}
      <div className="mb-6">
        <Label htmlFor="search" className="text-lg mb-2 block">Search</Label>
        <input 
          type="text" 
          id="search" 
          placeholder="Search pilgrimages..." 
          className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacred-primary focus:border-sacred-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Spiritual Tradition */}
      <div className="mb-6">
        <Label className="text-lg mb-2 block">Spiritual Tradition</Label>
        <div className="space-y-2">
          <div className="flex items-start">
            <Checkbox 
              id="hindu" 
              checked={traditions.includes('hindu')}
              onCheckedChange={() => handleTraditionChange('hindu')}
            />
            <Label htmlFor="hindu" className="ml-2 text-lg">Hindu</Label>
          </div>
          <div className="flex items-start">
            <Checkbox 
              id="sikh" 
              checked={traditions.includes('sikh')}
              onCheckedChange={() => handleTraditionChange('sikh')}
            />
            <Label htmlFor="sikh" className="ml-2 text-lg">Sikh</Label>
          </div>
          <div className="flex items-start">
            <Checkbox 
              id="jain" 
              checked={traditions.includes('jain')}
              onCheckedChange={() => handleTraditionChange('jain')}
            />
            <Label htmlFor="jain" className="ml-2 text-lg">Jain</Label>
          </div>
          <div className="flex items-start">
            <Checkbox 
              id="buddhist" 
              checked={traditions.includes('buddhist')}
              onCheckedChange={() => handleTraditionChange('buddhist')}
            />
            <Label htmlFor="buddhist" className="ml-2 text-lg">Buddhist</Label>
          </div>
          <div className="flex items-start">
            <Checkbox 
              id="interfaith" 
              checked={traditions.includes('interfaith')}
              onCheckedChange={() => handleTraditionChange('interfaith')}
            />
            <Label htmlFor="interfaith" className="ml-2 text-lg">Interfaith</Label>
          </div>
        </div>
      </div>
      
      {/* Difficulty */}
      <div className="mb-6">
        <Label className="text-lg mb-2 block">Difficulty Level</Label>
        <Select 
          value={difficulty}
          onValueChange={setDifficulty}
        >
          <SelectTrigger className="text-lg">
            <SelectValue placeholder="Any difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any difficulty</SelectItem>
            <SelectItem value="easy">Easy - Minimal walking</SelectItem>
            <SelectItem value="moderate">Moderate - Some walking required</SelectItem>
            <SelectItem value="challenging">Challenging - Extended walking</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <Label className="text-lg">Price Range</Label>
          <span className="text-lg">₹{priceRange[0]} - ₹{priceRange[1]}</span>
        </div>
        <Slider 
          defaultValue={[0, 5000]} 
          max={50000} 
          step={1000} 
          value={priceRange}
          onValueChange={setPriceRange} 
          className="py-4"
        />
      </div>
      
      {/* Duration */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <Label className="text-lg">Duration (days)</Label>
          <span className="text-lg">{durationRange[0]} - {durationRange[1]} days</span>
        </div>
        <Slider 
          defaultValue={[3, 21]} 
          max={30} 
          step={1} 
          value={durationRange}
          onValueChange={setDurationRange}
          className="py-4"
        />
      </div>
      
      {/* Accessibility Features */}
      <div className="mb-6">
        <Label className="text-lg mb-2 block">Accessibility Features</Label>
        <div className="space-y-2">
          <div className="flex items-start">
            <Checkbox 
              id="wheelchair" 
              checked={accessibilityFeatures.includes('wheelchair')}
              onCheckedChange={() => handleAccessibilityChange('wheelchair')}
            />
            <Label htmlFor="wheelchair" className="ml-2 text-lg">Wheelchair Accessible</Label>
          </div>
          <div className="flex items-start">
            <Checkbox 
              id="limited-walking" 
              checked={accessibilityFeatures.includes('limited-walking')}
              onCheckedChange={() => handleAccessibilityChange('limited-walking')}
            />
            <Label htmlFor="limited-walking" className="ml-2 text-lg">Limited Walking</Label>
          </div>
          <div className="flex items-start">
            <Checkbox 
              id="bathroom-accessible" 
              checked={accessibilityFeatures.includes('bathroom-accessible')}
              onCheckedChange={() => handleAccessibilityChange('bathroom-accessible')}
            />
            <Label htmlFor="bathroom-accessible" className="ml-2 text-lg">Accessible Bathrooms</Label>
          </div>
          <div className="flex items-start">
            <Checkbox 
              id="medical-staff" 
              checked={accessibilityFeatures.includes('medical-staff')}
              onCheckedChange={() => handleAccessibilityChange('medical-staff')}
            />
            <Label htmlFor="medical-staff" className="ml-2 text-lg">Medical Staff Present</Label>
          </div>
        </div>
      </div>
      
      {/* Departure Date */}
      <div className="mb-6">
        <Label htmlFor="departure" className="text-lg mb-2 block">Departure Date</Label>
        <input 
          type="date" 
          id="departure" 
          className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-sacred-primary focus:border-sacred-primary"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </div>
      
      {/* Region */}
      <div className="mb-6">
        <Label className="text-lg mb-2 block">Region</Label>
        <Select 
          value={region}
          onValueChange={setRegion}
        >
          <SelectTrigger className="text-lg">
            <SelectValue placeholder="Any region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any region</SelectItem>
            <SelectItem value="north">North India</SelectItem>
            <SelectItem value="south">South India</SelectItem>
            <SelectItem value="east">East India</SelectItem>
            <SelectItem value="west">West India</SelectItem>
            <SelectItem value="central">Central India</SelectItem>
            <SelectItem value="northeast">North East India</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button 
        className="w-full bg-sacred-primary hover:bg-sacred-primary/90 text-lg py-6"
        onClick={handleApplyFilters}
      >
        <Filter className="mr-2 h-5 w-5" />
        Apply Filters
      </Button>
    </div>
  );
};

export default PilgrimageFilter;
