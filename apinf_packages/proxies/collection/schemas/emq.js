/* Copyright 2017 Apinf Oy
This file is covered by the EUPL license.
You may obtain a copy of the licence at
https://joinup.ec.europa.eu/community/eupl/og_page/european-union-public-licence-eupl-v11 */

export default {
  emq: {
    type: Object,
    optional: true,
  },
  'emq.brokerEndpoints': {
    type: Array,
  },
  'emq.brokerEndpoints.$': {
    type: Object,
  },
  'emq.brokerEndpoints.$.protocol': {
    type: String,
    allowedValues: [
      'MQTT',
      'MQTT over websockets',
    ],
  },
  'emq.brokerEndpoints.$.host': {
    type: String,
  },
  'emq.brokerEndpoints.$.port': {
    type: Number,
    autoform: {
      type: 'number',
    },
  },
  'emq.brokerEndpoints.$.tls': {
    type: Boolean,
  },
  'emq.elasticsearch': {
    type: String,
    autoform: {
      placeholder: 'http://host:9200',
    },
  },
  'emq.postgresEndpoint': {
    type: String,
    autoform: {
      placeholder: 'http://host:3000/mqtt_acl',
    },
  },
};
