angular
  .module('fundraiser')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['Fund'];
function MainCtrl(Fund){
  const vm = this;
  const outerCircleDiameter = 300;
  const outerCircleArea = getArea(150);

  Fund
    .query()
    .$promise
    .then(function(response){
      vm.fund = response.fund;
      console.log(vm.fund);
      vm.innerCircleDiameter = getInnerCircleDiameter(vm.fund.raised, vm.fund.target, outerCircleArea);
      vm.innerCircleStyle = {
        width: vm.innerCircleDiameter,
        height: vm.innerCircleDiameter
      };
    });

  //exexuted on click of donation button
  vm.incrementAmountRaised = incrementAmountRaised;

  vm.resetFund = resetFund;


  /////UTILITY FUNCTIONS/////

  function getArea(radius){
    return Math.floor(Math.PI * (Math.pow(radius, 2)));
  }

  function getRadius(area){
    return Math.pow((area / Math.PI), 0.5);
  }

  function getDiameter(area){
    return getRadius(area) * 2;
  }

  function getInnerCircleDiameter(raised, target, outerCircleArea){
    const innerCircleArea = (raised/target) * outerCircleArea;
    return getDiameter(innerCircleArea);
  }

  function incrementAmountRaised(amount){
    if (vm.fund.raised === vm.fund.target) return;
    if ((vm.fund.raised + amount) >= vm.fund.target) {
      vm.fund.raised = vm.fund.target;
      vm.fund.remaining = 0;
      vm.innerCircleDiameter = outerCircleDiameter;
    } else {
      vm.fund.raised += amount;
      vm.fund.remaining -= amount;
      vm.innerCircleDiameter = getInnerCircleDiameter(vm.fund.raised,vm.fund.target, outerCircleArea);
    }
    console.log(vm.fund);
    Fund
      .update({id: vm.fund._id}, vm.fund);
  }

  function resetFund(){
    vm.fund.raised = 0;
    vm.fund.remaining = 0;
    vm.innerCircleDiameter = getInnerCircleDiameter(vm.fund.raised,vm.fund.target, outerCircleArea);
    Fund
      .update({id: vm.fund._id}, vm.fund);
  }
}
