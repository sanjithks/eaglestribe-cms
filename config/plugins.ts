module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('diablculd'),
        api_key: env('622796691278471'),
        api_secret: env('sSDzMx_d01mVyK_2K_LY_rnT0Nk'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});