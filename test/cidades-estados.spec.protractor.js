describe('br.cidades.estados', function () {
    beforeEach(function () {
        browser.get('demo/index.html');
    });

    it('Should be with the initial value', function () {
        var state = element(by.id('span-state'));
        var city = element(by.id('span-city'));

        expect(state.getText()).toBe('State:');
        expect(city.getText()).toBe('City:');
    });
    
    it('Should select state and city', function () {
        var enterInput = element(by.id('select-state'));
        enterInput.click();
        var items = element.all(by.repeater('state in vm.states'));
        items.get(23).click();
        
        var items = element.all(by.repeater('city in vm.cities'));
        items.get(77).click();

        var state = element(by.id('span-state'));
        var city = element(by.id('span-city'));
        
        expect(state.getText()).toBe('State: Santa Catarina');
        expect(city.getText()).toBe('City: Criciúma');
    });
    
    it('Should change selection the state and city', function () {
        var enterInput = element(by.id('select-state'));
        enterInput.click();
        var items = element.all(by.repeater('state in vm.states'));
        items.get(23).click();
        
        var items = element.all(by.repeater('city in vm.cities'));
        items.get(77).click();

        var state = element(by.id('span-state'));
        
        expect(state.getText()).toBe('State: Santa Catarina');
        
        var items = element.all(by.repeater('state in vm.states'));
        items.get(24).click();
        
        var state = element(by.id('span-state'));
        
        expect(state.getText()).toBe('State: São Paulo');
        
        var items = element.all(by.repeater('city in vm.cities'));
        items.get(0).click();
        
        var state = element(by.id('span-state'));
        var city = element(by.id('span-city'));
        
        expect(state.getText()).toBe('State: São Paulo');
        expect(city.getText()).toBe('City: São Paulo');
    });
});