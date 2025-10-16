import { useState } from "react";
import "./styles/style.css";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const itemsArr: string[] = [
    "Angular Tutorial",
    "React Tutorial",
    "Vue.js Tutorial",
    "JavaScript Basics",
    "TypeScript Fundamentals",
    "Building with HTML & CSS",
    "Introduction to Node.js",
    "Getting Started with MongoDB",
    "Web Development with Node.js",
    "Advanced JavaScript Concepts",
    "Mastering Angular",
    "Learning CSS Grid",
    "Node.js for Beginners",
    "The Complete JavaScript Guide",
    "CSS Flexbox in Depth",
    "Getting Started with Express.js",
    "Deep Dive into GraphQL",
    "Modern Web Development Trends",
    "Building REST APIs with Express",
    "Introduction to Git and GitHub",
    "Web Accessibility Essentials",
  ];

  const transform = (items: string[], searchText: string) => {
    const q = searchText.trim().toLowerCase();

    if (!items || !searchText || !searchText.trim()) {
      return items;
    }

    return items.filter((item) => item.toLowerCase().includes(q));
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Dynamic List Filter</h1>
        <input
          type="text"
          placeholder="Search tutorials..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control search-box"
        />

        <ul className="list-group">
          {transform(itemsArr, searchText).map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
