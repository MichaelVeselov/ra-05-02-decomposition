import Widget from './Widget';

function Widgets() {
  return (
    <div className='d-flex justify-content-between w-100 mb-3'>
      <Widget title='widget-title-01'>
        <div className='widget'>Widget-Content-01</div>
      </Widget>
      <Widget title='widget-title-02'>
        <div className='widget'>Widget-Content-02</div>
      </Widget>
      <Widget title='widget-title-03'>
        <div className='widget'>Widget-Content-03</div>
      </Widget>
    </div>
  );
}

export default Widgets;
