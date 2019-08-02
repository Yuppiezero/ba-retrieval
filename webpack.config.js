const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        index: path.join(__dirname, "/src/index.js")   // 入口
    }, 
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'ba-retrieval.js',
        library: 'retrieval',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,           
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss|sass)$/,   
                use: ['style-loader', 'css-loader', 'sass-loader']  
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.js$/,    
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}