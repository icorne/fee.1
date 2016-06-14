System.config({
    packages: {
        dist: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
System.import('dist/main')
    .then(null, console.error.bind(console));