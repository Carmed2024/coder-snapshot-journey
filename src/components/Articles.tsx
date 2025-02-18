
import { type Article, type ArticleCategory } from "@/types";
import { motion } from "framer-motion";

const articles: Article[] = [
  {
    title: "Introducing the Intelligence Age",
    description: "A comprehensive look at how AI is shaping our future",
    category: "AI",
    date: "2024-02-09",
    readTime: "5 min read",
    image: "/lovable-uploads/463ea0f7-ee83-4eee-900e-0826287dd109.png",
    url: "https://example.com/intelligence-age"
  },
  {
    title: "OpenAI and the CSU system bring AI to 500,000 students & faculty",
    description: "Revolutionizing education through AI integration",
    category: "AI",
    date: "2024-02-04",
    readTime: "3 min read",
    image: "/placeholder.svg",
    url: "https://example.com/openai-csu"
  },
  {
    title: "OpenAI o3-mini System Card",
    description: "Technical insights into OpenAI's latest system",
    category: "Tools",
    date: "2024-01-31",
    readTime: "2 min read",
    image: "/placeholder.svg",
    url: "https://example.com/o3-mini"
  },
  {
    title: "Introducing ChatGPT Gov",
    description: "AI solutions for government services",
    category: "AI",
    date: "2024-01-28",
    readTime: "6 min read",
    image: "/placeholder.svg",
    url: "https://example.com/chatgpt-gov"
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
        </header>

        <div className="grid grid-cols-1 gap-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group"
            >
              <a 
                href={article.url}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:opacity-90 transition-opacity"
              >
                <div className="order-2 md:order-1 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {article.description}
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <img
                      src={article.image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
