
import { Card } from "./ui/card";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content:
      "John is an exceptional engineer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupX",
    content:
      "Working with John was a pleasure. His technical expertise and ability to communicate complex concepts clearly made our project a success.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Engineering Lead at InnovateCo",
    content:
      "John's dedication to writing clean, maintainable code and his collaborative approach make him an invaluable team member.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&auto=format&fit=crop",
  },
];

export const Reviews = () => {
  return (
    <section className="py-20 px-4" id="reviews">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-gray inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold mt-4">Client Reviews</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={review.name}
              className="p-6 backdrop-blur-sm bg-white/50 hover:bg-white/80 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{review.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
