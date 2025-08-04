import React from 'react';
import { Truck, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Premium Furniture &amp; Appliances at 
              <span className="text-blue-800"> Wholesale Prices</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business with our extensive collection of high-quality furniture and home appliances. 
              Trusted by 5000+ retailers across India with unbeatable wholesale pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors text-lg font-semibold">
                Browse Catalog
              </button>
              <button className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg hover:bg-blue-800 hover:text-white transition-colors text-lg font-semibold">
                Request Quote
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white p-3 rounded-full w-fit mx-auto mb-2 shadow-md">
                  <Truck className="h-6 w-6 text-blue-800" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Free Delivery</p>
                <p className="text-xs text-gray-500">Pan India</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded-full w-fit mx-auto mb-2 shadow-md">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">2 Year Warranty</p>
                <p className="text-xs text-gray-500">All Products</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded-full w-fit mx-auto mb-2 shadow-md">
                  <Award className="h-6 w-6 text-orange-500" />
                </div>
                <p className="text-sm font-semibold text-gray-700">ISO Certified</p>
                <p className="text-xs text-gray-500">Quality Assured</p>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded-full w-fit mx-auto mb-2 shadow-md">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">5000+ Clients</p>
                <p className="text-xs text-gray-500">Nationwide</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Modern furniture showroom"
                className="w-full h-96 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-3 gap-4">
                <img 
                  src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Sofa"
                  className="w-full h-20 object-cover rounded"
                />
                <img 
                  src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Kitchen"
                  className="w-full h-20 object-cover rounded"
                />
                <img 
                  src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Bedroom"
                  className="w-full h-20 object-cover rounded"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
              Up to 40% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;