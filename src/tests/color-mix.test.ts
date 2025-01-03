import { testTransform } from './utils';

const alphaInput = `
.demo {
  background: alpha(#f00, 0.5);
  border: rem(1px) solid alpha(var(--serrah-color-gray-4), 0.1);
}
`;

const lightenInput = `
.demo {
  background: lighten(#f00, 0.5);
  border: rem(1px) solid lighten(var(--serrah-color-gray-4), 0.1);
}
`;

const darkenInput = `
.demo {
  background: darken(#f00, 0.5);
  border: rem(1px) solid darken(var(--serrah-color-gray-4), 0.1);
}
`;

const percentageInput = `
.demo {
  background: lighten(#f00, 50%);
  border: rem(1px) solid alpha(var(--serrah-color-gray-4), 10%);
}
`;

describe('color-mix', () => {
  it('correctly replaces alpha function', async () => {
    const res = await testTransform(alphaInput);
    expect(res.css).toMatchSnapshot();
  });

  it('correctly replaces lighten function', async () => {
    const res = await testTransform(lightenInput);
    expect(res.css).toMatchSnapshot();
  });

  it('correctly replaces darken function', async () => {
    const res = await testTransform(darkenInput);
    expect(res.css).toMatchSnapshot();
  });

  it('correctly replaces percentage values', async () => {
    const res = await testTransform(percentageInput);
    expect(res.css).toMatchSnapshot();
  });
});
