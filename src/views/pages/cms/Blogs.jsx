import { Link, NavLink } from 'react-router';
import BlogsCss from '../../../resources/css/blogs-style.module.css';
import BlogTableRow from './BlogTableRow';
let Blogs = ()=>{
return  <>
<section className="content">
          <div className="content-header">
            <span>All Blogs</span>
            <div className="content-header-options">
              <div className="content-header-options_filter">
                <img src="images/btn_Filter.svg" alt="" />
              </div>
              <NavLink to='/cms/blogs/create' className="header-button">Create New Blog</NavLink>
            </div>
          </div>
          <div className="content-body">
            <div className="content-body_table">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Blog title</th>
                    <th>Due date</th>
                    <th>Publisher</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
              <BlogTableRow />
              <BlogTableRow />
              <BlogTableRow />
              <BlogTableRow />    
                </tbody>
              </table>
            </div>
          </div>
        </section>
</>
}
export default Blogs;