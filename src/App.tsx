/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Coffee, 
  Clock, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight, 
  Star,
  Menu as MenuIcon,
  X
} from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-oat border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Coffee className="text-forest w-6 h-6" />
            <span className="font-serif text-2xl font-black tracking-tighter uppercase text-espresso">RostaCoffee</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-[13px] font-bold uppercase tracking-widest hover:text-forest transition-colors">About</a>
            <a href="#menu" className="text-[13px] font-bold uppercase tracking-widest hover:text-forest transition-colors">Menu</a>
            <a href="#testimonials" className="text-[13px] font-bold uppercase tracking-widest hover:text-forest transition-colors">Reviews</a>
            <a href="#location" className="text-[13px] font-bold uppercase tracking-widest hover:text-forest transition-colors">Location</a>
            <button className="bg-forest text-white px-6 py-2 rounded-none text-[13px] font-bold uppercase tracking-widest hover:bg-espresso transition-all duration-300">
              Order Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-espresso p-2">
              {isOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-oat border-b border-espresso/10 px-4 pt-2 pb-6 flex flex-col gap-4"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</a>
          <a href="#menu" onClick={() => setIsOpen(false)} className="text-lg font-medium">Menu</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-lg font-medium">Reviews</a>
          <a href="#location" onClick={() => setIsOpen(false)} className="text-lg font-medium">Location</a>
          <button className="bg-espresso text-oat px-6 py-3 rounded-full text-lg font-medium">
            Order Now
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070" 
          alt="Cafe Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-espresso/60" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-forest/30 text-oat text-sm font-bold mb-6 backdrop-blur-sm border border-forest/30 uppercase tracking-widest">
            Artisanal Roastery & Cafe
          </span>
          <h1 className="font-serif text-6xl md:text-[80px] font-black text-white leading-[0.9] mb-6 uppercase">
            The Perfect <br />
            Morning Ritual.
          </h1>
          <p className="text-lg md:text-xl text-oat/90 mb-10 leading-relaxed font-normal max-w-md">
            Experience the journey from farm to cup. Our artisanal roasting process brings out the unique soul of every bean, crafted for those who appreciate the finer details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu" 
              className="group bg-forest text-white px-8 py-4 rounded-none text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-espresso transition-all duration-300"
            >
              View Menu
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="bg-transparent border border-white text-white px-8 py-4 rounded-none text-sm font-bold uppercase tracking-widest flex items-center justify-center hover:bg-white hover:text-espresso transition-all duration-300"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-oat/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-oat/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1974" 
                alt="Coffee Roasting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-forest rounded-3xl p-6 flex flex-col justify-end text-oat shadow-xl hidden lg:flex">
              <span className="text-4xl font-serif font-bold mb-2">12+</span>
              <span className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Roasting Excellence</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight italic">
              Crafting Soul in <br />
              Every Roast.
            </h2>
            <div className="space-y-6 text-espresso/80 text-lg leading-relaxed">
              <p>
                At RostaCoffee, we believe roasting is an art form. Our journey begins at the source, partnering with sustainable farms across the coffee belt to select only the finest specialty-grade beans.
              </p>
              <p>
                Each batch is small-batch roasted in our custom-built artisanal roaster. We monitor temperature and airflow with surgical precision to unlock the complex flavor profiles—from bright citrus notes to deep, chocolatey undertones.
              </p>
              <p>
                It's not just coffee; it's a commitment to quality that you can taste in every single cup we serve.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-forest font-serif text-2xl font-bold">100%</span>
                <span className="text-sm uppercase tracking-wider font-semibold text-espresso/50">Ethically Sourced</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-forest font-serif text-2xl font-bold">Small Batch</span>
                <span className="text-sm uppercase tracking-wider font-semibold text-espresso/50">Roasted Daily</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ProductProps {
  title: string;
  price: string;
  description: string;
  image: string;
  delay: number;
  key?: React.Key;
}

const ProductCard = ({ title, price, description, delay }: ProductProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="group border-b border-dashed border-espresso/30 pb-6"
  >
    <div className="flex justify-between items-start mb-2">
      <div className="product-info">
        <h3 className="text-base font-bold uppercase tracking-wider">{title}</h3>
        <p className="text-espresso/60 text-[13px] mt-1">
          {description}
        </p>
      </div>
      <div className="font-serif font-bold text-lg">{price}</div>
    </div>
  </motion.div>
);

const FeaturedProducts = () => {
  const products = [
    {
      title: "Signature Espresso",
      price: "$4.50",
      description: "Our house blend featuring notes of dark chocolate, toasted hazelnut, and a smooth caramel finish.",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=80&w=1974",
    },
    {
      title: "Cold Brew Blend",
      price: "$5.75",
      description: "Steeped for 18 hours to achieve a bold, low-acid profile with hints of black cherry and vanilla.",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=1974",
    },
    {
      title: "Fresh Pastries",
      price: "$3.95",
      description: "Hand-crafted daily by our local bakers. Flaky, buttery, and the perfect companion to your coffee.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=2072",
    }
  ];

  return (
    <section id="menu" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl italic border-b border-espresso pb-4 mb-8">Featured Selection</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
              delay={index * 0.2} 
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-forest font-bold hover:gap-4 transition-all border-b-2 border-forest/20 pb-1">
            View Full Menu <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Coffee Enthusiast",
      text: "The best espresso I've had outside of Italy. The atmosphere is so cozy, it's my favorite place to write.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Local Resident",
      text: "RostaCoffee has become my daily ritual. Their cold brew is unmatched, and the staff is incredibly welcoming.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Food Blogger",
      text: "A true gem for artisanal coffee lovers. You can really taste the difference in their small-batch roasting.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-oat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-oat-dark p-10 rounded-lg relative"
            >
              <div className="absolute -top-4 left-6 font-serif text-6xl text-forest opacity-20">“</div>
              <p className="text-base italic mb-6 text-espresso/80 leading-relaxed">
                {review.text}
              </p>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-forest">— {review.name}, {review.role}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="location" className="bg-espresso text-oat py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-[10px] uppercase tracking-[2px] text-oat/50 mb-3">Location</div>
            <div className="text-sm leading-relaxed">
              123 Artisanal Way,<br />
              Roast District, NY 10001
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[2px] text-oat/50 mb-3">Operating Hours</div>
            <div className="text-sm leading-relaxed">
              Mon — Fri: 06:00 - 18:00<br />
              Sat — Sun: 08:00 - 16:00
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[2px] text-oat/50 mb-3">Follow Us</div>
            <div className="text-sm leading-relaxed">
              @RostaCoffee_NY<br />
              #TheMorningRitual
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-forest/20 selection:text-forest">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProducts />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
