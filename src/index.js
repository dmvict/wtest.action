const core = require( '@actions/core' );

try
{
  core.setOutput( 'test', 'foo_bar_baz' );
}
catch( error )
{
  core.setFailed( error.message );
}
