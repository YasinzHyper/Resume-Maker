import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
import swagataImg from '../images/swagata.jpg';
import sohamImg from '../images/soham.jpg';
import sayanImg from '../images/sayan.jpg';
import sougataImg from '../images/sougata.jpg';

const AboutUs = () => {
  const stats = [
    { label: 'Resumes Created', value: '50,000+' },
    { label: 'Happy Users', value: '25,000+' },
    { label: 'Templates Available', value: '100+' },
    { label: 'Countries Served', value: '120+' },
  ];

  const team = [
    {
      name: 'Swagata Mandal',
      role: 'Frontend Developer & Web Designer',
      image: swagataImg,
      description: 'Former HR executive with 10+ years helping people land their dream jobs.',
    },
    {
      name: 'Soham Mangal',
      role: 'Backend Developer ',
      image: sohamImg,
      description: 'Tech innovator focused on creating tools that make career growth accessible.',
    },
    {
      name: 'Sayan Barman',
      role: 'Frontend Developer & Web Designer',
      image: sayanImg,
      description: 'Award-winning designer passionate about beautiful, functional user experiences.',
    },
    {
      name: 'Sougata Kundu',
      role: 'Ai Engineer',
      image: sougataImg,
      description: 'Award-winning designer passionate about beautiful, functional user experiences.',
    },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Mission-Driven',
      description: 'We believe everyone deserves a chance to showcase their potential through a professional resume.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User-Focused',
      description: 'Every feature we build is designed with our users\' success and ease-of-use in mind.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality First',
      description: 'We maintain the highest standards in template design and platform reliability.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion for Growth',
      description: 'We\'re committed to helping professionals at every stage of their career journey.',
    },
  ];

  return (
    //background gradient
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(152deg, rgba(8,0,0,1) 0%, rgba(106,78,205,1) 67%, rgba(46,43,43,1) 100%)"
      }}
    >
      {/* Story Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Our Story
            </h2>
            <div className="mb-8 text-lg leading-relaxed text-white text-opacity-70 sm:text-xl">
              <p className="mb-6">
                <strong>From Exams to Execution – Our First Full-Stack Project!</strong> 🚀
              </p>
              <p className="mb-6">
                At the conclusion of our first year of engineering, as final exams ended, we—a team of four passionate software engineering students (Swagata Mandal, Soham Mangal, Sougata Kundu, and Sayam Barman)—chose to dedicate our 1.5-month summer break to building something impactful and practical. United by a shared vision, we brainstormed and decided to develop a Resume Builder website—a comprehensive, full-stack platform designed to empower users to generate professional resumes using modern, clean templates, customize resume content with ease, and host and share their resumes online instantly. We began by strengthening our skills in React, backend technologies, and API development through online resources. Leveraging our individual strengths, we divided responsibilities: Swagata led the frontend and contributed to backend API integration, Sayan enhanced the frontend with responsive design and user experience improvements, Soham managed backend logic and database integration, and Sougata is developing upcoming AI-powered features for smarter resume generation. This project marked our first real-world full-stack collaboration. We gained invaluable experience—far beyond what tutorials could offer—by solving real challenges, collaborating closely, and delivering features as a unified team. We are proud of our accomplishments and excited to share our work with you. Your feedback is always welcome as we continue to grow and enhance our platform. Stay tuned for our GitHub repository and live demo!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white text-opacity-70 sm:text-xl">
              We're a passionate team of designers, developers, and career experts
              dedicated to your professional success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="overflow-hidden bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-64"
                />
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mb-3 font-medium text-blue-600">
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 text-white bg-gradient-to-r from-blue-600 to-black-600">
        <div className="px-4 mx-auto max-w-4xl text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mb-8 text-xl">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <button className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg transition-colors transform hover:bg-gray-50 hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;