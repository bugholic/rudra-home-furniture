import React from 'react';
import { Tag, Clock, TrendingUp } from 'lucide-react';

const FeaturedDeals = () => {
  const deals = [
    {
      title: 'Bedroom Furniture Bundle',
      originalPrice: '₹45,000',
      salePrice: '₹28,000',
      discount: '38% OFF',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'King size bed + 2 side tables + wardrobe',
      minOrder: 'Minimum 10 sets',
      timeLeft: '3 days left'
    },
    {
      title: 'Office Chair Bulk Pack',
      originalPrice: '₹8,500',
      salePrice: '₹5,200',
      discount: '40% OFF',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Ergonomic office chairs - Pack of 20',
      minOrder: 'Minimum 20 pieces',
      timeLeft: '5 days left'
    },
    {
      title: 'Sofa Set Mega Deal',
      originalPrice: '₹35,000',
      salePrice: '₹22,000',
      discount: '35% OFF',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: '5-seater sofa set with premium fabric',
      minOrder: 'Minimum 5 sets',
      timeLeft: '1 week left'
    },
    {
      title: 'Kitchen Appliance Combo',
      originalPrice: '₹25,000',
      salePrice: '₹18,500',
      discount: '26% OFF',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Microwave + OTG + Mixer Grinder combo',
      minOrder: 'Minimum 15 combos',
      timeLeft: '2 weeks left'
    }
  ];

  return (
    <section id="deals" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Wholesale Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive bulk pricing for businesses. Save more when you buy more!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deals.map((deal, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <img 
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {deal.discount}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded flex items-center text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {deal.timeLeft}
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.title}</h3>
                  <p className="text-gray-600 mb-4">{deal.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-green-600">{deal.salePrice}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{deal.originalPrice}</span>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg mb-4">
                    <div className="flex items-center text-blue-800 text-sm font-semibold mb-1">
                      <Tag className="h-4 w-4 mr-1" />
                      Bulk Pricing
                    </div>
                    <p className="text-blue-700 text-sm">{deal.minOrder}</p>
                  </div>

                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Get Quote Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors text-lg font-semibold">
            View All Deals
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;