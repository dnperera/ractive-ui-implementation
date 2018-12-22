module.exports = function() { return `
<form>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter Your Name" />
  </div>
  <div class="form-group">
    <input type="email" class="form-control" placeholder="Enter email" />
  </div>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter Your City" />
  </div>
  <input type="submit" class="btn btn-success" value="Submit" />
</form>
<hr />
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col"></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>01</td>
      <td>Denith Perera</td>
      <td>denith@gmail.com</td>
      <td>San Rafael</td>
      <td>
        <button class="btn btn-sm btn-primary">Edit</button>
        <button class="btn btn-sm btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
`; };
