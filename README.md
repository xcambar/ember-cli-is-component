# Ember-cli-if-component [![TravisCI Badge](https://travis-ci.org/xcambar/ember-cli-if-component.svg)](https://travis-ci.org/xcambar/ember-cli-if-component)

This addon provides a new helper: `is-component` to be used as follows:

```
(is-component componentName)
```

The helper returns `true` when the first parameter can be looked up
a component; false otherwise.

## Example with the `{{component}}` helper

The `{{component}}` helper throws an error when
an invalid component name is given as parameter.
Used with `{{if}}`, the `(is-component)` helper offers a nice failsafe
to avoid the rendering error when the component may not exist:

```
{{#if (is-component componentName)}}
  {{component componentName}}
{{else}}
  Sorry, {{componentName}} is not a known component.
{{/if}}
```

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
