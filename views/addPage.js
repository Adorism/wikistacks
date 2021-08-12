const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    <div>
      <label for="author">Author: </label>
      <input type="text" id="author" name="author" />
    </div>
    
    <div>
      <label for="email">Email: </label>
      <input type="email" id="email" name="email" />
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>
      <label for="content">Content: </label>
      <textarea id="content" name="content"></textarea>
    </div>

    <div>
      <input type="radio" id="open" name="status" value="open" />
      <label for="open">Open</label>
    </div>

    <div>
      <input type="radio" id="closed" name="status" value="closed" />
      <label for="closed">Closed</label>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);