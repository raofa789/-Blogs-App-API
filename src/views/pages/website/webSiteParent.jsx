import React, { Fragment } from "react";

let WebSiteParent = () => {
return (<Fragment>
    <header>
      <section>
        <span>BLOGS</span>
        <nav>
          <ul>
            <li><a href="#" class="active-link">Home</a></li>
            <li><a href="#">Trendey Blogs</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
        </nav>
        <button>Join Us</button>
      </section>
      <article>
        <span
          >Lt's Find The Best Trendy Blogs<br />
          To Read.</span>
      </article>
    </header>
            <div className="content-wrapper">
      <section className="content">
        <span>Most Recent</span>
        <article className="blog">
          <section>
            <article>
              <span className="blog-category">Development</span>
              <span className="blog-date">SEPTEMBER 28,2022</span>
            </article>  
            <span className="blog-title"
              >It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
            <p className="blog-brief-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erea.
            </p>
          </section>
          <figure className="blog-image">
            <img src="images/Blog Image.png" alt="image-here" />
          </figure>
        </article>
        <article className="blog">
          <section>
            <article>
              <span className="blog-category">Development</span>
              <span className="blog-date">SEPTEMBER 28,2022</span>
            </article>
            <span className="blog-title"
              >It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
            <p className="blog-brief-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erea.
            </p>
          </section>
          <figure className="blog-image">
            <img src="images/Blog Image.png" alt="image-here" />
          </figure>
        </article>
        <article className="blog">
          <section>
            <article>
              <span className="blog-category">Development</span>
              <span className="blog-date">SEPTEMBER 28,2022</span>
            </article>
            <span className="blog-title"
              >It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
            <p className="blog-brief-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erea.
            </p>
          </section>
          <figure className="blog-image">
            <img src="images/Blog Image.png" alt="image-here" />
          </figure>
        </article>
        <article className="blog">
          <section>
            <article>
              <span className="blog-category">Development</span>
              <span className="blog-date">SEPTEMBER 28,2022</span>
            </article>
            <span className="blog-title"
              >It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
            <p className="blog-brief-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erea.
            </p>
          </section>
          <figure className="blog-image">
            <img src="images/Blog Image.png" alt="image-here" />
          </figure>
        </article>
        <article className="blog">
          <section>
            <article>
              <span className="blog-category">Development</span>
              <span className="blog-date">SEPTEMBER 28,2022</span>
            </article>
            <span className="blog-title"
              >It's Time to Code, Improve Your Coding Skills And Get Jobs</span>
            <p className="blog-brief-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erea.
            </p>
          </section>
          <figure className="blog-image">
            <img src="images/Blog Image.png" alt="image-here" />
          </figure>
        </article>
        <section className="join-us">
          <span>JOIN US</span>
          <span>We Post New Blogs Everyday, Join Us</span>
          <section>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"/>
            <button type="submit">Join Us</button>
          </section>
        </section>
      </section>
    </div>
</Fragment>);
}

export default WebSiteParent;
