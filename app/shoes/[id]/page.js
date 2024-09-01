import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductClient from '../../components/ProductClient'; // Import the client component

// Function to read the Markdown file and parse it
const getProductData = (id) => {
  const filePath = path.join(process.cwd(), 'app/data', `shoe${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);
  return { frontmatter, content };
};

export default function ProductPage({ params }) {
  const { id } = params;
  const { frontmatter, content } = getProductData(id);
  const { title, images, colors, price } = frontmatter;

  return (
    <div>
      <Header />
      <main className="px-6 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Pass data to the client component */}
          <ProductClient
            title={title}
            images={images}
            colors={colors}
            price={price}
            content={content}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Fetch all shoe IDs for static generation
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'app/data'));
  const paths = files.map((filename) => ({
    id: filename.replace('.md', '').replace('shoe', ''),
  }));

  return paths;
}
