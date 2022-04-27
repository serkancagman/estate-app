import React from "react";
import blogImage from "assets/blog/blog-1.jpg";
import blogImage2 from "assets/blog/blog-2.jpg";
import blogImage3 from "assets/blog/blog-3.jpg";
import personImage from "assets/blog/person-1.jpg";
import personImage2 from "assets/blog/person-2.jpg";
import personImage3 from "assets/blog/person-3.jpg";
import style from "./style/Blog.module.css";
import BlogItem from "components/BlogHome/BlogItem";
const Blog = () => {
  return (
    <section className={style.blog}>
      <div className="container">
        <div className={style.blogHeader}>
          <h2 className={style.blogTitle}>Blog</h2>
          <p className={style.blogText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            vitae neque earum nesciunt suscipit accusantium repellat maiores
            enim tempore voluptatibus.
          </p>
        </div>
        <div className="row g-3">
          <div className="col-lg-4 col-md-6">
            <BlogItem
              imgUrl={blogImage}
              stateType="APARTMENT"
              title="Redfin Unveils the Best Canadian  Cities for Biking"
              owner="Alex Morgan"
              date="19 January"
              personImg={personImage}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BlogItem
              imgUrl={blogImage2}
              stateType="HOUSES"
              title="Apartio Helps Get Your Dream & Luxury Space Alexa"
              owner="Nia Watson"
              date="29 January"
              personImg={personImage2}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BlogItem
              imgUrl={blogImage3}
              stateType="COMMERCIAL"
              title=" Housing Markets That Changed the  Most This Decade"
              owner="MILANA KURTZ"
              date="25 January"
              personImg={personImage3}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BlogItem
              imgUrl={blogImage}
              stateType="APARTMENT"
              title="Redfin Unveils the Best Canadian  Cities for Biking"
              owner="Alex Morgan"
              date="19 January"
              personImg={personImage}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BlogItem
              imgUrl={blogImage2}
              stateType="HOUSES"
              title="Apartio Helps Get Your Dream & Luxury Space Alexa"
              owner="Nia Watson"
              date="29 January"
              personImg={personImage2}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BlogItem
              imgUrl={blogImage3}
              stateType="COMMERCIAL"
              title=" Housing Markets That Changed the  Most This Decade"
              owner="MILANA KURTZ"
              date="25 January"
              personImg={personImage3}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BlogItem
              imgUrl={blogImage}
              stateType="APARTMENT"
              title="Redfin Unveils the Best Canadian  Cities for Biking"
              owner="Alex Morgan"
              date="19 January"
              personImg={personImage}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BlogItem
              imgUrl={blogImage2}
              stateType="HOUSES"
              title="Apartio Helps Get Your Dream & Luxury Space Alexa"
              owner="Nia Watson"
              date="29 January"
              personImg={personImage2}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BlogItem
              imgUrl={blogImage3}
              stateType="COMMERCIAL"
              title=" Housing Markets That Changed the  Most This Decade"
              owner="MILANA KURTZ"
              date="25 January"
              personImg={personImage3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
