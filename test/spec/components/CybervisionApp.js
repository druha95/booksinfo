'use strict';

describe('CybervisionApp', () => {
  let React = require('react/addons');
  let CybervisionApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    CybervisionApp = require('components/CybervisionApp.js');
    component = React.createElement(CybervisionApp);
  });

  it('should create a new instance of CybervisionApp', () => {
    expect(component).toBeDefined();
  });
});
