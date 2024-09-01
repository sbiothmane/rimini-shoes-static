import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import ProductsClientComponent from './ProductsClientComponent';

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

// This is a server component by default
export default function ProductsPage() {
  const shoes = getAllShoesData();

  return <ProductsClientComponent shoes={shoes} />;
}
