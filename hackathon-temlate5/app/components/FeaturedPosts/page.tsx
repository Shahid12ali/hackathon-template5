import React from "react";
import { LuAlarmClock } from "react-icons/lu";
import { FaChartArea } from "react-icons/fa";

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  comments: number;
  image: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Loudest à la Madison #1 (L'Integrál)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 Apr 2021",
    comments: 10,
    image: "/images/carasol1.png", 
  },
  {
    id: 2,
    title: "Loudest à la Madison #1 (L'Integrál)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 Apr 2021",
    comments: 10,
    image: "/images/carasol2.png", 
  },
  {
    id: 3,
    title: "Loudest à la Madison #1 (L'Integrál)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 Apr 2021",
    comments: 10,
    image: "/images/carasol3.png", 
  },
];

const FeaturedPosts: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm text-blue-500 font-semibold uppercase">Practice Advice</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Posts</h2>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  NEW
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                  <span>Google</span>
                  <span>Trending</span>
                  <span>New</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex items-center space-x-1">
                    <LuAlarmClock className="text-blue-700 text-xl" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaChartArea className="text-green-400 text-xl" />
                    <span>{post.comments} comments</span>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;

