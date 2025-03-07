
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

type CourseFiltersProps = {
  onFilterChange: (filters: any) => void;
  categories: string[];
  levels: string[];
};

export const CourseFilters = ({ onFilterChange, categories, levels }: CourseFiltersProps) => {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [level, setLevel] = React.useState('');
  const [priceRange, setPriceRange] = React.useState([0, 200]);
  
  React.useEffect(() => {
    const filters = {
      search,
      category,
      level,
      priceRange
    };
    
    onFilterChange(filters);
  }, [search, category, level, priceRange, onFilterChange]);
  
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="search">Search Courses</Label>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Search by keyword..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select 
          value={category} 
          onValueChange={setCategory}
        >
          <SelectTrigger id="category">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="level">Level</Label>
        <Select 
          value={level} 
          onValueChange={setLevel}
        >
          <SelectTrigger id="level">
            <SelectValue placeholder="All Levels" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Levels</SelectItem>
            {levels.map((lvl) => (
              <SelectItem key={lvl} value={lvl}>{lvl}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Price Range</Label>
          <span className="text-sm text-muted-foreground">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          defaultValue={[0, 200]}
          max={200}
          step={5}
          value={priceRange}
          onValueChange={setPriceRange}
          className="py-4"
        />
      </div>
    </div>
  );
};
