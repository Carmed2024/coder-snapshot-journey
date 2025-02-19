
import { type Article, type ArticleCategory } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles: Article[] = [
  {
    title: "Introducing the Intelligence Age",
    description: "A comprehensive look at how AI is shaping our future",
    category: "AI",
    date: "2024-02-09",
    readTime: "5 min read",
    image: "/lovable-uploads/463ea0f7-ee83-4eee-900e-0826287dd109.png",
    url: "/articles/introducing-the-intelligence-age",
    slug: "introducing-the-intelligence-age"
  },
  {
    title: "OpenAI and the CSU system bring AI to 500,000 students & faculty",
    description: "Revolutionizing education through AI integration",
    category: "AI",
    date: "2024-02-04",
    readTime: "3 min read",
    image: "/placeholder.svg",
    url: "/articles/openai-csu-ai-education-partnership",
    slug: "openai-csu-ai-education-partnership"
  },
  {
    title: "OpenAI o3-mini System Card",
    description: "Technical insights into OpenAI's latest system",
    category: "Tools",
    date: "2024-01-31",
    readTime: "2 min read",
    image: "/placeholder.svg",
    url: "/articles/openai-o3-mini-system-card",
    slug: "openai-o3-mini-system-card"
  },
  {
    title: "Introducing ChatGPT Gov",
    description: "AI solutions for government services",
    category: "AI",
    date: "2024-01-28",
    readTime: "6 min read",
    image: "/placeholder.svg",
    url: "/articles/introducing-chatgpt-gov",
    slug: "introducing-chatgpt-gov"
  }
];

export const Articles = () => {
  return (
    <section className="py-20 px-4 bg-background" id="articles" aria-labelledby="articles-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="articles-heading" className="text-3xl font-bold mt-4">Tech Insights & Tutorials</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest in AI and technology developments
          </p>
          <Link 
            to="/tech-insights"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mt-4"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.slice(0, 4).map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="sm:w-[300px] h-[200px] sm:h-full relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {article.description}
                  </p>
                  
                  <Link 
                    to={`/articles/${article.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mt-auto"
                  >
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
