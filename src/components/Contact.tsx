
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-soft-gray" id="contact" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 animate-fade-up">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-blue inline-block">
            Get in Touch
          </span>
          <h2 id="contact-heading" className="text-3xl font-bold mt-4">Contact Me</h2>
        </header>
        <Card className="max-w-xl mx-auto p-6 backdrop-blur-sm bg-white/50">
          <form className="space-y-6">
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" aria-required="true" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  aria-required="true"
                />
              </div>
            </fieldset>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[120px]"
                aria-required="true"
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
