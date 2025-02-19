
import { type Article } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const articles: Article[] = [
  {
    title: "Introducing the Intelligence Age",
    description: "A comprehensive look at how AI is shaping our future. We explore the transformative impact of artificial intelligence across industries, examining how it's revolutionizing everything from healthcare to education. This in-depth analysis covers current developments and future predictions from leading experts in the field.",
    category: "AI",
    date: "2024-02-09",
    readTime: "5 min read",
    image: "/lovable-uploads/463ea0f7-ee83-4eee-900e-0826287dd109.png",
    url: "https://example.com/intelligence-age"
  },
  {
    title: "OpenAI and the CSU system bring AI to 500,000 students & faculty",
    description: "Revolutionizing education through AI integration. This groundbreaking partnership between OpenAI and the California State University system marks a significant milestone in educational technology. Learn about the implementation strategy, expected outcomes, and what this means for the future of higher education.",
    category: "AI",
    date: "2024-02-04",
    readTime: "3 min read",
    image: "/placeholder.svg",
    url: "https://example.com/openai-csu"
  },
  {
    title: "OpenAI o3-mini System Card",
    description: "Technical insights into OpenAI's latest system. A detailed technical analysis of the o3-mini system, including architecture details, performance metrics, and practical applications. Perfect for developers and technical professionals looking to understand the system's capabilities.",
    category: "Tools",
    date: "2024-01-31",
    readTime: "2 min read",
    image: "/placeholder.svg",
    url: "https://example.com/o3-mini"
  },
  {
    title: "Introducing ChatGPT Gov",
    description: "AI solutions for government services. Discover how ChatGPT is being adapted for government use, including enhanced security features, compliance measures, and specific use cases in public service. Learn about the potential impact on government efficiency and citizen services.",
    category: "AI",
    date: "2024-01-28",
    readTime: "6 min read",
    image: "/placeholder.svg",
    url: "https://example.com/chatgpt-gov"
  }
];

const TechInsights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Tech Insights & Tutorials</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive deep into the latest technological advancements, tutorials, and industry insights
            </p>
          </header>

          <div className="grid gap-12">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-[2fr,3fr] gap-6">
                  <div className="relative h-[300px] md:h-[400px]">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-8 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h2 className="text-3xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg mb-6 flex-grow">
                      {article.description}
                    </p>
                    
                    <a 
                      href={article.url}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechInsights;
