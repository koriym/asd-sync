const gulp = require('gulp');
const browserSync = require('browser-sync');
const { execSync }  = require('child_process');

function serve(cb) {
    browserSync({
        server: {
            baseDir: 'profile',
        },
        ghostMode: false,
        open: 'external',
        notify: true,
    });
    cb();
}

function reload(cb) {
    browserSync.reload();
    cb();
}

function asd(cb) {
    cmd = 'asd ' + __dirname + '/profile/alps.json';
    try {
        console.log(execSync(cmd).toString());
    } catch (error) {
        console.error(error.message);
    }
    cb();
}

function watch() {
    gulp.watch('profile/alps.json', gulp.series(asd, reload));
}

exports.default = gulp.series(
    asd,
    gulp.parallel(serve, watch)
);
