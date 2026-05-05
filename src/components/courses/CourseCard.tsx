"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, StarHalf } from "lucide-react";
import { Course } from "@/types";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-3 w-3 fill-yellow-400 text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-3 w-3 fill-yellow-400 text-yellow-400" />);
    }
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn("group flex flex-col gap-2 cursor-pointer", className)}
    >
      <Link href={`/courses/${course.id}`}>
        <div className="relative aspect-video w-full overflow-hidden rounded-md border border-gray-200">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <h3 className="line-clamp-2 text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs text-gray-500">{course.instructor.name}</p>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-yellow-700">{course.rating.toFixed(1)}</span>
            <div className="flex items-center">
              {renderStars(course.rating)}
            </div>
            <span className="text-xs text-gray-400">({course.reviewCount.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-gray-900">${course.price}</span>
            {course.oldPrice && (
              <span className="text-sm text-gray-400 line-through">${course.oldPrice}</span>
            )}
          </div>
          {course.category && (
            <span className="inline-flex w-fit rounded-sm bg-yellow-100 px-2 py-0.5 text-[10px] font-bold text-yellow-800">
              {course.category}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
