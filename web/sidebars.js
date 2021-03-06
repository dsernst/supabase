/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const goTrueClient = require('./sidebar_spec_gotrue')
const postgrestClient = require('./sidebar_spec_postgrest')
const realtimeClient = require('./sidebar_spec_realtime')
const supabaseClient = require('./sidebar_spec_supabase')

module.exports = {
  goTrueClient: goTrueClient.docs,
  postgrestClient: postgrestClient.docs,
  realtimeClient: realtimeClient.docs,
  supabaseClient: supabaseClient.docs,
  docs: [
    { type: 'category', label: 'Introduction', items: ['about', 'faq'], collapsed: false },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['guides/platform', 'guides/database', 'guides/auth', 'guides/client-libraries'],
    },
    {
      type: 'category',
      label: 'See Also',
      collapsed: false,
      items: ['guides/examples', 'pricing', 'support', 'handbook/contributing', 'company/terms'],
    },
    // Handbook: ['handbook/introduction', 'handbook/contributing'],
  ],
  goTrueServer: [
    {
      type: 'category',
      label: 'GoTrue',
      collapsed: false,
      items: ['gotrue/server/about'],
    },
  ],
  realtimeServer: [
    {
      type: 'category',
      label: 'Realtime',
      collapsed: false,
      items: ['realtime/server/about'],
    },
    {
      type: 'category',
      label: 'Self hosting',
      collapsed: false,
      items: [
        'realtime/server/docker',
        'realtime/server/aws',
        'realtime/server/digitalocean',
        'realtime/server/source',
      ],
    },
  ],
  // realtimeClient: [
  //   {
  //     type: 'category',
  //     label: 'Realtime',
  //     collapsed: false,
  //     items: ['realtime/client/about'],
  //   },
  // ],
  postgrestServer: [
    {
      type: 'category',
      label: 'PostgREST',
      collapsed: false,
      items: ['postgrest/server/about'],
    },
  ],
  postgresServer: [
    {
      type: 'category',
      label: 'Postgres',
      collapsed: false,
      items: ['postgres/server/about'],
    },
    {
      type: 'category',
      label: 'Self hosting',
      collapsed: false,
      items: ['postgres/server/docker', 'postgres/server/aws', 'postgres/server/digitalocean'],
    },
  ],
  postgresApi: [
    {
      type: 'category',
      label: 'Postgres API',
      collapsed: false,
      items: ['postgres/api/about'],
    },
  ],
}
