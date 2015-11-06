/*-------------------------------------------------------------------------------
* ProgressBarController.js - Written Written by Ranjeeth PT
*
* Module: ProgressBar module
* Description: The js file is for creating the progress bar and all business logic related
* progressbar demo.
* 
*
*------------------------------------------------------------------------------*/

'use strict';
(function() {
    var self = null; 
  // =========================================================================
  // Class: ProgressBarClass
  // Used to controls the ProgressBarController and related view logic
  // -------------------------------------------------------------------------
  var ProgressBarClass = Class.extend({
    $scope : null,
    // -----------------------------------------------------------------------
    // Function: init
    // Used to initialize the defaults
    //
    // Parameters:
    // $scope - provide scope
    init : function($scope) {
        self = this;
        self.$scope = $scope;
        self.progressBarDrpDwn="1";
        self.setProgessBar1();
        self.setProgessBar2();
        self.setProgessBar3();
    },
    // -----------------------------------------------------------------------
    // Function: getType
    // Used to get the type for applying css. 
    //
    // Parameters:
    // value - progress bar value.
    getType : function(value){
        if (value < 50) {
            return 'success';
        } else if (value < 75) {
            return 'info';
        } else if (value < 100) {
            return 'warning';
        } else {
            return 'danger';
        }
    },
    // -----------------------------------------------------------------------
    // Function: getWarning
    // Used to check if warning message should be shown or not. 
    //
    // Parameters:
    // type - progress bar type.
    // return - true or false
    getWarning : function(type){
        return (type === 'danger' || type === 'warning');
    },
    // -----------------------------------------------------------------------
    // Function: setProgessBar1
    // Initialise Progress Bar 1. 
    //
    // Parameters:
    setProgessBar1 : function(){
        self.value1 = 25;
        self.type1 = self.getType(self.value1);
        self.showWarning1 = self.getWarning(self.type1);
        self.dynamic1 = self.value1;
    },
    // -----------------------------------------------------------------------
    // Function: setProgessBar2
    // Initialise Progress Bar 2. 
    //
    // Parameters:
    setProgessBar2 : function(){
        self.value2 = 50;
        self.type2 = self.getType(self.value2);
        self.showWarning2 = self.getWarning(self.type2);
        self.dynamic2 = self.value2;
    },
    // -----------------------------------------------------------------------
    // Function: setProgessBar3
    // Initialise Progress Bar 3. 
    //
    // Parameters:
    setProgessBar3 : function(){
        self.value3 = 75;
        self.type3 = self.getType(self.value3);
        self.showWarning3 = self.getWarning(self.type3);
        self.dynamic3 = self.value3;
    },
    // -----------------------------------------------------------------------
    // Function: changeProgressBar
    // Main function to set progress bar changing value. 
    //
    // Parameters:Value - Progress bar value.
    changeProgressBar : function(changeValue){
        var temp;
        console.log(self.progressBarDrpDwn);
        if (self.progressBarDrpDwn === "1") {
            temp = self.value1 + changeValue;
            self.value1 = (temp<=0?0:temp);
            self.dynamic1 = self.value1;
            self.type1 = self.getType(self.value1);
            self.showWarning1 = self.getWarning(self.type1);
        }else if (self.progressBarDrpDwn === "2") {
            temp = self.value2 + changeValue;
            self.value2 = (temp<=0?0:temp);
            self.dynamic2 = self.value2;
            self.type2 = self.getType(self.value2);
            self.showWarning2 = self.getWarning(self.type2);
        }else if (self.progressBarDrpDwn === "3") {
            temp = self.value3 + changeValue;
            self.value3 = (temp<=0?0:temp);
            self.dynamic3 = self.value3;
            self.type3 = self.getType(self.value3);
            self.showWarning3 = self.getWarning(self.type3);
        };
        console.log(changeValue);
    }
});

demoApp.controller('ProgressBarCntrl', ['$scope',ProgressBarClass]);
})();
