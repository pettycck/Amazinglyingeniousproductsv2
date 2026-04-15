import { CategorySection, Product } from './components/category-section';
import { ShoppingBag, Mail, Phone, MapPin, Truck, Shield, Award, Sparkles } from 'lucide-react';

// Mock data for different categories
const categories = [
  {
    title: '3D-Printed',
    products: [
      {
        id: '3d-1',
        name: 'Small Flower Pot',
        price: 12,
        image: 'https://hushabye83.wordpress.com/wp-content/uploads/2025/07/img_3837small-4.jpg?w=1024',
        description: 'Charming 3D-printed flower pot perfect for small plants and succulents',
        features: ['Eco-friendly PLA material', 'Perfect size for small plants', 'Modern design', 'Handcrafted quality'],
        badge: 'Bestseller',
      },
      {
        id: '3d-2',
        name: 'Stackable Small Tray',
        price: 12,
        image: 'https://hushabye83.wordpress.com/wp-content/uploads/2025/08/img_3862.jpeg?w=768',
        description: 'Versatile stackable tray for organizing small items on your desk or dresser',
        features: ['Stackable design', 'Space-saving solution', 'Durable PLA construction', 'Multiple uses'],
      },
      {
        id: '3d-3',
        name: 'Pencil Holder',
        price: 12,
        image: 'https://hushabye83.wordpress.com/wp-content/uploads/2025/08/img_3870-e1756353309416.jpg?w=768',
        description: 'Elegant 3D-printed pencil holder to keep your desk organized and stylish',
        features: ['Multiple compartments', 'Sturdy construction', 'Modern aesthetic', 'Perfect desk accessory'],
      },
      {
        id: '3d-4',
        name: 'Vase',
        price: 12,
        image: 'https://hushabye83.wordpress.com/wp-content/uploads/2025/08/img_3871-e1756353329713.jpg?w=768',
        description: 'Beautiful 3D-printed vase with contemporary design for fresh or dried flowers',
        features: ['Unique geometric design', 'Water-resistant finish', 'Contemporary style', 'Lightweight yet stable'],
        badge: 'Popular',
      },
      {
        id: '3d-5',
        name: 'Miniature Table',
        price: 12,
        image: 'https://hushabye83.wordpress.com/wp-content/uploads/2025/07/img_0431.jpeg?w=766',
        description: 'Adorable miniature table perfect for display or as a unique desk accessory',
        features: ['Intricate design details', 'Stable construction', 'Decorative piece', 'Conversation starter'],
        badge: 'New',
      },
      {
        id: '3d-6',
        name: 'Flowerpot & Saucer',
        price: 15.00,
        image: 'https://hushabye83.wordpress.com/wp-content/uploads/2025/07/img_0518.jpeg?w=1440',
        description: 'Complete 3D-printed flowerpot set with matching saucer, ideal for indoor plants and herbs',
        features: ['Includes matching saucer', 'Drainage-friendly design', 'PLA construction', 'Perfect for small to medium plants'],
      },
    ] as Product[],
  },
  {
    title: 'Electronics',
    products: [
      {
        id: 'elec-3d-1',
        name: 'Lamp (include shade)',
        price: 15.00,
        image: 'https://hushabye83.wordpress.com/wp-content/uploads/2025/07/img_0517.jpeg?w=1440',
        description: 'Beautiful handcrafted lamp with custom 3D-printed shade, combining modern design with functional lighting',
        features: ['Custom 3D-printed lampshade', 'Complete assembly included', 'Energy-efficient LED compatible', 'Unique modern design'],
        badge: 'New',
      },
    ] as Product[],
  },
  {
    title: 'Sewing & Others',
    products: [
      {
        id: 'sewing-1',
        name: 'Lined Tote Bag',
        price: 15.00,
        image: 'https://hushabye83.wordpress.com/wp-content/uploads/2025/07/img_0538.jpeg?w=1440',
        description: 'Handmade lined tote bag perfect for everyday use, crafted with care and attention to detail',
        features: ['Fully lined interior', 'Sturdy fabric construction', 'Comfortable handles', 'Spacious storage'],
        badge: 'Handmade',
      },
      {
        id: 'sewing-2',
        name: 'MDF Storage/Gift Box',
        price: 12.00,
        image: 'https://hushabye83.wordpress.com/wp-content/uploads/2025/07/img_0539.jpeg?w=1440',
        description: 'Precision laser-cut MDF storage box that doubles as an elegant gift box, perfect for organizing treasured items or presenting special gifts',
        features: ['Precision laser-cut design', 'High-quality MDF material', 'Clean edges and smooth finish', 'Versatile storage and gifting'],
        badge: 'Premium',
      },
    ] as Product[],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Product Catalog</h1>
              <p className="text-sm text-gray-600">Quality Products for Modern Living</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover Amazing Products</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            From innovative 3D-printed designs to cutting-edge electronics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <div className="flex flex-col items-center">
              <Truck className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Free Shipping</h3>
              <p className="text-sm text-blue-100">On orders over SGD$50 locally</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-blue-100">100% protected</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Quality Guaranteed</h3>
              <p className="text-sm text-blue-100">Premium products only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category, index) => (
          <CategorySection
            key={index}
            title={category.title}
            products={category.products}
          />
        ))}
      </main>

      {/* Contact Section */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-2 text-center">Interested in Our Products?</h2>
          <p className="text-gray-600 text-center mb-8">Get in touch with us for inquiries, orders, or custom requests</p>
          
          <div className="flex justify-center max-w-4xl mx-auto">
            {/* Email */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a href="mailto:funnylittlethingsjames@gmail.com" className="text-blue-600 hover:underline">
                funnylittlethingsjames@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600">
          <p>© 2026 Product Catalog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}