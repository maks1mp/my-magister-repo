/**
 * Created by HP-ProBook on 22.01.2017.
 */
app.controller('admin_tests', function($scope, services, $state){
    services.getCourses().then(function (res) {
        $scope.courses = res.data.map(function (item) {
            return {
                ID: item.ID,
                title: item.title,
            }
        });
    });

    $scope.add_test = function(e,course){
        e.preventDefault();
        $state.go('admin_panel.create_tests', {test_for: course});
    }
});