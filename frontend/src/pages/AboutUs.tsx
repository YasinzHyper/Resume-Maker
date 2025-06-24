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
      image: swagataImg,
      description: 'Award-winning designer passionate about beautiful, functional user experiences.',
    },
    {
      name: 'Sougata Kundu',
      role: 'Ai Engineer',
      image: swagataImg,
      description: 'Award-winning designer passionate about beautiful, functional user experiences.',
    },
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Mission-Driven',
      description: 'We believe everyone deserves a chance to showcase their potential through a professional resume.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'User-Focused',
      description: 'Every feature we build is designed with our users\' success and ease-of-use in mind.',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Quality First',
      description: 'We maintain the highest standards in template design and platform reliability.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Story
            </h2>
            <div className="text-lg sm:text-xl text-white mb-8 leading-relaxed text-opacity-70 ">
              <p className="mb-6">
                Cwix was born from a simple observation: creating a professional resume shouldn't be
                complicated or expensive. In 2020, our founders Sarah and Michael noticed that many
                talented professionals were being overlooked simply because their resumes didn't
                properly showcase their skills and experience.
              </p>
              <p className="mb-6">
                They set out to build a platform that would level the playing field – one that would
                give everyone access to professionally designed templates and an intuitive editing
                experience. What started as a weekend project has grown into a platform trusted by
                thousands of professionals worldwide.
              </p>
              <p>
                Today, we're proud to have helped over 25,000 people create resumes that have opened
                doors to new careers, promotions, and opportunities. But we're just getting started –
                our mission is to help millions more professionals tell their story in the most
                compelling way possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed text-opacity-70">
              We're a passionate team of designers, developers, and career experts
              dedicated to your professional success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-black-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl mb-8">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;