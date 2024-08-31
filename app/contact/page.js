import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-8">
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contactez-nous</h2>
          <p className="text-gray-600 mb-4">
            Nous aimerions recevoir de vos nouvelles! Pour toute question ou information supplémentaire, vous pouvez nous contacter via les méthodes suivantes :
          </p>
          <div className="flex flex-col items-center mt-6">
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong> contact@rimini.ma
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Téléphone:</strong> +212 5 22 22 22 22
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Adresse:</strong> 123 Rue de l'Artisanat, Casablanca, Maroc
            </p>
            <a
              href="https://www.facebook.com/YourPageName"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition mt-4"
            >
              Contactez-nous sur Facebook
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
