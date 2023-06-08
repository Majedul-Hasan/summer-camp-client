const img_hosting_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;
export const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
