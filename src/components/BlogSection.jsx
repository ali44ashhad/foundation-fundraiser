import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const blogPosts = [
  {
    title: "Our Culture Code: The Foundation of Unity and Progress",
    author: "admin",
    comments: 0,
  },
  {
    title: "Celebrating Diversity: A Path to Harmonious Coexistence",
    author: "admin",
    comments: 0,
  },
  {
    title: "Building a Better World: The Power of a Noble Cause",
    author: "admin",
    comments: 0,
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">From the Blog</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with our latest news and insights.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-lime-500/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <BookOpen className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-white">
                {post.title}
              </h3>

              {/* Author */}
              <p className="text-gray-400 text-sm mb-4">
                By {post.author} • {post.comments} comments
              </p>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-lime-400 font-semibold flex items-center gap-2"
              >
                Read More <i className="fa-solid fa-arrow-right"></i>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
