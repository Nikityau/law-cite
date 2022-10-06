const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcPath  = path.resolve(__dirname, 'src')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].bundle.js',
        assetModuleFilename: "assets/[name][ext]",
        publicPath: "/",
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            src: srcPath,
            components: path.join(srcPath , 'components'),
            api: path.join(srcPath, 'api'),
            ui: path.join(srcPath, 'components', 'UI'),
            assets: path.join(srcPath, 'assets'),
            utils: path.join(srcPath, 'utils'),
        }
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin()
        ]
    },
    devServer: {
        static: {
            directory: srcPath,
        },
        historyApiFallback: true,
        compress: true,
        port: 3000,
        open: true,
        hot: true,
        client: {
            reconnect: true
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.join(srcPath, 'assets', 'favicon', 'logo_dark_blue.png'),
            minify: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css'
        })
    ]
}