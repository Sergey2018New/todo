import gulp from 'gulp';
import {deleteAsync} from 'del';
import svgSprite from 'gulp-svg-sprite';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import beautify from 'gulp-beautify';

const srcIcons = `./src/icons/**/*.svg`;
const publicIcons = `./public/assets/`;

const spriteSvg = () => {
	deleteAsync(publicIcons + 'icons.svg');
	
	return gulp.src(srcIcons)
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
				$('[clip-path]').removeAttr('clip-path');
				$('defs').remove();
			},
			parserOptions: {xmlMode: true}
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite({
			mode: {
				symbol: { // symbol
					sprite: '../icons.svg'
				}
			} 
		}))
		.pipe(beautify.html({ indent_size: 4 }))
		.pipe(gulp.dest(publicIcons))
}

gulp.task('svg', spriteSvg);