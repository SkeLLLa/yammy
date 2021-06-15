import { Command, flags } from '@oclif/command';
import { getConfig } from '../cli-helpers';
import cli from 'cli-ux';
import path from 'path';
import { promises as fs } from 'fs';

export interface ICreateArgs {
  name: string;
}

export default class Create extends Command {
  static description = 'create migration file';

  static flags = {
    help: flags.help({ char: 'h' }),
    ext: flags.string({
      description: 'file type',
      default: 'js',
      options: ['js', 'ts'],
    }),
    dir: flags.string({ description: 'migrations directory', char: 'd', env: 'MIGRATIONS_DIR' }),
    config: flags.string({
      description: 'migrations custom config file',
      env: 'MIGRATIONS_CONFIG',
    }),
  };

  static args = [{ name: 'name', required: true }];

  async run(): Promise<void> {
    const { flags, args } = this.parse(Create);
    const { name } = args as ICreateArgs;
    const { root } = this.config;
    cli.action.start('Reading config');
    const config = getConfig(flags.config) || {};
    const dir = flags.dir || config.dir || 'migrations';
    const { ext } = flags;
    const migrationDir = path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir);
    cli.action.stop();

    cli.action.start('Creting migration file');
    const content = await fs.readFile(path.join(root, 'example', `migration.${ext}`));
    const migrationName = `${new Date().getTime()}-${name}.${ext}`;

    await fs.writeFile(path.join(migrationDir, migrationName), content);
    cli.action.stop();
  }
}
