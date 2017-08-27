import { createComponent } from 'react-fela';

const Wrapper = createComponent(({ width, height, float }) => ({
  width: 'auto',
  float: 'none',
  height: height ? height : 'auto',
  margin: '0 auto',
  overflow: 'hidden',
  '@media (min-width: 768px)': {
    width: width ? width : 'auto',
    float: float ? float : null
  }
}));

export default Wrapper;
