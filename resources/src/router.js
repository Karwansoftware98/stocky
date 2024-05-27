import store from "./store/index.js";
import NProgress from "nprogress";
import { createRouter, createWebHistory } from 'vue-router'

// create new router

const routes = [
    {
        path: "/",
        redirect: "/app/dashboard",

        children: [
            {
                path: "/app/dashboard",
                name: "dashboard",
                component: () =>
                    import(
                        /* webpackChunkName: "dashboard" */ "./views/app/dashboard/dashboard.vue"
                    ),
            },

            //Products
            {
                path: "/app/products",
                redirect: "app/products/list",
                children: [
                    {
                        name: "index_products",
                        path: "list",
                        component: () =>
                            import(
                                /* webpackChunkName: "index_products" */ "./views/app/pages/products/index_products.vue"
                            ),
                    },
                    {
                        path: "store",
                        name: "store_product",
                        component: () =>
                            import(
                                /* webpackChunkName: "store_product" */ "./views/app/pages/products/Add_product.vue"
                            ),
                    },
                    {
                        path: "edit/:id",
                        name: "edit_product",
                        component: () =>
                            import(
                                /* webpackChunkName: "edit_product" */ "./views/app/pages/products/Edit_product.vue"
                            ),
                    },
                    {
                        path: "detail/:id",
                        name: "detail_product",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_product" */ "./views/app/pages/products/Detail_Product.vue"
                            ),
                    },
                    {
                        path: "barcode",
                        name: "barcode",
                        component: () =>
                            import(
                                /* webpackChunkName: "barcode" */ "./views/app/pages/products/barcode.vue"
                            ),
                    },
                    // categories
                    {
                        name: "categories",
                        path: "Categories",
                        component: () =>
                            import(
                                /* webpackChunkName: "Categories" */ "./views/app/pages/products/categorie.vue"
                            ),
                    },

                    // brands
                    {
                        name: "brands",
                        path: "Brands",
                        component: () =>
                            import(
                                /* webpackChunkName: "Brands" */ "./views/app/pages/products/brands.vue"
                            ),
                    },

                    // units
                    {
                        name: "units",
                        path: "Units",
                        component: () =>
                            import(
                                /* webpackChunkName: "units" */ "./views/app/pages/products/units.vue"
                            ),
                    },
                ],
            },

            //Adjustement
            {
                path: "/app/adjustments",
                redirect: "/app/adjustments/list",
                children: [
                    {
                        name: "index_adjustment",
                        path: "list",
                        component: () =>
                            import(
                                /* webpackChunkName: "index_adjustment" */
                                "./views/app/pages/adjustment/index_Adjustment.vue"
                            ),
                    },
                    {
                        name: "store_adjustment",
                        path: "store",
                        component: () =>
                            import(
                                /* webpackChunkName: "store_adjustment" */
                                "./views/app/pages/adjustment/Create_Adjustment.vue"
                            ),
                    },
                    {
                        name: "edit_adjustment",
                        path: "edit/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "edit_adjustment" */
                                "./views/app/pages/adjustment/Edit_Adjustment.vue"
                            ),
                    },
                ],
            },

            //Transfer
            {
                path: "/app/transfers",
                redirect: "/app/transfers/list",
                children: [
                    {
                        name: "index_transfer",
                        path: "list",
                        component: () =>
                            import(
                                /* webpackChunkName: "index_transfer" */ "./views/app/pages/transfers/index_transfer.vue"
                            ),
                    },
                    {
                        name: "store_transfer",
                        path: "store",
                        component: () =>
                            import(
                                /* webpackChunkName: "store_transfer" */
                                "./views/app/pages/transfers/create_transfer.vue"
                            ),
                    },
                    {
                        name: "edit_transfer",
                        path: "edit/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "edit_transfer" */ "./views/app/pages/transfers/edit_transfer.vue"
                            ),
                    },
                ],
            },

            //Expense
            {
                path: "/app/expenses",
                redirect: "/app/expenses/list",
                children: [
                    {
                        name: "index_expense",
                        path: "list",
                        component: () =>
                            import(
                                /* webpackChunkName: "index_expense" */ "./views/app/pages/expense/index_expense.vue"
                            ),
                    },
                    {
                        name: "store_expense",
                        path: "store",
                        component: () =>
                            import(
                                /* webpackChunkName: "store_expense" */ "./views/app/pages/expense/create_expense.vue"
                            ),
                    },
                    {
                        name: "edit_expense",
                        path: "edit/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "edit_expense" */ "./views/app/pages/expense/edit_expense.vue"
                            ),
                    },
                    {
                        name: "expense_category",
                        path: "category",
                        component: () =>
                            import(
                                /* webpackChunkName: "expense_category" */ "./views/app/pages/expense/category_expense.vue"
                            ),
                    },
                ],
            },

            //Quotation
            {
                path: "/app/quotations",
                redirect: "/app/quotations/list",
                children: [
                    {
                        name: "index_quotation",
                        path: "list",
                        component: () =>
                            import(
                                "./views/app/pages/quotations/index_quotation.vue"
                            ),
                    },
                    {
                        name: "store_quotation",
                        path: "store",
                        component: () =>
                            import(
                                /* webpackChunkName: "store_quotation" */
                                "./views/app/pages/quotations/create_quotation.vue"
                            ),
                    },
                    {
                        name: "edit_quotation",
                        path: "edit/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "edit_quotation" */
                                "./views/app/pages/quotations/edit_quotation.vue"
                            ),
                    },
                    {
                        name: "detail_quotation",
                        path: "detail/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_quotation" */
                                "./views/app/pages/quotations/detail_quotation.vue"
                            ),
                    },
                    {
                        name: "change_to_sale",
                        path: "create_sale/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "change_to_sale" */ "./views/app/pages/sales/change_to_sale.vue"
                            ),
                    },
                ],
            },

            //Purchase
            {
                path: "/app/purchases",
                redirect: "/app/purchases/list",
                children: [
                    {
                        name: "index_purchases",
                        path: "list",
                        component: () =>
                            import(
                                /* webpackChunkName: "index_purchases" */ "./views/app/pages/purchases/index_purchase.vue"
                            ),
                    },
                    {
                        name: "store_purchase",
                        path: "store",
                        component: () =>
                            import(
                                /* webpackChunkName: "store_purchase" */
                                "./views/app/pages/purchases/create_purchase.vue"
                            ),
                    },
                    {
                        name: "edit_purchase",
                        path: "edit/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "edit_purchase" */ "./views/app/pages/purchases/edit_purchase.vue"
                            ),
                    },
                    {
                        name: "purchase_return",
                        path: "purchase_return/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "create_purchase_return" */ "./views/app/pages/purchase_return/create_purchase_return.vue"
                            ),
                    },
                    {
                        name: "detail_purchase",
                        path: "detail/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_purchase" */
                                "./views/app/pages/purchases/detail_purchase.vue"
                            ),
                    },
                ],
            },

            //Sale
            {
                path: "/app/sales",
                redirect: "/app/sales/list",
                children: [
                    {
                        name: "index_sales",
                        path: "list",
                        component: () =>
                            import(
                                /* webpackChunkName: "index_sales" */ "./views/app/pages/sales/index_sale.vue"
                            ),
                    },
                    {
                        name: "store_sale",
                        path: "store",
                        component: () =>
                            import(
                                /* webpackChunkName: "store_sale" */ "./views/app/pages/sales/create_sale.vue"
                            ),
                    },
                    {
                        name: "edit_sale",
                        path: "edit/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "edit_sale" */ "./views/app/pages/sales/edit_sale.vue"
                            ),
                    },
                    {
                        name: "sale_return",
                        path: "sale_return/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "create_sale_return" */ "./views/app/pages/sale_return/create_sale_return.vue"
                            ),
                    },
                    {
                        name: "detail_sale",
                        path: "detail/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_sale" */ "./views/app/pages/sales/detail_sale.vue"
                            ),
                    },
                    {
                        name: "shipment",
                        path: "shipment",
                        component: () =>
                            import(
                                /* webpackChunkName: "shipment" */ "./views/app/pages/sales/shipments.vue"
                            ),
                    },
                ],
            },

            // Sales Return
            {
                path: "/app/sale_return",
                redirect: "/app/sale_return/list",
                children: [
                    {
                        name: "index_sale_return",
                        path: "list"
                    },
                    {
                        name: "store_sale_return",
                        path: "store",
                        component: () =>
                            import(
                                /* webpackChunkName: "store_sale_return" */
                                "./views/app/pages/sale_return/create_sale_return.vue"
                            )
                    },
                    {
                        name: "edit_sale_return",
                        path: "edit/:id/:sale_id",
                        component: () =>
                            import(
                                /* webpackChunkName: "edit_sale_return" */
                                "./views/app/pages/sale_return/edit_sale_return.vue"
                            ),
                    },
                    {
                        name: "detail_sale_return",
                        path: "detail/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_sale_return" */
                                "./views/app/pages/sale_return/detail_sale_return.vue"
                            ),
                    },
                ],
            },

            // purchase Return
            {
                path: "/app/purchase_return",
                redirect: "/app/purchase_return/list",
                children: [
                    {
                        name: "index_purchase_return",
                        path: "list",
                        component: () =>
                            import(
                                /* webpackChunkName: "index_purchase_return" */
                                "./views/app/pages/purchase_return/index_purchase_return.vue"
                            ),
                    },
                    // {
                    //     name: "store_purchase_return",
                    //     path: "store",
                    //     component: () =>
                    //         import(
                    //             /* webpackChunkName: "store_purchase_return" */
                    //             "./views/app/pages/purchase_return/create_purchase_return"
                    //         )
                    // },
                    {
                        name: "edit_purchase_return",
                        path: "edit/:id/:purchase_id",
                        component: () =>
                            import(
                                /* webpackChunkName: "edit_purchase_return" */
                                "./views/app/pages/purchase_return/edit_purchase_return.vue"
                            ),
                    },
                    {
                        name: "detail_purchase_return",
                        path: "detail/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_purchase_return" */
                                "./views/app/pages/purchase_return/detail_purchase_return.vue"
                            ),
                    },
                ],
            },

            // Hrm
            {
                path: "/app/hrm",
                redirect: "/app/hrm/employees",
                children: [
                    // employees
                    {
                        path: "employees",
                        redirect: "/app/hrm/employees/list",
                        children: [
                            {
                                name: "employees_list",
                                path: "list",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "index_employee" */
                                        "./views/app/pages/hrm/employees/index_employee.vue"
                                    ),
                            },
                            {
                                name: "store_employee",
                                path: "store",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "store_employee" */
                                        "./views/app/pages/hrm/employees/employee_create.vue"
                                    ),
                            },
                            {
                                name: "edit_employee",
                                path: "edit/:id",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "edit_employee" */
                                        "./views/app/pages/hrm/employees/employee_edit.vue"
                                    ),
                            },
                            {
                                name: "detail_employee",
                                path: "detail/:id",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "detail_employee" */
                                        "./views/app/pages/hrm/employees/employee_details.vue"
                                    ),
                            },
                        ],
                    },
                    // company
                    {
                        name: "company",
                        path: "company",
                        component: () =>
                            import(
                                /* webpackChunkName: "company" */ "./views/app/pages/hrm/company.vue"
                            ),
                    },

                    // departments
                    {
                        name: "departments",
                        path: "departments",
                        component: () =>
                            import(
                                /* webpackChunkName: "departments" */ "./views/app/pages/hrm/department.vue"
                            ),
                    },

                    // designations
                    {
                        name: "designations",
                        path: "designations",
                        component: () =>
                            import(
                                /* webpackChunkName: "designations" */ "./views/app/pages/hrm/designation.vue"
                            ),
                    },

                    // office_shift
                    {
                        name: "office_shift",
                        path: "office_shift",
                        component: () =>
                            import(
                                /* webpackChunkName: "office_shift" */ "./views/app/pages/hrm/office_shift.vue"
                            ),
                    },

                    // attendance
                    {
                        name: "attendance",
                        path: "attendance",
                        component: () =>
                            import(
                                /* webpackChunkName: "attendance" */ "./views/app/pages/hrm/attendance.vue"
                            ),
                    },

                    // holidays
                    {
                        name: "holidays",
                        path: "holidays",
                        component: () =>
                            import(
                                /* webpackChunkName: "holidays" */ "./views/app/pages/hrm/holidays.vue"
                            ),
                    },

                    {
                        path: "leaves",
                        redirect: "/app/hrm/leaves/list",
                        children: [
                            {
                                name: "leave_list",
                                path: "list",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "leave_list" */
                                        "./views/app/pages/hrm/leaves/leave_list.vue"
                                    ),
                            },
                            {
                                name: "leave_type",
                                path: "type",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "leave_type" */
                                        "./views/app/pages/hrm/leaves/leave_type.vue"
                                    ),
                            },
                        ],
                    },
                ],
            },

            // People
            {
                path: "/app/People",
                redirect: "/app/People/Customers",
                children: [
                    // Customers
                    {
                        name: "Customers",
                        path: "Customers",
                        component: () =>
                            import(
                                /* webpackChunkName: "Customers" */ "./views/app/pages/people/customers.vue"
                            ),
                    },

                    // Suppliers
                    {
                        name: "Suppliers",
                        path: "Suppliers",
                        component: () =>
                            import(
                                /* webpackChunkName: "Suppliers" */ "./views/app/pages/people/providers.vue"
                            ),
                    },

                    // Users
                    {
                        name: "user",
                        path: "Users",
                        component: () =>
                            import(
                                /* webpackChunkName: "Users" */ "./views/app/pages/people/users.vue"
                            ),
                    },
                ],
            },

            // Settings
            {
                path: "/app/settings",
                redirect: "/app/settings/System_settings",
                children: [
                    // Permissions
                    {
                        path: "permissions",
                        redirect: "/app/settings/permissions/list",
                        children: [
                            {
                                name: "groupPermission",
                                path: "list",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "groupPermission" */
                                        "./views/app/pages/settings/permissions/Permissions.vue"
                                    ),
                            },
                            {
                                name: "store_permission",
                                path: "store",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "store_permission" */
                                        "./views/app/pages/settings/permissions/Create_permission.vue"
                                    ),
                            },
                            {
                                name: "edit_permission",
                                path: "edit/:id",
                                component: () =>
                                    import(
                                        /* webpackChunkName: "edit_permission" */
                                        "./views/app/pages/settings/permissions/Edit_permission.vue"
                                    ),
                            },
                        ],
                    },

                    // sms_settings
                    {
                        name: "sms_settings",
                        path: "sms_settings",
                        component: () =>
                            import(
                                /* webpackChunkName: "sms_settings" */ "./views/app/pages/settings/sms_settings.vue"
                            ),
                    },

                    // sms_templates
                    {
                        name: "sms_templates",
                        path: "sms_templates",
                        component: () =>
                            import(
                                /* webpackChunkName: "sms_templates" */ "./views/app/pages/settings/sms_templates.vue"
                            ),
                    },

                    // email_templates
                    {
                        name: "email_templates",
                        path: "email_templates",
                        component: () =>
                            import(
                                /* webpackChunkName: "email_templates" */ "./views/app/pages/settings/email_templates.vue"
                            ),
                    },

                    // pos_settings
                    {
                        name: "pos_settings",
                        path: "pos_settings",
                        component: () =>
                            import(
                                /* webpackChunkName: "pos_settings" */ "./views/app/pages/settings/pos_settings.vue"
                            ),
                    },

                    // payment_gateway
                    {
                        name: "payment_gateway",
                        path: "payment_gateway",
                        component: () =>
                            import(
                                /* webpackChunkName: "payment_gateway" */ "./views/app/pages/settings/payment_gateway.vue"
                            ),
                    },

                    // mail_settings
                    {
                        name: "mail_settings",
                        path: "mail_settings",
                        component: () =>
                            import(
                                /* webpackChunkName: "mail_settings" */ "./views/app/pages/settings/mail_settings.vue"
                            ),
                    },

                    // update_settings
                    {
                        name: "update_settings",
                        path: "update_settings",
                        component: () =>
                            import(
                                /* webpackChunkName: "update_settings" */ "./views/app/pages/settings/update_settings.vue"
                            ),
                    },

                    // currencies
                    {
                        name: "currencies",
                        path: "Currencies",
                        component: () =>
                            import(
                                /* webpackChunkName: "Currencies" */ "./views/app/pages/settings/currencies.vue"
                            ),
                    },

                    // Backup
                    {
                        name: "Backup",
                        path: "Backup",
                        component: () =>
                            import(
                                /* webpackChunkName: "Backup" */ "./views/app/pages/settings/backup.vue"
                            ),
                    },

                    // Warehouses
                    {
                        name: "Warehouses",
                        path: "Warehouses",
                        component: () =>
                            import(
                                /* webpackChunkName: "Warehouses" */ "./views/app/pages/settings/warehouses.vue"
                            ),
                    },

                    // System Settings
                    {
                        name: "system_settings",
                        path: "System_settings",
                        component: () =>
                            import(
                                /* webpackChunkName: "System_settings" */ "./views/app/pages/settings/system_settings.vue"
                            ),
                    },
                ],
            },

            // Reports
            {
                path: "/app/reports",
                redirect: "/app/reports/profit_and_loss",
                children: [
                    {
                        name: "payments_purchases",
                        path: "payments_purchase",
                        component: () =>
                            import(
                                /* webpackChunkName: "payments_purchases" */
                                "./views/app/pages/reports/payments/payments_purchases.vue"
                            ),
                    },
                    {
                        name: "payments_sales",
                        path: "payments_sale",
                        component: () =>
                            import(
                                /* webpackChunkName: "payments_sales" */
                                "./views/app/pages/reports/payments/payments_sales.vue"
                            ),
                    },
                    {
                        name: "payments_purchases_returns",
                        path: "payments_purchases_returns",
                        component: () =>
                            import(
                                /* webpackChunkName: "payments_purchases_returns" */
                                "./views/app/pages/reports/payments/payments_purchases_returns.vue"
                            ),
                    },
                    {
                        name: "payments_sales_returns",
                        path: "payments_sales_returns",
                        component: () =>
                            import(
                                /* webpackChunkName: "payments_sales_returns" */
                                "./views/app/pages/reports/payments/payments_sales_returns.vue"
                            ),
                    },

                    {
                        name: "profit_and_loss",
                        path: "profit_and_loss",
                        component: () =>
                            import(
                                /* webpackChunkName: "profit_and_loss" */
                                "./views/app/pages/reports/profit_and_loss.vue"
                            ),
                    },

                    {
                        name: "quantity_alerts",
                        path: "quantity_alerts",
                        component: () =>
                            import(
                                /* webpackChunkName: "quantity_alerts" */
                                "./views/app/pages/reports/quantity_alerts.vue"
                            ),
                    },
                    {
                        name: "warehouse_report",
                        path: "warehouse_report",
                        component: () =>
                            import(
                                /* webpackChunkName: "warehouse_report" */
                                "./views/app/pages/reports/warehouse_report.vue"
                            ),
                    },

                    {
                        name: "sales_report",
                        path: "sales_report",
                        component: () =>
                            import(
                                /* webpackChunkName: "sales_report" */
                                "./views/app/pages/reports/sales_report.vue"
                            ),
                    },

                    {
                        name: "product_sales_report",
                        path: "product_sales_report",
                        component: () =>
                            import(
                                /* webpackChunkName: "product_sales_report" */
                                "./views/app/pages/reports/product_sales_report.vue"
                            ),
                    },
                    {
                        name: "purchase_report",
                        path: "purchase_report",
                        component: () =>
                            import(
                                /* webpackChunkName: "purchase_report" */
                                "./views/app/pages/reports/purchase_report.vue"
                            ),
                    },

                    {
                        name: "product_purchases_report",
                        path: "product_purchases_report",
                        component: () =>
                            import(
                                /* webpackChunkName: "product_purchases_report" */
                                "./views/app/pages/reports/product_purchases_report.vue"
                            ),
                    },

                    {
                        name: "customers_report",
                        path: "customers_report",
                        component: () =>
                            import(
                                /* webpackChunkName: "customers_report" */
                                "./views/app/pages/reports/customers_report.vue"
                            ),
                    },
                    {
                        name: "detail_customer_report",
                        path: "detail_customer/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_customer_report" */
                                "./views/app/pages/reports/detail_Customer_Report.vue"
                            ),
                    },

                    {
                        name: "providers_report",
                        path: "providers_report",
                        component: () =>
                            import(
                                /* webpackChunkName: "providers_report" */
                                "./views/app/pages/reports/providers_report.vue"
                            ),
                    },
                    {
                        name: "detail_supplier_report",
                        path: "detail_supplier/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_supplier_report" */
                                "./views/app/pages/reports/detail_Supplier_Report.vue"
                            ),
                    },

                    {
                        name: "top_selling_products",
                        path: "top_selling_products",
                        component: () =>
                            import(
                                /* webpackChunkName: "top_selling_products" */
                                "./views/app/pages/reports/top_selling_products.vue"
                            ),
                    },

                    {
                        name: "product_report",
                        path: "product_report",
                        component: () =>
                            import(
                                /* webpackChunkName: "product_report" */
                                "./views/app/pages/reports/product_report.vue"
                            ),
                    },
                    {
                        name: "detail_product_report",
                        path: "detail_product/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_product_report" */
                                "./views/app/pages/reports/detail_product_report.vue"
                            ),
                    },

                    {
                        name: "top_customers",
                        path: "top_customers",
                        component: () =>
                            import(
                                /* webpackChunkName: "top_customers" */
                                "./views/app/pages/reports/top_customers.vue"
                            ),
                    },

                    {
                        name: "stock_report",
                        path: "stock_report",
                        component: () =>
                            import(
                                /* webpackChunkName: "stock_report" */
                                "./views/app/pages/reports/stock_report.vue"
                            ),
                    },
                    {
                        name: "detail_stock_report",
                        path: "detail_stock/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_stock_report" */
                                "./views/app/pages/reports/detail_stock_report.vue"
                            ),
                    },

                    {
                        name: "users_report",
                        path: "users_report",
                        component: () =>
                            import(
                                /* webpackChunkName: "users_report" */
                                "./views/app/pages/reports/users_report.vue"
                            ),
                    },
                    {
                        name: "detail_user_report",
                        path: "detail_user/:id",
                        component: () =>
                            import(
                                /* webpackChunkName: "detail_user_report" */
                                "./views/app/pages/reports/detail_user_report.vue"
                            ),
                    },
                ],
            },

            {
                name: "profile",
                path: "/app/profile",
                component: () =>
                    import(
                        /* webpackChunkName: "profile" */ "./views/app/pages/profile.vue"
                    ),
            },
        ],
    },

    {
        name: "pos",
        path: "/app/pos",
        // beforeEnter: authenticate,
        component: () =>
            import(/* webpackChunkName: "pos" */ "./views/app/pages/pos.vue"),
    },

    {
        path: "*",
        name: "NotFound",
        component: () =>
            import(
                /* webpackChunkName: "NotFound" */ "./views/app/pages/notFound.vue"
            ),
    },

    {
        path: "not_authorize",
        name: "not_authorize",
        component: () =>
            import(
                /* webpackChunkName: "not_authorize" */ "./views/app/pages/NotAuthorize.vue"
            ),
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
// Navigation guards
router.beforeEach((to, from, next) => {
  NProgress.start();
  const publicPages = ['/login', '/register', '/forgot-password', '/maintenance', '/error', '/coming-soon', '/not-authorized'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.getters['auth/loggedIn'];

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
