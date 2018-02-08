angular.module('reg')
  .controller('SidebarCtrl', [
    '$rootScope',
    '$scope',
    'settings',
    'Utils',
    'AuthService',
    'Session',
    'EVENT_INFO',
    function($rootScope, $scope, Settings, Utils, AuthService, Session, EVENT_INFO){

      var settings = Settings.data;
      var user = $rootScope.currentUser;

      $scope.EVENT_INFO = EVENT_INFO;

      $scope.pastConfirmation = Utils.isAfter(user.status.confirmBy);

      $scope.logout = function(){
        AuthService.logout();
      };

      $scope.showSidebar = false;
      $scope.toggleSidebar = function(){
        console.log("Clicking things");
        if $scope.showSidebar == false {
           $scope.showSidebar = true;
        }
        if $scope.showSidebar == true {
           $scope.showSidebar = false;
        }
       
      };

//       // oh god jQuery hack
//       $('.item').on('click', function(){
//         $scope.showSidebar = false;
//       });

    }]);
