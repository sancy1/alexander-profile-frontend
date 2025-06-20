"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  MessageCircle,
  Share2,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Play,
  RotateCcw,
  Eye,
  Tag,
  ChevronRight,
  User,
  TrendingUp,
  Flame,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

// Mock blog post data
const blogPost = {
  id: 1,
  title: "Building Scalable APIs with Django REST Framework",
  slug: "building-scalable-apis-django-rest-framework",
  content: `
# Building Scalable APIs with Django REST Framework

Django REST Framework (DRF) is a powerful toolkit for building Web APIs in Django. In this comprehensive guide, we'll explore how to create robust, scalable APIs that can handle real-world applications.

## Getting Started

First, let's set up our Django project with DRF:

\`\`\`bash
pip install django djangorestframework
django-admin startproject myapi
cd myapi
python manage.py startapp api
\`\`\`

## Creating Your First API Endpoint

Let's create a simple model and API endpoint:

\`\`\`python
# models.py
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
\`\`\`

Now, let's create a serializer:

\`\`\`python
# serializers.py
from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'content', 'created_at', 'updated_at']
\`\`\`

## Interactive Code Example

Try running this Python code to see how DRF serializers work:

\`\`\`python
# This is an interactive code block
from datetime import datetime

class MockArticle:
    def __init__(self, title, content):
        self.id = 1
        self.title = title
        self.content = content
        self.created_at = datetime.now()
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'created_at': self.created_at.isoformat()
        }

# Create a mock article
article = MockArticle("Test Article", "This is test content")
print("Article data:", article.to_dict())
\`\`\`

## Advanced Features

### Authentication and Permissions

DRF provides several authentication methods:

- Token Authentication
- Session Authentication  
- JWT Authentication
- Custom Authentication

### Pagination

For large datasets, pagination is essential:

\`\`\`python
# settings.py
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20
}
\`\`\`

## Conclusion

Django REST Framework provides a robust foundation for building scalable APIs. With proper authentication, pagination, and error handling, you can create APIs that scale to millions of users.
`,
  coverImage: "/placeholder.svg?height=400&width=800",
  author: {
    name: "Alexander S. Cyril",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Full-stack developer specializing in Python, Django, and modern web technologies.",
  },
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-16",
  readTime: "8 min read",
  category: "backend",
  tags: ["Django", "Python", "API", "REST", "Backend"],
  likes: 42,
  dislikes: 2,
  comments: 12,
  views: 1250,
  saved: false,
  liked: false,
  disliked: false,
}

const relatedPosts = [
  {
    id: 2,
    title: "Advanced Django Authentication",
    slug: "advanced-django-authentication",
    coverImage: "/placeholder.svg?height=200&width=300",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "API Testing with Django",
    slug: "api-testing-django",
    coverImage: "/placeholder.svg?height=200&width=300",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Django Performance Optimization",
    slug: "django-performance-optimization",
    coverImage: "/placeholder.svg?height=200&width=300",
    readTime: "10 min read",
  },
]

const comments = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content:
      "Great tutorial! The step-by-step approach made it easy to follow along. Looking forward to more Django content.",
    createdAt: "2024-01-16T10:30:00Z",
    likes: 5,
    replies: [
      {
        id: 2,
        author: {
          name: "Alexander S. Cyril",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        content: "Thank you, Sarah! I'm glad you found it helpful. More Django tutorials are coming soon.",
        createdAt: "2024-01-16T11:00:00Z",
        likes: 2,
      },
    ],
  },
  {
    id: 3,
    author: {
      name: "Mike Chen",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content: "The interactive code examples are fantastic! Really helps understand the concepts better.",
    createdAt: "2024-01-16T14:15:00Z",
    likes: 3,
    replies: [],
  },
]

// Mock data for recent, popular posts, and categories
const recentPosts = [
  { id: 5, title: "Next.js Best Practices", slug: "nextjs-best-practices" },
  { id: 6, title: "Mastering TypeScript", slug: "mastering-typescript" },
  { id: 7, title: "Advanced CSS Techniques", slug: "advanced-css-techniques" },
]

const popularPosts = [
  { id: 8, title: "React Performance Optimization", slug: "react-performance" },
  { id: 9, title: "Node.js Security Tips", slug: "nodejs-security" },
  { id: 10, title: "GraphQL vs REST", slug: "graphql-vs-rest" },
]

const categories = ["Frontend", "Backend", "DevOps", "Design"]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState(blogPost)
  const [newComment, setNewComment] = useState("")
  const [codeOutput, setCodeOutput] = useState("")
  const [isRunningCode, setIsRunningCode] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLike = () => {
    setPost((prev) => ({
      ...prev,
      liked: !prev.liked,
      disliked: false,
      likes: prev.liked ? prev.likes - 1 : prev.likes + 1,
      dislikes: prev.disliked ? prev.dislikes - 1 : prev.dislikes,
    }))
  }

  const handleDislike = () => {
    setPost((prev) => ({
      ...prev,
      disliked: !prev.disliked,
      liked: false,
      dislikes: prev.dislikes ? prev.dislikes - 1 : prev.dislikes + 1,
      likes: prev.liked ? prev.likes - 1 : prev.likes,
    }))
  }

  const handleSave = () => {
    setPost((prev) => ({
      ...prev,
      saved: !prev.saved,
    }))
  }

  const runCode = async () => {
    setIsRunningCode(true)
    // Simulate code execution
    setTimeout(() => {
      setCodeOutput(`Article data: {
  'id': 1,
  'title': 'Test Article',
  'content': 'This is test content',
  'created_at': '2024-01-16T12:00:00.000Z'
}`)
      setIsRunningCode(false)
    }, 1500)
  }

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      // Add comment logic here
      setNewComment("")
    }
  }

  // Mock Table of Contents
  const toc = [
    { id: "getting-started", title: "Getting Started" },
    { id: "interactive-code-example", title: "Interactive Code Example" },
    { id: "advanced-features", title: "Advanced Features" },
    { id: "conclusion", title: "Conclusion" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div className="h-full bg-emerald-600 transition-all duration-300" style={{ width: `${readingProgress}%` }} />
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                <Link href="/blog" className="hover:text-emerald-600 transition-colors">
                  Blog
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-900">{post.title}</span>
              </nav>

              {/* Category and Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="bg-emerald-600 text-white">{post.category}</Badge>
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-emerald-600 text-emerald-600">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{post.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views} views</span>
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative overflow-hidden rounded-xl mb-8">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Article Content */}
            <div className="col-span-1 lg:col-span-3">
              {/* Floating Engagement Bar - Desktop Only */}
              <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
                <Card className="p-4 shadow-lg">
                  <div className="flex flex-col gap-4">
                    <Button
                      variant={post.liked ? "default" : "outline"}
                      size="sm"
                      onClick={handleLike}
                      className={post.liked ? "bg-emerald-600 text-white" : ""}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span className="ml-1">{post.likes}</span>
                    </Button>
                    <Button
                      variant={post.disliked ? "default" : "outline"}
                      size="sm"
                      onClick={handleDislike}
                      className={post.disliked ? "bg-red-600 text-white" : ""}
                    >
                      <ThumbsDown className="w-4 h-4" />
                      <span className="ml-1">{post.dislikes}</span>
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleSave}>
                      <Bookmark className={`w-4 h-4 ${post.saved ? "fill-current text-emerald-600" : ""}`} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4" />
                      <span className="ml-1">{post.comments}</span>
                    </Button>
                  </div>
                </Card>
              </div>

              <section className="pb-16">
                <div className="max-w-none">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="prose prose-lg max-w-none"
                  >
                    {/* Article content would be rendered here with markdown */}
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Getting Started</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                          Django REST Framework (DRF) is a powerful toolkit for building Web APIs in Django. In this
                          comprehensive guide, we'll explore how to create robust, scalable APIs that can handle
                          real-world applications.
                        </p>

                        {/* Code Block */}
                        <div className="bg-slate-900 rounded-lg p-6 mb-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-slate-300 text-sm">bash</span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyCode("pip install django djangorestframework")}
                              className="text-slate-300 border-slate-600 hover:bg-slate-800"
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                          <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                            <code>{`pip install django djangorestframework
django-admin startproject myapi
cd myapi
python manage.py startapp api`}</code>
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Interactive Code Example</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                          Try running this Python code to see how DRF serializers work:
                        </p>

                        {/* Interactive Code Editor */}
                        <Card className="border-2 border-emerald-200 bg-emerald-50">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Play className="w-5 h-5 text-emerald-600" />
                              Interactive Python Code
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid lg:grid-cols-2 gap-6">
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <span className="text-sm font-medium text-slate-700">Code Editor</span>
                                  <div className="flex gap-2">
                                    <Button size="sm" variant="outline" onClick={() => copyCode("# Python code here")}>
                                      <Copy className="w-4 h-4" />
                                    </Button>
                                    <Button size="sm" variant="outline">
                                      <RotateCcw className="w-4 h-4" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      onClick={runCode}
                                      disabled={isRunningCode}
                                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                                    >
                                      {isRunningCode ? (
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                      ) : (
                                        <Play className="w-4 h-4" />
                                      )}
                                      Run
                                    </Button>
                                  </div>
                                </div>
                                <div className="bg-slate-900 rounded-lg p-4 h-64 overflow-auto">
                                  <pre className="text-green-400 font-mono text-sm">
                                    <code>{`from datetime import datetime

class MockArticle:
    def __init__(self, title, content):
        self.id = 1
        self.title = title
        self.content = content
        self.created_at = datetime.now()
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'created_at': self.created_at.isoformat()
        }

# Create a mock article
article = MockArticle("Test Article", "This is test content")
print("Article data:", article.to_dict())`}</code>
                                  </pre>
                                </div>
                              </div>
                              <div>
                                <div className="mb-3">
                                  <span className="text-sm font-medium text-slate-700">Output</span>
                                </div>
                                <div className="bg-slate-900 rounded-lg p-4 h-64 overflow-auto">
                                  {codeOutput ? (
                                    <pre className="text-green-400 font-mono text-sm">{codeOutput}</pre>
                                  ) : (
                                    <div className="text-slate-500 text-sm">Click "Run" to see the output...</div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Advanced Features</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                          DRF provides several authentication methods and advanced features for building
                          production-ready APIs.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile Engagement Bar */}
                  <div className="lg:hidden mt-8 p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        <Button
                          variant={post.liked ? "default" : "outline"}
                          size="sm"
                          onClick={handleLike}
                          className={post.liked ? "bg-emerald-600 text-white" : ""}
                        >
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {post.likes}
                        </Button>
                        <Button
                          variant={post.disliked ? "default" : "outline"}
                          size="sm"
                          onClick={handleDislike}
                          className={post.disliked ? "bg-red-600 text-white" : ""}
                        >
                          <ThumbsDown className="w-4 h-4 mr-1" />
                          {post.dislikes}
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={handleSave}>
                          <Bookmark className={`w-4 h-4 ${post.saved ? "fill-current text-emerald-600" : ""}`} />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Author Bio */}
              <section className="py-12 bg-slate-50 lg:hidden">
                <div className="max-w-none">
                  <Card className="border-2 border-emerald-200 bg-emerald-50">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                          <AvatarFallback>
                            <User className="w-8 h-8" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2">About {post.author.name}</h3>
                          <p className="text-slate-700 leading-relaxed mb-4">{post.author.bio}</p>
                          <div className="flex gap-4">
                            <Button
                              variant="outline"
                              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                            >
                              Follow
                            </Button>
                            <Button
                              variant="outline"
                              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                            >
                              View Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Comments Section */}
              <section className="py-16 lg:hidden">
                <div className="max-w-none">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">
                    Comments ({comments.length + comments.reduce((acc, comment) => acc + comment.replies.length, 0)})
                  </h3>

                  {/* Comment Form */}
                  <Card className="mb-8">
                    <CardContent className="p-6">
                      <form onSubmit={handleCommentSubmit}>
                        <Textarea
                          placeholder="Share your thoughts about this article..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="mb-4"
                          rows={4}
                        />
                        <div className="flex justify-end">
                          <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                            Post Comment
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <div key={comment.id}>
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <Avatar className="w-10 h-10">
                                <AvatarImage
                                  src={comment.author.avatar || "/placeholder.svg"}
                                  alt={comment.author.name}
                                />
                                <AvatarFallback>
                                  <User className="w-5 h-5" />
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="font-medium text-slate-900">{comment.author.name}</span>
                                  <span className="text-slate-500 text-sm">
                                    {new Date(comment.createdAt).toLocaleDateString()}
                                  </span>
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-4">{comment.content}</p>
                                <div className="flex items-center gap-4">
                                  <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
                                    <ThumbsUp className="w-4 h-4 mr-1" />
                                    {comment.likes}
                                  </Button>
                                  <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
                                    Reply
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Replies */}
                        {comment.replies.length > 0 && (
                          <div className="ml-12 mt-4 space-y-4">
                            {comment.replies.map((reply) => (
                              <Card key={reply.id} className="bg-slate-50">
                                <CardContent className="p-4">
                                  <div className="flex items-start gap-3">
                                    <Avatar className="w-8 h-8">
                                      <AvatarImage
                                        src={reply.author.avatar || "/placeholder.svg"}
                                        alt={reply.author.name}
                                      />
                                      <AvatarFallback>
                                        <User className="w-4 h-4" />
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="font-medium text-slate-900 text-sm">{reply.author.name}</span>
                                        <span className="text-slate-500 text-xs">
                                          {new Date(reply.createdAt).toLocaleDateString()}
                                        </span>
                                      </div>
                                      <p className="text-slate-700 text-sm leading-relaxed mb-2">{reply.content}</p>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-slate-500 hover:text-emerald-600 text-xs"
                                      >
                                        <ThumbsUp className="w-3 h-3 mr-1" />
                                        {reply.likes}
                                      </Button>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Previous/Next Post Navigation */}
              <section className="py-8 lg:hidden">
                <div className="max-w-none flex justify-between">
                  <Link
                    href="/blog/previous-post"
                    className="text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    &larr; Previous Post
                  </Link>
                  <Link href="/blog/next-post" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                    Next Post &rarr;
                  </Link>
                </div>
              </section>
            </div>

            {/* Sidebar - Desktop Only */}
            <aside className="col-span-1 hidden lg:block sticky top-24 h-fit">
              <div className="space-y-6">
                {/* Popular Posts */}
                <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Flame className="w-5 h-5 text-orange-600" />
                      </div>
                      Popular Posts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "React Performance Optimization: Complete Guide",
                          slug: "react-performance-optimization",
                          image: "/placeholder.svg?height=80&width=80",
                          views: "2.4k",
                          category: "Frontend",
                          gradient: "from-blue-500 to-purple-600",
                        },
                        {
                          title: "Node.js Security Best Practices",
                          slug: "nodejs-security-best-practices",
                          image: "/placeholder.svg?height=80&width=80",
                          views: "1.8k",
                          category: "Backend",
                          gradient: "from-green-500 to-emerald-600",
                        },
                        {
                          title: "GraphQL vs REST: The Ultimate Comparison",
                          slug: "graphql-vs-rest-comparison",
                          image: "/placeholder.svg?height=80&width=80",
                          views: "1.5k",
                          category: "API",
                          gradient: "from-pink-500 to-rose-600",
                        },
                      ].map((post, index) => (
                        <Link key={index} href={`/blog/${post.slug}`}>
                          <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/60 backdrop-blur-sm p-4 hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-pointer">
                            <div className="flex gap-3">
                              <div className="relative">
                                <Image
                                  src={post.image || "/placeholder.svg"}
                                  alt={post.title}
                                  width={80}
                                  height={80}
                                  className="w-20 h-20 object-cover rounded-lg shadow-sm"
                                />
                                <div className="absolute -top-1 -right-1">
                                  <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                                    #{index + 1}
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors">
                                  {post.title}
                                </h4>
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge
                                    variant="outline"
                                    className="text-xs border-orange-200 text-orange-700 bg-orange-50"
                                  >
                                    {post.category}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-slate-500">
                                  <TrendingUp className="w-3 h-3 text-orange-500" />
                                  <span className="font-medium text-orange-600">{post.views} views</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link href="/blog?sort=popular">
                      <Button
                        variant="outline"
                        className="w-full mt-4 text-orange-600 border-orange-300 hover:bg-orange-50 hover:border-orange-400"
                      >
                        <Flame className="w-4 h-4 mr-2" />
                        View All Popular Posts
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Frontend", count: 12, color: "bg-purple-500" },
                        { name: "Backend", count: 8, color: "bg-orange-500" },
                        { name: "DevOps", count: 6, color: "bg-green-500" },
                        { name: "Design", count: 4, color: "bg-pink-500" },
                        { name: "Business", count: 10, color: "bg-blue-500" },
                      ].map((category, index) => (
                        <Link key={index} href={`/blog?category=${category.name}`}>
                          <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded ${category.color}`}></div>
                              <span className="font-medium text-slate-900">{category.name}</span>
                            </div>
                            <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                              {category.count}
                            </Badge>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Posts */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Recent Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Advanced Django Authentication",
                          slug: "advanced-django-authentication",
                          image: "/placeholder.svg?height=80&width=80",
                          date: "Jan 10, 2024",
                          category: "Backend",
                        },
                        {
                          title: "Next.js 14 App Router Guide",
                          slug: "nextjs-14-app-router-guide",
                          image: "/placeholder.svg?height=80&width=80",
                          date: "Jan 8, 2024",
                          category: "Frontend",
                        },
                        {
                          title: "Docker for Developers",
                          slug: "docker-for-developers",
                          image: "/placeholder.svg?height=80&width=80",
                          date: "Jan 5, 2024",
                          category: "DevOps",
                        },
                      ].map((post, index) => (
                        <Link key={index} href={`/blog/${post.slug}`}>
                          <div className="flex gap-3 p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              width={80}
                              height={80}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-slate-900 text-sm line-clamp-2 mb-2">{post.title}</h4>
                              <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Calendar className="w-3 h-3" />
                                <span>{post.date}</span>
                              </div>
                              <Badge variant="outline" className="mt-1 text-xs">
                                {post.category}
                              </Badge>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tag Cloud */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">Tag Cloud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Django",
                        "Python",
                        "API",
                        "REST",
                        "Backend",
                        "JavaScript",
                        "React",
                        "Next.js",
                        "Frontend",
                        "TypeScript",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "PostgreSQL",
                        "Docker",
                        "AWS",
                        "DevOps",
                        "Git",
                        "Testing",
                        "Security",
                        "Performance",
                        "Optimization",
                        "Machine Learning",
                        "AI",
                        "Data Science",
                      ].map((tag, index) => (
                        <Link key={index} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-600 transition-colors text-xs px-2 py-1"
                          >
                            {tag}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Advertisement */}
                <Card className="border-2 border-emerald-200 bg-emerald-50 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="bg-emerald-600 text-white rounded-lg p-6 mb-4">
                      <h3 className="font-bold text-lg mb-2">TYPESTAR</h3>
                      <p className="text-sm opacity-90 mb-4">Boost your development skills with our premium courses</p>
                      <Button className="bg-white text-emerald-600 hover:bg-slate-100">Get Started</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar - Stacked Below Main Content */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6">
              {/* Popular Posts */}
              <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Flame className="w-5 h-5 text-orange-600" />
                    </div>
                    Popular Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "React Performance Optimization: Complete Guide",
                        slug: "react-performance-optimization",
                        image: "/placeholder.svg?height=80&width=80",
                        views: "2.4k",
                        category: "Frontend",
                        gradient: "from-blue-500 to-purple-600",
                      },
                      {
                        title: "Node.js Security Best Practices",
                        slug: "nodejs-security-best-practices",
                        image: "/placeholder.svg?height=80&width=80",
                        views: "1.8k",
                        category: "Backend",
                        gradient: "from-green-500 to-emerald-600",
                      },
                      {
                        title: "GraphQL vs REST: The Ultimate Comparison",
                        slug: "graphql-vs-rest-comparison",
                        image: "/placeholder.svg?height=80&width=80",
                        views: "1.5k",
                        category: "API",
                        gradient: "from-pink-500 to-rose-600",
                      },
                    ].map((post, index) => (
                      <Link key={index} href={`/blog/${post.slug}`}>
                        <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/60 backdrop-blur-sm p-4 hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-pointer">
                          <div className="flex gap-3">
                            <div className="relative">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                width={80}
                                height={80}
                                className="w-20 h-20 object-cover rounded-lg shadow-sm"
                              />
                              <div className="absolute -top-1 -right-1">
                                <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                                  #{index + 1}
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors">
                                {post.title}
                              </h4>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge
                                  variant="outline"
                                  className="text-xs border-orange-200 text-orange-700 bg-orange-50"
                                >
                                  {post.category}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-1 text-xs text-slate-500">
                                <TrendingUp className="w-3 h-3 text-orange-500" />
                                <span className="font-medium text-orange-600">{post.views} views</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link href="/blog?sort=popular">
                    <Button
                      variant="outline"
                      className="w-full mt-4 text-orange-600 border-orange-300 hover:bg-orange-50 hover:border-orange-400"
                    >
                      <Flame className="w-4 h-4 mr-2" />
                      View All Popular Posts
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Frontend", count: 12, color: "bg-purple-500" },
                      { name: "Backend", count: 8, color: "bg-orange-500" },
                      { name: "DevOps", count: 6, color: "bg-green-500" },
                      { name: "Design", count: 4, color: "bg-pink-500" },
                      { name: "Business", count: 10, color: "bg-blue-500" },
                    ].map((category, index) => (
                      <Link key={index} href={`/blog?category=${category.name}`}>
                        <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded ${category.color}`}></div>
                            <span className="font-medium text-slate-900">{category.name}</span>
                          </div>
                          <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                            {category.count}
                          </Badge>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Recent Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Advanced Django Authentication",
                        slug: "advanced-django-authentication",
                        image: "/placeholder.svg?height=80&width=80",
                        date: "Jan 10, 2024",
                        category: "Backend",
                      },
                      {
                        title: "Next.js 14 App Router Guide",
                        slug: "nextjs-14-app-router-guide",
                        image: "/placeholder.svg?height=80&width=80",
                        date: "Jan 8, 2024",
                        category: "Frontend",
                      },
                      {
                        title: "Docker for Developers",
                        slug: "docker-for-developers",
                        image: "/placeholder.svg?height=80&width=80",
                        date: "Jan 5, 2024",
                        category: "DevOps",
                      },
                    ].map((post, index) => (
                      <Link key={index} href={`/blog/${post.slug}`}>
                        <div className="flex gap-3 p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={80}
                            height={80}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-slate-900 text-sm line-clamp-2 mb-2">{post.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                            <Badge variant="outline" className="mt-1 text-xs">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tag Cloud */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">Tag Cloud</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Django",
                      "Python",
                      "API",
                      "REST",
                      "Backend",
                      "JavaScript",
                      "React",
                      "Next.js",
                      "Frontend",
                      "TypeScript",
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "PostgreSQL",
                      "Docker",
                      "AWS",
                      "DevOps",
                      "Git",
                      "Testing",
                      "Security",
                      "Performance",
                      "Optimization",
                      "Machine Learning",
                      "AI",
                      "Data Science",
                    ].map((tag, index) => (
                      <Link key={index} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                        <Badge
                          variant="outline"
                          className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-600 transition-colors text-xs px-2 py-1"
                        >
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Advertisement */}
              <Card className="border-2 border-emerald-200 bg-emerald-50 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-emerald-600 text-white rounded-lg p-6 mb-4">
                    <h3 className="font-bold text-lg mb-2">TYPESTAR</h3>
                    <p className="text-sm opacity-90 mb-4">Boost your development skills with our premium courses</p>
                    <Button className="bg-white text-emerald-600 hover:bg-slate-100">Get Started</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Author Bio - Desktop Only */}
      <section className="py-12 bg-slate-50 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-emerald-200 bg-emerald-50">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                    <AvatarFallback>
                      <User className="w-8 h-8" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">About {post.author.name}</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">{post.author.bio}</p>
                    <div className="flex gap-4">
                      <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                        Follow
                      </Button>
                      <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comments Section - Desktop Only */}
      <section className="py-16 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Comments ({comments.length + comments.reduce((acc, comment) => acc + comment.replies.length, 0)})
            </h3>

            {/* Comment Form */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <form onSubmit={handleCommentSubmit}>
                  <Textarea
                    placeholder="Share your thoughts about this article..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="mb-4"
                    rows={4}
                  />
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      Post Comment
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                          <AvatarFallback>
                            <User className="w-5 h-5" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-slate-900">{comment.author.name}</span>
                            <span className="text-slate-500 text-sm">
                              {new Date(comment.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-slate-700 leading-relaxed mb-4">{comment.content}</p>
                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {comment.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Replies */}
                  {comment.replies.length > 0 && (
                    <div className="ml-12 mt-4 space-y-4">
                      {comment.replies.map((reply) => (
                        <Card key={reply.id} className="bg-slate-50">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <Avatar className="w-8 h-8">
                                <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                                <AvatarFallback>
                                  <User className="w-4 h-4" />
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-slate-900 text-sm">{reply.author.name}</span>
                                  <span className="text-slate-500 text-xs">
                                    {new Date(reply.createdAt).toLocaleDateString()}
                                  </span>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed mb-2">{reply.content}</p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-slate-500 hover:text-emerald-600 text-xs"
                                >
                                  <ThumbsUp className="w-3 h-3 mr-1" />
                                  {reply.likes}
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous/Next Post Navigation - Desktop Only */}
      <section className="py-8 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex justify-between">
            <Link href="/blog/previous-post" className="text-emerald-600 hover:text-emerald-700 transition-colors">
              &larr; Previous Post
            </Link>
            <Link href="/blog/next-post" className="text-emerald-600 hover:text-emerald-700 transition-colors">
              Next Post &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Image
                            src={relatedPost.coverImage || "/placeholder.svg"}
                            alt={relatedPost.title}
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-slate-900 mb-2 line-clamp-2">{relatedPost.title}</h4>
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <Clock className="w-3 h-3" />
                            {relatedPost.readTime}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}











































// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import {
//   Calendar,
//   Clock,
//   MessageCircle,
//   Share2,
//   Bookmark,
//   ThumbsUp,
//   ThumbsDown,
//   Copy,
//   Play,
//   RotateCcw,
//   Eye,
//   Tag,
//   ChevronRight,
//   User,
//   TrendingUp,
//   Flame,
// } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import Navigation from "@/components/navigation"
// import WhatsAppFloat from "@/components/whatsapp-float"
// import Footer from "@/components/footer"
// import Image from "next/image"
// import Link from "next/link"

// // Mock blog post data
// const blogPost = {
//   id: 1,
//   title: "Building Scalable APIs with Django REST Framework",
//   slug: "building-scalable-apis-django-rest-framework",
//   content: `
// # Building Scalable APIs with Django REST Framework

// Django REST Framework (DRF) is a powerful toolkit for building Web APIs in Django. In this comprehensive guide, we'll explore how to create robust, scalable APIs that can handle real-world applications.

// ## Getting Started

// First, let's set up our Django project with DRF:

// \`\`\`bash
// pip install django djangorestframework
// django-admin startproject myapi
// cd myapi
// python manage.py startapp api
// \`\`\`

// ## Creating Your First API Endpoint

// Let's create a simple model and API endpoint:

// \`\`\`python
// # models.py
// from django.db import models

// class Article(models.Model):
//     title = models.CharField(max_length=200)
//     content = models.TextField()
//     created_at = models.DateTimeField(auto_now_add=True)
//     updated_at = models.DateTimeField(auto_now=True)
    
//     def __str__(self):
//         return self.title
// \`\`\`

// Now, let's create a serializer:

// \`\`\`python
// # serializers.py
// from rest_framework import serializers
// from .models import Article

// class ArticleSerializer(serializers.ModelSerializer):
//     class Meta:
//         model = Article
//         fields = ['id', 'title', 'content', 'created_at', 'updated_at']
// \`\`\`

// ## Interactive Code Example

// Try running this Python code to see how DRF serializers work:

// \`\`\`python
// # This is an interactive code block
// from datetime import datetime

// class MockArticle:
//     def __init__(self, title, content):
//         self.id = 1
//         self.title = title
//         self.content = content
//         self.created_at = datetime.now()
    
//     def to_dict(self):
//         return {
//             'id': self.id,
//             'title': self.title,
//             'content': self.content,
//             'created_at': self.created_at.isoformat()
//         }

// # Create a mock article
// article = MockArticle("Test Article", "This is test content")
// print("Article data:", article.to_dict())
// \`\`\`

// ## Advanced Features

// ### Authentication and Permissions

// DRF provides several authentication methods:

// - Token Authentication
// - Session Authentication  
// - JWT Authentication
// - Custom Authentication

// ### Pagination

// For large datasets, pagination is essential:

// \`\`\`python
// # settings.py
// REST_FRAMEWORK = {
//     'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
//     'PAGE_SIZE': 20
// }
// \`\`\`

// ## Conclusion

// Django REST Framework provides a robust foundation for building scalable APIs. With proper authentication, pagination, and error handling, you can create APIs that scale to millions of users.
// `,
//   coverImage: "/placeholder.svg?height=400&width=800",
//   author: {
//     name: "Alexander S. Cyril",
//     avatar: "/placeholder.svg?height=40&width=40",
//     bio: "Full-stack developer specializing in Python, Django, and modern web technologies.",
//   },
//   publishedAt: "2024-01-15",
//   updatedAt: "2024-01-16",
//   readTime: "8 min read",
//   category: "backend",
//   tags: ["Django", "Python", "API", "REST", "Backend"],
//   likes: 42,
//   dislikes: 2,
//   comments: 12,
//   views: 1250,
//   saved: false,
//   liked: false,
//   disliked: false,
// }

// const relatedPosts = [
//   {
//     id: 2,
//     title: "Advanced Django Authentication",
//     slug: "advanced-django-authentication",
//     coverImage: "/placeholder.svg?height=200&width=300",
//     readTime: "6 min read",
//   },
//   {
//     id: 3,
//     title: "API Testing with Django",
//     slug: "api-testing-django",
//     coverImage: "/placeholder.svg?height=200&width=300",
//     readTime: "5 min read",
//   },
//   {
//     id: 4,
//     title: "Django Performance Optimization",
//     slug: "django-performance-optimization",
//     coverImage: "/placeholder.svg?height=200&width=300",
//     readTime: "10 min read",
//   },
// ]

// const comments = [
//   {
//     id: 1,
//     author: {
//       name: "Sarah Johnson",
//       avatar: "/placeholder.svg?height=32&width=32",
//     },
//     content:
//       "Great tutorial! The step-by-step approach made it easy to follow along. Looking forward to more Django content.",
//     createdAt: "2024-01-16T10:30:00Z",
//     likes: 5,
//     replies: [
//       {
//         id: 2,
//         author: {
//           name: "Alexander S. Cyril",
//           avatar: "/placeholder.svg?height=32&width=32",
//         },
//         content: "Thank you, Sarah! I'm glad you found it helpful. More Django tutorials are coming soon.",
//         createdAt: "2024-01-16T11:00:00Z",
//         likes: 2,
//       },
//     ],
//   },
//   {
//     id: 3,
//     author: {
//       name: "Mike Chen",
//       avatar: "/placeholder.svg?height=32&width=32",
//     },
//     content: "The interactive code examples are fantastic! Really helps understand the concepts better.",
//     createdAt: "2024-01-16T14:15:00Z",
//     likes: 3,
//     replies: [],
//   },
// ]

// // Mock data for recent, popular posts, and categories
// const recentPosts = [
//   { id: 5, title: "Next.js Best Practices", slug: "nextjs-best-practices" },
//   { id: 6, title: "Mastering TypeScript", slug: "mastering-typescript" },
//   { id: 7, title: "Advanced CSS Techniques", slug: "advanced-css-techniques" },
// ]

// const popularPosts = [
//   { id: 8, title: "React Performance Optimization", slug: "react-performance" },
//   { id: 9, title: "Node.js Security Tips", slug: "nodejs-security" },
//   { id: 10, title: "GraphQL vs REST", slug: "graphql-vs-rest" },
// ]

// const categories = ["Frontend", "Backend", "DevOps", "Design"]

// export default function BlogPostPage({ params }: { params: { slug: string } }) {
//   const [post, setPost] = useState(blogPost)
//   const [newComment, setNewComment] = useState("")
//   const [codeOutput, setCodeOutput] = useState("")
//   const [isRunningCode, setIsRunningCode] = useState(false)
//   const [readingProgress, setReadingProgress] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight
//       const progress = (scrollTop / docHeight) * 100
//       setReadingProgress(Math.min(progress, 100))
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleLike = () => {
//     setPost((prev) => ({
//       ...prev,
//       liked: !prev.liked,
//       disliked: false,
//       likes: prev.liked ? prev.likes - 1 : prev.likes + 1,
//       dislikes: prev.disliked ? prev.dislikes - 1 : prev.dislikes,
//     }))
//   }

//   const handleDislike = () => {
//     setPost((prev) => ({
//       ...prev,
//       disliked: !prev.disliked,
//       liked: false,
//       dislikes: prev.disliked ? prev.dislikes - 1 : prev.dislikes + 1,
//       likes: prev.liked ? prev.likes - 1 : prev.likes,
//     }))
//   }

//   const handleSave = () => {
//     setPost((prev) => ({
//       ...prev,
//       saved: !prev.saved,
//     }))
//   }

//   const runCode = async () => {
//     setIsRunningCode(true)
//     // Simulate code execution
//     setTimeout(() => {
//       setCodeOutput(`Article data: {
//   'id': 1,
//   'title': 'Test Article',
//   'content': 'This is test content',
//   'created_at': '2024-01-16T12:00:00.000Z'
// }`)
//       setIsRunningCode(false)
//     }, 1500)
//   }

//   const copyCode = (code: string) => {
//     navigator.clipboard.writeText(code)
//   }

//   const handleCommentSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (newComment.trim()) {
//       // Add comment logic here
//       setNewComment("")
//     }
//   }

//   // Mock Table of Contents
//   const toc = [
//     { id: "getting-started", title: "Getting Started" },
//     { id: "interactive-code-example", title: "Interactive Code Example" },
//     { id: "advanced-features", title: "Advanced Features" },
//     { id: "conclusion", title: "Conclusion" },
//   ]

//   return (
//     <div className="min-h-screen bg-white">
//       <Navigation />

//       {/* Reading Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
//         <div className="h-full bg-emerald-600 transition-all duration-300" style={{ width: `${readingProgress}%` }} />
//       </div>

//       {/* Hero Section */}
//       <section className="pt-24 pb-8">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//               {/* Breadcrumb */}
//               <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
//                 <Link href="/blog" className="hover:text-emerald-600 transition-colors">
//                   Blog
//                 </Link>
//                 <ChevronRight className="w-4 h-4" />
//                 <span className="text-slate-900">{post.title}</span>
//               </nav>

//               {/* Category and Tags */}
//               <div className="flex flex-wrap items-center gap-2 mb-4">
//                 <Badge className="bg-emerald-600 text-white">{post.category}</Badge>
//                 {post.tags.map((tag, index) => (
//                   <Badge key={index} variant="outline" className="border-emerald-600 text-emerald-600">
//                     <Tag className="w-3 h-3 mr-1" />
//                     {tag}
//                   </Badge>
//                 ))}
//               </div>

//               {/* Title */}
//               <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>

//               {/* Meta Information */}
//               <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
//                 <div className="flex items-center gap-2">
//                   <Avatar className="w-8 h-8">
//                     <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
//                     <AvatarFallback>
//                       <User className="w-4 h-4" />
//                     </AvatarFallback>
//                   </Avatar>
//                   <span className="font-medium">{post.author.name}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Calendar className="w-4 h-4" />
//                   <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Clock className="w-4 h-4" />
//                   <span>{post.readTime}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Eye className="w-4 h-4" />
//                   <span>{post.views} views</span>
//                 </div>
//               </div>

//               {/* Cover Image */}
//               <div className="relative overflow-hidden rounded-xl mb-8">
//                 <Image
//                   src={post.coverImage || "/placeholder.svg"}
//                   alt={post.title}
//                   width={800}
//                   height={400}
//                   className="w-full h-64 md:h-96 object-cover"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content Area */}
//       <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Article Content */}
//         <div className="col-span-1 lg:col-span-3">
//           {/* Floating Engagement Bar */}
//           <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
//             <Card className="p-4 shadow-lg">
//               <div className="flex flex-col gap-4">
//                 <Button
//                   variant={post.liked ? "default" : "outline"}
//                   size="sm"
//                   onClick={handleLike}
//                   className={post.liked ? "bg-emerald-600 text-white" : ""}
//                 >
//                   <ThumbsUp className="w-4 h-4" />
//                   <span className="ml-1">{post.likes}</span>
//                 </Button>
//                 <Button
//                   variant={post.disliked ? "default" : "outline"}
//                   size="sm"
//                   onClick={handleDislike}
//                   className={post.disliked ? "bg-red-600 text-white" : ""}
//                 >
//                   <ThumbsDown className="w-4 h-4" />
//                   <span className="ml-1">{post.dislikes}</span>
//                 </Button>
//                 <Button variant="outline" size="sm" onClick={handleSave}>
//                   <Bookmark className={`w-4 h-4 ${post.saved ? "fill-current text-emerald-600" : ""}`} />
//                 </Button>
//                 <Button variant="outline" size="sm">
//                   <Share2 className="w-4 h-4" />
//                 </Button>
//                 <Button variant="outline" size="sm">
//                   <MessageCircle className="w-4 h-4" />
//                   <span className="ml-1">{post.comments}</span>
//                 </Button>
//               </div>
//             </Card>
//           </div>

//           <section className="pb-16">
//             <div className="max-w-none">
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="prose prose-lg max-w-none"
//               >
//                 {/* Article content would be rendered here with markdown */}
//                 <div className="space-y-8">
//                   <div>
//                     <h2 className="text-2xl font-bold text-slate-900 mb-4">Getting Started</h2>
//                     <p className="text-slate-700 leading-relaxed mb-6">
//                       Django REST Framework (DRF) is a powerful toolkit for building Web APIs in Django. In this
//                       comprehensive guide, we'll explore how to create robust, scalable APIs that can handle real-world
//                       applications.
//                     </p>

//                     {/* Code Block */}
//                     <div className="bg-slate-900 rounded-lg p-6 mb-6">
//                       <div className="flex items-center justify-between mb-4">
//                         <span className="text-slate-300 text-sm">bash</span>
//                         <Button
//                           size="sm"
//                           variant="outline"
//                           onClick={() => copyCode("pip install django djangorestframework")}
//                           className="text-slate-300 border-slate-600 hover:bg-slate-800"
//                         >
//                           <Copy className="w-4 h-4" />
//                         </Button>
//                       </div>
//                       <pre className="text-green-400 font-mono text-sm overflow-x-auto">
//                         <code>{`pip install django djangorestframework
// django-admin startproject myapi
// cd myapi
// python manage.py startapp api`}</code>
//                       </pre>
//                     </div>
//                   </div>

//                   <div>
//                     <h2 className="text-2xl font-bold text-slate-900 mb-4">Interactive Code Example</h2>
//                     <p className="text-slate-700 leading-relaxed mb-6">
//                       Try running this Python code to see how DRF serializers work:
//                     </p>

//                     {/* Interactive Code Editor */}
//                     <Card className="border-2 border-emerald-200 bg-emerald-50">
//                       <CardHeader>
//                         <CardTitle className="text-lg flex items-center gap-2">
//                           <Play className="w-5 h-5 text-emerald-600" />
//                           Interactive Python Code
//                         </CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                         <div className="grid lg:grid-cols-2 gap-6">
//                           <div>
//                             <div className="flex items-center justify-between mb-3">
//                               <span className="text-sm font-medium text-slate-700">Code Editor</span>
//                               <div className="flex gap-2">
//                                 <Button size="sm" variant="outline" onClick={() => copyCode("# Python code here")}>
//                                   <Copy className="w-4 h-4" />
//                                 </Button>
//                                 <Button size="sm" variant="outline">
//                                   <RotateCcw className="w-4 h-4" />
//                                 </Button>
//                                 <Button
//                                   size="sm"
//                                   onClick={runCode}
//                                   disabled={isRunningCode}
//                                   className="bg-emerald-600 hover:bg-emerald-700 text-white"
//                                 >
//                                   {isRunningCode ? (
//                                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                                   ) : (
//                                     <Play className="w-4 h-4" />
//                                   )}
//                                   Run
//                                 </Button>
//                               </div>
//                             </div>
//                             <div className="bg-slate-900 rounded-lg p-4 h-64 overflow-auto">
//                               <pre className="text-green-400 font-mono text-sm">
//                                 <code>{`from datetime import datetime

// class MockArticle:
//     def __init__(self, title, content):
//         self.id = 1
//         self.title = title
//         self.content = content
//         self.created_at = datetime.now()
    
//     def to_dict(self):
//         return {
//             'id': self.id,
//             'title': self.title,
//             'content': self.content,
//             'created_at': self.created_at.isoformat()
//         }

// # Create a mock article
// article = MockArticle("Test Article", "This is test content")
// print("Article data:", article.to_dict())`}</code>
//                               </pre>
//                             </div>
//                           </div>
//                           <div>
//                             <div className="mb-3">
//                               <span className="text-sm font-medium text-slate-700">Output</span>
//                             </div>
//                             <div className="bg-slate-900 rounded-lg p-4 h-64 overflow-auto">
//                               {codeOutput ? (
//                                 <pre className="text-green-400 font-mono text-sm">{codeOutput}</pre>
//                               ) : (
//                                 <div className="text-slate-500 text-sm">Click "Run" to see the output...</div>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>

//                   <div>
//                     <h2 className="text-2xl font-bold text-slate-900 mb-4">Advanced Features</h2>
//                     <p className="text-slate-700 leading-relaxed mb-6">
//                       DRF provides several authentication methods and advanced features for building production-ready
//                       APIs.
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Mobile Engagement Bar */}
//               <div className="lg:hidden mt-8 p-4 bg-slate-50 rounded-lg">
//                 <div className="flex items-center justify-between">
//                   <div className="flex gap-4">
//                     <Button
//                       variant={post.liked ? "default" : "outline"}
//                       size="sm"
//                       onClick={handleLike}
//                       className={post.liked ? "bg-emerald-600 text-white" : ""}
//                     >
//                       <ThumbsUp className="w-4 h-4 mr-1" />
//                       {post.likes}
//                     </Button>
//                     <Button
//                       variant={post.disliked ? "default" : "outline"}
//                       size="sm"
//                       onClick={handleDislike}
//                       className={post.disliked ? "bg-red-600 text-white" : ""}
//                     >
//                       <ThumbsDown className="w-4 h-4 mr-1" />
//                       {post.dislikes}
//                     </Button>
//                   </div>
//                   <div className="flex gap-2">
//                     <Button variant="outline" size="sm" onClick={handleSave}>
//                       <Bookmark className={`w-4 h-4 ${post.saved ? "fill-current text-emerald-600" : ""}`} />
//                     </Button>
//                     <Button variant="outline" size="sm">
//                       <Share2 className="w-4 h-4" />
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Author Bio */}
//           <section className="py-12 bg-slate-50">
//             <div className="max-w-none">
//               <Card className="border-2 border-emerald-200 bg-emerald-50">
//                 <CardContent className="p-8">
//                   <div className="flex items-start gap-6">
//                     <Avatar className="w-20 h-20">
//                       <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
//                       <AvatarFallback>
//                         <User className="w-8 h-8" />
//                       </AvatarFallback>
//                     </Avatar>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-slate-900 mb-2">About {post.author.name}</h3>
//                       <p className="text-slate-700 leading-relaxed mb-4">{post.author.bio}</p>
//                       <div className="flex gap-4">
//                         <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
//                           Follow
//                         </Button>
//                         <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
//                           View Profile
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </section>

//           {/* Comments Section */}
//           <section className="py-16">
//             <div className="max-w-none">
//               <h3 className="text-2xl font-bold text-slate-900 mb-8">
//                 Comments ({comments.length + comments.reduce((acc, comment) => acc + comment.replies.length, 0)})
//               </h3>

//               {/* Comment Form */}
//               <Card className="mb-8">
//                 <CardContent className="p-6">
//                   <form onSubmit={handleCommentSubmit}>
//                     <Textarea
//                       placeholder="Share your thoughts about this article..."
//                       value={newComment}
//                       onChange={(e) => setNewComment(e.target.value)}
//                       className="mb-4"
//                       rows={4}
//                     />
//                     <div className="flex justify-end">
//                       <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white">
//                         Post Comment
//                       </Button>
//                     </div>
//                   </form>
//                 </CardContent>
//               </Card>

//               {/* Comments List */}
//               <div className="space-y-6">
//                 {comments.map((comment) => (
//                   <div key={comment.id}>
//                     <Card>
//                       <CardContent className="p-6">
//                         <div className="flex items-start gap-4">
//                           <Avatar className="w-10 h-10">
//                             <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
//                             <AvatarFallback>
//                               <User className="w-5 h-5" />
//                             </AvatarFallback>
//                           </Avatar>
//                           <div className="flex-1">
//                             <div className="flex items-center gap-2 mb-2">
//                               <span className="font-medium text-slate-900">{comment.author.name}</span>
//                               <span className="text-slate-500 text-sm">
//                                 {new Date(comment.createdAt).toLocaleDateString()}
//                               </span>
//                             </div>
//                             <p className="text-slate-700 leading-relaxed mb-4">{comment.content}</p>
//                             <div className="flex items-center gap-4">
//                               <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
//                                 <ThumbsUp className="w-4 h-4 mr-1" />
//                                 {comment.likes}
//                               </Button>
//                               <Button variant="ghost" size="sm" className="text-slate-500 hover:text-emerald-600">
//                                 Reply
//                               </Button>
//                             </div>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>

//                     {/* Replies */}
//                     {comment.replies.length > 0 && (
//                       <div className="ml-12 mt-4 space-y-4">
//                         {comment.replies.map((reply) => (
//                           <Card key={reply.id} className="bg-slate-50">
//                             <CardContent className="p-4">
//                               <div className="flex items-start gap-3">
//                                 <Avatar className="w-8 h-8">
//                                   <AvatarImage
//                                     src={reply.author.avatar || "/placeholder.svg"}
//                                     alt={reply.author.name}
//                                   />
//                                   <AvatarFallback>
//                                     <User className="w-4 h-4" />
//                                   </AvatarFallback>
//                                 </Avatar>
//                                 <div className="flex-1">
//                                   <div className="flex items-center gap-2 mb-1">
//                                     <span className="font-medium text-slate-900 text-sm">{reply.author.name}</span>
//                                     <span className="text-slate-500 text-xs">
//                                       {new Date(reply.createdAt).toLocaleDateString()}
//                                     </span>
//                                   </div>
//                                   <p className="text-slate-700 text-sm leading-relaxed mb-2">{reply.content}</p>
//                                   <Button
//                                     variant="ghost"
//                                     size="sm"
//                                     className="text-slate-500 hover:text-emerald-600 text-xs"
//                                   >
//                                     <ThumbsUp className="w-3 h-3 mr-1" />
//                                     {reply.likes}
//                                   </Button>
//                                 </div>
//                               </div>
//                             </CardContent>
//                           </Card>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Previous/Next Post Navigation */}
//           <section className="py-8">
//             <div className="max-w-none flex justify-between">
//               <Link href="/blog/previous-post" className="text-emerald-600 hover:text-emerald-700 transition-colors">
//                 &larr; Previous Post
//               </Link>
//               <Link href="/blog/next-post" className="text-emerald-600 hover:text-emerald-700 transition-colors">
//                 Next Post &rarr;
//               </Link>
//             </div>
//           </section>
//         </div>

//         {/* Sidebar */}
//         <aside className="col-span-1 hidden lg:block sticky top-24 h-fit">
//           <div className="space-y-6">
//             {/* Popular Posts */}
//             <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
//               <CardHeader className="pb-4">
//                 <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
//                   <div className="p-2 bg-orange-100 rounded-lg">
//                     <Flame className="w-5 h-5 text-orange-600" />
//                   </div>
//                   Popular Posts
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {[
//                     {
//                       title: "React Performance Optimization: Complete Guide",
//                       slug: "react-performance-optimization",
//                       image: "/placeholder.svg?height=80&width=80",
//                       views: "2.4k",
//                       category: "Frontend",
//                       gradient: "from-blue-500 to-purple-600",
//                     },
//                     {
//                       title: "Node.js Security Best Practices",
//                       slug: "nodejs-security-best-practices",
//                       image: "/placeholder.svg?height=80&width=80",
//                       views: "1.8k",
//                       category: "Backend",
//                       gradient: "from-green-500 to-emerald-600",
//                     },
//                     {
//                       title: "GraphQL vs REST: The Ultimate Comparison",
//                       slug: "graphql-vs-rest-comparison",
//                       image: "/placeholder.svg?height=80&width=80",
//                       views: "1.5k",
//                       category: "API",
//                       gradient: "from-pink-500 to-rose-600",
//                     },
//                   ].map((post, index) => (
//                     <Link key={index} href={`/blog/${post.slug}`}>
//                       <div className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/60 backdrop-blur-sm p-4 hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-pointer">
//                         <div className="flex gap-3">
//                           <div className="relative">
//                             <Image
//                               src={post.image || "/placeholder.svg"}
//                               alt={post.title}
//                               width={80}
//                               height={80}
//                               className="w-20 h-20 object-cover rounded-lg shadow-sm"
//                             />
//                             <div className="absolute -top-1 -right-1">
//                               <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
//                                 #{index + 1}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <h4 className="font-semibold text-slate-900 text-sm line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors">
//                               {post.title}
//                             </h4>
//                             <div className="flex items-center gap-2 mb-2">
//                               <Badge
//                                 variant="outline"
//                                 className="text-xs border-orange-200 text-orange-700 bg-orange-50"
//                               >
//                                 {post.category}
//                               </Badge>
//                             </div>
//                             <div className="flex items-center gap-1 text-xs text-slate-500">
//                               <TrendingUp className="w-3 h-3 text-orange-500" />
//                               <span className="font-medium text-orange-600">{post.views} views</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//                 <Link href="/blog?sort=popular">
//                   <Button
//                     variant="outline"
//                     className="w-full mt-4 text-orange-600 border-orange-300 hover:bg-orange-50 hover:border-orange-400"
//                   >
//                     <Flame className="w-4 h-4 mr-2" />
//                     View All Popular Posts
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>

//             {/* Categories */}
//             <Card className="shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-lg text-slate-900">Category</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-3">
//                   {[
//                     { name: "Frontend", count: 12, color: "bg-purple-500" },
//                     { name: "Backend", count: 8, color: "bg-orange-500" },
//                     { name: "DevOps", count: 6, color: "bg-green-500" },
//                     { name: "Design", count: 4, color: "bg-pink-500" },
//                     { name: "Business", count: 10, color: "bg-blue-500" },
//                   ].map((category, index) => (
//                     <Link key={index} href={`/blog?category=${category.name}`}>
//                       <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer">
//                         <div className="flex items-center gap-3">
//                           <div className={`w-4 h-4 rounded ${category.color}`}></div>
//                           <span className="font-medium text-slate-900">{category.name}</span>
//                         </div>
//                         <Badge variant="secondary" className="bg-slate-100 text-slate-600">
//                           {category.count}
//                         </Badge>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Recent Posts */}
//             <Card className="shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-lg text-slate-900">Recent Posts</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {[
//                     {
//                       title: "Advanced Django Authentication",
//                       slug: "advanced-django-authentication",
//                       image: "/placeholder.svg?height=80&width=80",
//                       date: "Jan 10, 2024",
//                       category: "Backend",
//                     },
//                     {
//                       title: "Next.js 14 App Router Guide",
//                       slug: "nextjs-14-app-router-guide",
//                       image: "/placeholder.svg?height=80&width=80",
//                       date: "Jan 8, 2024",
//                       category: "Frontend",
//                     },
//                     {
//                       title: "Docker for Developers",
//                       slug: "docker-for-developers",
//                       image: "/placeholder.svg?height=80&width=80",
//                       date: "Jan 5, 2024",
//                       category: "DevOps",
//                     },
//                   ].map((post, index) => (
//                     <Link key={index} href={`/blog/${post.slug}`}>
//                       <div className="flex gap-3 p-3 rounded-lg border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition-all cursor-pointer">
//                         <Image
//                           src={post.image || "/placeholder.svg"}
//                           alt={post.title}
//                           width={80}
//                           height={80}
//                           className="w-20 h-20 object-cover rounded-lg"
//                         />
//                         <div className="flex-1 min-w-0">
//                           <h4 className="font-semibold text-slate-900 text-sm line-clamp-2 mb-2">{post.title}</h4>
//                           <div className="flex items-center gap-2 text-xs text-slate-500">
//                             <Calendar className="w-3 h-3" />
//                             <span>{post.date}</span>
//                           </div>
//                           <Badge variant="outline" className="mt-1 text-xs">
//                             {post.category}
//                           </Badge>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Tag Cloud */}
//             <Card className="shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-lg text-slate-900">Tag Cloud</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Django",
//                     "Python",
//                     "API",
//                     "REST",
//                     "Backend",
//                     "JavaScript",
//                     "React",
//                     "Next.js",
//                     "Frontend",
//                     "TypeScript",
//                     "Node.js",
//                     "Express",
//                     "MongoDB",
//                     "PostgreSQL",
//                     "Docker",
//                     "AWS",
//                     "DevOps",
//                     "Git",
//                     "Testing",
//                     "Security",
//                     "Performance",
//                     "Optimization",
//                     "Machine Learning",
//                     "AI",
//                     "Data Science",
//                   ].map((tag, index) => (
//                     <Link key={index} href={`/blog?tag=${encodeURIComponent(tag)}`}>
//                       <Badge
//                         variant="outline"
//                         className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-600 transition-colors text-xs px-2 py-1"
//                       >
//                         {tag}
//                       </Badge>
//                     </Link>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Advertisement */}
//             <Card className="border-2 border-emerald-200 bg-emerald-50 shadow-lg">
//               <CardContent className="p-6 text-center">
//                 <div className="bg-emerald-600 text-white rounded-lg p-6 mb-4">
//                   <h3 className="font-bold text-lg mb-2">TYPESTAR</h3>
//                   <p className="text-sm opacity-90 mb-4">Boost your development skills with our premium courses</p>
//                   <Button className="bg-white text-emerald-600 hover:bg-slate-100">Get Started</Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </aside>
//       </div>

//       {/* Related Posts */}
//       <section className="py-16 bg-slate-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Related Articles</h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               {relatedPosts.map((relatedPost, index) => (
//                 <motion.div
//                   key={relatedPost.id}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -5 }}
//                 >
//                   <Link href={`/blog/${relatedPost.slug}`}>
//                     <Card className="h-full border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
//                       <CardContent className="p-0">
//                         <div className="relative overflow-hidden rounded-t-lg">
//                           <Image
//                             src={relatedPost.coverImage || "/placeholder.svg"}
//                             alt={relatedPost.title}
//                             width={300}
//                             height={200}
//                             className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
//                           />
//                         </div>
//                         <div className="p-4">
//                           <h4 className="font-semibold text-slate-900 mb-2 line-clamp-2">{relatedPost.title}</h4>
//                           <div className="flex items-center gap-1 text-sm text-slate-500">
//                             <Clock className="w-3 h-3" />
//                             {relatedPost.readTime}
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//       <WhatsAppFloat />
//     </div>
//   )
// }
