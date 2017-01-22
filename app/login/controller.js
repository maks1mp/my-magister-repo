/**
 * Created by HP-ProBook on 22.01.2017.
 */
app.controller('login', login);
login.$injector = ['$scope', 'services', '$state'];
function login($scope, services, $state){

    $scope.data = {
        email: 'root@gmail.com',
        password: '12314'
    };
    $scope.openAdmin = function(){
        $state.go('admin_panel.main', $scope.data);

    };
    $scope.break = function () {

    };
    $scope.login = function(){
       if ($scope.data.email && $scope.data.password) {
           services.login($scope.data).then(function (res) {
               res.data.status ? $scope.openAdmin() : $scope.break();
           })
       }
    };
}