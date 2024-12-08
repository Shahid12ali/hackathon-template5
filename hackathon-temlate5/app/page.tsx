import React from 'react'
import ClassicProduct from './components/ClassicProduct/page';
import HeaderHeroSection from './components/Navbar/page';
import EditorsPick from './components/EditorsPick/page';
import FeaturedProducts from './components/FeaturedProduct/page';
import Universe from './components/Univers/page';
import FeaturedPosts from './components/FeaturedPosts/page';
import Footer from './components/Footer/page';

const Home = () => {
  return (
    <div>
      <HeaderHeroSection />
      <EditorsPick />
      <FeaturedProducts />
      <ClassicProduct />
      <Universe />
      <FeaturedPosts />
      <Footer />
      
    </div>
  )
}

export default Home