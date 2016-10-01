var app = angular.module('website', ['ui.router']); 

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider.state('home', {
    	views : {
    		'mainView' : {
    			template: '<h1>hello</h1>'
    		}
    	},
        url: '/home'       
    });
});