module.exports = {
    devServer:{
        open: true,
        port: 8080
    },
    publicPath : process.env.NODE_ENV === 'production'?'/docs':'./',//本地打包build测试时/docs  部署pages时./
    //构建时的输出目录
    outputDir : 'docs',
}