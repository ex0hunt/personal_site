module.exports = {
    plugins: [
        require('postcss-smart-import')({ /* ...options */ }),
        require('precss'),
        require('autoprefixer')({ browsers: ['last 4 versions'] })
    ]
};
