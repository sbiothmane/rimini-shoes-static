import Header from './components/Header';
import Footer from './components/Footer';
import ShoeList from './components/ShoeList';
import { products } from './products';
import FeaturedShoe from './components/FeaturedShoe';

export default function Home() {
  // Only show a few shoes on the homepage
  const featuredShoes = products.slice(0, 3);

  return (
    <div>
      <Header />
      <FeaturedShoe />
      <main className="px-6 py-8">
        {/* Featured Shoes Section */}
        <ShoeList shoes={featuredShoes} />
        {/* Additional sections can go here */}
      </main>
      <Footer />
    </div>
  );
}
