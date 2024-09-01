import Image from 'next/image';

const FeaturedShoe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-100 py-8 px-6">
      <Image 
        src="/images/hero-shoe.jpg" 
        alt="Chaussure en vedette" 
        width={500} 
        height={500} 
        className="w-full md:w-1/2 object-cover rounded-lg shadow-lg" 
      />
      <div className="md:ml-8 mt-4 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-800">Chaussure Traditionnelle Marocaine</h2>
        <p className="text-gray-600 mt-2">Découvrez l&apos;élégance et le confort de notre dernière collection de chaussures marocaines.</p>
      </div>
    </section>
  );
};

export default FeaturedShoe;
