interface PlayroomConfig {
  components: string;
  componentHints: () => Record<string, Hint> | Record<string, Hint>;
  outputPath: string;
  title?: string;
  themes?: string;
  widths?: number[];
  snippets?: Snippet[];
  frameComponent?: string;
  exampleCode?: string;
  cwd?: string;
  storageKey?: string;
  webpackConfig?: () => void;
  baseUrl?: string;
  paramType: 'hash' | 'search';
  iframeSandbox?: string;
}

interface Hint {
  attrs: Record<string, any>;
}

interface InternalPlayroomConfig extends PlayroomConfig {
  cwd: string;
  storageKey: string;
  port: number;
  openBrowser: boolean;
}

interface Window {
  __playroomConfig__: InternalPlayroomConfig;
}

declare const __PLAYROOM_GLOBAL__CONFIG__: InternalPlayroomConfig;
declare const __PLAYROOM_GLOBAL__STATIC_TYPES__: any;
