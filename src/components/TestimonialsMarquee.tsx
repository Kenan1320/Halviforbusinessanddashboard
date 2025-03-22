
import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    text: "These guys at Halvi saved my late-night craving. I just tapped Halvi Eats, and boom — hot chicken shawarma at my door. Never using another food app again.",
    author: {
      name: "Zayd Rahman",
      role: "Halvi Eats Customer",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "Opened my shop on Halvi Local, and I'm honestly blown away. Orders came in faster than I expected. It feels good to be seen by my own community.",
    author: {
      name: "Fatima Noor",
      role: "Owner of Noor's Market",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "Halvi Rides got me to the masjid on time for Jummah when Uber failed me. The driver even greeted me with salaam. Respect.",
    author: {
      name: "Bilal Khan",
      role: "Halvi Rides Customer",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "We've been selling hijabs through Halvi Mall for a month now, and I love how simple everything is. The dashboard, the orders, the support — so smooth.",
    author: {
      name: "Aisha Mahmoud",
      role: "Founder of Haya Threads",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "I ordered some dates from a local Halvi store, and they arrived fresh and packed with care. This platform actually values quality.",
    author: {
      name: "Iman Siddiqi",
      role: "Halvi Local Customer",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "Halvi connected me with a Muslim therapist who got me. No awkwardness, no need to explain everything. Just healing.",
    author: {
      name: "Khadija Ibrahim",
      role: "Halvi Professionals (Client of Wellness with Ibtisam)",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "Finally an app that makes it easy for small halal shops like ours to compete. Halvi has given our grocery store a second life.",
    author: {
      name: "Samira Bint Yusuf",
      role: "Owner of Barakah Grocery",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "As a busy mom, Halvi Eats is my go-to. I can trust what's halal, the variety is solid, and delivery's always quick. Game-changer.",
    author: {
      name: "Lina Chowdhury",
      role: "Halvi Eats Customer",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "Since joining Halvi Professionals, I've connected with several families in need of support. The platform makes it easy to focus on care, not just clicks.",
    author: {
      name: "Nadirah Saleem",
      role: "Licensed Family Counselor at Roots of Rahma",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "I didn't expect Halvi Rides to be this smooth. The UI is clean, the drivers are respectful, and I always feel safe.",
    author: {
      name: "Reem Al-Farsi",
      role: "Halvi Rides Customer",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "I was skeptical at first, but Halvi Mall got our abaya collection in front of the right audience. Sales are up and the traffic is real.",
    author: {
      name: "Noura Saleh",
      role: "Owner of Nura Abayas",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "Discovered so many hidden halal gems near me through Halvi Local. Feels like my own halal Yelp. Love it.",
    author: {
      name: "Tariq Aziz",
      role: "Halvi Local Customer",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "I've had new clients almost every week since I joined Halvi Pro. Muslim families are looking for culturally aware support, and this is the space for it.",
    author: {
      name: "Dr. Hanan Kareem",
      role: "Muslim Therapist at Healing Circles",
      avatar: "/placeholder.svg"
    }
  },
  {
    text: "My wife and I found a faith-based counselor through Halvi and it honestly changed everything. Alhamdulillah for this platform.",
    author: {
      name: "Yusuf Siddique",
      role: "Halvi Professionals Client",
      avatar: "/placeholder.svg"
    }
  }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className={cn(
      "flex flex-col rounded-lg border-t",
      "bg-gradient-to-b from-gray-100/50 to-gray-50/10 dark:from-gray-800/50 dark:to-gray-900/10",
      "p-5 text-start sm:p-6",
      "hover:from-gray-100/60 hover:to-gray-50/20 dark:hover:from-gray-800/60 dark:hover:to-gray-900/20",
      "max-w-[380px] sm:max-w-[400px] mx-3 h-[240px]",
      "transition-colors duration-300"
    )}>
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border border-halvi-200 dark:border-halvi-800">
          <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-gray-900 dark:text-gray-100">
            {testimonial.author.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.author.role}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-gray-700 dark:text-gray-300 line-clamp-5">
        "{testimonial.text}"
      </p>
    </div>
  );
}

export default function TestimonialsMarquee() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            What Our Users Are Saying
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Join thousands of satisfied customers and businesses in the Halvi community
          </p>
        </div>

        <div className="relative">
          {/* First row - left to right */}
          <div className="flex w-full overflow-hidden">
            <motion.div 
              className="flex gap-5 animate-none"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 40,
                ease: "linear"
              }}
            >
              {testimonials.slice(0, 7).map((testimonial, idx) => (
                <TestimonialCard key={`row1-${idx}`} testimonial={testimonial} />
              ))}
              {testimonials.slice(0, 7).map((testimonial, idx) => (
                <TestimonialCard key={`row1-repeat-${idx}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
          
          {/* Second row - right to left */}
          <div className="flex w-full overflow-hidden mt-8">
            <motion.div 
              className="flex gap-5 animate-none"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 40,
                ease: "linear"
              }}
            >
              {testimonials.slice(7).map((testimonial, idx) => (
                <TestimonialCard key={`row2-${idx}`} testimonial={testimonial} />
              ))}
              {testimonials.slice(7).map((testimonial, idx) => (
                <TestimonialCard key={`row2-repeat-${idx}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-white to-transparent dark:from-gray-950 dark:to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-white to-transparent dark:from-gray-950 dark:to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}
