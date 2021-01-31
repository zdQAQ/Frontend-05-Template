var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        // this.option('babel'); // This method adds support for a `--babel` flag
    }
    async initPackage() {
        const answer = await this.prompt([
            {
                type: "input",
                name: "name",
                message: "Your project name",
                default: this.appname // Default to current folder name
            }
        ]);

        const pkgJson = {
            "name": answer.name,
            "version": "1.0.0",
            "description": "",
            "main": "generators/app/index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "author": "youngs",
            "license": "ISC",
            "devDependencies": {
                "yeoman-generator": "^4.13.0"
            },
            "dependencies": {
            }
        }
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        this.npmInstall(['vue'], { 'save-dev': false });
        this.npmInstall(['webpack@4.41.2','webpack-cli@4.4.0', 'vue-loader', 'vue-template-compiler', 'vue-style-loader', 'css-loader','copy-webpack-plugin@6.4.1'], { 'save-dev': true });

        // Extend or create package.json file in destination path
        // this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        // this.log("app name", answers.name);
        // this.log("cool feature", answers.cool);

        this.fs.copyTpl(
            this.templatePath('HelloWorld.vue'),
            this.destinationPath('src/HelloWorld.vue'),
            {}
        );
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js'),
            {}
        );
        this.fs.copyTpl(
            this.templatePath('main.js'),
            this.destinationPath('src/main.js'),
            {}
        );
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('src/index.html'),
            { title: answer.title } // user answer `title` used
          );
    }
    install() {
        // this.npmInstall();
    }
};