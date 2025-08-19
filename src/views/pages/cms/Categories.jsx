import { NavLink } from "react-router";
import CategoryItem from "../../components/CategoryItem";

// import '../../../resources/css/categories-style.module.css';
let Categories = ()=>{
    return (        
    <section className="content">
          <div className="content-header">
            <span>All Categories</span>
            <div className="content-header-options">
              <div className="content-header-options_filter">
                <img src="images/btn_Filter.svg" alt="" />
              </div>
              <NavLink to="/cms/blogs/create" className= "header-button">Create New Category</NavLink>
            </div>
          </div>
          <div className="content-body">
            <section className="all-categories">
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem />
              <CategoryItem /> 
            </section>
          </div>
        </section>
        );
}
export default Categories ; 