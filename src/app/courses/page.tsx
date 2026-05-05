"use client";

import { useState } from "react";
import { MOCK_COURSES } from "@/lib/mockData";
import CourseCard from "@/components/courses/CourseCard";
import { Filter, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredCourses = MOCK_COURSES.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">All Courses</h1>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Button variant="outline" className="flex gap-2 shrink-0">
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" className="flex gap-2 shrink-0">
              Sort by <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters (Simplified) */}
        <div className="hidden md:flex flex-col gap-6 w-64 shrink-0">
          <div>
            <h3 className="font-bold mb-3">Rating</h3>
            <div className="flex flex-col gap-2">
              {[4.5, 4.0, 3.5, 3.0].map(rating => (
                <label key={rating} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                  <span>{rating} & up</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3">Category</h3>
            <div className="flex flex-col gap-2">
              {["Web Development", "Design", "Data Science", "Business"].map(cat => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3">Price</h3>
            <div className="flex flex-col gap-2">
              {["Paid", "Free"].map(p => (
                <label key={p} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                  <span>{p}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="flex-grow">
          <p className="text-sm text-gray-500 mb-4">{filteredCourses.length} results</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl font-medium text-gray-600">No courses found matching your search.</p>
              <Button variant="ghost" onClick={() => setSearchQuery("")} className="mt-4 text-indigo-600">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
