
import { type Article } from "@/types";
import { ArrowLeft } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const articles: Article[] = [
  {
    title: "Introducing the Intelligence Age",
    description: "A comprehensive look at how AI is shaping our future. We explore the transformative impact of artificial intelligence across industries, examining how it's revolutionizing everything from healthcare to education. This in-depth analysis covers current developments and future predictions from leading experts in the field.",
    category: "AI",
    date: "2024-02-09",
    readTime: "5 min read",
    image: "/lovable-uploads/463ea0f7-ee83-4eee-900e-0826287dd109.png",
    url: "/articles/introducing-the-intelligence-age",
    slug: "introducing-the-intelligence-age"
  },
  {
    title: "OpenAI and the CSU system bring AI to 500,000 students & faculty",
    description: "Revolutionizing education through AI integration. This groundbreaking partnership between OpenAI and the California State University system marks a significant milestone in educational technology. Learn about the implementation strategy, expected outcomes, and what this means for the future of higher education.",
    category: "AI",
    date: "2024-02-04",
    readTime: "3 min read",
    image: "/placeholder.svg",
    url: "/articles/openai-csu-ai-education-partnership",
    slug: "openai-csu-ai-education-partnership"
  },
  {
    title: "OpenAI o3-mini System Card",
    description: "Technical insights into OpenAI's latest system. A detailed technical analysis of the o3-mini system, including architecture details, performance metrics, and practical applications. Perfect for developers and technical professionals looking to understand the system's capabilities.",
    category: "Tools",
    date: "2024-01-31",
    readTime: "2 min read",
    image: "/placeholder.svg",
    url: "/articles/openai-o3-mini-system-card",
    slug: "openai-o3-mini-system-card"
  },
  {
    title: "Introducing ChatGPT Gov",
    description: "AI solutions for government services. Discover how ChatGPT is being adapted for government use, including enhanced security features, compliance measures, and specific use cases in public service. Learn about the potential impact on government efficiency and citizen services.",
    category: "AI",
    date: "2024-01-28",
    readTime: "6 min read",
    image: "/placeholder.svg",
    url: "/articles/introducing-chatgpt-gov",
    slug: "introducing-chatgpt-gov"
  }
];

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/tech-insights" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | Tech Insights & Tutorials</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/tech-insights" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Articles
            </Link>
          </div>

          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
          </header>

          <div className="rounded-lg overflow-hidden mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {article.description}
            </p>
            
            {/* Additional article content would go here */}
            <div className="mt-8 space-y-6">
              <p>This is a placeholder for the full article content. In a real implementation, this would contain the complete article text, formatted with proper headings, paragraphs, and other content elements.</p>
              
              <p>The article would include relevant examples, code snippets if applicable, and detailed explanations of the concepts discussed.</p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
