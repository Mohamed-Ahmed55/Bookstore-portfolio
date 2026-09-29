import React, { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [expandedId, setExpandedId] = useState(null);

  const blogArticles = [
    {
      id: 1,
      title: "5 Tips to Build a Daily Reading Habit",
      date: "October 12, 2026",
      snippet: "Struggling to read more books? Here are five practical steps to make reading a daily routine.",
      details: "Building a reading habit isn't about finding time; it's about making time. Start by reading just 10 pages a day before bed or during your morning coffee. Consistency beats intensity every single time. Track your progress, keep a book with you wherever you go, and choose genres that genuinely excite you rather than what you think you 'should' read."
    },
    {
      id: 2,
      title: "Top 10 Bestsellers You Must Read",
      date: "October 5, 2026",
      snippet: "From thrilling mysteries to heartwarming romances, discover the books everyone is talking about.",
      details: "This season's bestseller list is packed with emotional depth and gripping twists. Whether you're into psychological thrillers that keep you guessing until the final page or character-driven dramas that stay in your heart for weeks, our curated selection covers all tastes. Check out our shop section to grab your copy today!"
    },
    {
      id: 3,
      title: "Why Physical Books Still Matter",
      date: "September 28, 2026",
      snippet: "Exploring the unique sensory experience of turning real paper pages in a digital age.",
      details: "While e-readers are convenient, physical books offer a tactile connection that screens simply can't replace. The smell of paper, the weight of the book in your hands, and the visual progress of turning pages all contribute to better memory retention and a deeper, more immersive reading experience."
    },
    {
      id: 4,
      title: "The Ultimate Guide to Sci-Fi Classics",
      date: "September 20, 2026",
      snippet: "Dive deep into the universes that shaped modern science fiction and futuristic storytelling.",
      details: "Science fiction is more than just spaceships and lasers; it's a mirror reflecting our own society's future and fears. From visionary works by Isaac Asimov to modern cyberpunk masterpieces, exploring sci-fi classics expands our imagination and challenges our view of technology and humanity."
    },
    {
      id: 5,
      title: "How to Choose Your Next Read",
      date: "September 15, 2026",
      snippet: "Overwhelmed by choices? Use these simple criteria to pick a book you won't be able to put down.",
      details: "Ever suffered from the dreaded reading slump? The secret to picking your next book is to match your current mood. If you're stressed, go for light cozy mysteries. If you have high energy, pick a fast-paced thriller. Don't be afraid to DNF (Did Not Finish) a book if it doesn't hook you within the first 50 pages."
    },
    {
      id: 6,
      title: "Author Spotlight: Modern Storytellers",
      date: "September 10, 2026",
      snippet: "A closer look at the brilliant minds crafting the most memorable characters of our decade.",
      details: "Modern authors are redefining genres by blending magical realism with historical events and deep psychological insights. In this spotlight, we examine the writing rituals, inspirations, and unique narrative voices of the authors dominating international bestseller lists."
    },
    {
      id: 7,
      title: "Building a Home Library on a Budget",
      date: "September 3, 2026",
      snippet: "Smart ways to curate, organize, and grow your personal collection without breaking the bank.",
      details: "You don't need a massive budget to build a gorgeous home library. Start by hunting for second-hand treasures, supporting local independent bookstores during sales, and organizing your shelves by color, genre, or author preference to give your space an aesthetic, cozy literary vibe."
    },
    {
      id: 8,
      title: "The Magic of Cozy Mystery Novels",
      date: "August 28, 2026",
      snippet: "Why lighthearted detective stories and small-town puzzles are the ultimate comfort reading.",
      details: "Cozy mysteries offer all the intrigue of a classic whodunit without the graphic violence or dark despair. Set in charming small towns with eccentric characters, amateur sleuths, and plenty of baking or pet companions, they are the ultimate literary comfort food for rainy afternoons."
    }
  ];

  const toggleReadMore = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-header">
          <h2>The Reader's Corner</h2>
          <p>Articles, reading guides, and literary discussions to fuel your passion.</p>
        </div>

        <div className="row">
          {blogArticles.map((article) => (
            <div className="col-lg-3 col-md-6 mb-4" key={article.id}>
              <div className="blog-card">
                <div>
                  <span className="blog-date">{article.date}</span>
                  <h3 className="blog-title">{article.title}</h3>
                  <p className="blog-snippet">
                    {expandedId === article.id ? article.details : article.snippet}
                  </p>
                </div>
                <button 
                  className="blog-btn" 
                  onClick={() => toggleReadMore(article.id)}
                >
                  {expandedId === article.id ? "Show Less \u2190" : "Read More \u2192"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;