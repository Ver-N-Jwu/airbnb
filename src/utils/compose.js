/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
export const compose = (providers) =>
  providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ));
