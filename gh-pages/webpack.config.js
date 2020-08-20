const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {

    return {
        resolve: {
            modules: [
                path.resolve("./src"),
                path.resolve("./node_modules")
            ],
            extensions: [
                ".js", ".jsx", ".css", ".sass"
            ]
        },
        entry: ["@babel/polyfill", path.resolve(__dirname, "src/index.jsx")],
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "bundle.js",
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: path.resolve(__dirname, "src"),
                    use: ["babel-loader"]
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: "[name]_[local]_[hash:base64:5]"
                                }
                            }
                        },
                        {
                            loader: "sass-loader"
                        },
                    ],
                    include: /\.module\.(css|scss)$/
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ],
                    exclude: /\.module\.(css|scss)$/
                },
                {
                    test: /\.(gif|jpg|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "img/",
                                publicPath: env.NODE_ENV === "local" ? "/img" : "/CV/img",
                            }
                        }
                    ]
                }
            ]
        },
        // devServer: {
        //     contentBase: path.resolve(__dirname, "dist"),
        //     port: 3000,
        //     open: true,
        //     historyApiFallback: {
        //         index: "/"
        //     },
        // },
        plugins: [
            new HtmlWebpackPlugin({
                template: "public/index.html",
                favicon: "./public/favicon.ico",
                inject: false
            })
        ],
        devtool: "inline-source-map"
    };
};