const core = require( '@actions/core' );

try
{
  debugger;
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
  debugger;
  core.setFailed( error.message );
}
