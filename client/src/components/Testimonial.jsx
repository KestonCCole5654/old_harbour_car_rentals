"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Chrome, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "Chenelle Dean",
      image: "https://res.cloudinary.com/dfr0omibd/image/upload/v1758666460/unnamed_1_rswavz.png",
      testimonial:
        "Great customer service. Easy to book as a non resident. They meet you where you are located. Very responsive.",
      role: "Google Business Reviews",
      company: "Shelmur Car Rentals",
      companyLogo: null,
    },
    {
      name: "Maunie Williams",
      image: "https://res.cloudinary.com/dfr0omibd/image/upload/v1758666460/unnamed_jpwonq.png",
      testimonial:
        "Most recommended 💯",
      role: "Google Business Reviews",
      company: "Shelmur Car Rentals",
      companyLogo: null,
    },
    
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What our customers say
        </h2>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
          <span className="ml-2 text-gray-600 font-medium">4.9 out of 5</span>
        </div>
        <p className="text-gray-600">Based on Google Reviews</p>
      </div>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
        >
          <ChevronLeft className="h-6 w-6 text-primary" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
        >
          <ChevronRight className="h-6 w-6 text-primary" />
        </button>

        {/* Testimonial Card */}
        <div className="relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gray-50 rounded-3xl p-12 text-center shadow-sm"
            >
              {/* Quote */}
              <div className="mb-8">
                <Quote className="h-8 w-8 text-hover mx-auto mb-6 opacity-60" />
                <p className="text-2xl leading-relaxed text-gray-800 font-medium max-w-3xl mx-auto">
                  "{testimonials[currentIndex].testimonial}"
                </p>
              </div>

              {/* Profile */}
              <div className="flex flex-col items-center">
                <img
                  className="w-16 h-16 rounded-full object-cover mb-4 ring-4 ring-white shadow-lg"
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                />
                <div>
                  <p className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-6 text-lg">
          Click below to see even more credible customer reviews on Google!
        </p>
        <a
          href="https://www.google.com/search?q=shelmur+car+rental&sca_esv=709f3fcfd06fca0b&hl=en-JM&sxsrf=AE3TifNAERx1WT_8f6lXuIrp3gFf1nwCjQ%3A1758667726437&ei=ziPTaOS4GvGFwbkP2Yix2Qw&ved=0ahUKEwjk1_Lo---PAxXxQjABHVlELMsQ4dUDCBA&uact=5&oq=shelmur+car+rental&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnNoZWxtdXIgY2FyIHJlbnRhbDIHECMYsAMYJzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYR0jkCFAAWABwAXgBkAEAmAEAoAEAqgEAuAEDyAEAmAIBoAIDmAMAiAYBkAYJkgcBMaAHALIHALgHAMIHAzAuMcgHAg&sclient=gws-wiz-serp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary hover:bg-hover text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Chrome className="h-5 w-5" />
          See more reviews
        </a>
      </div>
    </div>
  )
}

export default Testimonial