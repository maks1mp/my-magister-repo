/**
 * Created by HP-ProBook on 22.01.2017.
 */
app.controller('admin_courses', function($scope, services, $state){
        $scope.add_course = false;

        $scope.course = {
            title: '',
            video: '',
            html: '',
            is_hidden: true
        };
        $scope.add_course_an = function () {
            $scope.add_course ? $scope.add_course = false : $scope.add_course = true;
        };
        $scope.add_to_base = function () {
            console.log($scope.course);
            return;
            if ($scope.course.title) {
                services.createCourse($scope.course);
            }

        };

        function isEmpty(field, len){
            return field.length>len ? '+' : '-';
        }
        services.getCourses().then(function (res) {
            var data = res.data.slice();
            $scope.fullCourses = res.data;
            $scope.courses = data.map(function(course){
                return {
                    title: course.title,
                    video: isEmpty(course.video, 5),
                    html: isEmpty(course.html, 10),
                    is_hidden: !!parseInt(course.is_hidden),
                    id: course.ID
                }
            });
        });
        $scope.editCourse = function(e, course){
            e.preventDefault();
            var active = $scope.fullCourses.filter(function (c) {
                return c.ID === course.id && c.title === course.title;
            });
            if (active)  $state.go('admin_panel.edit_course', {course_data: active[0]});
        }
});