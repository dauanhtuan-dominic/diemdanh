export const PageNavigation = {
  page: 1,
  amount: 10,
  typesort: '1',
  search: '',
  totalAmount: 0,
  totalPage: 0
};

export const COUNTPERPAGE = [
  { number: 10, name: 10 },
  { number: 20, name: 20 },
  { number: 30, name: 30 },
  { number: 40, name: 40 },
  { number: 50, name: 50 }
];

export const TIMEOUTSEARCH = 500;

export const PERMISSIONS_CUSTOMER = [
  {
    valueView: 'Standard',
    value: 'standard'
  },
  {
    valueView: 'Premium',
    value: 'premium'
  }
];
export const PERMISSIONS_USER_SYSTEM = [
  {
    valueView: 'Employee',
    value: 'employee'
  },
  {
    valueView: 'Admin',
    value: 'admin'
  }
];


export const STATUS_SERVICE = [
  {
    valueView: 'Ready',
    value: 'ready'
  },
  {
    valueView: 'Locked',
    value: 'locked'
  }
]
export const STATUS_ORDER = [
  {
    valueView: 'Confirmed',
    value: 'confirmed'
  },
  {
    valueView: 'Shipping',
    value: 'shipping'
  },
  {
    valueView:"Received",
    value:'received'
  },
  {
    valueView:"Cancel",
    value:'canceled'
  }
]
export const PRICE_ARR = [
  {
    valueView:"Base Price",
    value:'base_price'
  },
  {
    valueView:"Promotion Price",
    value:'promotion_price'
  }
]