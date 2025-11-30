import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-white mb-8">Welcome to Splash App</h1>
      <Link 
        href="/counter-app"
        className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition duration-300"
      >
        Go to Counter App
      </Link>
    </div>
  );
}