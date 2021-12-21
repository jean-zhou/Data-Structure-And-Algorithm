import path from 'path'
import concat from 'concat-stream'
import template from 'lodash.template'
import map from 'map-stream'
import vfs from 'vinyl-fs'
export default createModule

function createModule(dir) {
    return new Promise( (resolve, reject) => {
        // path.resolve() 方法将一系列路径或路径段解析为绝对路径。
        console.log('path.resolve(__dirname-----', path.resolve(__dirname, '..', 'templates', '**', "*"), { dot: true })
        vfs.src(path.resolve(__dirname, '..', 'templates', '**', "*"), {dot: true})  // 匹配上级 **/* 上级目录 template 下的所有文件
        .pipe(renameFiles({gitignore: '.gitignore'}))
        .pipe(templateFiles({name:path.basename(dir)}))
        .once('error', reject)
        .pipe(vfs.dest(dir))
        .pipe(collectFeils(resolve))
    })
}

function renameFiles(renames) {
    return map((file, cb) => {
        if(file.basename in renames) {
            file.basename = renames[file.basename]
        }
        cb(null, file)
    })
}

function templateFiles(data) {
    return map( (file, cb) => {
        file.contents = new Buffer(template(file.contents)(data))
        cb(null,file)
    })
}

function collectFeils(cb) {
    return concat(files => cb(files.map( file => file.path)))
}