# ember-cli-is-component [![TravisCI Badge](https://travis-ci.org/xcambar/ember-cli-is-component.svg)](https://travis-ci.org/xcambar/ember-cli-is-component)

This addon provides a new helper: `is-component` to be used as follows:

```handlebars
{{is-component componentName}}
```

The helper returns `true` when the first parameter can be looked up
a component; false otherwise.

## Example with the `{{component}}` helper

The `{{component}}` helper throws an error when
an invalid component name is given as parameter.
Used with `{{if}}`, the `(is-component)` helper offers a nice failsafe
to avoid the rendering error when the component may not exist:

```handlebars
{{#if (is-component componentName)}}
  {{component componentName}}
{{else}}
  Sorry, {{componentName}} is not a known component.
{{/if}}
```

## Example as a computed property

```javascript
isComponent: inject(),
exists: computed(function() {
  return this.get('isComponent').test('my-component');
})
```

## Installation

```
ember install ember-cli-is-component
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
