module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "sample-vue-project",
                appId: "com.sample.sample-vue-project",
                win: {
                    icon: 'src/assets/app.ico',
                    target: [{
                        target: 'zip', // 'zip', 'nsis', 'portable'
                        arch: ['x64'] // 'x64', 'ia32'
                    }]
                }
            }
        }
    }
}