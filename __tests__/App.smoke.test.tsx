/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { Text } from 'react-native';
import App from '../App';

test('shows the app title and the action to run the crypto checks', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer | undefined;

  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });

  const text = renderer!.root
    .findAllByType(Text)
    .map(node => node.props.children)
    .filter((child): child is string => typeof child === 'string');

  expect(text).toContain('FIBEMATE Mobile');
  expect(text).toContain('▶ Run SM2 + PQC Tests');

  renderer!.unmount();
});
