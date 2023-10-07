import React from 'react';
import ChooseUsCard from './ChooseUsCard';

const WhyChooseUs = () => {
  const topics = [
    {
      title: 'Expert Team',
      description: 'Our team consists of experienced professionals dedicated to making your event a success.',
    
    },
    {
      title: 'Customized Solutions',
      description: 'We tailor our services to match your unique vision and preferences for every event.',
      
    },
    {
      title: 'Attention to Detail',
      description: 'We meticulously plan and execute every aspect of your event to ensure nothing is overlooked.',
      
    }
    // Add more topics as needed
  ];

  return (
    <div className="mx-auto my-24">
      <h1 className="text-4xl font-bold my-14">Why Choose US</h1>
      <div className="topic-cards mx-auto flex flex-wrap gap-4">
        {topics.map((topic, index) => (
          <ChooseUsCard key={index} topic={topic}></ChooseUsCard>
        ))}
      </div>
      
    </div>
  );
};

export default WhyChooseUs;

