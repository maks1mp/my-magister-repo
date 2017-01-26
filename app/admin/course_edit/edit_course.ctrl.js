/**
 * Created by HP-ProBook on 26.01.2017.
 */
app.controller('course_editor', course_editor);

function course_editor($scope, $stateParams, services, $timeout){
    $scope.course = $stateParams.course_data;

    $scope.back = function(){
        window.history.back();
    };

    if (!$scope.course) {
        $scope.back();
    } else {
        $scope.course.is_hidden = !!parseInt($scope.course.is_hidden);
    }

    $scope.save = function(){
        var to_change = angular.copy($scope.course);
        to_change.is_hidden ? to_change.is_hidden = '1': to_change.is_hidden = '0';

        services.editCourse(to_change).then(function(res){
            if (res.data.status) {
                $scope.message = 'Операція успішна';
            } else {
                $scope.message = 'Операція не здійснена, спробуйте пізніше';
            }
            $timeout(function(){
                $scope.message = null;
            }, 5000);
        });
    }
}