const {resolve, join, parse} = require('path')
// const globby = require('globby')
const fg = require('fast-glob');

module.exports = app => {
    // 实现 egg的约定大于配置
    const AppPath = resolve(__dirname, 'app') // resolve获取绝对路径
    const context = app['context']

    const fileAbsolutePath = {
        config: join(AppPath, 'config'),  // join 把路径连在一起
        middleware: join(AppPath, 'middleware'),
        service: join(AppPath, 'service')
    }

    Object.keys(fileAbsolutePath).forEach( v => {
        const path = fileAbsolutePath[v]  // 对应路径
        const prop = v  // 挂载到ctx上面的 key
        const files = fg.sync('**/*.js', {
            cwd:path
        })

        if(prop !== 'middleware') {
            // 不是中间件的时候初始化对象
            context[prop] = {}
        }

        files.forEach( file => {
            const filename = parse(file).name  // parse 返回路径文件的属性，是一个对象
            const content = require(join(path, file))  // 导入内容

            // 中间件 middleware 逻辑
            if(prop == 'middleware') {
                if(filename in context['config']) {
                    // 先传递配置项
                    const plugin = content(context['config'][filename])
                    app.use(plugin)  // 加载中间件
                }
                return
            }

            // 配置文件处理
            if(prop == 'config' && content) {
                context[prop] == Object.assign({}, context[prop], content)
                return
            }

            context[prop][filename] = content  // 挂在service
        })
    })
}