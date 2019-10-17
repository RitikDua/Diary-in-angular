var app=angular.module("my",[]);
app.controller("ctrl",function($scope){
	$scope.date=(new Date()).toDateString();
	$scope.time=(new Date()).toLocaleTimeString();
	$scope.files=[{"Name":"","date":"","time":"","data":""}];
	$scope.check="";
	var c=0;
	$scope.show=true;
	$scope.addtitile=function(){
		$scope.check=angular.isString($scope.title);
		if($scope.check==false)
			{$scope.title="untitled"+c;
		c++;}

		$scope.show=!$scope.show;
	
	}
	$scope.save=function(){
			$scope.show=!$scope.show;
		$scope.size=$scope.data.length;
		let obj={
				Name:$scope.title,
				date:$scope.date,
				time:$scope.time,
				data:$scope.data,
				size:$scope.size
		}
		$scope.files.push(obj);
	//$scope.title=" ";
			$scope.title=" ";
		//		date:$scope.date,
	//			time:$scope.time,
	//*		*/

	$scope.data=" ";

	}
	$scope.renametitile=function(){

		if(angular.isString($scope.title)==false)
		{
		$scope.title="untitled"+c;
		c++;
		}

		$scope.show=!$scope.show;
	}
})
