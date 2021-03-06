import properties from './object-properties';
import data from './data';
import ext from './ext';

import { render, teardown } from './components/root';

export default function supernova(env) {
  const { Theme } = env;
  const button = document.createElement('button');
  let engineApp;
  return {
    qae: {
      properties,
      data,
    },
    component: {
      mounted(element) {
        this.element = element;
        engineApp = this.app.engineApp;
      },
      render({ layout, context }) {
        render(this.element, {
          layout,
          context,
          button,
          Theme,
          engineApp,
        });
      },
      resize() {},
      willUnmount() {
        teardown(this.element);
      },
      destroy() {},
    },
    ext: ext(),
  };
}
