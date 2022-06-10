const core = require( '@actions/core' );

try
{
  const environment = core.getInput( 'environment' );
  if( environment !== 'test' )
  throw Error( 'Unexpected value of environment variable `TEST`' );

  const github_string = core.getInput( 'github_string' );
  if( github_string !== '90' )
  throw Error( 'Unexpected value of github context value `retention_days`' );

  const github_object = core.getInput( 'github_object' );
  if( github_object === undefined )
  throw Error( 'Unexpected value of github context value `event.ref`' );

  const exp_with_env = core.getBooleanInput( 'exp_with_env' );
  if( !exp_with_env )
  throw Error( 'Unexpected value of environment variable `TEST`' );

  const exp_with_env_and_github = core.getBooleanInput( 'exp_with_env_and_github' );
  if( exp_with_env_and_github )
  throw Error( 'Environment variable `TEST` should be differ to github context variable `retention_days`' );
}
catch( error )
{
  core.setFailed( error.message );
}
