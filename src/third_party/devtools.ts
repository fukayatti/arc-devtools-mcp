/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export {
  AgentFocus,
  AggregatedIssue,
  Common,
  DebuggerModel,
  Foundation,
  I18n,
  Issue,
  IssueAggregator,
  IssueAggregatorEvents,
  IssuesManagerEvents,
  MarkdownIssueDescription,
  Marked,
  PerformanceInsightFormatter,
  PerformanceTraceFormatter,
  ProtocolClient,
  Target as SDKTarget,
  TargetManager,
  TraceEngine,
  createIssuesFromProtocolIssue,
} from 'chrome-devtools-frontend/mcp/mcp.js';
export type {
  CDPConnection,
  IssuesManagerEventTypes,
} from 'chrome-devtools-frontend/mcp/mcp.js';
