import React from 'react';
import tools from "images/health-tools.jpg"
import '../style.css'
export default function Hero() {
  return (
    <section className="hero">
        <div className='first-section'>
            <img className="health-tools" src={tools} alt="tools" />
        </div>
        <div className="pragraph">
            <h1>Welcome!!</h1>
            <p>In today's fast-paced world, where technology has become an integral part of our lives, the concept of health connect is revolutionizing the healthcare industry. Health connect refers to the seamless integration of technology, healthcare providers, and patients to improve access, efficiency, and quality of healthcare services. With health connect, individuals have the opportunity to connect with healthcare professionals, access medical information, and participate in their own health management like never before. Through the power of digital platforms and telehealth solutions, people can now connect with doctors, specialists, and healthcare experts from the comfort of their homes, eliminating the barriers of distance and time.</p>
        </div>
    </section>
  );
}
