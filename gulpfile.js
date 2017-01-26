var gulp  = require("gulp");
var sass = require("gulp-sass");
var minifyCss = require ("gulp-clean-css");
var minifyHtml = require ("gulp-htmlmin");

gulp.task('compilar-css', function(){
	return gulp.src('./source/scss/*.scss')
	.pipe(sass({outputStyle:'compressed'}))
	.pipe(gulp.dest('./dist/css'))
});

gulp.task('minify-css', function() {
  return gulp.src('./dist/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify-html', function(){
   return gulp.src('./source/*.html')
     .pipe(minifyHtml({collapseWhitespace: true}))
     .pipe(gulp.dest('./dist/'));
});

gulp.task('escutar', function(){
   gulp.watch('./source/scss/*.scss',['compilar-css']);
   gulp.watch('./source/*.html',['minify-html']);
})

