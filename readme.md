# Voronoi Template for Documentation Sites

A small but highly customisable site template, ideal for a project documentation homepage. Inclides an interactive Voronoi chart homepage background.

## Installing

Simply clone the repo, navigate into the new directory, install dependencies, build, and your ready to go!

```console
git clone https://github.com/Lissy93/voronoi-site-template.git
cd voronoi-site-template
yarn
```

## Building, Developing and Deploying

- [**`npm run build`**](package.json#L9) *Triggers complete webpack build*
- [**`npm run start`**](package.json#L7) *Opens the standalone version*
- [**`npm run serve`**](package.json#L8) *Runs app on a lightweight node server*
- [**`npm run dev`**](package.json#L10) *Starts webpack-dev-server, for live changes*
- [**`npm run clean`**](package.json#L12) *Removes all generated files and libraries*
- [**`npm run test`**](package.json#L11) *Executes the test scripts*

*__Note:__ You should only need to modify files within the [`/src`](src/) directory. Anything else will be overidden when webpack builds.*

## Credits
 - This project uses [Docsify](https://github.com/QingWei-Li/docsify/) to display MD docs and for navigation
 - The homepage Vonoroi visualisation was based on Mike Bostock's origional D3.js [voronoi](https://github.com/d3/d3-voronoi) script.

## License
Licensed under MIT, (C) [Alicia Sykes](https://aliciasykes.com) 2018. [Read full License](LICENSE.md).