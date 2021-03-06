/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export * from '../../../common/types/workplace_search';

export type SpacerSizeTypes = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface Group {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  contentSources: ContentSource[];
  users: User[];
  usersCount: number;
  color?: string;
}

export interface GroupDetails extends Group {
  contentSources: ContentSourceDetails[];
  canEditGroup: boolean;
  canDeleteGroup: boolean;
}

export interface User {
  id: string;
  name: string | null;
  initials: string;
  pictureUrl: string | null;
  color: string;
  email: string;
  role?: string;
  groupIds: string[];
}

export interface Features {
  basicOrgContext?: FeatureIds[];
  basicOrgContextExcludedFeatures?: FeatureIds[];
  platinumOrgContext?: FeatureIds[];
  platinumPrivateContext: FeatureIds[];
}

export interface Configuration {
  isPublicKey: boolean;
  needsBaseUrl: boolean;
  needsSubdomain?: boolean;
  needsConfiguration?: boolean;
  hasOauthRedirect: boolean;
  baseUrlTitle?: string;
  helpText: string;
  documentationUrl: string;
  applicationPortalUrl?: string;
  applicationLinkTitle?: string;
}

export interface SourceDataItem {
  name: string;
  serviceType: string;
  configuration: Configuration;
  configured?: boolean;
  connected?: boolean;
  features?: Features;
  objTypes?: string[];
  sourceDescription: string;
  connectStepDescription: string;
  addPath: string;
  editPath: string;
  accountContextOnly: boolean;
}

export interface ContentSource {
  id: string;
  serviceType: string;
  name: string;
}

export interface ContentSourceDetails extends ContentSource {
  status: string;
  statusMessage: string;
  documentCount: string;
  isFederatedSource: boolean;
  searchable: boolean;
  supportedByLicense: boolean;
  errorReason: number;
  allowsReauth: boolean;
  boost: number;
}

export interface ContentSourceStatus {
  id: string;
  name: string;
  service_type: string;
  status: {
    status: string;
    synced_at: string;
    error_reason: number;
  };
}

export interface Connector {
  serviceType: string;
  name: string;
  configured: boolean;
  supportedByLicense: boolean;
  accountContextOnly: boolean;
}

export interface SourcePriority {
  [id: string]: number;
}

export enum FeatureIds {
  SyncFrequency = 'SyncFrequency',
  SyncedItems = 'SyncedItems',
  SearchableContent = 'SearchableContent',
  Remote = 'Remote',
  Private = 'Private',
  GlobalAccessPermissions = 'GlobalAccessPermissions',
  DocumentLevelPermissions = 'DocumentLevelPermissions',
}
