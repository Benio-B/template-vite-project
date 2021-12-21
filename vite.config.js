import path from 'path';

/**
 * @type {import('vite').UserConfig}
 */
const config = {
    resolve: {
        alias: {'@': path.resolve(__dirname, '.')}
    }
}

export default config
