
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Article, type ArticleCategory } from "@/types";
import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";
import { format } from "date-fns";

const articles: Article[] = [
  {
    title: "Understanding Large Language Models",
    description: "A deep dive into how LLMs work and their impact on modern technology",
    category: "AI",
    date: "2024-03-15",
    readTime: "5 min",
    image: "/placeholder.svg",
    url: "https://example.com/llm-article"
  },
  {
    title: "Building Responsive Layouts with Tailwind CSS",
    description: "Learn how to create beautiful, responsive designs using Tailwind CSS",
    category: "Web Development",
    date: "2024-03-14",
    readTime: "8 min",
    image: "/placeholder.svg",
    url: "https://example.com/tailwind-article"
  },
  {
    title: "Top Developer Tools for 2024",
    description: "Essential tools and utilities that every developer should know about",
    category: "Tools",
    date: "2024-03-13",
    readTime: "6 min",
    image: "/placeholder.svg",
    url: "https://example.com/tools-article"
  },
  {
    title: "Getting Started with React Server Components",
    description: "A comprehensive guide to implementing React Server Components",
    category: "Tutorials",
    date: "2024-03-12",
    readTime: "10 min",
    image: "/placeholder.svg",
    url: "https://example.com/rsc-tutorial"
  }
];

const categoryColors: Record<ArticleCategory, string> = {
  'AI': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  'Web Development': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  'Tools': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  'Tutorials': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
};

export const Articles = () => {
  return (
    <section className="py-20 px-4 bg-background" id="articles" aria-labelledby="articles-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-blue inline-block dark:bg-blue-400/30 dark:text-blue-300">
            Latest Articles
          </span>
          <h2 id="articles-heading" className="text-3xl font-bold mt-4">Tech Insights & Tutorials</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest in technology, development practices, and tools
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="space-y-4">
                  <div className="aspect-video relative rounded-md overflow-hidden bg-muted">
                    <img
                      src={article.image}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={categoryColors[article.category]}
                  >
                    {article.category}
                  </Badge>
                  <div className="space-y-1">
                    <CardTitle className="line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {article.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <time dateTime={article.date}>
                      {format(new Date(article.date), 'MMM d, yyyy')}
                    </time>
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Read more
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
