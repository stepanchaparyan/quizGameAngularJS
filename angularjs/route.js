<script>
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/london", {
        templateUrl : "test1.html"
    })
    .when("/paris", {
        templateUrl : "test2.htm"
    });
});
</script>
