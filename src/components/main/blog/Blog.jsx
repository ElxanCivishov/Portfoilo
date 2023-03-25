import Title from "../title/Title";
import BlogItem from "./BlogItem";
import "./blog.css";

import blog1 from "../../../images/blog-1.jpg";
import blog2 from "../../../images/blog-2.jpg";
import blog3 from "../../../images/blog-3.jpg";
import blog4 from "../../../images/blog-4.jpg";
import blog5 from "../../../images/blog-5.jpg";
import blog6 from "../../../images/blog-6.jpg";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      img: blog1,
      category: "Design",
      date: "Fab 23, 2022",
      title: "Best fonts every designer",
      text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
      url: "blog1",
    },
    {
      id: 2,
      img: blog2,
      category: "Design",
      date: "Fab 23, 2022",
      title: "Design conferences in 2022",
      text: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
      url: "blog2",
    },
    {
      id: 3,
      img: blog3,
      category: "Design",
      date: "Fab 23, 2022",
      title: "Design digest #80",
      text: " Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
      url: "blog3",
    },
    {
      id: 4,
      img: blog4,
      category: "Design",
      date: "Fab 23, 2022",
      title: " UI interactions of the week",
      text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
      url: "blog4",
    },
    {
      id: 5,
      img: blog5,
      category: "Design",
      date: "Fab 23, 2022",
      title: "The forgotten art of spacing",
      text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
      url: "blog5",
    },
    {
      id: 6,
      img: blog6,
      category: "Design",
      date: "Fab 23, 2022",
      title: "Design digest #79",
      text: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
      url: "blog6",
    },
  ];
  return (
    <>
      <article class="blog" data-page="blog">
        <Title>Blog</Title>

        <section class="blog-posts">
          <ul class="blog-posts-list">
            <BlogItem blogs={blogs} />
          </ul>
        </section>
      </article>
    </>
  );
};

export default Blog;
