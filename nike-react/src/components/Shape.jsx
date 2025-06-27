function Shape({ color, shapeType }) {
  return <div className={`shape shape-${shapeType}`} style={{ backgroundColor: color }}></div>;
}

export default Shape;
