
# Tristan Hoellinger 's portfolio

## Credits

Based on <a href="https://github.com/alshedivat/al-folio">al-folio</a> theme for <a href="https://jekyllrb.com/" target="_blank">Jekyll</a>.

## Getting started

### Installation


Assuming [Ruby](https://www.ruby-lang.org/en/downloads/) and [Bundler](https://bundler.io/) are installed (*hint: for ease of managing ruby gems, consider using [rbenv](https://github.com/rbenv/rbenv)*), one can start editing these GitHub Pages after doing the following:

```bash
$ git clone git@github.com:hoellin/hoellin.github.io.git
$ cd hoellin.github.io
$ bundle install
$ bundle exec jekyll serve
```

Simply commiy and push the changes, and wait for the site to be automatically deployed.

### Deployment

If you need to manually re-deploy your website to GitHub pages, run the deploy script from the root directory of your repository:
```bash
$ ./bin/deploy
```
uses the `master` branch for the source code and deploys the webpage to `gh-pages`.
