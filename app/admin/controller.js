/**
 * Created by HP-ProBook on 22.01.2017.
 */
app.controller('admin', admin);
admin.$injector = ['$scope','$rootScope','$stateParams','$state'];
function admin($scope, $rootScope, $stateParams, $state, $location){
    $scope.data = $stateParams;

    $scope.pages = {
        main: false,
        courses: false,
        tests: false
    };

    $rootScope.$on('$locationChangeSuccess', function(event){
        var url = $location.url(),
            params = $location.search();
        var page = url.split('/'), ln = page.length - 1;
        for (i in $scope.pages) {
            $scope.pages[i] = false;
        }
        $scope.pages[page[ln]] = true;
    });

    $scope.init = function(){

    };

    if ($scope.data.email) {
        $scope.init();
    } else {
        //$state.go('login');
    }
}