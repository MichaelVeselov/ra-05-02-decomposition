import News from './News';

function NewsList() {
  return (
    <div className='d-flex flex-column mb-3 mt-3'>
      <News>
        <p className='d-block'>News-01</p>
      </News>
      <News>
        <p className='d-block'>News-02</p>
      </News>
      <News>
        <p className='d-block'>News-03</p>
      </News>
    </div>
  );
}

export default NewsList;
