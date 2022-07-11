import Widgets from './Widgets/Widgets';
import Promo from './Promo/Promo';
import Search from './Search/Search';
import NewsList from './News/NewsList';
import Divider from './Divider';

function Page() {
  return (
    <div className='mx-auto' style={{ width: '600px' }}>
      <div>
        <NewsList />
      </div>
      <div>
        <Divider />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Divider />
      </div>
      <div>
        <Promo
          img={
            'https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?w=2000'
          }
        />
      </div>
      <div>
        <Divider />
      </div>
      <div>
        <Widgets />
      </div>
    </div>
  );
}

export default Page;
