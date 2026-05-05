"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Star, PlayCircle, Globe, Info, CheckCircle, ChevronDown, ChevronUp, Clock, FileText, Smartphone, Award } from "lucide-react";
import { MOCK_COURSES } from "@/lib/mockData";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/lib/store";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = MOCK_COURSES.find(c => c.id === id) || MOCK_COURSES[0];
  const { addItem } = useCartStore();
  const [expandedSection, setExpandedSection] = useState<string | null>("s1");

  const handleAddToCart = () => {
    addItem(course);
    toast.success("Added to cart!");
  };

  // Mock curriculum data for detail page
  const sections = [
    { id: "s1", title: "Introduction to the Course", lessons: ["Welcome", "Course Overview", "Setting up the Environment"] },
    { id: "s2", title: "Core Concepts", lessons: ["Understanding the Fundamentals", "Key Terminology", "Practical Exercise 1"] },
    { id: "s3", title: "Advanced Techniques", lessons: ["Mastering the Tools", "Case Study Analysis", "Final Project Discussion"] },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Dark Header Section */}
      <section className="bg-gray-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="flex gap-2 text-indigo-400 font-bold text-sm">
              <span className="hover:underline cursor-pointer">Development</span>
              <span>{">"}</span>
              <span className="hover:underline cursor-pointer">{course.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
            <p className="text-lg text-gray-300">{course.description}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-yellow-400 font-bold">
                <span>{course.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <span className="text-indigo-400 underline ml-1">({course.reviewCount.toLocaleString()} ratings)</span>
              </div>
              <span className="text-gray-300">624,532 students</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span>Created by <span className="text-indigo-400 underline">{course.instructor.name}</span></span>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                <Info className="h-4 w-4" />
                <span>Last updated {course.updatedAt}</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <div className="flex-grow max-w-3xl flex flex-col gap-12">
            
            {/* What you'll learn */}
            <div className="border border-gray-200 p-6 rounded-sm">
              <h2 className="text-2xl font-bold mb-4">What you&apos;ll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Build 16 web development projects for your portfolio",
                  "Master both Front and Back-End Technologies",
                  "Work as a freelance web developer",
                  "Professional Best Practices",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 shrink-0 text-gray-600 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Course content</h2>
              <div className="flex justify-between text-sm mb-4">
                <span>3 sections • 15 lectures • 45m total length</span>
                <button className="text-indigo-600 font-bold">Expand all sections</button>
              </div>
              
              <div className="border border-gray-200">
                {sections.map((section) => (
                  <div key={section.id} className="border-b last:border-b-0">
                    <button 
                      onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {expandedSection === section.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        <span className="font-bold text-left">{section.title}</span>
                      </div>
                      <span className="text-sm text-gray-500">{section.lessons.length} lectures</span>
                    </button>
                    <AnimatePresence>
                      {expandedSection === section.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 flex flex-col gap-3 bg-white">
                            {section.lessons.map((lesson, idx) => (
                              <div key={idx} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-3">
                                  <PlayCircle className="h-4 w-4 text-gray-400" />
                                  <span className="hover:underline cursor-pointer">{lesson}</span>
                                </div>
                                <span className="text-gray-400">05:00</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Instructor</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image src={course.instructor.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"} alt={course.instructor.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-indigo-600 underline text-lg">{course.instructor.name}</span>
                    <span className="text-sm text-gray-500">Master Instructor, Software Engineer</span>
                  </div>
                </div>
                <div className="flex gap-6 text-sm font-medium">
                  <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.7 Instructor Rating</div>
                  <div className="flex items-center gap-2"><Award className="h-4 w-4" /> 1,200,000 Reviews</div>
                  <div className="flex items-center gap-2"><Smartphone className="h-4 w-4" /> 2,500,000 Students</div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  I&apos;m a software engineer with over 15 years of experience. I love teaching and sharing my knowledge with others. My courses are designed to be practical and easy to follow.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar (Sticky) */}
          <div className="lg:w-96 shrink-0">
            <div className="lg:sticky lg:top-24 bg-white border border-gray-200 shadow-xl flex flex-col">
               <div className="relative aspect-video w-full group cursor-pointer">
                  <Image src={course.thumbnail} alt="Preview" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-100 group-hover:bg-black/50 transition-all">
                    <PlayCircle className="h-16 w-16 text-white" />
                    <span className="text-white font-bold mt-2">Preview this course</span>
                  </div>
               </div>
               <div className="p-6 flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold">${course.price}</span>
                    {course.oldPrice && <span className="text-lg text-gray-400 line-through">${course.oldPrice}</span>}
                    <span className="text-gray-900 text-sm">{Math.round(((course.oldPrice || 0) - course.price) / (course.oldPrice || 1) * 100)}% off</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Button size="lg" className="h-14 text-lg" onClick={handleAddToCart}>Add to cart</Button>
                    <Button variant="outline" size="lg" className="h-14 text-lg">Buy now</Button>
                  </div>

                  <p className="text-[10px] text-center text-gray-500">30-Day Money-Back Guarantee</p>
                  
                  <div>
                    <h4 className="font-bold text-sm mb-3">This course includes:</h4>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 text-sm"><PlayCircle className="h-4 w-4" /> 65 hours on-demand video</div>
                      <div className="flex items-center gap-3 text-sm"><FileText className="h-4 w-4" /> 15 articles</div>
                      <div className="flex items-center gap-3 text-sm"><Smartphone className="h-4 w-4" /> Access on mobile and TV</div>
                      <div className="flex items-center gap-3 text-sm"><Award className="h-4 w-4" /> Certificate of completion</div>
                    </div>
                  </div>

                  <div className="flex justify-around pt-4 border-t">
                    <button className="text-sm font-bold underline">Share</button>
                    <button className="text-sm font-bold underline">Gift this course</button>
                    <button className="text-sm font-bold underline">Apply Coupon</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
