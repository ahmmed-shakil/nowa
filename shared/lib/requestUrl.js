const root = process.env.NEXT_PUBLIC_API_URL;

console.log(root, "root");

export const base_url = root;
export const base_url_admin = `${root}/admin`;
export const base_url_restaurant = `${root}/restaurant`;
export const base_url_cashier = `${root}/cashier`;
export const base_url_store = `${root}/store`;
export const base_url_chef = `${root}/chef`;

export const SUCCESS = `1000`;
export const UNAUTHORIZED = `10001`;
export const FORBIDDEN = `1002`;
export const NOT_FOUND = 404;
export const INTERNAL_ERROR = 500;

export const SUCCESSMSG = "Success";
export const UNAUTHORIZEDMSG = "Permission denied";
export const FORBIDDENMSG = "Forbidden";
export const NOT_FOUNDMSG = "Not found";
export const INTERNAL_ERRORMSG = "Internal Server Error";
