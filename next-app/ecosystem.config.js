module.exports = {
    apps: [
        {
            name: 'next',
            script: 'server.js',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '800M',
            env: {
                NODE_ENV: 'dev',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};