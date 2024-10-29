const core = require( '@actions/core' );

try
{
  const value = Number( core.getInput( 'value' ) );
  if( value < 3 )
  {
    core.exportVariable( `INPUT_VALUE`, String( value + 1 ) );
    throw new Error( 'Wrong attempt' );
  }
  else
  {
    core.exportVariable( `INPUT_MAIN_VALUE`, '6' );
    console.log( 'Success' );
  }

  core.saveState('post_value', value);
  core.saveState('value', value);
  core.saveState('another', value);
}
catch( error )
{
  core.setFailed( error.message );
}
