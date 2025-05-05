
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PilgrimageFilter = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [durationRange, setDurationRange] = useState([3, 21]);

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
        />
      </div>
      
      {/* Spiritual Tradition */}
      <div className="mb-6">
        <Label className="text-lg mb-2 block">Spiritual Tradition</Label>
        <div className="space-y-2">
          <div className="flex items-start">
            <Checkbox id="christian" />
            <Label htmlFor="christian" className="ml-2 text-lg">Christian</Label>
          </div>
          <div className="flex items-start">
            <Checkbox id="buddhist" />
            <Label htmlFor="buddhist" className="ml-2 text-lg">Buddhist</Label>
          </div>
          <div className="flex items-start">
            <Checkbox id="hindu" />
            <Label htmlFor="hindu" className="ml-2 text-lg">Hindu</Label>
          </div>
          <div className="flex items-start">
            <Checkbox id="islamic" />
            <Label htmlFor="islamic" className="ml-2 text-lg">Islamic</Label>
          </div>
          <div className="flex items-start">
            <Checkbox id="interfaith" />
            <Label htmlFor="interfaith" className="ml-2 text-lg">Interfaith</Label>
          </div>
        </div>
      </div>
      
      {/* Difficulty */}
      <div className="mb-6">
        <Label className="text-lg mb-2 block">Difficulty Level</Label>
        <Select defaultValue="any">
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
          <span className="text-lg">${priceRange[0]} - ${priceRange[1]}</span>
        </div>
        <Slider 
          defaultValue={[0, 5000]} 
          max={10000} 
          step={100} 
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
          onValueChange={setDurationRange}
          className="py-4"
        />
      </div>
      
      {/* Accessibility Features */}
      <div className="mb-6">
        <Label className="text-lg mb-2 block">Accessibility Features</Label>
        <div className="space-y-2">
          <div className="flex items-start">
            <Checkbox id="wheelchair" />
            <Label htmlFor="wheelchair" className="ml-2 text-lg">Wheelchair Accessible</Label>
          </div>
          <div className="flex items-start">
            <Checkbox id="limited-walking" />
            <Label htmlFor="limited-walking" className="ml-2 text-lg">Limited Walking</Label>
          </div>
          <div className="flex items-start">
            <Checkbox id="bathroom-accessible" />
            <Label htmlFor="bathroom-accessible" className="ml-2 text-lg">Accessible Bathrooms</Label>
          </div>
          <div className="flex items-start">
            <Checkbox id="medical-staff" />
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
        />
      </div>
      
      {/* Region */}
      <div className="mb-6">
        <Label className="text-lg mb-2 block">Region</Label>
        <Select defaultValue="any">
          <SelectTrigger className="text-lg">
            <SelectValue placeholder="Any region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any region</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="middle-east">Middle East</SelectItem>
            <SelectItem value="north-america">North America</SelectItem>
            <SelectItem value="latin-america">Latin America</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button className="w-full bg-sacred-primary hover:bg-sacred-primary/90 text-lg py-6">
        Apply Filters
      </Button>
    </div>
  );
};

export default PilgrimageFilter;
