module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'NGROK_URL'),
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  allowedHosts: ['NGROK_URL']
});