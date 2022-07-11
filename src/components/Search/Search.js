function Search() {
  return (
    <div className='d-flex mb-3'>
      <form>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='поле поиска....'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Искать
        </button>
      </form>
    </div>
  );
}
export default Search;
