import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-8">
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">À propos de Rimini</h2>
          <p className="text-gray-600 mb-4">
            Rimini est une boutique en ligne dédiée à la vente de chaussures marocaines authentiques.
            Fondée en 2024, notre mission est de promouvoir l&apos;artisanat marocain et de fournir des chaussures
            de qualité qui reflètent la riche culture et l&apos;héritage du Maroc.
          </p>
          <p className="text-gray-600 mb-4">
            Chaque paire de chaussures est soigneusement sélectionnée pour offrir confort, style et
            durabilité. Nous travaillons directement avec des artisans locaux pour nous assurer que nos
            produits sont fabriqués de manière éthique et avec des matériaux de haute qualité.
          </p>
          <p className="text-gray-600 mb-4">
            Notre équipe est passionnée par la mode et l&apos;artisanat, et nous nous engageons à offrir une
            expérience de magasinage exceptionnelle à nos clients. Merci de soutenir Rimini et de faire
            partie de notre voyage!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
