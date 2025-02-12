/**
 * Option interface for CTIX
 */
export interface ICTIXOptions {
  /**
   * tsconfig.json path: you must pass path with filename, like this "./tsconfig.json"
   * * only work root directory or cli parameter
   * @mode all
   * @default `${process.cwd()}${path.sep}tsconfig.json`
   */
  project: string;

  /**
   * add newline on EOF
   * @mode create, single
   * @default true
   */
  addNewline: boolean;

  /**
   * add semicolon on every export statement
   * @mode create, single
   * @default true
   */
  useSemicolon: boolean;

  /**
   * timestamp write on ctix comment right-side, only works in useComment option set true
   * @mode create, single
   * @default false
   */
  useTimestamp: boolean;

  /**
   * add ctix comment at first line of creted index.ts file, that remark created from ctix
   * @mode create, single
   * @default false
   */
  useComment: boolean;

  /**
   * quote mark " or '
   * @mode create, single
   * @default '
   */
  quote: string;

  /**
   * display more detailed log
   * * only work root directory or cli parameter
   * @mode all
   * @default false
   */
  verbose: boolean;

  /**
   * created backup file if exists index.ts file already in directory
   * @mode create, single
   * @default true
   */
  useBackupFile: boolean;

  /**
   * Export filename, if you not pass this field that use "index.ts" or "index.d.ts"
   * @mode create, single, clean
   * @default true
   */
  exportFilename: string;

  /**
   * Output directory. It works only single mode.
   * @mode single
   * @default true
   */
  output: string;

  /**
   * Only work single file generation mode. use rootDir configuration in tsconfig.json.
   * Export file create under a rootDir directory. If you set rootDirs, ctix use first element of array.
   * @mode single
   * @default false
   */
  useRootDir: boolean;

  /**
   * Default export name create without directory(dirname)
   * option true, export { default as WriteModule } from './src/javascript/WriteModule';
   * option false, export { default as srcJavascriptWriteModule } from './src/javascript/WriteModule';
   *
   * It prevent same name module in each directory But you don't have same name module, pass true.
   *
   * @mode create, single
   * @default false
   */
  excludePath: boolean;

  /**
   * If your default export variable, class, function name keep first capital character.
   * Option set false, TribeClass -> tribeClass. But option set true, TribeClass -> TribeClass.
   *
   * @mode create, single
   * @default true
   */
  useUpperFirst: boolean;
}

export type TCTIXOptionWithResolvedProject = ICTIXOptions & {
  /** resolved tsconfig.json directory */
  resolvedProjectDirPath: string;

  /** resolved tsconfig.json directory with filename */
  resolvedProjectFilePath: string;
};
