// app/blog/page.tsx

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Clock,
  Heart,
  MessageCircle,
  Eye,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/navigation";
import WhatsAppFloat from "@/components/whatsapp-float";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "All", value: "all", count: 24 },
  { name: "Full-Stack", value: "fullstack", count: 8 },
  { name: "AI/ML", value: "ai", count: 6 },
  { name: "Data Analysis", value: "data", count: 5 },
  { name: "Frontend", value: "frontend", count: 3 },
  { name: "Backend", value: "backend", count: 2 },
];

const sortOptions = [
  { name: "Newest", value: "newest" },
  { name: "Most Liked", value: "likes" },
  { name: "Most Commented", value: "comments" },
  { name: "Most Viewed", value: "views" },
];

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable APIs with Django REST Framework",
    slug: "building-scalable-apis-django-rest-framework",
    excerpt:
      "Learn how to create robust, scalable APIs using Django REST Framework with authentication, pagination, and advanced filtering techniques.",
    content: "Full content here...",
    coverImage: "/placeholder.svg?height=300&width=500",
    author: {
      name: "Alexander S. Cyril",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "backend",
    tags: ["Django", "Python", "API", "REST", "Backend"],
    likes: 42,
    comments: 12,
    views: 1250,
    featured: true,
    saved: false,
  },
  {
    id: 2,
    title: "Machine Learning Model Deployment with Docker",
    slug: "ml-model-deployment-docker",
    excerpt:
      "A comprehensive guide to containerizing and deploying machine learning models using Docker and cloud platforms.",
    content: "Full content here...",
    coverImage: "/placeholder.svg?height=300&width=500",
    author: {
      name: "Alexander S. Cyril",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    category: "ai",
    tags: ["Machine Learning", "Docker", "Deployment", "Python", "DevOps"],
    likes: 38,
    comments: 8,
    views: 980,
    featured: true,
    saved: true,
  },
  {
    id: 3,
    title: "Next.js 14 App Router: Complete Guide",
    slug: "nextjs-14-app-router-guide",
    excerpt:
      "Explore the new App Router in Next.js 14 with server components, streaming, and advanced routing patterns.",
    content: "Full content here...",
    coverImage: "/placeholder.svg?height=300&width=500",
    author: {
      name: "Alexander S. Cyril",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    category: "fullstack",
    tags: ["Next.js", "React", "JavaScript", "Frontend", "Full-Stack"],
    likes: 56,
    comments: 15,
    views: 1450,
    featured: false,
    saved: false,
  },
  {
    id: 4,
    title: "Data Visualization with Python and Matplotlib",
    slug: "data-visualization-python-matplotlib",
    excerpt:
      "Create stunning data visualizations using Python's Matplotlib library with practical examples and best practices.",
    content: "Full content here...",
    coverImage: "/placeholder.svg?height=300&width=500",
    author: {
      name: "Alexander S. Cyril",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: "2024-01-01",
    readTime: "6 min read",
    category: "data",
    tags: ["Python", "Data Visualization", "Matplotlib", "Analytics"],
    likes: 29,
    comments: 6,
    views: 720,
    featured: false,
    saved: false,
  },
  {
    id: 5,
    title: "Building Responsive UIs with Tailwind CSS",
    slug: "responsive-ui-tailwind-css",
    excerpt:
      "Master responsive design patterns and create beautiful user interfaces using Tailwind CSS utility classes.",
    content: "Full content here...",
    coverImage: "/placeholder.svg?height=300&width=500",
    author: {
      name: "Alexander S. Cyril",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: "2023-12-28",
    readTime: "7 min read",
    category: "frontend",
    tags: ["Tailwind CSS", "CSS", "Responsive Design", "Frontend"],
    likes: 33,
    comments: 9,
    views: 890,
    featured: false,
    saved: true,
  },
  {
    id: 6,
    title: "Advanced SQL Queries for Data Analysis",
    slug: "advanced-sql-queries-data-analysis",
    excerpt:
      "Deep dive into complex SQL queries, window functions, and optimization techniques for data analysis workflows.",
    content: "Full content here...",
    coverImage: "/placeholder.svg?height=300&width=500",
    author: {
      name: "Alexander S. Cyril",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: "2023-12-20",
    readTime: "9 min read",
    category: "data",
    tags: ["SQL", "Database", "Data Analysis", "PostgreSQL"],
    likes: 41,
    comments: 11,
    views: 1100,
    featured: false,
    saved: false,
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [savedPosts, setSavedPosts] = useState(new Set([2, 5]));

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((post) => post.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Sort posts
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "likes":
          return b.likes - a.likes;
        case "comments":
          return b.comments - a.comments;
        case "views":
          return b.views - a.views;
        case "newest":
        default:
          return (
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          );
      }
    });

    setFilteredPosts(filtered);
  }, [searchQuery, activeCategory, sortBy]);

  const handleSavePost = (postId: number) => {
    const newSavedPosts = new Set(savedPosts);
    if (newSavedPosts.has(postId)) {
      newSavedPosts.delete(postId);
    } else {
      newSavedPosts.add(postId);
    }
    setSavedPosts(newSavedPosts);
  };

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Tech <span className="text-emerald-600">Insights</span> &
              Tutorials
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Dive deep into software development, machine learning, and data
              analytics with practical tutorials and insights from real-world
              projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-emerald-600 text-white px-4 py-2">
                Interactive Code Examples
              </Badge>
              <Badge className="bg-purple-600 text-white px-4 py-2">
                Step-by-Step Tutorials
              </Badge>
              <Badge className="bg-orange-600 text-white px-4 py-2">
                Real-World Projects
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-lg text-slate-600">
                Hand-picked tutorials and insights you shouldn't miss
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full border-2 border-emerald-200 bg-emerald-50 transition-all duration-300 group-hover:shadow-xl group-hover:border-emerald-300">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={post.coverImage || "/placeholder.svg"}
                          alt={post.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-emerald-600 text-white">
                            Featured
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => handleSavePost(post.id)}
                            className="bg-white/90 backdrop-blur-sm hover:bg-white"
                          >
                            <Heart
                              className={`w-4 h-4 ${
                                savedPosts.has(post.id)
                                  ? "fill-red-500 text-red-500"
                                  : "text-slate-600"
                              }`}
                            />
                          </Button>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant="outline"
                            className="border-emerald-600 text-emerald-600"
                          >
                            {categories.find(
                              (cat) => cat.value === post.category
                            )?.name || post.category}
                          </Badge>
                          <span className="text-slate-500 text-sm">•</span>
                          <span className="text-slate-500 text-sm flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              className="bg-emerald-600 text-white hover:bg-emerald-700 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {post.comments}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views}
                            </span>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                              Read More
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="py-8 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search articles, tags, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white border-slate-300 focus:border-emerald-500"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={
                      activeCategory === category.value ? "default" : "outline"
                    }
                    onClick={() => setActiveCategory(category.value)}
                    className={`${
                      activeCategory === category.value
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "text-slate-600 hover:text-emerald-600 border-slate-300 hover:border-emerald-600"
                    }`}
                  >
                    {category.name}
                    <Badge
                      variant="secondary"
                      className="ml-2 bg-slate-100 text-slate-600"
                    >
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full border-2 border-slate-200 bg-white transition-all duration-300 group-hover:shadow-xl group-hover:border-emerald-300">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={post.coverImage || "/placeholder.svg"}
                            alt={post.title}
                            width={400}
                            height={200}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3">
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => handleSavePost(post.id)}
                              className="bg-white/90 backdrop-blur-sm hover:bg-white"
                            >
                              <Heart
                                className={`w-4 h-4 ${
                                  savedPosts.has(post.id)
                                    ? "fill-red-500 text-red-500"
                                    : "text-slate-600"
                                }`}
                              />
                            </Button>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge
                              variant="outline"
                              className="border-emerald-600 text-emerald-600"
                            >
                              {categories.find(
                                (cat) => cat.value === post.category
                              )?.name || post.category}
                            </Badge>
                            <span className="text-slate-500 text-sm">•</span>
                            <span className="text-slate-500 text-sm flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                className="bg-emerald-600 text-white hover:bg-emerald-700 text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 2 && (
                              <Badge className="bg-slate-200 text-slate-600 text-xs">
                                +{post.tags.length - 2}
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-xs text-slate-500">
                              <span className="flex items-center gap-1">
                                <Heart className="w-3 h-3" />
                                {post.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircle className="w-3 h-3" />
                                {post.comments}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {post.views}
                              </span>
                            </div>
                            <Link href={`/blog/${post.slug}`}>
                              <Button
                                size="sm"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                              >
                                Read
                                <ChevronRight className="w-3 h-3 ml-1" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-slate-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  No articles found
                </h3>
                <p className="text-slate-600">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
