import Header from './components/Header';
import Footer from './components/Footer';
import ShoeList from './components/ShoeList';
import FeaturedShoe from './components/FeaturedShoe';
import { products } from './products'; // Adjusted import path for products data
import Scroll from './components/Scroll';

export default function Home() {
  // Only show a few shoes on the homepage
  const featuredShoes = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Featured Shoe Section */}
      <FeaturedShoe />
      <main className="flex-grow px-6 py-8">
        {/* Shoe List Section */}
        <ShoeList shoes={featuredShoes} />
        {/* Additional sections can go here */}
      </main>
      <div className="hidden sm:block">
        <Scroll shoes={products} />
      </div>
      <Footer />
    </div>
  );
}
