import { Course } from "@/types";

export const MOCK_COURSES: Course[] = [
  {
    id: "1",
    title: "The Complete 2026 Web Development Bootcamp",
    description: "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
    instructor: {
      id: "i1",
      name: "Dr. Angela Yu",
      avatar: "/avatars/angela.jpg"
    },
    price: 12.99,
    oldPrice: 89.99,
    category: "Web Development",
    rating: 4.8,
    reviewCount: 320450,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2026-03-01",
    curriculum: []
  },
  {
    id: "2",
    title: "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2026]",
    description: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
    instructor: {
      id: "i2",
      name: "Kirill Eremenko",
      avatar: "/avatars/kirill.jpg"
    },
    price: 14.99,
    oldPrice: 94.99,
    category: "Data Science",
    rating: 4.7,
    reviewCount: 165200,
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2026-04-15",
    curriculum: []
  },
  {
    id: "3",
    title: "Ultimate AWS Certified Solutions Architect Associate 2026",
    description: "Full Practice Exam | Learn AWS from scratch | Join 800,000+ students",
    instructor: {
      id: "i3",
      name: "Stephane Maarek",
      avatar: "/avatars/stephane.jpg"
    },
    price: 13.99,
    oldPrice: 84.99,
    category: "IT & Software",
    rating: 4.9,
    reviewCount: 210000,
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2026-05-01",
    curriculum: []
  },
  {
    id: "4",
    title: "The Ultimate Drawing Course - Beginner to Advanced",
    description: "Learn the #1 most important building block of all art.",
    instructor: {
      id: "i4",
      name: "Jaysen Batchelor",
      avatar: "/avatars/jaysen.jpg"
    },
    price: 11.99,
    oldPrice: 69.99,
    category: "Design",
    rating: 4.6,
    reviewCount: 115000,
    thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2026-02-10",
    curriculum: []
  },
  {
    id: "5",
    title: "Photography Masterclass: A Complete Guide to Photography",
    description: "The Best Online Photography Course: Take Amazing Photos & Start a Photography Business with this Masterclass.",
    instructor: {
      id: "i5",
      name: "Phil Ebiner",
      avatar: "/avatars/phil.jpg"
    },
    price: 12.99,
    oldPrice: 89.99,
    category: "Photography",
    rating: 4.7,
    reviewCount: 85000,
    thumbnail: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2026-01-20",
    curriculum: []
  },
  {
    id: "6",
    title: "Financial Analysis and Investing",
    description: "Learn how to analyze companies and make smart investment decisions.",
    instructor: {
      id: "i6",
      name: "Chris Haroun",
      avatar: "/avatars/chris.jpg"
    },
    price: 15.99,
    oldPrice: 99.99,
    category: "Business",
    rating: 4.8,
    reviewCount: 45000,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2026-03-25",
    curriculum: []
  }
];

export const CATEGORIES = [
  { name: "Design", icon: "Palette" },
  { name: "Development", icon: "Code" },
  { name: "Marketing", icon: "TrendingUp" },
  { name: "IT and Software", icon: "Cpu" },
  { name: "Personal Development", icon: "User" },
  { name: "Business", icon: "Briefcase" },
  { name: "Photography", icon: "Camera" },
  { name: "Music", icon: "Music" },
];
