/// <reference types="cypress" />

type ImpactValue = 'minor' | 'moderate' | 'serious' | 'critical';
type TagValue = 'wcag2a' | 'wcag2aa' | 'section508' | 'best-practice';
type ReporterVersion = 'v1' | 'v2' | 'raw' | 'raw-env' | 'no-passes';
type RunOnlyType = 'rule' | 'rules' | 'tag' | 'tags';

type ContextObject = {
  include?: string[] | string[][];
  exclude?: string[] | string[][];
};

type ElementContext = Node | string | ContextObject | null;

interface RunOnly {
  type: RunOnlyType;
  values: TagValue[] | string[];
}

interface RunOptions {
  runOnly?: RunOnly | TagValue[] | string[];
  rules?: object;
  iframes?: boolean;
  elementRef?: boolean;
  selectors?: boolean;
  resultTypes?: resultGroups[];
  reporter?: ReporterVersion;
  xpath?: boolean;
  absolutePaths?: boolean;
  restoreScroll?: boolean;
  frameWaitTime?: number;
  preload?: boolean;
  performanceTimer?: boolean;
  includedImpacts?: ImpactValue[] | string[];
}
