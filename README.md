# Ember-cli-if-component ![CircleCi Badge](https://circleci.com/gh/xcambar/ember-cli-if-component.svg?style=shield&circle-token=:circle-token)

This addon provides the following syntax:

```handlebars
{{#if-component componentName}}
  Yay, my component exists
{{else}}
  Damn...
{{/if-component}}
```

It will display the first block if `componentName` can be resolved to
a componnt in the app. Otherwise, it will display the `{{else}}` block.

# Why?

It is useful to leverage the`{{component componentName}}` helper
as it provides a failsafe in case `componentName` can not be
resolved to a component.

## Without this addon

Let's assume `componentName` doesn't resolve to a component.

```handlebars
  {{component componentName param1=p1 param2=p2}}
```

will throw an error as it can't find the expected component.

## With this addon

Again, let's assume `componentName` doesn't resolve to a component.

```handlebars
{{#if-component componentName}}
  Yay, my component exists
{{else}}
  Damn...
{{/if-component}}
```

No error is thrown, `Damn...` is displayed and your life
as a developer just got better.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
