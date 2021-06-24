import { generateList } from 'core/utils/lists';
import ContentLoader from 'react-content-loader';

const MovieCardLoader = () => {
  const loaderItems = generateList(3);
  return (
    <>
      {loaderItems.map(item => (
        <ContentLoader
          key={item}
          speed={1}
          width={270}
          height={322}
          viewBox="0 0 270 322"
          backgroundColor="#6C6C6C"
          foregroundColor="#d6d2d2"
        >
          <rect x="0" y="0" rx="10" ry="10" width="270" height="322" />
        </ContentLoader>
      ))}
    </>
  )
}

export default MovieCardLoader;