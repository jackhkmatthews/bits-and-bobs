angular
  .module('fundraiser')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['Fund'];
function MainCtrl(Fund){
  const vm = this;

  Fund
    .query()
    .$promise
    .then(function(response){
      vm.fund = response.fund;
    });

  //executed on click of donation button
  vm.incrementAmountRaised = incrementAmountRaised;

  //executed on click of resset button
  vm.resetFund = resetFund;


  /////UTILITY FUNCTIONS/////

  function incrementAmountRaised(amount){
    if (vm.fund.raised === vm.fund.target) return;
    if ((vm.fund.raised + amount) >= vm.fund.target) {
      vm.fund.raised = vm.fund.target;
      vm.fund.remaining = 0;
    } else {
      vm.fund.raised += amount;
      vm.fund.remaining -= amount;
    }
    Fund
      .update({id: vm.fund._id}, vm.fund);
  }

  function resetFund(){
    vm.fund.raised = 0;
    vm.fund.remaining = 0;
    Fund
      .update({id: vm.fund._id}, vm.fund);
  }

  vm.getNumber = function(num) {
    return new Array(num);
  };
}
