import Header from 'components/header';
import Routes from 'routes';

export default function MainLayout() {
  return (
    <div className='min-h-screen bg-gray-900 text-gray-300 font-sans'>
      <Header />
      <div className='pt-14'>
        <Routes />
      </div>
    </div>
  );
}
