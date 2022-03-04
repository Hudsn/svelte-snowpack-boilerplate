const sveltePreprocess = require('svelte-preprocess');

const preprocess = sveltePreprocess({
    postcss: {
        plugins: [
            require('autoprefixer'),
            require('cssnano')
        ]
    }
});

module.exports = {
    preprocess,
};