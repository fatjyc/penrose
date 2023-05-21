import { COLORS } from "../styles.js";
export default ({
  width,
  color = COLORS.primary,
}: {
  width: number;
  color?: string;
}) => (
  <svg
    width={width}
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
  >
    <path
      d="M 50.1875 6.875 L 49.5 7.40625 L 42.125 12.78125 L 40.8125 13.71875 L 42.125 14.6875 L 70.875 35.625 L 61.6875 63.90625 L 61.1875 65.46875 L 62.8125 65.46875 L 71.96875 65.46875 L 72.8125 65.46875 L 73.09375 64.65625 L 83.625 32.28125 L 83.875 31.46875 L 83.1875 30.96875 L 50.875 7.40625 L 50.1875 6.875 z M 38.5625 15.4375 L 37.875 15.9375 L 5.5 39.375 L 4.8125 39.90625 L 5.0625 40.71875 L 7.875 49.40625 L 8.375 50.9375 L 9.6875 50 L 38.5 29.0625 L 62.59375 46.5625 L 63.90625 47.5 L 64.40625 45.96875 L 67.21875 37.28125 L 67.46875 36.46875 L 66.78125 35.9375 L 39.25 15.9375 L 38.5625 15.4375 z M 38.125 32.15625 L 37.4375 32.65625 L 9.875 52.65625 L 9.1875 53.1875 L 9.4375 54 L 21.71875 92.03125 L 22 92.84375 L 22.84375 92.84375 L 32 92.84375 L 33.625 92.84375 L 33.125 91.28125 L 22.15625 57.46875 L 46.21875 39.96875 L 47.53125 39 L 46.21875 38.03125 L 38.8125 32.65625 L 38.125 32.15625 z M 85.78125 32.75 L 85.28125 34.28125 L 74.28125 68.125 L 44.53125 68.125 L 42.90625 68.125 L 43.40625 69.6875 L 46.25 78.40625 L 46.53125 79.21875 L 47.375 79.21875 L 81.40625 79.21875 L 82.25 79.21875 L 82.53125 78.40625 L 94.9375 40.40625 L 95.1875 39.59375 L 94.5 39.0625 L 87.09375 33.6875 L 85.78125 32.75 z M 34.625 51.9375 L 33.3125 52.875 L 25.90625 58.25 L 25.21875 58.78125 L 25.46875 59.59375 L 35.96875 91.96875 L 36.25 92.78125 L 37.09375 92.78125 L 77.0625 92.84375 L 77.90625 92.84375 L 78.1875 92.03125 L 81.03125 83.34375 L 81.53125 81.78125 L 79.90625 81.78125 L 44.3125 81.78125 L 35.125 53.46875 L 34.625 51.9375 z "
      fill={color}
      fillOpacity="1"
      fillRule="nonzero"
      stroke="none"
      visibility="visible"
      display="inline"
      overflow="visible"
    />
  </svg>
);
