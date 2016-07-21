angular.module('main', ['br.cidades.estados']).controller('Ctrl', function($scope, brCidadesEstados){
	$scope.estados = brCidadesEstados.estados;
	$scope.e = ''; //Estado
	$scope.c = []; //cidade

	$scope.buscandoCidades = function(){
		//recebe a sigla do estado selecionado e busca as cidades guardando no $scope.c
		$scope.c = brCidadesEstados.buscarCidadesPorSigla($scope.e);
		console.log( brCidadesEstados.buscarCidadesPorSigla($scope.e) );
	}
});