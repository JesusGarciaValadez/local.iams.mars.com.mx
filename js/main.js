$( function() {

  $( 'aside').on( 'click', 'input[type="checkbox"]', function( event ) {
    event.preventDefault();
    event.stopPropagation();

    $( event.currentTarget ).ancestor( 'aside' );
  } );
} );