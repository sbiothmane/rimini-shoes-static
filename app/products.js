// data/products.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Function to read and parse the Markdown files
const getAllShoesData = () => {
  const shoeDirectory = path.join(process.cwd(), 'app/data');
  const files = fs.readdirSync(shoeDirectory);

  const shoes = files.map((filename) => {
    const filePath = path.join(shoeDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);

    return {
      id: frontmatter.id,
      title: frontmatter.title,
      images: frontmatter.images,
      colors: frontmatter.colors,
      price: frontmatter.price,
      description: content.split('\n')[0], // Get the first line as the short description
      fullDescription: content, // Full Markdown content if needed later
    };
  });

  return shoes;
};

// Export the function to get all shoes data
export const products = getAllShoesData();
