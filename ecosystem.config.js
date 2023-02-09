module.exports = {
    apps: [
        {
            name: 'appname',
            script: 'src/app.ts',
            exec_mode: 'fork',
            cwd: '.',
            interpreter: 'node',
            watch: ["src"],
            ignore_watch: [
                "node_modules",
                "static"
            ],
            watch_options: {
                "followSymlinks": false
            },
            interpreter_args: '--require ts-node/register --require tsconfig-paths/register'
        }
    ]
}