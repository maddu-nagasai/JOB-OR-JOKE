
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "Maddu Nagasai",
      role: "FULL STACK DEVELOPER",
      imageUrl: "https://res.cloudinary.com/dm7jsi2cz/image/upload/v1742211458/WhatsApp_Image_2025-03-17_at_17.07.04_4e336d19_elquwe.jpg",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "AI specialist with 15+ years experience developing machine learning systems. Michael leads our technology development and research initiatives.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Head of User Protection",
      bio: "Former HR director with expertise in recruitment fraud prevention. Sarah ensures our technology effectively protects real job seekers.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "David Kim",
      role: "Lead Data Scientist",
      bio: "Specializes in natural language processing and pattern recognition. David's algorithms power our core scam detection technology.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Lisa Thompson",
      role: "UX Design Lead",
      bio: "Award-winning designer focused on creating intuitive user experiences. Lisa ensures our protection tools are accessible to everyone.",
      imageUrl: "https://images.unsplash.com/photo-1565884280295-98eb83e41c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "James Wilson",
      role: "Security Analyst",
      bio: "Former FBI cybercrime specialist with expertise in fraud detection. James leads our efforts to stay ahead of emerging scam techniques.",
      imageUrl: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <PageTransition transition="slide-right">
      <Navbar />
      
      <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Meet Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              The experts behind " Job or Joke " who are dedicated to protecting job seekers around the world.
            </motion.p>
          </div>
        </div>
      </div>
      
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard 
                key={member.name}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
    </PageTransition>
  );
}
