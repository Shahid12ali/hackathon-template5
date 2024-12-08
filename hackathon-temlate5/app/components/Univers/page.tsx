import Image from 'next/image';

const Universe = () => {
  return (
    <section className="flex items-center justify-between bg-white p-10">
      <div className='w-96'>
        <Image
          src="/images/women.png" 
          alt="Couple in Scarf"
          className="w-full h-auto rounded-lg"
          width={300} 
          height={300} 
        />
      </div>
      <div className="w-1/2 pl-10">
        <h2 className="text-4xl font-semibold text-gray-800">Summer 2020</h2>
        <h3 className="text-3xl font-semibold text-gray-900 mt-2">Part of the Neural Universe</h3>
        <p className="text-lg text-gray-600 mt-4">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="#"
            className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition"
          >
            BUY NOW
          </a>
          <a
            href="#"
            className="border border-green-500 text-green-500 py-2 px-6 rounded-md hover:bg-green-500 hover:text-white transition"
          >
            READ MORE
          </a>
        </div>
      </div>
    </section>
  );
}
export default Universe;
