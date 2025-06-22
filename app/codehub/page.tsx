"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Play,
  Code,
  Terminal,
  BookOpen,
  Wrench,
  Copy,
  RotateCcw,
  ExternalLink,
  Zap,
  Database,
  Globe,
  Calculator,
  Lock,
  FileText,
  Palette,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/navigation"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"
import { FullWidthSection } from "@/components/full-width-section"
import Link from 'next/link';

const showcaseSnippets = [
  {
    id: 1,
    title: "Interactive Calculator",
    description: "A fully functional calculator built with vanilla JavaScript and modern CSS animations.",
    tags: ["JavaScript", "CSS", "UI/UX"],
    icon: Calculator,
    difficulty: "Beginner",
    code: `// Interactive Calculator
function calculate(expression) {
  try {
    return Function('"use strict"; return (' + expression + ')')();
  } catch (error) {
    return 'Error';
  }
}

// Example usage
console.log(calculate('2 + 3 * 4')); // 14`,
    demo: true,
  },
  {
    id: 2,
    title: "Form Validator",
    description: "Real-time form validation with custom error messages and smooth animations.",
    tags: ["JavaScript", "HTML", "Validation"],
    icon: FileText,
    difficulty: "Intermediate",
    code: `// Form Validator
class FormValidator {
  constructor(form) {
    this.form = form;
    this.rules = {};
  }
  
  addRule(field, validator, message) {
    this.rules[field] = { validator, message };
  }
  
  validate() {
    let isValid = true;
    for (let field in this.rules) {
      const input = this.form.querySelector(\`[name="\${field}"]\`);
      const rule = this.rules[field];
      
      if (!rule.validator(input.value)) {
        this.showError(input, rule.message);
        isValid = false;
      } else {
        this.clearError(input);
      }
    }
    return isValid;
  }
}`,
    demo: true,
  },
  {
    id: 3,
    title: "CSS Animation Studio",
    description: "Interactive CSS animations with customizable parameters and live preview.",
    tags: ["CSS", "Animation", "Interactive"],
    icon: Palette,
    difficulty: "Intermediate",
    code: `/* CSS Animation Studio */
@keyframes slideInBounce {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  60% {
    transform: translateX(10%);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated-element {
  animation: slideInBounce 0.8s ease-out;
}`,
    demo: true,
  },
]

const apiTools = [
  {
    id: 1,
    title: "Markdown to HTML Converter",
    description: "Convert Markdown text to HTML using a Django backend API with real-time preview.",
    tags: ["Django", "API", "Text Processing"],
    icon: FileText,
    endpoint: "/api/markdown-convert",
    inputType: "textarea",
    placeholder: "Enter your Markdown text here...",
    sampleInput: "# Hello World\n\nThis is **bold** text and this is *italic* text.\n\n- List item 1\n- List item 2",
  },
  {
    id: 2,
    title: "Password Generator",
    description: "Generate secure passwords with customizable parameters using backend algorithms.",
    tags: ["Django", "Security", "API"],
    icon: Lock,
    endpoint: "/api/generate-password",
    inputType: "form",
    fields: [
      { name: "length", type: "number", label: "Length", default: 12 },
      { name: "includeSymbols", type: "checkbox", label: "Include Symbols" },
      { name: "includeNumbers", type: "checkbox", label: "Include Numbers" },
    ],
  },
  {
    id: 3,
    title: "Weather Data Fetcher",
    description: "Fetch real-time weather data for any city using external APIs.",
    tags: ["API Integration", "Next.js", "Data"],
    icon: Globe,
    endpoint: "/api/weather",
    inputType: "input",
    placeholder: "Enter city name...",
    sampleInput: "New York",
  },
]

const tutorials = [
  {
    id: 1,
    title: "JavaScript Closures Explained",
    description: "Understanding closures with practical examples and interactive demonstrations.",
    tags: ["JavaScript", "Concepts", "Tutorial"],
    icon: BookOpen,
    difficulty: "Intermediate",
    readTime: "5 min",
    content: `// JavaScript Closures
function outerFunction(x) {
  // This is the outer function's scope
  
  function innerFunction(y) {
    // This inner function has access to x
    return x + y;
  }
  
  return innerFunction;
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8

// The inner function "closes over" the variable x`,
  },
  {
    id: 2,
    title: "Python List Comprehensions",
    description: "Master Python's powerful list comprehension syntax with examples.",
    tags: ["Python", "Data Structures", "Tutorial"],
    icon: Code,
    difficulty: "Beginner",
    readTime: "3 min",
    content: `# Python List Comprehensions
# Basic syntax: [expression for item in iterable]

# Traditional way
squares = []
for x in range(10):
    squares.append(x**2)

# List comprehension way
squares = [x**2 for x in range(10)]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Nested comprehensions
matrix = [[j for j in range(3)] for i in range(3)]`,
  },
  {
    id: 3,
    title: "Tailwind Layout Patterns",
    description: "Common layout patterns and responsive design techniques with Tailwind CSS.",
    tags: ["Tailwind", "CSS", "Layout"],
    icon: Palette,
    difficulty: "Beginner",
    readTime: "4 min",
    content: `<!-- Tailwind Layout Patterns -->

<!-- Flexbox Center -->
<div class="flex items-center justify-center min-h-screen">
  <div class="text-center">Centered Content</div>
</div>

<!-- Grid Layout -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg shadow">Card 1</div>
  <div class="bg-white p-6 rounded-lg shadow">Card 2</div>
  <div class="bg-white p-6 rounded-lg shadow">Card 3</div>
</div>

<!-- Responsive Navigation -->
<nav class="flex flex-col md:flex-row justify-between items-center p-4">
  <div class="mb-4 md:mb-0">Logo</div>
  <div class="flex space-x-4">Navigation Items</div>
</nav>`,
  },
]

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState("snippets")
  const [selectedSnippet, setSelectedSnippet] = useState(null)
  const [selectedTool, setSelectedTool] = useState(null)
  const [selectedTutorial, setSelectedTutorial] = useState(null)
  const [toolInputs, setToolInputs] = useState({})
  const [toolResults, setToolResults] = useState({})
  const [isRunning, setIsRunning] = useState(false)

  const handleRunTool = async (tool) => {
    setIsRunning(true)

    // Simulate API call
    setTimeout(() => {
      let result = ""

      switch (tool.id) {
        case 1: // Markdown converter
          result = `<h1>Hello World</h1>
<p>This is <strong>bold</strong> text and this is <em>italic</em> text.</p>
<ul>
<li>List item 1</li>
<li>List item 2</li>
</ul>`
          break
        case 2: // Password generator
          result = "Kp9#mX2$vL8@nQ5!"
          break
        case 3: // Weather
          result = `{
  "city": "New York",
  "temperature": "22°C",
  "condition": "Partly Cloudy",
  "humidity": "65%",
  "wind": "12 km/h"
}`
          break
        default:
          result = "Tool executed successfully!"
      }

      setToolResults({ ...toolResults, [tool.id]: result })
      setIsRunning(false)
    }, 1500)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <FullWidthSection
  backgroundColor="bg-gradient-to-br from-slate-50 to-gray-100" // ⭐ Move your gradient here ⭐
  className="pt-24 pb-16" // ⭐ Keep any padding/overflow classes for the content container here ⭐
>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full mr-4">
                <Terminal className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
                Code <span className="text-emerald-600">Playground</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              An interactive coding studio where you can explore live code examples, test backend-powered tools, and
              learn from educational snippets. Experience my technical depth through hands-on interaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-emerald-600 text-white px-4 py-2">Live Code Editor</Badge>
              <Badge className="bg-purple-600 text-white px-4 py-2">API Integration</Badge>
              <Badge className="bg-orange-600 text-white px-4 py-2">Interactive Demos</Badge>
              <Badge className="bg-blue-600 text-white px-4 py-2">Educational Content</Badge>
            </div>
          </motion.div>
        </div>
      </FullWidthSection>


      {/* Main Playground */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="snippets" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Snippets
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                API Tools
              </TabsTrigger>
              <TabsTrigger value="tutorials" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Tutorials
              </TabsTrigger>
              <TabsTrigger value="sandbox" className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Sandbox
              </TabsTrigger>
            </TabsList>

            {/* Code Snippets Tab */}
            <TabsContent value="snippets">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {showcaseSnippets.map((snippet, index) => (
                  <motion.div
                    key={snippet.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      className="h-full border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedSnippet(snippet)}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <snippet.icon className="w-8 h-8 text-emerald-600" />
                          <Badge variant="outline" className="border-emerald-600 text-emerald-600">
                            {snippet.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{snippet.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">{snippet.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {snippet.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} className="bg-emerald-600 text-white text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                          <Play className="w-4 h-4 mr-2" />
                          Try Live
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Code Editor Modal */}
              <AnimatePresence>
                {selectedSnippet && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedSnippet(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="p-6 border-b border-slate-200">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-slate-900">{selectedSnippet.title}</h3>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard(selectedSnippet.code)}>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy
                            </Button>
                            <Button variant="outline" size="sm">
                              <RotateCcw className="w-4 h-4 mr-2" />
                              Reset
                            </Button>
                            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                              <Play className="w-4 h-4 mr-2" />
                              Run
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-2 h-96">
                        <div className="p-6 border-r border-slate-200">
                          <h4 className="font-semibold mb-4">Code Editor</h4>
                          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto h-full">
                            <pre>{selectedSnippet.code}</pre>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-semibold mb-4">Output</h4>
                          <div className="bg-slate-50 p-4 rounded-lg h-full overflow-auto">
                            <div className="text-slate-600">Click "Run" to see the output...</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>

            {/* API Tools Tab */}
            <TabsContent value="tools">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {apiTools.map((tool, index) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      className="h-full border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedTool(tool)}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <tool.icon className="w-8 h-8 text-emerald-600" />
                          <Badge className="bg-emerald-600 text-white">
                            <Database className="w-3 h-3 mr-1" />
                            API
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{tool.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">{tool.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tool.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} className="bg-emerald-600 text-white text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                          <Zap className="w-4 h-4 mr-2" />
                          Test Tool
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Tool Testing Modal */}
              <AnimatePresence>
                {selectedTool && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedTool(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="p-6 border-b border-slate-200">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-slate-900">{selectedTool.title}</h3>
                          <Button
                            onClick={() => handleRunTool(selectedTool)}
                            disabled={isRunning}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
                          >
                            {isRunning ? (
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            ) : (
                              <Play className="w-4 h-4 mr-2" />
                            )}
                            {isRunning ? "Running..." : "Run Tool"}
                          </Button>
                        </div>
                        <p className="text-slate-600 mt-2">{selectedTool.description}</p>
                      </div>

                      <div className="grid lg:grid-cols-2 h-96">
                        <div className="p-6 border-r border-slate-200">
                          <h4 className="font-semibold mb-4">Input</h4>
                          {selectedTool.inputType === "textarea" ? (
                            <Textarea
                              placeholder={selectedTool.placeholder}
                              defaultValue={selectedTool.sampleInput}
                              className="h-64 font-mono text-sm"
                            />
                          ) : (
                            <Input
                              placeholder={selectedTool.placeholder}
                              defaultValue={selectedTool.sampleInput}
                              className="mb-4"
                            />
                          )}
                        </div>
                        <div className="p-6">
                          <h4 className="font-semibold mb-4">Output</h4>
                          <div className="bg-slate-900 text-green-400 p-4 rounded-lg h-64 overflow-auto font-mono text-sm">
                            {toolResults[selectedTool.id] ? (
                              <pre>{toolResults[selectedTool.id]}</pre>
                            ) : (
                              <div className="text-slate-500">Click "Run Tool" to see the output...</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>

            {/* Tutorials Tab */}
            <TabsContent value="tutorials">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map((tutorial, index) => (
                  <motion.div
                    key={tutorial.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      className="h-full border-2 border-slate-200 hover:border-emerald-300 transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedTutorial(tutorial)}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <tutorial.icon className="w-8 h-8 text-emerald-600" />
                          <div className="flex gap-2">
                            <Badge variant="outline" className="border-emerald-600 text-emerald-600">
                              {tutorial.difficulty}
                            </Badge>
                            <Badge variant="outline" className="border-slate-400 text-slate-600">
                              {tutorial.readTime}
                            </Badge>
                          </div>
                        </div>
                        <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4">{tutorial.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {tutorial.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} className="bg-emerald-600 text-white text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Read & Run
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Tutorial Modal */}
              <AnimatePresence>
                {selectedTutorial && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedTutorial(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="p-6 border-b border-slate-200">
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-slate-900">{selectedTutorial.title}</h3>
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard(selectedTutorial.content)}>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Code
                          </Button>
                        </div>
                        <p className="text-slate-600 mt-2">{selectedTutorial.description}</p>
                      </div>

                      <div className="p-6">
                        <div className="bg-slate-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-auto">
                          <pre>{selectedTutorial.content}</pre>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>

            {/* Sandbox Tab */}
            <TabsContent value="sandbox">
              <div className="bg-slate-50 rounded-lg p-8 text-center">
                <Terminal className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Full Code Sandbox</h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  A complete development environment where you can write, test, and experiment with full projects. This
                  feature is coming soon with integrated Monaco Editor and live preview capabilities.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Badge className="bg-emerald-600 text-white px-4 py-2">Monaco Editor</Badge>
                  <Badge className="bg-purple-600 text-white px-4 py-2">Live Preview</Badge>
                  <Badge className="bg-orange-600 text-white px-4 py-2">Multi-file Support</Badge>
                  <Badge className="bg-blue-600 text-white px-4 py-2">Version Control</Badge>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in CodePen
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>


      {/* Call to Action */}
      <FullWidthSection backgroundColor="bg-gradient-to-br from-slate-900 to-emerald-900" className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Impressed by what you've seen? Let's discuss how we can bring your ideas to life with cutting-edge
              technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-3">
                Let's Talk About Your Project
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>

              <Link href="/portfolio" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-green hover:bg-white hover:text-emerald-600 px-8 py-3"
                  >
                    View Full Portfolio
                </Button>
              </Link>

            </div>
          </motion.div>
        </div>
      </FullWidthSection>

      {/* <Footer /> */}
      <WhatsAppFloat />
    </div>
  )
}
