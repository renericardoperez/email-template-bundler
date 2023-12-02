# email-template-bundler

Repository template that serves as a quick start for new email templating projects. `email-template-bundler` makes the email templating work much easier. It uses [MJML](https://documentation.mjml.io/) as markup language and [gulp](https://gulpjs.com/) and [browser-sync](https://browsersync.io/) to compile and hot-reload the latest changes on the browser.

## Installation

Clone the repository inside the folder you want to start the new project on

```bash
git clone https://github.com/renericardoperez/email-template-bundler.git
```

Then install the required node dependencies

```bash
cd email-template-bundler
yarn install
```

## Usage

Run the `start` command to listen for new changes in the `src` folder

```bash
yarn start
```

## Production build

Run the `build` command to make a clean version of the `dist` folder, ready to be used in production environments

```bash
yarn build
```

## Contributing

Pull requests are welcome. For major changes, please open an [issue](https://github.com/renericardoperez/email-template-bundler/issues/new) first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
