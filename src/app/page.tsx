"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MOCK_COURSES, CATEGORIES } from "@/lib/mockData";
import CourseCard from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/Button";
import * as Icons from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-gray-50">
        <div className="container mx-auto h-full px-4 md:px-8 flex items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md bg-white p-8 shadow-xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learning that gets you
            </h1>
            <p className="text-gray-600 mb-6">
              Skills for your present (and your future). Get started with us today and transform your career.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Explore Courses</Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full md:w-3/4">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
            alt="Students learning"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="container mx-auto px-4 text-center">
        <p className="text-gray-500 mb-8 font-medium">Trusted by over 15,000 companies and millions of learners worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" width={80} height={40} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" width={80} height={40} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" width={80} height={40} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Apple_logo_black.svg" alt="Apple" width={40} height={40} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" width={80} height={40} />
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">A broad selection of courses</h2>
          <p className="text-gray-600 text-lg">Choose from over 210,000 online video courses with new additions published every month</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MOCK_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">View all courses</Button>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, index) => {
              const Icon = (Icons as any)[cat.icon];
              return (
                <motion.div
                  key={cat.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 border border-gray-200 rounded-lg flex flex-col items-center gap-4 cursor-pointer shadow-sm hover:shadow-md transition-all"
                >
                  <div className="p-4 bg-indigo-50 text-indigo-600 rounded-full">
                    {Icon && <Icon className="h-8 w-8" />}
                  </div>
                  <span className="font-bold text-gray-800">{cat.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instructor CTA */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
              alt="Instructor"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-gray-900">Become an instructor</h2>
            <p className="text-gray-600 text-lg">
              Instructors from around the world teach millions of students on UdemyClone. We provide the tools and platform to teach what you love.
            </p>
            <Button size="lg" className="w-fit">Start teaching today</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
