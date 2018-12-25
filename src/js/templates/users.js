module.exports = function() { return `
<form on-submit="addUser">

  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter Your Name" value={{name}} />
  </div>
  <div class="form-group">
    <input type="email" class="form-control" placeholder="Enter email" value={{email}} />
  </div>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter Your City" value={{city}} />
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

    {{#each users:i}}
    <tr>
      <td>{{i+1}}</td>
      <td>{{ name }}</td>
      <td>{{ email }}</td>
      <td>{{ city }}</td>
      <td>
        <button class="btn btn-sm btn-primary" on-click="['editUser',i]">Edit</button>
        <button class="btn btn-sm btn-danger" on-click="['deleteUser',i]">Delete</button>
      </td>
    </tr>
    {{/each}}
  </tbody>
</table>
`; };