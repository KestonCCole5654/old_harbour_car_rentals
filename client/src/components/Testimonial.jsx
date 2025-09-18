"use client"
import { motion } from "framer-motion"
import { Star, StarIcon } from 'lucide-react'
import testimony1 from '../assets/testimonial_image_1.png'
import testimony2 from '../assets/testimonial_image_2.png'
import testimony3 from '../assets/testimony3.png'

const Testimonial = () => {
  const testimonials = [
    {
      name: "Kinesha Philadelphia",
      image: testimony1,
      testimonial:
        "The car was well taken care of & reliable. The staff was friendly and communicative. Highly recommend.",
      rating: 5,
    },
    {
      name: "I Am Teno",
      image: testimony2,
      testimonial:
        "The cars that I've rented are clean and in immaculate condition it's like driving a brand new car plus the customer service is very good I'd recommend LA Car Rental Ltd yo anyone",
      rating: 4,
    },
    {
      name: "Daniel Gray",

      image: testimony3,
      testimonial:
        "Clean and Reliable cars, I’ll always use LA Rentals. Highly Recommended",
      rating: 5,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 mb-12 lg:px-10 bg-gray-50">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12">Reviews from our customers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="bg-white rounded-2xl shadow-lg flex flex-col h-full overflow-hidden"
          >
            <div className="p-8 pb-4 relative">
              <div className="text-6xl text-indigo-600 font-serif leading-none mb-4">"</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{testimonial.testimonial}</p>
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center mt-auto">
              <div className="w-16 h-16 rounded-full bg-gray-200 -mb-8 overflow-hidden border-4 border-white z-10 relative">
                <img
                  className="w-full h-full object-cover"
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                />
              </div>
              <div className="bg-indigo-600 w-full pt-10 pb-6 text-center">
                <p className="text-indigo-200 text-sm">{testimonial.company}</p>
                <p className="text-white font-semibold text-lg">{testimonial.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
