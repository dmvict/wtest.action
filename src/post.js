const core = require( '@actions/core' );

try
{
  const mainValue = Number( core.getInput( 'main_value' ) );
  if( mainValue !== 6 )
  throw new Error( 'Main script set no valid value {-main_value-}.' )
}
catch( error )
{
  core.setFailed( error.message );
}
