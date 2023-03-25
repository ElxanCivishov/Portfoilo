import { Link } from "react-router-dom";
const BlogItem = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <li key={blog.id} className="blog-post-item">
          <Link to={blog.url}>
            <div className="blog-banner-box">
              <img src={blog.img} alt={blog.title} />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">{blog.category}</p>
                <span className="dot"></span>
                <span className="date">{blog.date}</span>
              </div>
              <h3 className="h3 blog-item-title">{blog.title}</h3>
              <p className="blog-text">{blog.text}</p>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default BlogItem;
