import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

export const API_URL = new InjectionToken<string>('apiUrl');

export const APICONFIG = {
  BASEPOINT: environment.baseUrl,
  AUTH: {
    LOGINADMIN: '/admin/auth/login'
  },
  CUSTOMER: {
    GET: `/api/get.php`,
    CREATE: `/api/insert.php`,
    DELETE: (id) => `/api/delete.php?id=${id}`,
    
  },
  EMPLOYEE: {
    GET: `/admin/user_systems`,
    CREATE: `/admin/user_systems`,
    GETDETAIL: (id) => `/admin/user_systems/${id}`,
    EDIT: (id) => `/admin/user_systems/${id}`,
    DELETE: (id) => `/admin/user_systems/${id}`,
  },
  PRODUCT_GROUP: {
    GET: `/admin/product_groups`,
    GETDETAIL: (id) => `/admin/product_groups/${id}`,
    CREATE: `/admin/product_groups`,
    EDIT: (id) => `/admin/product_groups/${id}`,
    DELETE: (id) => `/admin/product_groups/${id}`,
  },
PRODUCTS: {
    GET: `/admin/products`,
    GETDETAIL: (id) => `/admin/products/${id}`,
    CREATE: `/admin/products`,
    EDIT: (id) => `/admin/products/${id}`,
    DELETE: (id) => `/admin/products/${id}`,
    IMPORTEXCEL: '/admin/products/import_excel',
    IMPORTZIP:'/admin/products/import_catalogues',
    IMPORTIMAGE:'/admin/products/import_thumb_images',
    EXPORTEMPLOYEE: '/admin/products/exportExcel',
    TEMPLATE: `/assets/excel/PSBV-Product-List-Template.xlsx`,
    FILEJSON:`assets/excel/PSBV-Product-List-Template.xlsx`,
    DELETEALL:`/admin/products/destroy_many`
  },
  ACCESSORY: {
    GET: `/admin/accessories`,
    GETDETAIL: (id) => `/admin/accessories/${id}`,
    CREATE: `/admin/accessories`,
    EDIT: (id) => `/admin/accessories/${id}`,
    DELETE: (id) => `/admin/accessories/${id}`,
  },
  ORDER: {
    GET: `/admin/orders`,
    GETDETAIL: (id) => `/admin/orders/${id}`,
    CREATE: `/admin/orders`,
    EDIT: (id) => `/admin/orders/${id}`,
    DELETE: (id) => `/admin/orders/${id}`,
  },
  CONTACT: {
    GET: `/admin/interact_email`, 
    GETDETAIL: (id) => `/admin/interact_email/${id}`,
    CREATE: `/admin/orders`,
    EDIT: (id) => `/admin/orders/${id}`,
    DELETE: (id) => `/admin/interact_email/${id}`,
  },
};

