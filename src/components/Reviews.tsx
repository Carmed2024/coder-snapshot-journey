import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content:
      "John is an exceptional engineer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupX",
    content:
      "Working with John was a pleasure. His technical expertise and ability to communicate complex concepts clearly made our project a success.",
  },
  {
    name: "Emily Rodriguez",
    role: "Engineering Lead at InnovateCo",
    content:
      "John's dedication to writing clean, maintainable code and his collaborative approach make him an invaluable team member.",
  },
  {
    name: "David Smith",
    role: "Senior Developer at TechGiant",
    content:
      "An outstanding collaborator with deep technical knowledge. John's ability to solve complex problems while maintaining code quality is remarkable.",
  },
  {
    name: "Lisa Wang",
    role: "Project Lead at InnovateHub",
    content:
      "John's technical expertise and dedication to quality make him a standout engineer. His collaborative approach ensures project success.",
  },
];

const pastelColors = [
  "bg-[#F2FCE2]", // Soft Green
  "bg-[#FEF7CD]", // Soft Yellow
  "bg-[#FEC6A1]", // Soft Orange
  "bg-[#E5DEFF]", // Soft Purple
  "bg-[#FFDEE2]", // Soft Pink
  "bg-[#FDE1D3]", // Soft Peach
  "bg-[#D3E4FD]", // Soft Blue
];

const autoScrollPlugin = (delay = 4000) => {
  let rafId = 0;
  let timer = 0;

  const play = (emblaApi) => {
    stop();
    timer = window.setTimeout(() => {
      if (!emblaApi.canScrollNext()) {
        emblaApi.scrollTo(0);
      } else {
        emblaApi.scrollNext();
      }
      rafId = window.requestAnimationFrame(() => play(emblaApi));
    }, delay);
  };

  const stop = () => {
    window.clearTimeout(timer);
    window.cancelAnimationFrame(rafId);
  };

  const setup = (emblaApi) => {
    play(emblaApi);
    emblaApi.on('pointerDown', stop);
    emblaApi.on('init', () => play(emblaApi));
  };

  const destroy = () => {
    stop();
  };

  return (emblaRoot) => {
    return {
      setup,
      destroy,
    };
  };
};

export const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 }
      }
    },
    [autoScrollPlugin()]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 px-4" id="reviews">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-gray inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold mt-4">Client Reviews</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {reviews.map((review, index) => (
                <div 
                  key={review.name}
                  className="flex-[0_0_90%] min-w-0 md:flex-[0_0_40%] pl-4"
                >
                  <Card
                    className={`h-full p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                      pastelColors[index % pastelColors.length]
                    }`}
                  >
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{review.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {review.role}
                        </p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {review.content}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous review</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next review</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
