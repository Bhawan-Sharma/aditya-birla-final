$(document).ready(function() {
    var isOpen = false;
  
    $('.modal').on('show.bs.modal', function() {
      if (isOpen) {
        return false; // Prevent opening multiple popups
      }
      isOpen = true;
  
      // Hide other open modals
      $('.modal').not(this).modal('hide');
    });
  
    $('.modal').on('hidden.bs.modal', function() {
      isOpen = false;
    });
  });