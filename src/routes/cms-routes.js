import {   Route, Routes } from "react-router";
import CMSParent from "../views/pages/cms/CMSParent";
import Blogs from "../views/pages/cms/Blogs";
import Categories from "../views/pages/cms/Categories";
import NewBlog from "../views/pages/cms/newBlog";
import NewCategory from "../views/pages/cms/NewCategory";

let CMSRoutes = () =>{
    return (<Routes>
<Route path="/cms" element={<CMSParent /> }>
<Route path="blogs" element={<Blogs />} />
<Route path="categories" element={<Categories />} />
<Route path="blog/create" element={<NewBlog />} />
<Route path="categories/create" element={<NewCategory />} />

 </Route>
</Routes>);

}
export default CMSRoutes;