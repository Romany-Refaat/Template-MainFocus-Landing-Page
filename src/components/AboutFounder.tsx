import React from 'react';
import { motion } from 'framer-motion';

export default function AboutFounder() {
  return (
    <section className="bg-primary py-24" id={`about`}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-7 mb-[10px]">
            <img
              src="/romany-cristams.jpg"
              alt="Romany"
              className="max-w-52 md:w-full aspect-square rounded-full sm:rounded object-cover"
            />
            <div className="text-center md:text-left flex flex-col gap-3">
              <h2 className="text-xl font-medium text-text">
                Hey, I'm Romany 👋
              </h2>
              <p className="text-text-muted leading-relaxed">
                In 2024, I started building{' '}
                <span className="text-text">
                  <a href="/main-focus">MainFocus</a>
                </span>
                —a platform designed to help people like you focus on what truly
                matters and get through those tough tasks faster and more
                efficiently.
              </p>
            </div>
          </div>

          <div className="prose prose-invert mx-auto mt-8">
            <p className="text-text-muted leading-relaxed">
              Like many of us, I've faced the struggles of managing overwhelming
              workloads and staying productive. I've been there—working late
              nights, balancing multiple responsibilities, and pushing through
              tough projects. That's when I knew I needed a better way to stay
              focused and get things done.
            </p>
            <p className="text-text-muted leading-relaxed mt-4 font-medium">
              So I built MainFocus for 3 reasons:
            </p>
            <ol className="text-text-muted list-decimal text-left pl-6 mt-4 space-y-2">
              <li>
                <span className="text-text">Reduce friction</span> with my phone
                during focus sessions, helping me stay in the zone.
              </li>
              <li>
                <span className="font-bold">Stay in the zone</span> and crush my
                goals with zero distractions.
              </li>
              <li>
                <span className="text-text">Simplify workflows,</span> making it
                easier to achieve meaningful outcomes effortlessly.
              </li>
            </ol>
            <p className="text-text-muted leading-relaxed mt-4">
              MainFocus is for those who hustle hard and are ready to take
              control of their productivity. Let's work smarter, not harder,
              together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
