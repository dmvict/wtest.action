const core = require( '@actions/core' );

try
{
  const status = core.getInput( 'status' );
  if( status !== 'success' )
  throw Error( 'Unexpected value of job status' );

  const container_network = core.getInput( 'container_network' );
  if( container_network.length === 0 )
  throw Error( 'Unexpected container network' );

  const services_postgres_network = core.getInput( 'services_postgres_network' );
  if( services_postgres_network.length === 0 )
  throw Error( 'Unexpected sevice `postgres` network' );

  if( container_network !== services_postgres_network )
  throw Error( 'Container network and sevice `postgres` network should be equal.' );
}
catch( error )
{
  core.setFailed( error.message );
}
