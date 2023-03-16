import { WeatherList } from '../../features/main/WeatherList';
import { PageWrapper } from '../../wrapper/index';

function HomePage() {
  return (
    <PageWrapper>
      <WeatherList />
    </PageWrapper>
  );
}

export { HomePage };
