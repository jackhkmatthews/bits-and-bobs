"use strict";
var mock_heros_1 = require("./mock-heros");
// @Injectable()
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(mock_heros_1.HEROES);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getHeroes()); }, 0);
        });
    };
    HeroService.prototype.getHeroSlowly = function (id) {
        return this.getHeroesSlowly()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map