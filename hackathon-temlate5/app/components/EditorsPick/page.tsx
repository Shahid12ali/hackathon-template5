import Image from 'next/image';

const EditorsPick = () => {
  return (
    <section className="text-center py-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-2">EDITOR&apos;S PICK</h2>
      <p className="text-gray-600 mb-8">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex justify-center items-start gap-4 max-w-6xl mx-auto">
        <div className="relative group flex-grow w-1/5">
          <Image
            src="/images/filter.webp"
            alt="Men"
            width={400}
            height={280}
            className="rounded-md"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-900 px-2 py-1 font-semibold text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition">
            MEN
          </button>
        </div>
        <div className="relative group flex-grow w-1/5">
          <Image
            src="/images/filter1.avif"
            alt="Women"
            width={380}
            height={280}
            className="rounded-md"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-900 px-2 py-1 font-semibold text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition">
            WOMEN
          </button>
        </div>
        <div className="flex flex-col gap-4 w-1/5">
          <div className="relative group w-full">
            <Image
              src="/images/card-item.jpg"
              alt="Accessories"
              width={180}
              height={150}
              className="rounded-md"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-900 px-2 py-1 font-semibold text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition">
              ACCESSORIES
            </button>
          </div>
          <div className="relative group w-full">
            <Image
              src="/images/card-item1.jpg"
              alt="Kids"
              width={180}
              height={150}
              className="rounded-md"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-900 px-2 py-1 font-semibold text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;

