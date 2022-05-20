const core = require( '@actions/core' );

try
{
  const value = core.getInput( 'value' );
  const boolDefault = core.getBooleanInput( 'bool_default' );
  const bool = core.getBooleanInput( 'bool' );

  if( !value )
  throw Error( 'Expected option {-value-}' );
  if( boolDefault !== true )
  throw Error( 'Expected default bool value {-bool_default-}' );
  if( bool !== true && bool !== false )
  throw Error( 'Unexpected bool value {-bool-}' );
}
catch( error )
{
  core.setFailed( error.message );
}
