const path = require("path");
const webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, "./src"),
	entry: {
		app: "./index.js"
	},
	output: {
		path: path.resolve(__dirname, "./dist/assets"),
		filename: "[name].bundle.js",
		publicPath: "/assets/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]
					}
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "url-loader",
						options: { limit: 8192, outputPath: "images/" }
					}
				]
			},
			{
				test: /\.css$/,
				use: ["to-string-loader", "css-loader"]
			}
		]
	},
	//devtool: "source-map",
	devServer: {
		contentBase: path.resolve(__dirname, "./src"),
		open: true,
		historyApiFallback: {
			index: "index.html"
		}
	},
	//Todo cache common.js on the client side
	plugins: [
		new UglifyJSPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: "commons.js",
			minChunks: 2
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		})
		// new webpack.optimize.AggressiveMergingPlugin()
		//new HtmlWebpackPlugin()
	]
};
