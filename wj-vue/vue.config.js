// module.exports = {
//     devServer: {
//         proxy: {
//             '/api': {
//                 target: 'http://47.97.114.134:8443/api', // 后台请求地址  
//                 ws: true,
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/api': '' //通过pathRewrite重写地址，将前缀/api转为/  
//                 }
//             }
//         }
//     }
// }