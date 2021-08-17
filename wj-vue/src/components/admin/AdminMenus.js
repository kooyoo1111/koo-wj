import Vue from 'vue'
import Router from 'vue-router'

const adminMenus = [{
        id: 1,
        path: '/admin',
        name: 'AdminIndex',
        nameZh: '首页',
        iconCls: 'el-icon-s-home',
        component: 'AdminIndex',
        parentId: 0,
        children: [{
            id: 2,
            path: '/admin/dashboard',
            name: 'DashboardAdmin',
            nameZh: '运行情况',
            iconCls: '',
            component: 'dashboard/admin/index',
            parentId: 1,
            children: []
        }],
    },
    {
        id: 3,
        path: '/admin',
        name: 'Content',
        nameZh: '内容管理',
        iconCls: 'el-icon-tickets',
        component: 'AdminIndex',
        parentId: 0,
        children: [{
                id: 8,
                path: '/admin/content/article',
                name: 'ArticleManagement',
                nameZh: '笔记管理',
                iconCls: '',
                component: 'content/ArticleManagement',
                parentId: 3,
                children: []
            },
            {
                id: 9,
                path: '/admin/content/book',
                name: 'BookManagement',
                nameZh: '图书管理',
                iconCls: '',
                component: 'content/BookManagement',
                parentId: 3,
                children: []
            },
        ]
    },
    {
        id: 4,
        path: '/admin',
        name: 'User',
        nameZh: '用户管理',
        iconCls: 'el-icon-user',
        component: 'AdminIndex',
        parentId: 0,
        children: [{
                id: 6,
                path: '/admin/user/profile',
                name: 'Profile',
                nameZh: '用户信息',
                iconCls: '',
                component: 'user/UserProfile',
                parentId: 4,
                children: []
            },
            {
                id: 7,
                path: '/admin/user/role',
                name: 'Role',
                nameZh: '角色配置',
                iconCls: '',
                component: 'user/Role',
                parentId: 4,
                children: []
            },
        ]
    }
];

export default adminMenus