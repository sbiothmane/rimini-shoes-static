import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

// Function to fetch all shoe data from Markdown files
const getAllShoesData = () => {
  const shoeDirectory = path.join(process.cwd(), 'app/data');
  const files = fs.readdirSync(shoeDirectory);

  const shoes = files.map((filename) => {
    const filePath = path.join(shoeDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter } = matter(fileContents);

    return {
      id: filename.replace('.md', '').replace('shoe', ''),
      ...frontmatter,
    };
  });

  return shoes;
};

export default function ProductsPage() {
  const shoes = getAllShoesData();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-8">
        <div className="w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Nos Chaussures</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shoes.map((shoe) => (
              <Link href={`/products/${shoe.id}`} key={shoe.id} passHref>
                <div className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                  <img src={shoe.images[0]} alt={shoe.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{shoe.title}</h2>
                    <p className="text-gray-700 mb-4">{shoe.description}</p>
                    <p className="text-gray-900 font-bold">Prix: {shoe.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
