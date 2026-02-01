import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCategories = () => {
  const categories = [
    {
      name: 'Beds & Mattresses',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: '250+ Models',
      description: 'Single, Double, Queen & King size beds'
    },
    {
      name: 'Sofas & Seating',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: '180+ Models',
      description: '2-seater to 8-seater sofa sets'
    },
    {
      name: 'Dining & Chairs',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: '120+ Models',
      description: 'Dining tables, chairs & bar stools'
    },
    {
      name: 'Wardrobes & Storage',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: '200+ Models',
      description: 'Cupboards, wardrobes & storage units'
    },
    {
      name: 'Temple & Mandirs',
      image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: '80+ Models',
      description: 'Traditional & modern pooja units'
    },
    {
      name: 'Washing Machines',
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: '150+ Models',
      description: 'Top-load, front-load & semi-automatic'
    },
    {
      name: 'Kitchen Appliances',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: '300+ Models',
      description: 'Ovens, microwaves, refrigerators'
    },
    {
      name: 'Office Furniture',
      image: 'https://images.pexels.com/photos/159839/office-home-house-desk-159839.jpeg?auto=compress&cs=tinysrgb&w=400',
      productCount: '100+ Models',
      description: 'Desks, chairs & office storage'
    }
  ];

  return (
    <section id="categories" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of furniture and appliances for homes, offices, and commercial spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-800 text-white px-2 py-1 rounded text-sm font-semibold">
                  {category.productCount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="flex items-center text-blue-800 font-semibold hover:text-blue-900 transition-colors group">
                  <span>View Products</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors text-lg font-semibold">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;