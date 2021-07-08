module.exports = {
    devServer:{
        open: true,
        port: 8080
    },
    publicPath : process.env.NODE_ENV === 'production'?'/dist':'./',//build打包访问路径/dist/
    //构建时的输出目录
    outputDir : process.env.NODE_ENV === 'production'?'dist':'docs',
}