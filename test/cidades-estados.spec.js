describe('Tests on br.cidades.estados', function () {

    var $compile;
    var $rootScope;
    var brCidadesEstados;
    var $filter;

    beforeEach(function () {
        module('br.cidades.estados');
        inject(function (_$compile_, _$rootScope_, _brCidadesEstados_, _$filter_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            brCidadesEstados = _brCidadesEstados_;
            $filter = _$filter_;
        });
    });

    it('Should bring cities of the state passed by parameter', function () {
        var a = brCidadesEstados.buscarCidadesPorSigla('SP');

        expect(a.length).toBe(645);
    });
    
    it('Should bring cities of the state passed by parameter', function () {
        var sp = $filter('descricaoEstado')('SP');
        var sc = $filter('descricaoEstado')('SC');

        expect(sp).toBe('São Paulo');
        expect(sc).toBe('Santa Catarina');
    });
});