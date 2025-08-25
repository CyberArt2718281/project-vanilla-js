const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'
  return {
    entry: './src/app.js',
    devtool: isProd ? false : 'inline-source-map',
    mode: isProd ? 'production' : 'development',
    output: {
      filename: 'app.js',
      clean: true,
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src'),
      },
    },
    devServer: {
      port: 9000,
      open: true,
      compress: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './index.html'),
        filename: 'index.html',
      }),
      new Dotenv(),
      new CopyPlugin({
        patterns: [
          {from: './src/templates', to: 'templates'},
          {
            from: './node_modules/admin-lte/dist/css/adminlte.min.css',
            to: 'css',
          },

          {
            from: './node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css',
            to: 'css',
          },
          {
            from: './node_modules/admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css',
            to: 'css',
          },
          {
            from: './node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
            to: 'css',
          },
          {
            from: './node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
            to: 'css',
          },

          {
            from: './node_modules/admin-lte/plugins/fontawesome-free/webfonts',
            to: 'webfonts',
          },

          {
            from: './node_modules/admin-lte/plugins/jquery/jquery.min.js',
            to: 'js',
          },
          {
            from: './node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js',
            to: 'js',
          },
          {
            from: './node_modules/admin-lte/plugins/chart.js/Chart.min.js',
            to: 'js',
          },
          {
            from: './node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js',
            to: 'js',
          },
          {
            from: './node_modules/admin-lte/dist/js/demo.js',
            to: 'js',
          },


          {
            from: './src/styles/*.scss',
            to: 'css/[name].css',
            transform: (content, path) => {
              const sass = require('sass');
              const result = sass.compile(path);
              return result.css;
            },
            noErrorOnMissing: true,
          },

          {
            from: './src/styles/404/*.scss',
            to: 'css/[name].css',
            transform: (content, path) => {
              const sass = require('sass');
              const result = sass.compile(path);
              return result.css;
            },
            noErrorOnMissing: true,
          },



          {from: './node_modules/admin-lte/dist/js/adminlte.js', to: 'js'},
          {from: './src/assets/images', to: 'assets/images'},
          {from: './.env', to: './'},
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              targets: "defaults",
              presets: [
                ['@babel/preset-env']
              ]
            }
          }
        }
      ],
    },
  }
}
