export function isComponentHelper(params) {
  let name = params[0];
  return !!this.container.lookup('component-lookup:main').lookupFactory(name, this.container);
}
