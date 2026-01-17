import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
                <p>Welcome to Shopster — your go-to online store for everyday essentials and unique finds. We’re all about making shopping simple, fast, and enjoyable. Whether you’re looking for the latest trends, practical home items, or something special, we’ve got you covered. We believe great shopping should feel effortless, so we're here to help every step of the way. Thanks for choosing Shopster — happy shopping!</p>
                <p>A trusted online store built on years of experience in e-commerce and customer care. We know what shoppers want because we’ve been in the business long enough to understand what works. From choosing quality products to offering fair prices and fast delivery, we’ve learned how to make shopping feel smooth and reliable.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>At Shopster, our mission is to make everyday shopping simple, reliable, and enjoyable. We strive to offer high-quality products at fair prices, We’re committed to building trust through transparency, consistency, and a smooth shopping experience. Above all, we want to help people find what they need—quickly.</p>
            </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>We prioritize quality assurance by inspecting products at every step, from sourcing to delivery. Each item is evaluated for performance, safety, and consistency, ensuring you receive only the best. Shopster is committed to delivering dependable products you can trust.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>We focus on convenience by offering a smooth shopping experience from start to finish. With clear product choices, quick ordering, and dependable delivery, Shopster helps you get what you need without hassle. Shop anytime, anywhere, and enjoy a seamless process.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Shopster delivers exceptional customer service by prioritizing your needs. Whether you need help choosing a product, tracking an order, or resolving an issue, our support team is available and responsive. We’re committed to making every interaction helpful and positive.</p>
          </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About