import { Command, flags } from '@oclif/command';
import { getConfig } from '../cli-helpers';
import cli from 'cli-ux';
import Migrate from '..';

export default class Status extends Command {
  static description = 'get migration status';

  static flags = {
    help: flags.help({ char: 'h' }),
    uri: flags.string({ description: 'mongo connection string', char: 'u', env: 'MONGO_URL' }),
    dir: flags.string({ description: 'migrations directory', char: 'd', env: 'MIGRATIONS_DIR' }),
    changelog: flags.string({
      description: 'migrations changelog collection',
      env: 'MIGRATIONS_CHANGELOG',
    }),
    config: flags.string({
      description: 'migrations custom config file',
      env: 'MIGRATIONS_CONFIG',
    }),
  };

  async run(): Promise<void> {
    const { flags } = this.parse(Status);
    cli.action.start('Reading config');
    const config = getConfig(flags.config) || {};
    config.uri = flags.uri || config.uri || 'mongo://localhost';
    config.changelog = flags.changelog || config.changelog || '__changelog__';
    config.dir = flags.dir || config.dir || 'migrations';
    cli.action.stop();
    cli.action.start('Connecting to DB');
    const migrate = new Migrate(
      { uri: config.uri, options: config.options },
      { autoClose: true, changelog: config.changelog, dir: config.dir }
    );
    await migrate.init();
    cli.action.stop();

    cli.table(
      migrate.status,
      {
        fileName: {
          header: 'Migration file',
          minWidth: 10,
        },
        applied: {
          header: 'Applied',
          get: (row): string => (row.applied ? 'Y' : 'N'),
        },
        appliedAt: {
          header: 'Applied Date',
          get: (row): string => (row.appliedAt ? row.appliedAt.toISOString() : '-'),
        },
      },
      { sort: 'fileName' }
    );

    await migrate.close();
  }
}
