let NewCategory = ()=>{
    return(<section className="content">
          <div className="content-header">
            <span>New Category</span>
          </div>
          <div className="content-body">
            <section className="create-item">
              <form className="create-item_form">
                <div className="create-item_form_content">
                  <section className="create-item_left">
                    <div className="form-group">
                      <label for="blog-title">Category Title</label>
                      <input
                        className="form-input"
                        type="text"
                        name="blog-title"
                        id="blog-title"
                        placeholder="Blog title"
                      />
                    </div>
                    <div className="form-group">
                      <label for="blog-title">Brief info</label>
                      <input
                        type="text"
                        className="form-input"
                        name="publisher-name"
                        id="publisher-name"
                        placeholder="Publisher Name"
                      />
                    </div>
                  </section>
                </div>
                <div className="create-item_form_actions">
                  <button className="form-action" type="reset">Cancel</button>
                  <button className="form-action done-action" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </section>
          </div>
        </section>);
}
export default NewCategory;