import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Default',
            redirect: '/home',
            component: Home
        },
        {
            // home页面并不需要被访问，只是作为其它组件的父组件
            path: '/home',
            name: 'Home',
            component: Home,
            redirect: '/index',
            children: [{
                    path: '/index',
                    name: 'AppIndex',
                    component: () =>
                        import ('../components/home/AppIndex')
                },
                {
                    path: '/jotter',
                    name: 'Jotter',
                    component: () =>
                        import ('../components/jotter/Articles')
                },
                {
                    path: '/jotter/article',
                    name: 'Article',
                    component: () =>
                        import ('../components/jotter/ArticleDetails')
                },
                {
                    path: '/admin/content/editor',
                    name: 'Editor',
                    component: () =>
                        import ('../components/admin/content/ArticleEditor'),
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/library',
                    name: 'Library',
                    component: () =>
                        import ('../components/library/LibraryIndex')
                },
                {
                    path: '/aboutMe',
                    name: 'AboutMe',
                    component: () =>
                        import ('../components/home/AboutMe')
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import ('../components/Login')
        },
        {
            path: '/register',
            name: 'Register',
            component: () =>
                import ('../components/Register')
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () =>
                import ('../components/admin/AdminIndex'),
            meta: {
                requireAuth: true
            },
            children: [{
                    path: '/admin/dashboard',
                    name: 'Dashboard',
                    component: () =>
                        import ('../components/admin/dashboard/admin/index'),
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/admin/content/article',
                    name: 'ArticleManagement',
                    component: () =>
                        import ('../components/admin/content/ArticleManagement'),
                },
                {
                    path: '/admin/content/book',
                    name: 'BookManagement',
                    component: () =>
                        import ('../components/admin/content/BookManagement'),
                },
                {
                    path: '/admin/user/profile',
                    name: 'Profile',
                    component: () =>
                        import ('../components/admin/user/UserProfile'),
                },
                {
                    path: '/admin/user/role',
                    name: 'Role',
                    component: () =>
                        import ('../components/admin/user/Role'),
                },
            ]
        },
        {
            path: '*',
            component: () =>
                import ('../components/pages/Error404')
        }
    ]
})

// 用于创建默认路由
export const createRouter = routes => new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Default',
            redirect: '/home',
            component: Home
        },
        {
            // home页面并不需要被访问，只是作为其它组件的父组件
            path: '/home',
            name: 'Home',
            component: Home,
            redirect: '/index',
            children: [
                // {
                //     path: '/jotter',
                //     name: 'Jotter',
                //     component: () =>
                //         import ('../components/jotter/Articles')
                // },
                {
                    path: '/jotter/article',
                    name: 'Article',
                    component: () =>
                        import ('../components/jotter/ArticleDetails')
                },
                {
                    path: '/admin/content/editor',
                    name: 'Editor',
                    component: () =>
                        import ('../components/admin/content/ArticleEditor'),
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: '/library',
                    name: 'Library',
                    component: () =>
                        import ('../components/library/LibraryIndex')
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import ('../components/Login')
        },
        {
            path: '/register',
            name: 'Register',
            component: () =>
                import ('../components/Register')
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () =>
                import ('../components/admin/AdminIndex'),
            meta: {
                requireAuth: true
            },
            children: [{
                    path: '/admin/dashboard',
                    name: 'Dashboard',
                    component: () =>
                        import ('../components/admin/dashboard/admin/index'),
                    meta: {
                        requireAuth: true
                    }
                },
                // {
                //     path: '/admin/content/article',
                //     name: 'ArticleManagement',
                //     component: () =>
                //         import ('../components/admin/content/ArticleManagement'),
                // },

            ]
        },
        {
            path: '*',
            component: () =>
                import ('../components/pages/Error404')
        }
    ]
})