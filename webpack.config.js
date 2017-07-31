// module.exports = {
//     entry : './src/script/main.js',
//     output : {
//         path : './dist/js',
//         filename : 'bundle.js'
//     }
// }

// module.exports = {
//     entry : [
//         './src/script/main.js',
//         './src/script/a.js'
//     ],
//     output : {
//         path : './dist/js',
//         filename : 'bundle.js'
//     }
// }

// module.exports = {
//     entry : {
//         main : './src/script/main.js',
//         a : './src/script/a.js'
//     },
//     output : {
//         path : './dist/js',
//         filename : '[name]-[chunkhash].js'
//     }
// }

// var htmlWebpackPlugin = require('html-webpack-plugin');
// module.exports = {
//     entry : {
//         main : './src/script/main.js',
//         a : './src/script/a.js'
//     },
//     output : {
//         path : './dist/',
//         // pubilcPath : 'httml://xxx.cnd/',
//         // filename : 'js/[name].js'
//         filename : 'js/[name]-[chunkhash].js'
//     },
//     plugins : [
//         new htmlWebpackPlugin({
//             // filename:'index-[hash].html',
//             inject:'head',
//             minify:{
//                 // 删除注释
//                 removeComments:true,
//                 // 空格
//                 collapseWhitespace:true,
//             },
//             //inject:false,
//             title:'webpack title',
//             date : new Date(),
//             template:'index.html'
//         })
//     ]
// }

var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry : {
        main : './src/script/main.js',
        a : './src/script/a.js'
    },
    output : {
        path : './dist/',
        // pubilcPath : 'httml://xxx.cnd/',
        // filename : 'js/[name].js'
        filename : 'js/[name]-[chunkhash].js'
    },
    plugins : [
        new htmlWebpackPlugin({
            filename:'a.html',
            inject:'head',
            title:'webpack title a',
            template:'index.html'
        }),
        new htmlWebpackPlugin({
            filename:'b.html',
            inject:'head',
            title:'webpack title b',
            template:'index.html'
        })
    ]
}