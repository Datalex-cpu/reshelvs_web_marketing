/**
 * Connector marketplace listings — Reshelvs.com/marketplace.
 *
 * Each entry powers both the index card on `/marketplace` and the
 * detail page at `/marketplace/[slug]`. Content is editable here
 * without touching the renderers; move to a CMS once we're past five
 * connectors.
 *
 * Status legend:
 *   - "live"     : ships in the product, callable today
 *   - "beta"     : available behind a flag for design partners
 *   - "soon"     : announced; not callable yet
 *
 * NOTE — Reshelvs is in private beta: nothing here is generally available
 * ("live") yet. Listings are design-partner beta or announced. Promote a
 * connector to "live" only once it is genuinely callable in production.
 */

export type ConnectorCategory =
  | 'erp'
  | 'crm'
  | 'commerce'
  | 'analytics'
  | 'communication';

export type ConnectorStatus = 'live' | 'beta' | 'soon';

export interface Connector {
  slug: string;
  name: string;
  category: ConnectorCategory;
  status: ConnectorStatus;
  vendor: string;
  blurb: string;
  description: string;
  capabilities: string[];
  setupSteps: string[];
  scopes: string[];
}

export const connectors: Connector[] = [
  {
    slug: 'sap-s4hana',
    name: 'SAP S/4HANA',
    category: 'erp',
    status: 'beta',
    vendor: 'SAP SE',
    blurb:
      'Push visit completions and goods-receipt movements to SAP S/4HANA via the Integration Suite.',
    description:
      'In design-partner beta. When a Reshelvs visit completes with a replenishment task, the connector posts a material-document (movement type 501) to SAP — each restocked SKU as a line item. Bidirectional sync of material master is planned for Q4.',
    capabilities: [
      'Visit-complete webhook to SAP BTP Integration Suite',
      'Material document line items per restocked SKU',
      'Per-tenant plant code mapping',
      'Delivery audit log in sapDeliveries/ for replay',
    ],
    setupSteps: [
      'Provision an SAP BTP iFlow accepting JSON POSTs',
      'Mint a bearer token in SAP BTP and copy to Reshelvs Integrations',
      'Enter your plant code and toggle "Enable"',
      'Complete a test visit to verify delivery',
    ],
    scopes: ['visits.read'],
  },
  {
    slug: 'salesforce-crm',
    name: 'Salesforce CRM',
    category: 'crm',
    status: 'beta',
    vendor: 'Salesforce, Inc.',
    blurb:
      'Two-way sync of accounts (stores) and contacts (store owners) between Salesforce and Reshelvs.',
    description:
      'In design-partner beta. An hourly job pulls modified Accounts via SOQL and upserts them as Reshelvs stores keyed on `sf:{accountId}`; stores updated in Reshelvs are pushed back via the Account REST endpoint. A Lightning component for the manager dashboard ships separately.',
    capabilities: [
      'Hourly bidirectional sync (Account ↔ Store)',
      'Contact ↔ store-contact mapping',
      'External-id keyed; safe for tenants with overlapping account ids',
      'Lightning component (separate package)',
    ],
    setupSteps: [
      'Create a Salesforce Connected App with OAuth2',
      'Authenticate Reshelvs via the OAuth2 flow on Integrations',
      'Choose which Salesforce object fields map to which Reshelvs store fields',
      'Run a one-time backfill to seed Reshelvs from your Salesforce accounts',
    ],
    scopes: ['stores.read', 'stores.write'],
  },
  {
    slug: 'shopify',
    name: 'Shopify',
    category: 'commerce',
    status: 'beta',
    vendor: 'Shopify Inc.',
    blurb:
      'Pull product catalog + inventory from Shopify; push visit-time stock counts back as adjustments.',
    description:
      'Beta integration for D2C-first brands using Shopify as their commerce backbone. SKU catalog syncs nightly from Shopify Admin API; visit-recorded stock counts post back as inventory adjustments tagged with the storeId and Reshelvs visitId.',
    capabilities: [
      'Nightly SKU catalog import',
      'Visit-recorded stock counts → Shopify inventory adjustments',
      'Multi-location (Shopify Locations) mapping to Reshelvs stores',
    ],
    setupSteps: [
      'Install the Reshelvs Shopify app from the Shopify App Store (waitlist)',
      'Map your Shopify Locations to Reshelvs companies / stores',
      'Pick the catalog scope (collection, vendor, or all products)',
    ],
    scopes: ['stores.read', 'visits.read'],
  },
  {
    slug: 'netsuite',
    name: 'NetSuite',
    category: 'erp',
    status: 'soon',
    vendor: 'Oracle NetSuite',
    blurb:
      'Sync items, customers, and inventory adjustments between NetSuite and Reshelvs.',
    description:
      'Announced for Q3 2026 launch. The connector uses NetSuite SuiteTalk REST and OAuth 2.0. Item / customer pull, transaction push (inventory adjustments and item fulfillments from visit-completed deliveries).',
    capabilities: [
      'Item master sync (NetSuite → Reshelvs SKUs)',
      'Customer / location sync (NetSuite → Reshelvs stores)',
      'Visit-time movements posted as inventory adjustments',
    ],
    setupSteps: [
      'Available in private beta — request via sales@reshelvs.com',
    ],
    scopes: ['stores.read', 'visits.read'],
  },
  {
    slug: 'slack',
    name: 'Slack',
    category: 'communication',
    status: 'beta',
    vendor: 'Slack Technologies',
    blurb:
      'Route smart alerts and daily briefs into a Slack channel of your choice.',
    description:
      'In design-partner beta. Lightweight — no OAuth dance: add a Slack incoming webhook to your tenant, choose the channel, and pick which alert types to forward. A daily AI brief is delivered as a single Slack post at 07:00 local each morning.',
    capabilities: [
      'Smart-alert relay (OSA drop, churn risk, promo failure, price war, etc.)',
      'Daily AI brief delivery',
      'Channel-per-severity routing (critical → #ops-alerts, others → #field-ops)',
    ],
    setupSteps: [
      'In Slack, create an Incoming Webhook for your channel',
      'Paste the webhook URL into Reshelvs Integrations',
      'Pick which alert types to forward',
    ],
    scopes: ['visits.read'],
  },
];

export function connectorBySlug(slug: string): Connector | undefined {
  return connectors.find((c) => c.slug === slug);
}

export const CATEGORY_LABEL: Record<ConnectorCategory, string> = {
  erp: 'ERP',
  crm: 'CRM',
  commerce: 'Commerce',
  analytics: 'Analytics',
  communication: 'Communication',
};

export const STATUS_LABEL: Record<ConnectorStatus, string> = {
  live: 'Live',
  beta: 'Beta',
  soon: 'Coming soon',
};
