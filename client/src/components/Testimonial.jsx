"use client"
import { motion } from "framer-motion"
import { Chrome, Star, Quote } from "lucide-react"

const Testimonial = () => {
  const testimonials = [
    {
      name: "Kinesha Philadelphia",
      image: "https://res.cloudinary.com/dfr0omibd/image/upload/v1758211906/testimonial_image_1_wxomsl.png",
      testimonial:
        "The car was well taken care of & reliable. The staff was friendly and communicative. Highly recommend.",
      role: "LA Car Rentals Customer",
      company: "",
      companyLogo: null,
    },
    {
      name: "I Am Teno",
      image: "https://res.cloudinary.com/dfr0omibd/image/upload/v1758211906/testimonial_image_2_b5o0kr.png",
      testimonial:
        "The cars that I've rented are clean and in immaculate condition it's like driving a brand new car plus the customer service is very good I'd recommend LA Car Rental Ltd yo anyone",
      role: "LA Car Rentals Customer ",
      company: "",
      companyLogo: null,
    },
    {
      name: "Daniel Gray",
      image: "https://res.cloudinary.com/dfr0omibd/image/upload/v1758211906/testimony3_sm3iv9.png",
      testimonial:
        "Clean and Reliable cars, I’ll always use LA Rentals. Highly Recommended",
      role: "LA Car Rentals Customer",
      company: "",
      companyLogo: null,
    },
    {
      name: "Denise Weston",
      image: "https://res.cloudinary.com/dfr0omibd/image/upload/v1758212200/testimonial_4_kfhlqm.png",
      testimonial:
        "The service is reliable and affordable and they are very professional with what they do . Hit them up for all your rental needs today.",
      role: "LA Car Rentals Customer ",
      company: "",
      companyLogo: null,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 mb-12 lg:px-10 bg-white">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-4">Reviews from our customers</h2>
      <p className="text-center text-gray-600 mb-2">Based on Google Reviews</p>
      <div className="flex items-center justify-center gap-1 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
        <span className="ml-2 text-gray-600 font-medium">4.9 out of 5</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col p-8"
          >
            <div className="relative mb-4">
              <Quote className="h-6 w-6 text-blue-600 mb-3" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.testimonial}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
              <Chrome className="h-5 w-5 text-gray-400" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Click below to see even more credible customer reviews on Google!</p>
        <a
          href="https://share.google/lint9PZPWDq6lT6xT"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          <Chrome className="h-4 w-4" />
          See more here
        </a>
      </div>
    </div>
  )
}

export default Testimonial
