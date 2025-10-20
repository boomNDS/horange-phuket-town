import { Card, CardContent } from "@/components/ui/card";
import { Star } from "@/components/icons";
import { FadeIn } from "@/components/ui/fade-in";
import {
  reviewBadges,
  testimonials as testimonialQuotes,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

const stars = Array.from({ length: 5 });

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 bg-gradient-to-br from-copper to-copper/90 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn as="div" className="text-center mb-6 sm:mb-8">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl mb-6 sm:mb-8">
            What Guests Are Saying
          </h2>
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 flex-wrap px-2">
            {reviewBadges.map((badge, index) => (
              <FadeIn
                key={badge.platform}
                as="div"
                delay={index * 120}
                className="flex items-center gap-1.5 sm:gap-2"
              >
                <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                <span className="text-xl sm:text-2xl font-bold">
                  {badge.score}
                </span>
                <span className="text-sm sm:text-base text-white/80">
                  on {badge.platform}
                </span>
              </FadeIn>
            ))}
          </div>
          <p className="text-white/90 text-sm sm:text-lg px-2">
            Over 1,000 happy guests have stayed with us and here's what they
            loved most
          </p>
        </FadeIn>
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto mt-10 sm:mt-16">
          {testimonialQuotes.map((testimonial, index) => (
            <FadeIn
              as="div"
              key={testimonial.author}
              delay={index * 150}
              className="h-full"
            >
              <Card
                className={cn(
                  "bg-white/15 backdrop-blur-sm border-white/30 text-white transition-all duration-300 hover:bg-white/20 hover:scale-[1.03]",
                  "rounded-3xl overflow-visible h-full",
                )}
              >
                <CardContent className="flex h-full flex-col p-5 sm:p-8">
                  <div className="mb-3 sm:mb-4 flex gap-1">
                    {stars.map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-white" />
                    ))}
                  </div>
                  <p className="mb-4 sm:mb-6 flex-1 leading-relaxed text-sm sm:text-lg">
                    {testimonial.quote}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold">
                    — {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
