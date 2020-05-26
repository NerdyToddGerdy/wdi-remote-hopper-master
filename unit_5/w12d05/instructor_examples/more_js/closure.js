console.log('closure practice');

// closure with IIFE -- exposes public API
const User = (function() {

  let admin = false;
  let permissionsLevel = 3;

  const toggleAdmin = function() {
    admin = !admin;
    console.log(admin);
  }

  const reset = function() {
    permissionsLevel = 0;
  }

  const setPermissions = function(num) {
    reset();
    console.log('reset permissions: ' + permissionsLevel);
    permissionsLevel = num;
    console.log(permissionsLevel);
  }

  const publicApi = {
    toggleAdmin: toggleAdmin,
    setPermissions: setPermissions
  }

  return publicApi;

})();


User.toggleAdmin();
User.setPermissions(9);













