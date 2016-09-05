# br-cidades-estados
Utilitário AngularJS - Cidades e Estados brasileiros

### Install

**With Bower**
* Install the dependency:

   ```javascript
   bower install br-cidades-estados --save
   ```
* Include module dependency:

   ```javascript
   angular.module('yourApp', ['br.cidades.estados']);
   ```

### How To Use

1. **Add enter plugin after your AngularJS.**

   ```html
   <script src="angular.min.js"></script>
   <script src="cidades.estados.min.js"></script>
   ```
2. **Add enter module dependency to your app.**

   ```javascript
   angular.module('yourApp', ['br.cidades.estados']);
   ```
3. **Using in javascript and html.**

   ```javascript
    angular.module('yourApp', ['br.cidades.estados']).controller('Controller', function($scope, brCidadesEstados){
	$scope.estados = brCidadesEstados.estados;

	$scope.buscarCidadesPorSigla = function(sigla){
            $scope.cidades = brCidadesEstados.buscarCidadesPorSigla(sigla);
	}
    });
   ```

   ```html
    <select ng-model="e" ng-options="estado.sigla as estado.nome for estado in estados" ng-change="buscarCidadesPorSigla(estado.sigla)">
        <option value="">Escolha um Estado</option>
    </select>

    <select ng-model="cidade_escolhida" ng-options="cidade for cidade in cidades">
        <option value="">Escolha uma Cidade</option>
    </select>
   ```

### How to release

Use gulp to bump version, build and create a tag. Then push to GitHub:

gulp release [--patch|--minor|--major]
git push --tags origin master # push everything to GitHub