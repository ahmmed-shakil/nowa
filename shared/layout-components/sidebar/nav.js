export const ADMINMENUITEMS = [
  {
    menutitle: "Home",
    Items: [
      {
        path: `/`,
        accessPermission: "all",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        title: "Dashboard",
      },
      {
        title: "Dashboards",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/dashboards/dashboard1`,
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard-1",
          },
          {
            path: `/components/dashboards/dashboard2`,
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard-2",
          },
          {
            path: `/components/dashboards/dashboard3`,
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard-3",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Admin Users",
    Items: [
      {
        title: "Admin Roles",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
            <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/permissions`,
            type: "link",
            active: false,
            selected: false,
            title: "Permissions",
          },
          {
            path: `/admin/roles`,
            type: "link",
            active: false,
            selected: false,
            title: "Roles",
          },
        ],
      },
    ],
  },

  // {
  //   menutitle: "Users",
  //   Items: [
  //     {
  //       title: "Users",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 3.33v4l4 2.67 -4 2.67V17.33H8V9.33h4z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `/admin/Users/adminUser`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Admin",
  //         },
  //         {
  //           path: `/admin/Users/restaurantUser`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Restaurant",
  //         },
  //       ],
  //     },
  //   ],
  // },

  {
    menutitle: "Outlets",
    Items: [
      {
        title: "Outlets",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 3.33v4l4 2.67 -4 2.67V17.33H8V9.33h4z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/outlets/restaurants`,
            type: "link",
            active: false,
            selected: false,
            title: "Restaurants",
          },
          {
            path: `/admin/outlets/stores`,
            type: "link",
            active: false,
            selected: false,
            title: "Stores",
          },
          {
            path: `/admin/outlets/cashiers`,
            type: "link",
            active: false,
            selected: false,
            title: "Cashiers",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Restaurant SKU",
    Items: [
      {
        title: "Restaurant",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 3.33v4l4 2.67 -4 2.67V17.33H8V9.33h4z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/restaurantSKU/Category`,
            type: "link",
            active: false,
            selected: false,
            title: "Category",
          },
          {
            path: `/admin/restaurantSKU/Section`,
            type: "link",
            active: false,
            selected: false,
            title: "Section",
          },
          {
            path: `/admin/restaurantSKU/Item`,
            type: "link",
            active: false,
            selected: false,
            title: "Item",
          },
          {
            path: `/admin/restaurantSKU/ItemVariant`,
            type: "link",
            active: false,
            selected: false,
            title: "Item Variant",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Store-D",
    Items: [
      {
        path: `/restaurant/store`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>store</title>
            <path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        title: "Dashboard",
      },
      {
        title: "Vendor",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>account</title>
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/vendors/vendorsCategory`,
            type: "link",
            active: false,
            selected: false,
            title: "Vendor-category",
          },
          {
            path: `/admin/vendors/vendorsList`,
            type: "link",
            active: false,
            selected: false,
            title: "Vendors",
          },
        ],
      },
      {
        title: "SKU",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>food</title>
            <path d="M18.06 23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5.05H18V1H16.03V5.05H11.06L11.36 7.39C13.07 7.86 14.67 8.71 15.63 9.65C17.07 11.07 18.06 12.54 18.06 14.94V23M1 22V21H16.03V22C16.03 22.54 15.58 23 15 23H2C1.45 23 1 22.54 1 22M16.03 15C16.03 7 1 7 1 15H16.03M1 17H16V19H1V17Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/storeSKU/Category`,
            type: "link",
            active: false,
            selected: false,
            title: "SKU-category",
          },
          {
            path: `/admin/storeSKU/Section`,
            type: "link",
            active: false,
            selected: false,
            title: "SKU-section",
          },
          {
            path: "/admin/storeSKU/Item",
            type: "link",
            active: false,
            selected: false,
            title: "SKU-item",
          },
          {
            path: "/admin/storeSKU/ItemVariant",
            type: "link",
            active: false,
            selected: false,
            title: "SKU-item-variant",
          },
        ],
      },
      {
        title: "Issues",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>alarm-light</title>
            <path d="M6,6.9L3.87,4.78L5.28,3.37L7.4,5.5L6,6.9M13,1V4H11V1H13M20.13,4.78L18,6.9L16.6,5.5L18.72,3.37L20.13,4.78M4.5,10.5V12.5H1.5V10.5H4.5M19.5,10.5H22.5V12.5H19.5V10.5M6,20H18A2,2 0 0,1 20,22H4A2,2 0 0,1 6,20M12,5A6,6 0 0,1 18,11V19H6V11A6,6 0 0,1 12,5Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/dashboards/dashboard2`,
            type: "link",
            active: false,
            selected: false,
            title: "Restaurant-issue",
          },
          {
            path: "/",
            type: "link",
            active: false,
            selected: false,
            title: "Restaurant-issue-item",
          },
        ],
      },
      {
        title: "Purchase",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>cash</title>
            <path d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/Purchase/storePurchase`,
            type: "link",
            active: false,
            selected: false,
            title: "Store-Purchase",
          },
          {
            path: "/admin/Purchase/storeItemVariantPurchase",
            type: "link",
            active: false,
            selected: false,
            title: "Store-Purchase-item",
          },
        ],
      },
      {
        title: "Inventory",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/dashboards/dashboard2`,
            type: "link",
            active: false,
            selected: false,
            title: "Store-Inventory",
          },
          {
            path: "/",
            type: "link",
            active: false,
            selected: false,
            title: "Store-Inventory-Details",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Restaurant-D",
    Items: [
      {
        path: `/restaurant/restaurant`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>silverware-fork-knife</title>
            <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        title: "Dashboard",
      },
      {
        title: "Waste",
        accessPermission: "waste_management_category_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>delete</title>
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/waste-management/category`,
            type: "link",
            active: false,
            selected: false,
            title: "Waste-management-category",
          },
          {
            path: `/admin/waste-management/item`,
            type: "link",
            active: false,
            selected: false,
            title: "Waste-management-Item",
          },
        ],
      },
      {
        title: "Non-Chargeable",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>ticket-percent-outline</title>
            <path d="M14.8 8L16 9.2L9.2 16L8 14.8L14.8 8M4 4H20C21.11 4 22 4.89 22 6V10C20.9 10 20 10.9 20 12C20 13.11 20.9 14 22 14V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V14C3.11 14 4 13.11 4 12C4 10.9 3.11 10 2 10V6C2 4.89 2.9 4 4 4M4 6V8.54C5.24 9.26 6 10.57 6 12C6 13.43 5.24 14.75 4 15.46V18H20V15.46C18.76 14.75 18 13.43 18 12C18 10.57 18.76 9.26 20 8.54V6H4M9.5 8C10.33 8 11 8.67 11 9.5C11 10.33 10.33 11 9.5 11C8.67 11 8 10.33 8 9.5C8 8.67 8.67 8 9.5 8M14.5 13C15.33 13 16 13.67 16 14.5C16 15.33 15.33 16 14.5 16C13.67 16 13 15.33 13 14.5C13 13.67 13.67 13 14.5 13Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/non-chargable/category`,
            type: "link",
            active: false,
            selected: false,
            title: "Non-Chargeable-category",
          },
          {
            path: `/admin/non-chargable/item`,
            type: "link",
            active: false,
            selected: false,
            title: "Non-chargeable-item",
          },
        ],
      },
      {
        title: "Restaurant SKU",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>food</title>
            <path d="M18.06 23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5.05H18V1H16.03V5.05H11.06L11.36 7.39C13.07 7.86 14.67 8.71 15.63 9.65C17.07 11.07 18.06 12.54 18.06 14.94V23M1 22V21H16.03V22C16.03 22.54 15.58 23 15 23H2C1.45 23 1 22.54 1 22M16.03 15C16.03 7 1 7 1 15H16.03M1 17H16V19H1V17Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/dashboards/dashboard2`,
            type: "link",
            active: false,
            selected: false,
            title: "Restaurant-SKU-Group",
          },
          {
            path: "/",
            type: "link",
            active: false,
            selected: false,
            title: "Restaurant-SKU-Category",
          },
          {
            path: "/",
            type: "link",
            active: false,
            selected: false,
            title: "Restaurant-SKU-Item",
          },
          {
            path: "/",
            type: "link",
            active: false,
            selected: false,
            title: "Restaurant-SKU-Item-Variant",
          },
        ],
      },
      {
        title: "Gas Readings",
        path: `/admin/Gas/gasReading`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>gas-burner</title>
            <path d="M16.14 8.79L16.12 8.8C16.35 9.07 16.55 9.39 16.7 9.72L16.79 9.91C17.5 11.6 17 13.55 15.69 14.77C14.5 15.86 12.84 16.15 11.3 15.95C9.84 15.77 8.5 14.85 7.73 13.58C7.5 13.19 7.3 12.75 7.2 12.3C7.07 11.93 7.03 11.57 7 11.2C6.91 9.6 7.55 7.9 8.76 6.9C8.21 8.11 8.34 9.62 9.15 10.67L9.26 10.8C9.4 10.92 9.57 10.96 9.73 10.89C9.88 10.83 10 10.68 10 10.5L9.93 10.28C9.05 7.96 9.79 5.25 11.66 3.72C12.17 3.3 12.8 2.92 13.46 2.75C12.78 4.11 13 5.89 14.09 6.96C14.55 7.43 15.1 7.74 15.58 8.18L16.14 8.79M13.86 13.43L13.85 13.42C14.3 13.03 14.55 12.36 14.53 11.76L14.5 11.44C14.3 10.44 13.43 10.11 12.87 9.38C12.7 9.16 12.55 8.88 12.44 8.6C12.22 9.1 12.2 9.57 12.29 10.11C12.39 10.68 12.62 11.17 12.5 11.76C12.34 12.41 11.83 13.06 10.94 13.27C11.44 13.76 12.25 14.15 13.06 13.87C13.32 13.8 13.65 13.61 13.86 13.43M11 18V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19V18H15V19C15 19.55 15.45 20 16 20C16.55 20 17 19.55 17 19V18C18.11 18 20 18.9 20 20V22H4V20C4 18.9 5.9 18 7 18V19C7 19.55 7.45 20 8 20C8.55 20 9 19.55 9 19V18H11Z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
      },
    ],
  },
  {
    menutitle: "Cashier-D",
    Items: [
      {
        path: `/restaurant/cashier`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>cash-register</title>
            <path d="M2,17H22V21H2V17M6.25,7H9V6H6V3H14V6H11V7H17.8C18.8,7 19.8,8 20,9L20.5,16H3.5L4.05,9C4.05,8 5.05,7 6.25,7M13,9V11H18V9H13M6,9V10H8V9H6M9,9V10H11V9H9M6,11V12H8V11H6M9,11V12H11V11H9M6,13V14H8V13H6M9,13V14H11V13H9M7,4V5H13V4H7Z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        title: "Dashboard",
      },
      {
        title: "Expense-Category",
        path: "/admin/restaurantExpense/expenseCategory",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>cash</title>
            <path d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
      },
      {
        title: "Expenses",
        path: "/admin/restaurantExpense/expenses",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>cash</title>
            <path d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
      },
    ],
  },
  {
    menutitle: "Issue",
    Items: [
      {
        title: "Issue",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="10"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 3.33v4l4 2.67 -4 2.67V17.33H8V9.33h4z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/Issue/Issue`,
            type: "link",
            active: false,
            selected: false,
            title: "Issue",
          },
          {
            path: `/admin/Issue/Issue_Item`,
            type: "link",
            active: false,
            selected: false,
            title: "Item",
          },
        ],
      },
    ],
  },

  {
    menutitle: "Purchase",
    Items: [
      {
        title: "Purchase",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="10"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 3.33v4l4 2.67 -4 2.67V17.33H8V9.33h4z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/Purchase/storePurchase`,
            type: "link",
            active: false,
            selected: false,
            title: "Purchase",
          },
          {
            path: `/admin/Purchase/storeItemVariantPurchase`,
            type: "link",
            active: false,
            selected: false,
            title: "Item",
          },
        ],
      },
    ],
  },
  {
    menutitle: "",
    Items: [
      {
        path: `/`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        title: "Restaurant",
      },
    ],
  },

  {
    menutitle: "Store",
    Items: [
      {
        title: "Store",
        path: `/restaurant/store`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
      },
      {
        title: "MyComponent",
        path: `/restaurant/MyComponents`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
      },
      {
        title: "SKU",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
      },
    ],
  },
  {
    menutitle: "WEB APPS",
    Items: [
      {
        title: "Apps",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/apps/cards`,
            type: "link",
            active: false,
            selected: false,
            title: "Cards",
          },
          {
            path: `/components/apps/range-slider`,
            type: "link",
            active: false,
            selected: false,
            title: "Range-slider",
          },
          {
            path: `/components/apps/calendar`,
            type: "link",
            active: false,
            selected: false,
            title: "Calendar",
          },
          {
            path: `/components/apps/contacts`,
            type: "link",
            active: false,
            selected: false,
            title: "Contacts",
          },
          {
            path: `/components/apps/image-compare`,
            type: "link",
            active: false,
            selected: false,
            title: "Image-compare",
          },
          {
            path: `/components/apps/notification`,
            type: "link",
            active: false,
            selected: false,
            title: "Notification",
          },
          {
            path: `/components/apps/widget-notification`,
            type: "link",
            active: false,
            selected: false,
            title: "Widget-notification",
          },
          {
            path: `/components/apps/treeview`,
            type: "link",
            active: false,
            selected: false,
            title: "Treeview",
          },
          {
            path: `/components/apps/file-manager`,
            type: "link",
            active: false,
            selected: false,
            title: "File-manager",
          },
          {
            path: `/components/apps/file-manager1`,
            type: "link",
            active: false,
            selected: false,
            title: "File-manager1",
          },
          {
            path: `/components/apps/file-details`,
            type: "link",
            active: false,
            selected: false,
            title: "File-details",
          },
        ],
      },
      {
        title: "Elements",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/elements/alerts`,
            title: "Alerts",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/avatar`,
            title: "Avatar",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/breadcrumbs`,
            title: "Breadcrumbs",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/buttons`,
            title: "Buttons",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/badges`,
            title: "Badges",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/dropdown`,
            title: "Dropdown",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/thumbnails`,
            title: "Thumbnails",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/list-group`,
            title: "List Group",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/navigation`,
            title: "Navigation",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/images`,
            title: "Images",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/pagination`,
            title: "Pagination",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/popover`,
            title: "Popover",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/progress`,
            title: "Progress",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/spinners`,
            title: "Spinners",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/media-object`,
            type: "link",
            active: false,
            selected: false,
            title: "Media Object",
          },
          {
            path: `/components/elements/typography`,
            title: "Typography",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/tooltip`,
            title: "Tooltip",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/toast`,
            title: "Toast",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/elements/tags`,
            title: "Tags",
            type: "link",
            active: false,
            selected: false,
          },

          {
            path: `/components/elements/tabs`,
            title: "Tabs",
            type: "link",
            active: false,
            selected: false,
          },
        ],
      },
      {
        title: "Advanced UI",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
            <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        bookmark: true,
        active: false,
        children: [
          {
            path: `/components/advancedui/accordions`,
            type: "link",
            active: false,
            selected: false,
            title: "Accordions",
          },
          {
            path: `/components/advancedui/carousel`,
            type: "link",
            active: false,
            selected: false,
            title: "Carousel",
          },
          {
            path: `/components/advancedui/collapse`,
            type: "link",
            active: false,
            selected: false,
            title: "Collapse",
          },
          {
            path: `/components/advancedui/modal`,
            type: "link",
            active: false,
            selected: false,
            title: "Modal",
          },
          {
            path: `/components/advancedui/timeline`,
            type: "link",
            active: false,
            selected: false,
            title: "Timeline",
          },
          {
            path: `/components/advancedui/sweet-alert`,
            type: "link",
            active: false,
            selected: false,
            title: "Sweet Alert",
          },

          {
            path: `/components/advancedui/rating`,
            type: "link",
            active: false,
            selected: false,
            title: "Rating",
          },
          {
            path: `/components/advancedui/counters`,
            type: "link",
            active: false,
            selected: false,
            title: "Counters",
          },

          {
            path: `/components/advancedui/search`,
            type: "link",
            active: false,
            selected: false,
            title: "Search",
          },
          {
            path: `/components/advancedui/userlist`,
            type: "link",
            active: false,
            selected: false,
            title: "Userlist",
          },
          {
            path: `/components/advancedui/blog`,
            type: "link",
            active: false,
            selected: false,
            title: "Blog",
          },
          {
            path: `/components/advancedui/blog-details`,
            type: "link",
            active: false,
            selected: false,
            title: "Blog-details",
          },
          {
            path: `/components/advancedui/edit-post`,
            type: "link",
            active: false,
            selected: false,
            title: "Edit-post",
          },
          {
            path: `/components/advancedui/file-attachments`,
            type: "link",
            active: false,
            selected: false,
            title: "File Attachments",
          },
        ],
      },
    ],
  },

  {
    menutitle: "PAGES",
    Items: [
      {
        title: "Pages",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z" />
            <path d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
            <path d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            title: "Authentication",
            type: "sub",
            selected: false,
            active: false,
            children: [
              {
                path: `/components/pages/authentication/sign-in`,
                title: "Sig In",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/authentication/sign-up`,
                title: "Sig Up",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/authentication/forgot-password`,
                title: "Forgot Password",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/authentication/reset-password`,
                title: "Reset Password",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/authentication/lockscreen`,
                title: "Lockscreen",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/authentication/underconstruction`,
                title: "UnderConstruction",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/authentication/404`,
                title: "404 Error",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/authentication/500`,
                title: "500 Error",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/authentication/501`,
                title: "501 Error",
                type: "link",
                active: false,
                selected: false,
              },
            ],
          },
          {
            title: "Switcher",
            type: "sub",
            selected: false,
            active: false,
            children: [
              {
                path: `/components/pages/switcher`,
                title: "Switcher-1",
                type: "link",
                active: false,
                selected: false,
              },
            ],
          },
          {
            title: "E-Commerce",
            type: "sub",
            selected: false,
            active: false,
            children: [
              {
                path: `/components/pages/e-commerce/shop`,
                title: "Shop",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/e-commerce/product-details`,
                title: "Product Details",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/e-commerce/cart`,
                title: "Cart",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/e-commerce/checkout`,
                title: "Checkout",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/e-commerce/wish-list`,
                title: "Wish-list",
                type: "link",
                active: false,
                selected: false,
              },
            ],
          },

          {
            path: `/components/pages/profile`,
            title: "Profile",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/pages/notification-list`,
            title: "Notification-list",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/pages/about-us`,
            title: "About Us",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/pages/settings`,
            title: "Settings",
            type: "link",
            active: false,
            selected: false,
          },
          {
            title: "Mail",
            type: "sub",
            selected: false,
            active: false,
            children: [
              {
                path: `/components/pages/mail/mail`,
                title: "Mail",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/mail/mail-compose`,
                title: "Mail Compose",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/mail/read-mail`,
                title: "Read-Mail",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/mail/mail-settings`,
                title: "Mail-Settings",
                type: "link",
                active: false,
                selected: false,
              },
              {
                path: `/components/pages/mail/chat`,
                title: "Chat",
                type: "link",
                active: false,
                selected: false,
              },
            ],
          },
          {
            path: `/components/pages/invoice`,
            title: "Invoice",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/pages/pricing`,
            title: "Pricing",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/pages/gallery`,
            title: "Gallery",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/pages/todotask`,
            title: "Todotask",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/pages/faqs`,
            title: "FAQS",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/pages/empty-page`,
            title: "Empty Page",
            type: "link",
            active: false,
            selected: false,
          },
        ],
      },
      {
        title: "Utilities",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 22c4.879 0 9-4.121 9-9s-4.121-9-9-9-9 4.121-9 9 4.121 9 9 9zm0-16c3.794 0 7 3.206 7 7s-3.206 7-7 7-7-3.206-7-7 3.206-7 7-7zm5.284-2.293 1.412-1.416 3.01 3-1.413 1.417zM5.282 2.294 6.7 3.706l-2.99 3-1.417-1.413z" />
            <path d="M11 9h2v5h-2zm0 6h2v2h-2z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/utilities/background`,
            title: "Background",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/utilities/border`,
            title: "Border",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/utilities/display`,
            title: "Display",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/utilities/flex`,
            title: "Flex",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/utilities/height`,
            title: "Height",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/utilities/margin`,
            title: "Margin",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/utilities/padding`,
            title: "Padding",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/utilities/position`,
            title: "Position",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/utilities/width`,
            title: "Width",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/utilities/extras`,
            title: "Extras",
            type: "link",
            active: false,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    menutitle: "GENERAL",
    Items: [
      {
        title: "Icons",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        children: [
          {
            path: `/components/icons/font-awesome`,
            title: "Font Awesome",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/icons/material-design-icons`,
            title: "Material Design Icons",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/icons/simple-line-icons`,
            title: "Simple Line Icons",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/icons/feather-icons`,
            title: "Feather Icons",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/icons/ionic-icons`,
            title: "Ionic Icons",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/icons/flag-icons`,
            title: "Flag Icons",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/icons/pe7-icons`,
            title: "Pe7 Icons",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/icons/themify-icons`,
            title: "Themify Icons",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/icons/typicons-icons`,
            title: "Typicons Icons",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/icons/weather-icons`,
            title: "Weather Icons",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/icons/material-design-icons`,
            title: "Material Icons",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/icons/bootstrap-icons`,
            title: "Bootstrap Icons",
            type: "link",
            active: false,
            selected: false,
          },
        ],
      },
      {
        title: "Charts",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        children: [
          {
            path: `/components/charts/chartjs`,
            title: " ChartJs",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/charts/echart`,
            title: "Echart",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/charts/apexcharts`,
            title: "ApexCharts",
            type: "link",
            active: false,
            selected: false,
          },
        ],
      },
    ],
  },
  {
    menutitle: "COMPONENTS",
    Items: [
      {
        title: "Forms",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/forms/form-elements`,
            title: "Form Elements",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/forms/advanced-forms`,
            title: "Advanced Forms",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/forms/form-layouts`,
            title: "Form Layouts",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/forms/form-validation`,
            title: "Form Validation",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/forms/form-wizard`,
            title: "Form Wizard",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/forms/form-editor`,
            title: "Form Editor",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/forms/form-element-sizes`,
            title: "Form-element-sizes",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/forms/form-input-spinners`,
            title: "Form Input Spinners",
            type: "link",
            active: false,
            selected: false,
          },
        ],
      },
      {
        title: "Tables",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H5V5h14zM5 11h8v8H5v-8zm10 8v-8h4.001l.001 8H15z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/tables/default-tables`,
            title: " Default Tables",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `/components/tables/data-tables`,
            title: "Data Tables ",
            type: "link",
            active: false,
            selected: false,
          },
        ],
      },
      {
        path: `/components/widgets`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        title: "Widgets",
      },
      {
        title: "Maps",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/maps/leaflet-maps`,
            type: "link",
            active: false,
            selected: false,
            title: "Leaflet Maps ",
          },
        ],
      },
    ],
  },
];
export const RESTAURANTMENUITEMS = [
  {
    menutitle: "Main",
    Items: [
      {
        path: `/`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        title: "Dashboard",
      },
      {
        title: "Dashboards",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/dashboards/dashboard1`,
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard-1",
          },
          {
            path: `/components/dashboards/dashboard2`,
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard-2",
          },
          {
            path: `/components/dashboards/dashboard3`,
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard-3",
          },
        ],
      },
    ],
  },
];

export const StoreSideBar = [
  {
    menutitle: "",
    Items: [
      {
        path: `/`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        title: "Store",
      },
      {
        title: "SKU",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/components/dashboards/dashboard1`,
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard-1",
          },
          {
            path: `/components/dashboards/dashboard2`,
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard-2",
          },
          {
            path: `/components/dashboards/dashboard3`,
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard-3",
          },
        ],
      },
    ],
  },
];

export const MENUITEMS = [
  {
    menutitle: "Dashboard",
    userType: "all",
    Items: [
      {
        path: `/`,
        accessPermission: "all",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        title: "Home",
      },
      {
        path: `/restaurant/store`,
        accessPermission: "all",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>store</title>
            <path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        title: "Dashboard",
      },
    ],
  },
  {
    menutitle: "Users",
    userType: "admin",
    Items: [
      {
        title: "Admin Role",
        accessPermission: "admin_role_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
            <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/permissions`,
            type: "link",
            active: false,
            selected: false,
            title: "Permissions",
            accessPermission: "admin_role_access",
          },
          {
            path: `/admin/roles`,
            type: "link",
            active: false,
            selected: false,
            title: "Roles",
            accessPermission: "admin_role_access",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Outlets",
    userType: "admin",
    Items: [
      {
        path: `/admin/outlets/restaurants`,
        accessPermission: "outlets_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 3.33v4l4 2.67 -4 2.67V17.33H8V9.33h4z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        title: "Outlets",
      },
    ],
  },
  {
    menutitle: "Categories",
    userType: "admin",
    Items: [
      // {
      //   title: "Vendor",
      //   accessPermission: "vendor_management_access",
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       className="side-menu__icon"
      //       width="24"
      //       height="24"
      //       viewBox="0 0 24 24"
      //     >
      //       <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
      //       <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
      //     </svg>
      //   ),
      //   type: "sub",
      //   selected: false,
      //   active: false,
      //   children: [
      //     {
      //       path: `/admin/vendors/vendorsCategory`,
      //       type: "link",
      //       active: false,
      //       selected: false,
      //       title: "Categories",
      //       accessPermission: "vendor_management_access",
      //     },
      //   ],
      // },
      {
        title: "Waste Item",
        accessPermission: "waste_management_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
            <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/waste-management/category`,
            type: "link",
            active: false,
            selected: false,
            title: "Categories",
            accessPermission: "waste_management_access",
          },
        ],
      },
      {
        title: "Non Chargeable",
        accessPermission: "non_chargeable_items_management_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
            <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/non-chargable/category`,
            type: "link",
            active: false,
            selected: false,
            title: "Categories",
            accessPermission: "non_chargeable_items_management_access",
          },
        ],
      },
      {
        title: "Store SKU",
        accessPermission: "store_sku_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
            <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/storeSKU/Category`,
            type: "link",
            active: false,
            selected: false,
            title: "SKU Category",
            accessPermission: "store_sku_access",
          },
          {
            path: `/admin/storeSKU/Section`,
            type: "link",
            active: false,
            selected: false,
            title: "SKU Section",
            accessPermission: "store_sku_access",
          },
        ],
      },
      {
        title: "Restaurant SKU",
        accessPermission: "restaurant_sku_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
            <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/outlets/stores`,
            type: "link",
            active: false,
            selected: false,
            title: "SKU Group",
            accessPermission: "restaurant_sku_access",
          },
          {
            path: `/admin/restaurantSKU/Category`,
            type: "link",
            active: false,
            selected: false,
            title: "SKU Category",
            accessPermission: "restaurant_sku_access",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Operations",
    userType: "restaurant",
    Items: [
      {
        title: "Employees",
        accessPermission: "restaurant_employee_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>account</title>
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/outlets/cashiers`,
            type: "link",
            active: false,
            selected: false,
            title: "Cashiers",
            accessPermission: "restaurant_employee_access",
          },
          {
            path: `/admin/outlets/stores`,
            type: "link",
            active: false,
            selected: false,
            title: "Stores",
            accessPermission: "restaurant_employee_access",
          },
          {
            path: `/admin/outlets/chefs`,
            type: "link",
            active: false,
            selected: false,
            title: "Chefs",
            accessPermission: "restaurant_employee_access",
          },
        ],
      },
      // {
      //   title: "Vendor",
      //   accessPermission: "vendor_management_access",
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       className="side-menu__icon"
      //       width="24"
      //       height="24"
      //       viewBox="0 0 24 24"
      //     >
      //       <title>account</title>
      //       <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
      //     </svg>
      //   ),
      //   type: "sub",
      //   selected: false,
      //   active: false,
      //   children: [
      //     {
      //       path: `/admin/vendors/vendorsCategory`,
      //       type: "link",
      //       active: false,
      //       selected: false,
      //       title: "Vendor Category",
      //       accessPermission: "vendor_management_access",
      //     },
      //     {
      //       path: `/admin/vendors/vendorsList`,
      //       type: "link",
      //       active: false,
      //       selected: false,
      //       title: "Vendors",
      //       accessPermission: "vendor_management_access",
      //     },
      //   ],
      // },
      {
        title: "Store SKU",
        accessPermission: "store_sku_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>food</title>
            <path d="M18.06 23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5.05H18V1H16.03V5.05H11.06L11.36 7.39C13.07 7.86 14.67 8.71 15.63 9.65C17.07 11.07 18.06 12.54 18.06 14.94V23M1 22V21H16.03V22C16.03 22.54 15.58 23 15 23H2C1.45 23 1 22.54 1 22M16.03 15C16.03 7 1 7 1 15H16.03M1 17H16V19H1V17Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/storeSKU/Category`,
            type: "link",
            active: false,
            selected: false,
            title: "SKU Category",
            accessPermission: "store_sku_access",
          },
          {
            path: `/admin/storeSKU/Section`,
            type: "link",
            active: false,
            selected: false,
            title: "SKU Section",
            accessPermission: "store_sku_access",
          },
          {
            path: "/admin/storeSKU/Item",
            type: "link",
            active: false,
            selected: false,
            title: "SKU Item",
            accessPermission: "store_sku_access",
          },
          {
            path: "/admin/storeSKU/ItemVariant",
            type: "link",
            active: false,
            selected: false,
            title: "SKU Item Variant",
            accessPermission: "store_sku_access",
          },
        ],
      },
      {
        title: "Chef Requisitions",
        accessPermission: "chef_requisition_access",
        path: `/`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>alarm-light</title>
            <path d="M6,6.9L3.87,4.78L5.28,3.37L7.4,5.5L6,6.9M13,1V4H11V1H13M20.13,4.78L18,6.9L16.6,5.5L18.72,3.37L20.13,4.78M4.5,10.5V12.5H1.5V10.5H4.5M19.5,10.5H22.5V12.5H19.5V10.5M6,20H18A2,2 0 0,1 20,22H4A2,2 0 0,1 6,20M12,5A6,6 0 0,1 18,11V19H6V11A6,6 0 0,1 12,5Z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
      },
      {
        title: "Items Issued",
        accessPermission: "store_item_issue_access",
        path: `/admin/Issue/Issue`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>alarm-light</title>
            <path d="M6,6.9L3.87,4.78L5.28,3.37L7.4,5.5L6,6.9M13,1V4H11V1H13M20.13,4.78L18,6.9L16.6,5.5L18.72,3.37L20.13,4.78M4.5,10.5V12.5H1.5V10.5H4.5M19.5,10.5H22.5V12.5H19.5V10.5M6,20H18A2,2 0 0,1 20,22H4A2,2 0 0,1 6,20M12,5A6,6 0 0,1 18,11V19H6V11A6,6 0 0,1 12,5Z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
      },
      {
        title: "Purchase",
        accessPermission: "store_purchase_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>cash</title>
            <path d="M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/Purchase/storePurchase`,
            type: "link",
            active: false,
            selected: false,
            title: "Store Purchase",
            accessPermission: "store_purchase_access",
          },
          // {
          //   path: "/admin/Purchase/storeItemVariantPurchase",
          //   type: "link",
          //   active: false,
          //   selected: false,
          //   title: "Store Purchase Item",
          //   accessPermission: "store_purchase_access",
          // },
        ],
      },

      {
        title: "Waste Itmes",
        accessPermission: "waste_management_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>delete</title>
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/waste-management/category`,
            type: "link",
            active: false,
            selected: false,
            title: "Category",
            accessPermission: "waste_management_access",
          },
          {
            path: `/admin/waste-management/item`,
            type: "link",
            active: false,
            selected: false,
            title: "Items",
            accessPermission: "waste_management_access",
          },
        ],
      },
      {
        title: "Non-Chargeable",
        accessPermission: "non_chargeable_item_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>ticket-percent-outline</title>
            <path d="M14.8 8L16 9.2L9.2 16L8 14.8L14.8 8M4 4H20C21.11 4 22 4.89 22 6V10C20.9 10 20 10.9 20 12C20 13.11 20.9 14 22 14V18C22 19.11 21.11 20 20 20H4C2.9 20 2 19.11 2 18V14C3.11 14 4 13.11 4 12C4 10.9 3.11 10 2 10V6C2 4.89 2.9 4 4 4M4 6V8.54C5.24 9.26 6 10.57 6 12C6 13.43 5.24 14.75 4 15.46V18H20V15.46C18.76 14.75 18 13.43 18 12C18 10.57 18.76 9.26 20 8.54V6H4M9.5 8C10.33 8 11 8.67 11 9.5C11 10.33 10.33 11 9.5 11C8.67 11 8 10.33 8 9.5C8 8.67 8.67 8 9.5 8M14.5 13C15.33 13 16 13.67 16 14.5C16 15.33 15.33 16 14.5 16C13.67 16 13 15.33 13 14.5C13 13.67 13.67 13 14.5 13Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/non-chargable/category`,
            type: "link",
            active: false,
            selected: false,
            title: "Category",
            accessPermission: "non_chargeable_item_access",
          },
          {
            path: `/admin/non-chargable/item`,
            type: "link",
            active: false,
            selected: false,
            title: "Items",
            accessPermission: "non_chargeable_item_access",
          },
        ],
      },
      {
        title: "Restaurant SKU",
        accessPermission: "restaurant_sku_access",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>food</title>
            <path d="M18.06 23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5.05H18V1H16.03V5.05H11.06L11.36 7.39C13.07 7.86 14.67 8.71 15.63 9.65C17.07 11.07 18.06 12.54 18.06 14.94V23M1 22V21H16.03V22C16.03 22.54 15.58 23 15 23H2C1.45 23 1 22.54 1 22M16.03 15C16.03 7 1 7 1 15H16.03M1 17H16V19H1V17Z" />
          </svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `/admin/restaurantSKU/Section`,
            type: "link",
            active: false,
            selected: false,
            title: "SKU Group",
            accessPermission: "restaurant_sku_access",
          },
          {
            path: "/admin/restaurantSKU/Category",
            type: "link",
            active: false,
            selected: false,
            title: "SKU Category",
            accessPermission: "restaurant_sku_access",
          },
          {
            path: "/admin/restaurantSKU/Item",
            type: "link",
            active: false,
            selected: false,
            title: "SKU Item",
            accessPermission: "restaurant_sku_access",
          },
          {
            path: "/admin/restaurantSKU/ItemVariant",
            type: "link",
            active: false,
            selected: false,
            title: "SKU Item Variant",
            accessPermission: "restaurant_sku_access",
          },
        ],
      },
      {
        title: "Gas Readings",
        accessPermission: "gas_readings_access",
        path: `/admin/Gas/gasReading`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>gas-burner</title>
            <path d="M16.14 8.79L16.12 8.8C16.35 9.07 16.55 9.39 16.7 9.72L16.79 9.91C17.5 11.6 17 13.55 15.69 14.77C14.5 15.86 12.84 16.15 11.3 15.95C9.84 15.77 8.5 14.85 7.73 13.58C7.5 13.19 7.3 12.75 7.2 12.3C7.07 11.93 7.03 11.57 7 11.2C6.91 9.6 7.55 7.9 8.76 6.9C8.21 8.11 8.34 9.62 9.15 10.67L9.26 10.8C9.4 10.92 9.57 10.96 9.73 10.89C9.88 10.83 10 10.68 10 10.5L9.93 10.28C9.05 7.96 9.79 5.25 11.66 3.72C12.17 3.3 12.8 2.92 13.46 2.75C12.78 4.11 13 5.89 14.09 6.96C14.55 7.43 15.1 7.74 15.58 8.18L16.14 8.79M13.86 13.43L13.85 13.42C14.3 13.03 14.55 12.36 14.53 11.76L14.5 11.44C14.3 10.44 13.43 10.11 12.87 9.38C12.7 9.16 12.55 8.88 12.44 8.6C12.22 9.1 12.2 9.57 12.29 10.11C12.39 10.68 12.62 11.17 12.5 11.76C12.34 12.41 11.83 13.06 10.94 13.27C11.44 13.76 12.25 14.15 13.06 13.87C13.32 13.8 13.65 13.61 13.86 13.43M11 18V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19V18H15V19C15 19.55 15.45 20 16 20C16.55 20 17 19.55 17 19V18C18.11 18 20 18.9 20 20V22H4V20C4 18.9 5.9 18 7 18V19C7 19.55 7.45 20 8 20C8.55 20 9 19.55 9 19V18H11Z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
      },
      {
        title: "Store Inventory",
        accessPermission: "store_inventory_access",
        path: `/admin/Gas/gasReading`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
      },
    ],
  },
  // {
  //   menutitle: "WEB APPS",
  //   userType: "all",
  //   Items: [
  //     {
  //       title: "Apps",
  //       accessPermission: "all",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `/components/apps/cards`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Cards",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/apps/range-slider`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Range-slider",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/apps/calendar`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Calendar",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/apps/contacts`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Contacts",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/apps/image-compare`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Image-compare",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/apps/notification`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Notification",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/apps/widget-notification`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Widget-notification",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/apps/treeview`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Treeview",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/apps/file-manager`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "File-manager",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/apps/file-manager1`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "File-manager1",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/apps/file-details`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "File-details",
  //           accessPermission: "all",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Elements",
  //       accessPermission: "all",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `/components/elements/alerts`,
  //           title: "Alerts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/avatar`,
  //           title: "Avatar",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/breadcrumbs`,
  //           title: "Breadcrumbs",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/buttons`,
  //           title: "Buttons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/badges`,
  //           title: "Badges",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/dropdown`,
  //           title: "Dropdown",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/thumbnails`,
  //           title: "Thumbnails",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/list-group`,
  //           title: "List Group",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/navigation`,
  //           title: "Navigation",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/images`,
  //           title: "Images",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/pagination`,
  //           title: "Pagination",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/popover`,
  //           title: "Popover",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/progress`,
  //           title: "Progress",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/spinners`,
  //           title: "Spinners",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/media-object`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Media Object",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/typography`,
  //           title: "Typography",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/tooltip`,
  //           title: "Tooltip",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/toast`,
  //           title: "Toast",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/elements/tags`,
  //           title: "Tags",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },

  //         {
  //           path: `/components/elements/tabs`,
  //           title: "Tabs",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Advanced UI",
  //       accessPermission: "all",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
  //           <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       bookmark: true,
  //       active: false,
  //       children: [
  //         {
  //           path: `/components/advancedui/accordions`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Accordions",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/advancedui/carousel`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Carousel",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/advancedui/collapse`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Collapse",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/advancedui/modal`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Modal",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/advancedui/timeline`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Timeline",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/advancedui/sweet-alert`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Sweet Alert",
  //           accessPermission: "all",
  //         },

  //         {
  //           path: `/components/advancedui/rating`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //           title: "Rating",
  //         },
  //         {
  //           path: `/components/advancedui/counters`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Counters",
  //           accessPermission: "all",
  //         },

  //         {
  //           path: `/components/advancedui/search`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Search",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/advancedui/userlist`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Userlist",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/advancedui/blog`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Blog",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/advancedui/blog-details`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Blog-details",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/advancedui/edit-post`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Edit-post",
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/advancedui/file-attachments`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "File Attachments",
  //           accessPermission: "all",
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   menutitle: "PAGES",
  //   userType: "all",
  //   Items: [
  //     {
  //       title: "Pages",
  //       accessPermission: "all",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z" />
  //           <path d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
  //           <path d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           title: "Authentication",
  //           accessPermission: "all",
  //           type: "sub",
  //           selected: false,
  //           active: false,
  //           children: [
  //             {
  //               path: `/components/pages/authentication/sign-in`,
  //               title: "Sig In",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/authentication/sign-up`,
  //               title: "Sig Up",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/authentication/forgot-password`,
  //               title: "Forgot Password",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/authentication/reset-password`,
  //               title: "Reset Password",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/authentication/lockscreen`,
  //               title: "Lockscreen",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/authentication/underconstruction`,
  //               title: "UnderConstruction",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/authentication/404`,
  //               title: "404 Error",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/authentication/500`,
  //               title: "500 Error",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/authentication/501`,
  //               title: "501 Error",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //           ],
  //         },
  //         {
  //           title: "Switcher",
  //           accessPermission: "all",
  //           type: "sub",
  //           selected: false,
  //           active: false,
  //           children: [
  //             {
  //               path: `/components/pages/switcher`,
  //               title: "Switcher-1",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //           ],
  //         },
  //         {
  //           title: "E-Commerce",
  //           accessPermission: "all",
  //           type: "sub",
  //           selected: false,
  //           active: false,
  //           children: [
  //             {
  //               path: `/components/pages/e-commerce/shop`,
  //               title: "Shop",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/e-commerce/product-details`,
  //               title: "Product Details",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/e-commerce/cart`,
  //               title: "Cart",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/e-commerce/checkout`,
  //               title: "Checkout",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/e-commerce/wish-list`,
  //               title: "Wish-list",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //           ],
  //         },

  //         {
  //           path: `/components/pages/profile`,
  //           title: "Profile",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/pages/notification-list`,
  //           title: "Notification-list",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/pages/about-us`,
  //           title: "About Us",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/pages/settings`,
  //           title: "Settings",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           title: "Mail",
  //           type: "sub",
  //           accessPermission: "all",
  //           selected: false,
  //           active: false,
  //           children: [
  //             {
  //               path: `/components/pages/mail/mail`,
  //               title: "Mail",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/mail/mail-compose`,
  //               title: "Mail Compose",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/mail/read-mail`,
  //               title: "Read-Mail",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/mail/mail-settings`,
  //               title: "Mail-Settings",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //             {
  //               path: `/components/pages/mail/chat`,
  //               title: "Chat",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //               accessPermission: "all",
  //             },
  //           ],
  //         },
  //         {
  //           path: `/components/pages/invoice`,
  //           title: "Invoice",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/pages/pricing`,
  //           title: "Pricing",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },

  //         {
  //           path: `/components/pages/gallery`,
  //           title: "Gallery",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/pages/todotask`,
  //           title: "Todotask",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/pages/faqs`,
  //           title: "FAQS",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/pages/empty-page`,
  //           title: "Empty Page",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Utilities",
  //       accessPermission: "all",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M12 22c4.879 0 9-4.121 9-9s-4.121-9-9-9-9 4.121-9 9 4.121 9 9 9zm0-16c3.794 0 7 3.206 7 7s-3.206 7-7 7-7-3.206-7-7 3.206-7 7-7zm5.284-2.293 1.412-1.416 3.01 3-1.413 1.417zM5.282 2.294 6.7 3.706l-2.99 3-1.417-1.413z" />
  //           <path d="M11 9h2v5h-2zm0 6h2v2h-2z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `/components/utilities/background`,
  //           title: "Background",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/utilities/border`,
  //           title: "Border",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/utilities/display`,
  //           title: "Display",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/utilities/flex`,
  //           title: "Flex",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/utilities/height`,
  //           title: "Height",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/utilities/margin`,
  //           title: "Margin",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/utilities/padding`,
  //           title: "Padding",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/utilities/position`,
  //           title: "Position",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/utilities/width`,
  //           title: "Width",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/utilities/extras`,
  //           title: "Extras",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   menutitle: "GENERAL",
  //   userType: "all",
  //   Items: [
  //     {
  //       title: "Icons",
  //       accessPermission: "all",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       children: [
  //         {
  //           path: `/components/icons/font-awesome`,
  //           title: "Font Awesome",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/icons/material-design-icons`,
  //           title: "Material Design Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/icons/simple-line-icons`,
  //           title: "Simple Line Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/icons/feather-icons`,
  //           title: "Feather Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/icons/ionic-icons`,
  //           title: "Ionic Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/icons/flag-icons`,
  //           title: "Flag Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/icons/pe7-icons`,
  //           title: "Pe7 Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/icons/themify-icons`,
  //           title: "Themify Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/icons/typicons-icons`,
  //           title: "Typicons Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/icons/weather-icons`,
  //           title: "Weather Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/icons/material-design-icons`,
  //           title: "Material Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/icons/bootstrap-icons`,
  //           title: "Bootstrap Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Charts",
  //       accessPermission: "all",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       children: [
  //         {
  //           path: `/components/charts/chartjs`,
  //           title: " ChartJs",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/charts/echart`,
  //           title: "Echart",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/charts/apexcharts`,
  //           title: "ApexCharts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   menutitle: "COMPONENTS",
  //   userType: "all",
  //   Items: [
  //     {
  //       title: "Forms",
  //       accessPermission: "all",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `/components/forms/form-elements`,
  //           title: "Form Elements",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/forms/advanced-forms`,
  //           title: "Advanced Forms",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/forms/form-layouts`,
  //           title: "Form Layouts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/forms/form-validation`,
  //           title: "Form Validation",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/forms/form-wizard`,
  //           title: "Form Wizard",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/forms/form-editor`,
  //           title: "Form Editor",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/forms/form-element-sizes`,
  //           title: "Form-element-sizes",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/forms/form-input-spinners`,
  //           title: "Form Input Spinners",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Tables",
  //       accessPermission: "all",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H5V5h14zM5 11h8v8H5v-8zm10 8v-8h4.001l.001 8H15z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `/components/tables/default-tables`,
  //           title: " Default Tables",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //         {
  //           path: `/components/tables/data-tables`,
  //           title: "Data Tables ",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           accessPermission: "all",
  //         },
  //       ],
  //     },
  //     {
  //       path: `/components/widgets`,
  //       accessPermission: "all",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
  //         </svg>
  //       ),
  //       type: "link",
  //       selected: false,
  //       active: false,
  //       title: "Widgets",
  //     },
  //     {
  //       title: "Maps",
  //       accessPermission: "all",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `/components/maps/leaflet-maps`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Leaflet Maps ",
  //           accessPermission: "all",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
