// ./config/plugins.ts

export default () => ({
  upload: {
    config: {
      provider: '@strapi/cloudinary',
      providerOptions: {
        cloud_name: process.env.diablculd,
        api_key: process.env.622796691278471,
        api_secret: process.env.sSDzMx_d01mVyK_2K_LY_rnT0Nk,
      },
    },
  },
});