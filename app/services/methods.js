/**
 * Created by HP-ProBook on 22.01.2017.
 */
app.factory('services', function($http){
    var login = function(data){
        return $http({
            url: '/adminlogin',
            data: data,
            method: 'POST'
        });
    };

    var getCourses = function(){
        return $http({
            url: '/get_courses',
            method: 'GET'
        })
    };

    var createCourse = function (data) {
        return $http({
            url: '/create_course',
            method: 'POST',
            data: data
        });
    };

    return {
        login: login,
        getCourses: getCourses,
        createCourse: createCourse
    }
});