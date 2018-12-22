import Ractive from "ractive";
import mainTemplate from "./js/templates/main";
import usersTemplate from "./js/templates/users";

//Define component
var UserList = Ractive.extend({
  isolated: true,
  template: usersTemplate,
  oninit: function() {
    console.log("User List component initialize ....");
  }
});

var ractive = new Ractive({
  el: "#app",
  template: mainTemplate,
  components: {
    userList: UserList
  },
  data: {
    title: "Welcome to Ractive Responsive App"
  }
});
