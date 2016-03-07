"use strict";angular.module("alphaBankApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"})}]),angular.module("alphaBankApp").controller("MainCtrl",function(){}),angular.module("alphaBankApp").controller("SidebarCtrl",["$scope",function(a){a.links=[{label:"Dashboard",icon:"glyphicon-th-large",active:!0},{label:"Page 2",icon:"glyphicon-home"},{label:"Page 3",icon:"glyphicon-euro"},{label:"Page 4",icon:"glyphicon-transfer"},{label:"Page 5",icon:"glyphicon-calendar"}]}]),angular.module("alphaBankApp").controller("Table1Ctrl",["$scope",function(a){a.title="Table 1",a.price=43241.4356,a.items=[{id:"GR4102313210381093",price1:10232.22,price2:15333.6421},{id:"GR4102313210381093",price1:10132.22,price2:11333.6421},{id:"GR4102313210381093",price1:15232.22,price2:5333.6421},{id:"GR4102313210381093",price1:11232.22,price2:15783.6421},{id:"GR4102313210381093",price1:14232.22,price2:13277.6421},{id:"GR4102313210381093",price1:11232.22,price2:13345.6421},{id:"GR4102313210381093",price1:12202.22,price2:12205.6421},{id:"GR4102313210381093",price1:9232.22,price2:14463.6421}]}]),angular.module("alphaBankApp").controller("Table2Ctrl",["$scope",function(a){a.title="Table 2",a.points=[{label:"Membership Reward Points",value:13e3},{label:"Bonus Points",value:36e3}],a.items=[{image:"images/card1.f8048dd0.png",title:"Platinum Luxury Card American Express",id:"GR4102313210381093",price1:79.5,price2:15333.6421},{image:"images/card2.39c7a948.png",title:"Enter Bonus American Express",id:"GR4102313210381093",price1:79.5,price2:11333.6421}]}]),angular.module("alphaBankApp").run(["$templateCache",function(a){a.put("views/main.html",'<nav class="sidebar hidden-xs" ng-controller="SidebarCtrl"> <li ng-repeat="link in links"> <a ng-href="#/" ng-class="{active: link.active}"> <span ng-class="\'glyphicon \' + link.icon"></span> <span class="label">{{link.label}}</span> </a> </li> </nav> <div class="panel"> <div class="toolbar"> <div class="title"> <span class="glyphicon glyphicon-leaf"></span> <h1><a ng-href="#/">Alpha Bank</a></h1> </div> <a class="user" ng-href="#/"> Diego Haz <span class="glyphicon glyphicon-user"></span> </a> <a class="comment" ng-href="#/"> <span class="glyphicon glyphicon-comment"></span> <span class="badge">12</span> </a> <a class="glyphicon glyphicon-cog" ng-href="#/"></a> </div> <div class="banner"> <div class="text"> <p>New</p> <h2>Web Banking</h2> <a ng-href="#/">Take the tour <span class="glyphicon glyphicon-circle-arrow-right"></span></a> </div> </div> <div class="section blue-section"> <div class="light"> <div class="table-wrapper" ng-controller="Table1Ctrl"> <table> <thead> <tr> <td>{{title}}</td> <td></td> <td>{{price | currency}}</td> </tr> </thead> <tbody> <tr ng-repeat="item in items"> <td> <div>Label</div> <div>{{item.id}}</div> </td> <td> <div class="head-value">Label</div> <div class="value">{{item.price1 | currency}}</div> </td> <td> <div class="head-value">Label</div> <div class="value">{{item.price2 | currency}}</div> </td> <td> <a ng-href="#/" class="glyphicon glyphicon-menu-hamburger"></a> </td> </tr> </tbody> </table> </div> </div> <div class="dark"> <div class="table-wrapper" ng-controller="Table2Ctrl"> <table> <thead> <tr> <td>{{title}}</td> </tr> </thead> <tbody> <tr ng-repeat="item in items"> <td> <img src="{{item.image}}" width="70"> </td> <td> <div>{{item.title}}</div> <div>{{item.id}}</div> </td> <td> <div class="head-value">Label</div> <div class="value">{{item.price1 | currency}}</div> </td> <td> <div class="head-value">Label</div> <div class="value">{{item.price2 | currency}}</div> </td> <td> <a ng-href="#/" class="glyphicon glyphicon-menu-hamburger"></a> </td> </tr> </tbody> </table> <div class="points" ng-repeat="point in points"> <div class="points-label">{{point.label}}</div> <div class="points-value">{{point.value | number}}</div> </div> </div> </div> </div> </div>')}]);