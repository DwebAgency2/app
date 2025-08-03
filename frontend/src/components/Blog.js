import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import NewsletterSubscription from './NewsletterSubscription';

const Blog = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-24 bg-[#302f2c] relative">
      <div className="max-w-[87.5rem] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#888680] font-medium text-lg tracking-wide uppercase mb-4">
            Latest Insights
          </p>
          <h2 className="font-black text-5xl lg:text-6xl leading-[0.76] text-[#d9fb06] uppercase tracking-tight mb-8">
            Tech
            <br />
            <span className="text-white">Blog</span>
          </h2>
          <p className="text-[#d9fb06] text-xl max-w-2xl mx-auto">
            Sharing knowledge about modern web development, best practices, 
            and the latest trends in technology.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <div className="bg-[#1a1c1b] border border-[#3f4816] rounded-lg overflow-hidden hover:border-[#d9fb06] transition-all duration-300 group">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d9fb06] text-[#1a1c1b] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Meta Info */}
                  <div className="flex items-center gap-6 mb-4 text-[#888680] text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{formatDate(blogPosts[0].date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-[#d9fb06] text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-[#888680] text-lg leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag, index) => (
                      <span key={index} className="bg-[#3f4816] text-[#d9fb06] px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-[#d9fb06] font-semibold hover:gap-4 transition-all duration-300 self-start">
                    Read Full Article
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post) => (
            <article 
              key={post.id}
              className="bg-[#1a1c1b] border border-[#3f4816] rounded-lg overflow-hidden hover:border-[#d9fb06] transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-3 text-[#888680] text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-[#d9fb06] text-lg font-bold mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-[#888680] text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-[#3f4816] text-[#d9fb06] px-2 py-1 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-[#888680] text-xs px-2 py-1">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                <button className="flex items-center gap-2 text-[#d9fb06] font-medium text-sm hover:gap-4 transition-all duration-300">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="text-center">
          <div className="bg-[#1a1c1b] border border-[#3f4816] rounded-lg p-12">
            <h3 className="text-[#d9fb06] text-3xl font-bold mb-4 uppercase tracking-tight">
              Stay Updated
            </h3>
            <p className="text-[#888680] text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about new articles on web development, 
              programming tips, and industry insights.
            </p>
            
            <NewsletterSubscription className="justify-center max-w-md mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;