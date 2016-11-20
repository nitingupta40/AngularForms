var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

angularFormsApp.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "app/Home.html",
        controller: "HomeController"
    })
    .when("/newEmployeeForm", {
        templateUrl: 'app/EmployeeForm/employeeFormTemplate.html',
        controller: "employeeFormController"
    })
    .when("/updateEmployeeForm/:id", {
        templateUrl: 'app/EmployeeForm/employeeFormTemplate.html',
        controller: "employeeFormController"
    })
    .otherwise({
        redirectTo: "/home"
    });
});