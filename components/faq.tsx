import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/ui/fade-in";
import { faqItems } from "@/lib/site-data";

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-muted/30"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn as="div" className="text-center mb-12 sm:mb-16" direction="up">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl text-navy mb-4 sm:mb-6">
            FAQ
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl">
            Everything you need to know about your stay
          </p>
        </FadeIn>
        <FadeIn as="div" direction="up" delay={120}>
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3 sm:space-y-4"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index + 1}`}
                className="border rounded-xl px-4 sm:px-6 bg-white shadow-md"
              >
                <AccordionTrigger className="text-left text-base sm:text-xl font-semibold hover:text-copper transition-colors py-4 sm:py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-lg pt-1 pb-4 sm:pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
