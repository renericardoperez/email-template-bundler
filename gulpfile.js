import { deleteAsync } from 'del'
import gulp from 'gulp'
import mjml from 'gulp-mjml'
import mjmlEngine from 'mjml'
import _browserSync from 'browser-sync'

const browserSync = _browserSync.create()

var paths = {
  output: 'dist',
  images: {
    src: ['src/img/*.png', 'src/img/*.jpeg', 'src/img/*.jpg'],
    dest: 'dist/img/',
  },
  templates: {
    src: 'src/**/*.mjml',
    dest: 'dist/',
  },
}

function handleError(err) {
  console.log(err.toString())
  this.emit('end')
}

function clean() {
  return deleteAsync([paths.output])
}

function buildTemplates() {
  return gulp
    .src(paths.templates.src)
    .pipe(mjml(mjmlEngine, { validationLevel: 'strict' }))
    .on('error', handleError)
    .pipe(gulp.dest(paths.templates.dest))
    .pipe(browserSync.stream())
}

function copyImages() {
  return gulp
    .src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream())
}

export const build = gulp.series(
  clean,
  gulp.parallel(copyImages, buildTemplates)
)

export function watch() {
  gulp.watch(paths.images.src, copyImages)
  gulp.watch(paths.templates.src, buildTemplates)
}

export function serve() {
  browserSync.init({
    server: {
      baseDir: paths.output,
    },
  })

  gulp.watch(paths.templates.dest).on('change', browserSync.reload)
}

export const start = gulp.series(build, gulp.parallel(serve, watch))

export default build
