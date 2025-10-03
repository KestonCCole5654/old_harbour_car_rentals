"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Chrome, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "Lisa Billings",
      image: "https://lh3.googleusercontent.com/a/ACg8ocJ3h5uVbsI2nYNxKWOp1v0h8mWBd9V9YxbyOa2YZkHgxFhWdatL=w72-h72-p-rp-mo-ba3-br100",
      testimonial:
        "I have never rented a car but the cars that are being rented is decent and so is the Car Wash....!!! I go there with dirty vehicle and leave with nice clean smelling good shiny car 🚙",
      role: "Google Business Reviews",
      company: "Old Harbour Car Rentals",
      companyLogo: null,
    },
    {
      name: "Kali Kali",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKfgdD5AYugBfvVXp7Lub-FAuqOoWe8t5myS_wQYclOCcsFTQ=w72-h72-p-rp-mo-ba2-br100",
      testimonial:
        "Exceptional customer service. Vehicles were clean and well maintained. I rented for 3 weeks, it's a must for my next trip.",
      role: "Google Business Reviews",
      company: "Old Harbour Car Rentals",
      companyLogo: null,
    },
    {
      name: "Standard Boss",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXAq5QRvitpiFKm9p6J2Ggsk4iKhj-Je97KZaHy9nTXb_wWzvHWPg=w72-h72-p-rp-mo-br100",
      testimonial:
        "Honestly the best car rental services ever they make sure they rental is clean service and comfortable can't complain the best car rental I ever use thank you",
      role: "Google Business Reviews",
      company: "Old Harbour Car Rentals",
      companyLogo: null,
    },
    {
      name: "Jovaughn O. Burgess",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjXPcYGFeTAgNj8pKRJOKdRWVbwdfwnb_HuyP90HNaYdo0S4ZLuinA=w72-h72-p-rp-mo-br100",
      testimonial:
        "The best car rental and car wash services in the area.",
      role: "Google Business Reviews",
      company: "Old Harbour Car Rentals",
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
    <div className="py-12 px-6 mb-30 bg-gradient-to-br bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-xs mb-3">
              TESTIMONIALS
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-accent">Customers</span> Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-base font-bold text-gray-900">4.9</span>
              <span className="text-gray-600 text-sm">out of 5</span>
            </div>
            <p className="text-gray-600 text-sm">
              Based on <span className="font-semibold text-primary">100+ Google Reviews</span>
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Large Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-6">
                    <div className="bg-gradient-to-br from-accent to-accent-hover p-3 rounded-xl shadow-lg">
                      <Quote className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-6 space-y-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      "{testimonials[currentIndex].testimonial}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="relative">
                        <img
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                        />
                        <div className="absolute -bottom-0.5 -right-0.5 bg-accent p-0.5 rounded-full">
                          <Chrome className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-gray-600 text-xs">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-primary font-semibold text-xs">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white border-2 border-primary hover:bg-primary transition-all duration-300 group shadow-md hover:shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              </button>
              
              {/* Dots Navigation */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex 
                        ? 'w-6 h-2 bg-gradient-to-r from-accent to-accent-hover' 
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white border-2 border-accent hover:bg-accent transition-all duration-300 group shadow-md hover:shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-accent group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* Right Side - Info & CTA */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              {/* Feature Points */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-primary/10">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Why Customers <span className="text-primary">Love</span> Us
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-accent/10 p-1.5 rounded-lg flex-shrink-0">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-0.5">5-Star Service</h4>
                      <p className="text-gray-600 text-xs">Consistently rated excellent by our customers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1.5 rounded-lg flex-shrink-0">
                      <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 012 0v4a1 1 0 11-2 0V9zm1-4a1 1 0 100 2 1 1 0 000-2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-0.5">Clean & Well-Maintained</h4>
                      <p className="text-gray-600 text-xs">All vehicles are spotless and in top condition</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent/10 p-1.5 rounded-lg flex-shrink-0">
                      <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-0.5">Exceptional Customer Service</h4>
                      <p className="text-gray-600 text-xs">Friendly staff ready to help you every step</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary via-primary to-hover rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent/20 rounded-full -ml-10 -mb-10"></div>
                
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    Join Our Happy Customers!
                  </h3>
                  <p className="text-white/90 mb-4 text-sm">
                    Read more authentic reviews from our satisfied customers on Google.
                  </p>
                  <a
                    href="https://share.google/CmNXpr2YHX0BHWrUV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary hover:bg-accent hover:text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <Chrome className="h-4 w-4" />
                    Read All Reviews
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial