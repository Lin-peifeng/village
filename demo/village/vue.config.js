module.exports = {
    devServer: {
        proxy: {
            '/api/v1': {
                target: 'http://192.168.0.101:8000/', //对应自己的接口
                changeOrigin: true,
              }
        }
    },
    lintOnSave:false,

}