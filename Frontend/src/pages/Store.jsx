import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const removeFromCart = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
    }
  };

  return (
    <div className="font-sans text-gray-800 relative">
      {/* Traditional Mandala Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-orange-50 via-amber-25 to-orange-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-600 rounded-full opacity-30"></div>
          <div className="absolute top-20 left-20 w-16 h-16 border border-amber-700 rounded-full opacity-40"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-orange-600 rounded-full opacity-25"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 border border-amber-800 rounded-full opacity-35"></div>
          <div className="absolute bottom-32 right-16 w-28 h-28 border-2 border-orange-700 rounded-full opacity-30"></div>
          
          {/* Mandala Pattern Elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-600 rounded-full opacity-40"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-700 rounded-full opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-amber-700 rounded-full opacity-45"></div>
          <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-600 rounded-full opacity-35"></div>
          
          {/* Decorative Lines */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-20"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-15"></div>
        </div>
        
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-100/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(217, 119, 6, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 70%)`
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50/80 via-orange-50/70 to-amber-100/80 backdrop-blur-sm py-12 text-center relative">
        {/* Decorative Border Pattern */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 opacity-60"></div>

        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-amber-800">Pure Puja Essentials for Every Ritual</h1>
          <p className="mt-2 text-xl">हर पूजा के लिए शुद्ध सामग्री – संस्कारा ऐप पर उपलब्ध</p>
          <p className="text-gray-600">Pure Puja Essentials for Every Ritual – Only on Sanskaraa</p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <button 
              onClick={addToCart}
              className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors"
            >
              "Āarambh se Sampūrṇ tak – har kadam mein saath!"
            </button>
            <button className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
              Browse by Occasion
            </button>
            <button 
              onClick={addToCart}
              className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Quick Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-6 bg-amber-900 text-white py-2 text-sm">
          🪔 Diwali Dhamaka: Buy Lakshmi Kit + Ganesh Kit @ ₹999 | 💍 Wedding Special Combo: Haldi + Mehendi + Pheras Kit ₹2199
        </div>
      </section>

      {/* Fixed Cart Icon in Bottom-Right Corner */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setShowCart(!showCart)}
          className="relative bg-amber-800 p-4 rounded-full shadow-2xl hover:shadow-3xl hover:bg-amber-900 transition-all duration-300 hover:scale-110"
        >
          <ShoppingCart className="w-8 h-8 text-white" />
          {cartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-900 text-white text-sm rounded-full w-7 h-7 flex items-center justify-center font-bold animate-pulse">
              {cartItems}
            </span>
          )}
        </button>
        
        {/* Cart Dropdown */}
        {showCart && (
          <div className="absolute bottom-full right-0 mb-4 w-80 bg-white rounded-lg shadow-2xl border-2 border-amber-200">
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-4 text-center text-amber-800">Shopping Cart</h3>
              {cartItems === 0 ? (
                <p className="text-gray-500 text-center py-6">Your cart is empty</p>
              ) : (
                <div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="font-medium">Puja Items</span>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={removeFromCart}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold text-lg">{cartItems}</span>
                      <button 
                        onClick={addToCart}
                        className="w-8 h-8 bg-amber-800 text-white rounded-full flex items-center justify-center hover:bg-amber-900 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="pt-4 mt-4">
                    <div className="flex justify-between font-bold text-lg mb-4">
                      <span>Total: ₹{cartItems * 699}</span>
                    </div>
                    <button className="w-full bg-amber-800 text-white py-3 rounded-lg font-semibold hover:bg-amber-900 transition-colors">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Categories */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Puja Categories | पूजा श्रेणियाँ</h2>
          <p className="text-gray-600">Choose from our wide range of authentic puja kits</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {[
            { name: 'Griha Pravesh Kit', desc: 'Housewarming rituals', icon: '🎉' },
            { name: 'Lakshmi Puja Kit', desc: 'For wealth, prosperity & Diwali', icon: '🪔' },
            { name: 'Durga Puja Kit', desc: 'For Navratri, Ashtami, etc.', icon: '🌸' },
            { name: 'Satyanarayan Kit', desc: 'Monthly family puja', icon: '🪷' },
            { name: 'Shraddh Kit', desc: 'For Pitru Paksha & memorial rituals', icon: '⚱' },
            { name: 'Festival Combos', desc: 'Holi, Diwali, Navratri combos', icon: '🎊' },
            { name: 'Wedding Pack Kit', desc: 'Haldi, Mehendi, Pheras, Mandap etc.', icon: '💍' },
            { name: 'Naamkaran Puja Kit', desc: 'Baby naming ceremony kit', icon: '👶' },
            { name: 'Rudrabhishek Kit', desc: 'For Shiv worship & healing', icon: '🧘' },
            { name: 'Navgraha Puja Kit', desc: 'Planet dosha remedies', icon: '🌌' },
            { name: 'Vastu Shanti Kit', desc: 'For new home positivity', icon: '🕊' },
            { name: 'Karwa Chauth Kit', desc: 'For married women\'s fast ritual', icon: '🌙' },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-4 shadow-sm bg-white rounded hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Kits */}
      <section className="py-12 bg-amber-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Featured Puja Kits | विशेष पूजा किट</h2>
          <p className="text-gray-600">Our most popular and highest-rated puja essentials</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {[
            { name: 'Wedding Pack Kit', price: '₹1499', rating: '4.9', reviews: 220 },
            { name: 'Lakshmi Puja Kit', price: '₹699', discount: '₹999', save: '₹300', rating: '4.8', reviews: 340 },
            { name: 'Griha Pravesh Kit', price: '₹899', rating: '4.7', reviews: 180 },
            { name: 'Durga Puja Kit', price: '₹799', rating: '4.8', reviews: 290 },
            { name: 'Satyanarayan Puja Kit', price: '₹699', rating: '4.7', reviews: 210 },
            { name: 'Shraddh Kit', price: '₹599', rating: '4.6', reviews: 140 },
            { name: 'Rudrabhishek Kit', price: '₹749', rating: '4.8', reviews: 165 },
            { name: 'Naamkaran Puja Kit', price: '₹850', rating: '4.9', reviews: 195 },
            { name: 'Navgraha Puja Kit', price: '₹970', rating: '4.6', reviews: 175 },
            { name: 'Karwa Chauth Kit', price: '₹699', rating: '4.7', reviews: 200 },
            { name: 'Vastu Shanti Kit', price: '₹899', rating: '4.8', reviews: 230 },
            { name: 'Festival Combo Kit', price: '₹1399', discount: '₹1799', save: '₹400', rating: '4.9', reviews: 280 },
          ].map((kit, idx) => (
            <div key={idx} className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gray-100 rounded mb-3" />
              <h3 className="font-semibold text-lg mt-2">{kit.name}</h3>
              <p className="text-yellow-600 font-medium">⭐ {kit.rating} ({kit.reviews}+ reviews)</p>
              <div className="text-xl font-bold text-amber-800">{kit.price}</div>
              {kit.discount && <p className="text-sm text-gray-500 line-through">{kit.discount}</p>}
              {kit.save && <p className="text-sm text-green-600">Save {kit.save}</p>}
              <button 
                onClick={addToCart}
                className="mt-2 bg-amber-800 text-white px-4 py-1 rounded hover:bg-amber-900 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 flex flex-col">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All your ritual and event needs met in one simple platform with verified service providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Event Decoration',
                description: 'Stunning mandaps, floral arrangements, lighting and theme-based decor for all ceremonies.',
                image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg',
                link: '#',
                linkText: 'View Options',
              },
              {
                title: 'Catering Services',
                description: 'Authentic satvik food, thali options and menu customization for all event sizes.',
                image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
                link: '#',
                linkText: 'View Options',
              },
              {
                title: 'Pandit Ji Booking',
                description: 'Verified priests for all ceremonies with expertise in regional rituals and customs.',
                image: 'https://images.pexels.com/photos/8471929/pexels-photo-8471929.jpeg',
                link: '#',
                linkText: 'Find a Priest',
              },
              {
                title: 'Puja Samagri Delivery',
                description: 'Complete puja kits for all occasions with same-day delivery available.',
                image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
                link: '#',
                linkText: 'Shop Now',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 group hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-4">{service.description}</p>
                  <a href={service.link} className="text-amber-600 font-medium inline-flex items-center hover:text-amber-700 transition-colors">
                    {service.linkText} <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
