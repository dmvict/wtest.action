const core = require( '@actions/core' );

try
{
  const value = Number( core.getInput( 'post_value' ) );
  if( !value )
  throw new Error( 'The post value {-post_value-} doesn\'t exist.' )
  core.info(Object.keys(process.env));
}
catch( error )
{
  core.setFailed( error.message );
}
