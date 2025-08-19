import Delete from '../../../resources/images/ic_delete.svg';
import Edit from '../../../resources/images/ic_edit.svg';

let BlogTableRow = ()=>{
    return(    <tr>
                    <td className="blog-category">A</td>
                    <td>A</td>
                    <td className="grey-info">A</td>
                    <td className="grey-info">A</td>
                    <td>
                      <div className="table-options">
                        <div className="table-option">
                          <img src={Edit} alt="" />
                        </div>
                        <div className="table-option">
                          <img src={Delete} alt="" />
                        </div>
                      </div>
                    </td>
                  </tr>);
}
export default BlogTableRow;