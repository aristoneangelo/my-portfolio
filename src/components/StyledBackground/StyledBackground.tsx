// BubbleBackground.jsx

import '../../assets/css/animated_background.css'; // Adjust the path as necessary

const BubbleBackground = () => (
  <div className="wrapper">
    <ul className="bg-bubbles">
      {Array.from({ length: 10 }).map((_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  </div>
);

export default BubbleBackground;