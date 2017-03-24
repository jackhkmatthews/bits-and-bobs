angular
  .module('fundraiser')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [];
function MainCtrl(){
  const vm = this;
  const outerCircleArea = getArea(150);

  vm.fund = {
    target: 100,
    raised: 22,
    remaining: 78
  };

  vm.innerCircleDiameter = getInnerCircleDiameter(vm.fund.raised, vm.fund.target, outerCircleArea);

  vm.innerCircleStyle = {
    width: vm.innerCircleDiameter,
    height: vm.innerCircleDiameter
  };

  vm.incrementRaised = incrementRaised;

  function getArea(radius){
    return Math.floor(Math.PI * (Math.pow(radius, 2)));
  }

  function getInnerCircleDiameter(raised, target, outerCircleArea){
    const percentage = (raised/target);
    const innerCircleArea = percentage * outerCircleArea;
    const innerCircleRadius = getRadius(innerCircleArea);
    const innerCircleDiameter = innerCircleRadius * 2;
    console.log(outerCircleArea, percentage, innerCircleArea, innerCircleRadius, innerCircleDiameter);
    return innerCircleDiameter;
  }

  function getRadius(area){
    return Math.pow((area / Math.PI), 0.5);
  }

  function incrementRaised(amount){
    if (vm.fund.raised === vm.fund.target) return;
    if ((vm.fund.raised + amount) >= vm.fund.target) {
      vm.fund.raised = vm.fund.target;
      vm.innerCircleDiameter = 300;
    } else {
      vm.fund.raised += amount;
      vm.innerCircleDiameter = getInnerCircleDiameter(vm.fund.raised,vm.fund.target, outerCircleArea);
    }
  }

}
