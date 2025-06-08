export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'randomGeneratedKey'),
  },
  apiToken: {
    salt: env('TRANSFER_TOKEN_SALT', 'randomSalt'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
