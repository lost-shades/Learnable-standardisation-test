import React from 'react'
import { BandageFooter, FeaturedPosts, FeaturedProducts, Feedback, Headers, HeroSection, LandingSection5, ProductList } from '../components'

export const LandingPage = () => {
  return (
    <section>
        <Headers />
        <HeroSection />
        <ProductList />
        <FeaturedProducts />
        <FeaturedPosts />
        <Feedback />
        <LandingSection5 />
        <BandageFooter />
    </section>
  )
}
