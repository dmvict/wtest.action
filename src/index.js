const core = require( '@actions/core' );

try
{
  const value = Number( core.getInput( 'value' ) );
  if( value !== 3 )
  {
    core.exportVariable( `INPUT_VALUE`, String( value + 1 ) );
    throw new Error( 'Wrong attempt' );
  }
  else
  {
    console.log( 'Success' );
  }
}
catch( error )
{
  core.setFailed( error.message );
}
