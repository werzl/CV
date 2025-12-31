const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => {
    return {
        externals: {
            canvg: "canvg",
            dompurify: "dompurify"
        },
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
                }
            ]
        },
        devServer: {
            static: [
                // explicitly serve the dist folder
                { directory: path.resolve(__dirname, "dist"), publicPath: "/" },
                // also serve public if you have other static assets there
                { directory: path.resolve(__dirname, "public"), publicPath: "/" }
            ],
            port: 3000,
            open: true,
            historyApiFallback: {
                index: "/"
            },
            devMiddleware: {
                writeToDisk: true,
                publicPath: "/"
            }
        },
        plugins: [
            new NodePolyfillPlugin(),
            new HtmlWebpackPlugin({
                template: "public/index.html",
                favicon: "./public/favicon.ico",
                inject: false
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: "**/*.md", context: "content", to: "content/[path][name][ext]", noErrorOnMissing: true },
                    { from: "**/*.json", context: "content", to: "content/[path][name][ext]", noErrorOnMissing: true },
                    { from: path.resolve(__dirname, "public"), to: ".", globOptions: { ignore: ["**/index.html"] }, noErrorOnMissing: true }
                ]
            })
        ],
        devtool: "inline-source-map"
    };
};