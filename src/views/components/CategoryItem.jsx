import TimeIcon from '../../resources/images/ic_time.svg';
import DeleteIcon from '../../resources/images/ic_delete.svg';

let CategoryItem =()=>{
    return(<article className="category">
                <div className="category-header">
                  <span>Design</span>
                  <div className="table-option">
                    <img src={DeleteIcon} alt="" />
                  </div>
                </div>
                <span>Blog No.</span>
                <div className="category-footer">
                  <img src={TimeIcon} alt="" />
                  <span>23 Blog</span>
                </div>
              </article>);
}
export default CategoryItem;