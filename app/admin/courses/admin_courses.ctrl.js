/**
 * Created by HP-ProBook on 22.01.2017.
 */
app.controller('admin_courses', function($scope, services){

        //services.createCourse({
        //    title: 'Новий курс тест',
        //    video: 'link',
        //    html: 'опис нового курсу опис нового курсу опис нового курсу опис нового курсу опис нового курсу',
        //    is_hidden: true
        //});
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
            if (active)  $state.go('edit_course', {data: active[0]});
        }
});