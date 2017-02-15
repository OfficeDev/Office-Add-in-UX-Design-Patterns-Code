let chalk = require('chalk');
let fs = require('fs');
let filepath = require('filepath');
let path = require('path');
let gulp = require('gulp');
let rimraf = require('rimraf');
let runSeqeunce = require('run-sequence');
let browserSync = require('browser-sync');
let mustache = require('gulp-mustache');
let ts = require('gulp-typescript');
let plumber = require('gulp-plumber');
let debug = require('gulp-debug');
let sass = require('gulp-sass');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let perfectionist = require('perfectionist');
let sourcemaps = require('gulp-sourcemaps');
let _ = require('lodash');
let tsProject = ts.createProject('tsconfig.json');

let config = {
    files: './src/**/!(*.ts|*.scss|*.xml)',
    manifest: {
        source: './src/manifest.xml',
        destination: './dist'
    },
    styles: {
        source: './src/**/*.scss',
        destination: './dist'
    },
    scripts: {
        source: './src/**/*.ts',
        destination: './dist'
    },
    autoprefixer: {
        browsers: ['Safari >= 8', 'last 2 versions']
    },
    browserSync: {
        https: true,
        host: 'localhost',
        port: 3000,
        server: {
            baseDir: './dist',
            directory: true,
            routes: {
                '/node_modules': 'node_modules'
            }
        }
    },
    hosts: ['Document', 'Workbook', 'Presentation', 'Notebook']
};

gulp.task('clean', (done) => rimraf('dist', done));

gulp.task('manifest', () => {
    console.log(chalk.bold.yellow('\tGenerating manifest...'));
    let files = walk(path.resolve('src/templates')).sort();
    files = files.filter(file => /\index\.html$/i.test(file));
    let processedFiles = files.map(process);
    let groupedFiles = _.groupBy(processedFiles, 'source');
    let groups = _.map(groupedFiles, (commands, key) => {
        return {
            name: _.startCase(key),
            safeName: key,
            commands
        };
    });

    let hosts = config.hosts.map(value => ({ host: value }));

    return gulp.src(config.manifest.source)
        .pipe(mustache({ groups, hosts }))
        .pipe(gulp.dest(config.manifest.destination));
});

gulp.task('copy', () =>
    gulp.src(config.files)
        .pipe(gulp.dest('./dist'))
);

gulp.task('compile-styles', () => {
    let plugins = [
        autoprefixer(config.autoprefixer),
        perfectionist
    ];

    return gulp.src(config.styles.source)
        .pipe(plumber(errorHandler))
        .pipe(sass())
        .pipe(postcss(plugins))
        // .pipe(debug({ title: 'SASS:\t' }))
        .pipe(gulp.dest(config.styles.destination))
        .pipe(browserSync.stream());
});

gulp.task('compile-scripts', () => {
    let tsResult = gulp.src(config.scripts.source)
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return tsResult.js
        // .pipe(debug({ title: 'TS:\t' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.scripts.destination));
});

gulp.task('browser-sync', (done) => browserSync.init(config.browserSync, done));

gulp.task('build', (done) => runSeqeunce('clean', ['manifest', 'compile-styles', 'compile-scripts', 'copy'], done));

gulp.task('serve', ['browser-sync', 'build'], () => {
    gulp.watch(config.styles.source, ['compile-styles']);
    gulp.watch(config.scripts.source, ['compile-scripts']).on('change', browserSync.reload);
    gulp.watch(config.files, ['copy']).on('change', browserSync.reload);
});

const walk = (dir, files = []) => {
    fs.readdirSync(dir).forEach(file =>
        files = fs.statSync(path.join(dir, file)).isDirectory() ?
            walk(path.join(dir, file), files) :
            files.concat(path.join(dir, file))
    );

    return files;
}

const process = (file) => {
    let currentFile = filepath.create(file);
    let root = filepath.create(path.resolve('src/templates'));
    let strippedPath = currentFile.toString().replace(root.toString(), '');
    let [drive, source, group, filename] = filepath.create(strippedPath).split();
    let baseUrl = 'https://localhost:3000/templates/';
    let url = baseUrl + source + '/' + group;
    if (filename) {
        url += '/' + filename;
    }
    let name = _.startCase(group), safeName = group;
    if (filename == null) {
        name = _.startCase(source);
        safeName = source;
    }
    return { source, name, safeName, url };
}

const errorHandler = (error) => {
    console.log(error);
    this.emit('end');
};
