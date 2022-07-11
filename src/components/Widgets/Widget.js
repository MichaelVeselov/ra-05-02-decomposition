function Widget({ title, ...props }) {
  return (
    <div className='me-2'>
      <h6>{title}</h6>
      {props.children}
    </div>
  );
}

export default Widget;
