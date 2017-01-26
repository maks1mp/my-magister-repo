/**
 * Created by HP-ProBook on 22.01.2017.
 */
var app = angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $qProvider) {
        $qProvider.errorOnUnhandledRejections(false);

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/app/login/tpl.html',
                controller: 'login'
            })
            .state('admin_panel', {
                url: '/admin_panel',
                templateUrl: '/app/admin/tpl.html',
                controller: 'admin',
                params: {
                    email: null,
                    password: null
                }
            })
            .state('admin_panel.main', {
                url: '/main',
                views: {
                    'main@admin_panel': {
                        templateUrl: '/app/admin/main/tpl.html',
                        controller: 'admin_main'
                    }
                }
            })
            .state('admin_panel.courses', {
                url: '/courses',
                views: {
                    'main@admin_panel': {
                        templateUrl: '/app/admin/courses/tpl.html',
                        controller: 'admin_courses'
                    }
                }
            })
            .state('admin_panel.tests', {
                url: '/tests',
                views: {
                    'main@admin_panel': {
                        templateUrl: '/app/admin/tests/tpl.html',
                        controller: 'admin_tests'
                    }
                }
            })
            .state('admin_panel.edit_course', {
                url: '/edit_course',
                views: {
                    'main@admin_panel': {
                        templateUrl: '/app/admin/course_edit/tpl.html',
                        controller: 'course_editor'
                    }
                },
                params: {
                    course_data: null
                }
            })
    });
