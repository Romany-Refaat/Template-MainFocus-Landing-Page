import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "MainFocus has transformed how I manage my work day. The AI insights are incredibly helpful.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "The gamification aspect makes staying focused actually fun. I've improved my productivity by 40%.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Competing with friends keeps me motivated. Best productivity tool I've ever used.",
    rating: 5
  },
  {
    name: "David Wilson",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "The focus metrics have helped our team achieve unprecedented productivity levels.",
    rating: 5
  },
  {
    name: "Lisa Zhang",
    role: "UX Researcher",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Finally found a tool that makes productivity tracking enjoyable and effective.",
    rating: 5
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scroll = () => {
      scrollElement.scrollTo({
        left: scrollElement.scrollLeft + 1,
        behavior: 'smooth'
      });

      if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
        scrollElement.scrollTo({ left: 0 });
      }
    };

    const intervalId = setInterval(scroll, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="testimonials" className="bg-background min-w-full py-24" ref={ref}>
      <div className="container mx-auto min-w-full">
        <motion.h2 
          className="text-4xl font-bold text-center text-text mb-16 mx-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Loved by <span className="text-secondary">Professionals</span>
        </motion.h2>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            // style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            <div className="flex gap-8 animate-scroll">
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-96 bg-primary p-6 rounded-xl "
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-4 italic">{testimonial.quote}</p>
                  <div className="text-[#FFD700] text-sm font-medium">
                    {testimonial.rating}/5 - Excellent
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}