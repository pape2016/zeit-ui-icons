const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: "./main.js"
    },

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(ttf|woff)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options:
                        {
                            limit: 1024,
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: __dirname + '/dist/index.html'
        })
    ]
}