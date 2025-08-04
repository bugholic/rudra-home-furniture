import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Kumar Furniture Mart, Delhi',
      rating: 5,
      text: 'Been working with Rudra Home Furniture for 3 years now. Their wholesale prices are unbeatable and quality is consistently excellent. My customers love their products!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Sharma',
      company: 'Home Decor Solutions, Mumbai',
      rating: 5,
      text: 'Rudra has been our primary supplier for home appliances. Their delivery is always on time and customer service is outstanding. Highly recommend for bulk orders.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Amit Patel',
      company: 'Patel Enterprises, Ahmedabad',
      rating: 5,
      text: 'The variety of products and competitive pricing makes Rudra our go-to supplier. Their mandir collection is particularly impressive and sells really well.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sunita Reddy',
      company: 'Modern Living, Hyderabad',
      rating: 5,
      text: 'Professional service and genuine wholesale prices. The furniture quality exceeds expectations and our partnership has grown our business significantly.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Retailers' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Cities Served' }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of retailers and businesses across India
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-800 font-medium text-sm">{testimonial.company}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-blue-200 flex-shrink-0" />
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold">
            Become Our Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;