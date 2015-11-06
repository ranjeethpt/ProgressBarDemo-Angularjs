/*-------------------------------------------------------------------------------
* app.js - Written Written by Ranjeeth PT
*
* Module: Open Modal
* Description: The js file is for opening the Modal
* 
*
*------------------------------------------------------------------------------*/

'use strict';
(function() {
  var self = null; 
  var modalInstance;
  // =========================================================================
  // Class: OpenModalClass
  // Used to controls the OpenModalController and related view logic
  // -------------------------------------------------------------------------
  var OpenModalClass = Class.extend({
    $scope : null,
    // -----------------------------------------------------------------------
    // Function: init
    // Used to initialize the defaults
    //
    // Parameters:
    // $scope - provide scope
    // $modal - modal object for popuup.
  init : function($scope,$modal) {
    self = this;
    self.$scope = $scope;
    self.$modal = $modal; 
    self.modalInstance;
  },
    // -----------------------------------------------------------------------
    // Function: open
    // Used to open the modal
    //
    // Parameters:
  open : function(){
   self.modalInstance = self.$modal.open({
    templateUrl: 'js/webUI/progressbar/ProgressBar.html',
    controller: 'ProgressBarCntrl',
    size: 'md'
  });
 }
});

  demoApp.controller('OpenModalCntrl', ['$scope','$modal', OpenModalClass]);
})();
