import ContentLoader from "react-content-loader"

const MovieDetailsLoader = () => (
  <ContentLoader 
    speed={1}
    viewBox="0 0 1170 700"
    backgroundColor="#6C6C6C"
    foregroundColor="#d6d2d2"
  >
    <rect x="0" y="0" rx="10" ry="10" width="1170" height="300" /> 
    <rect x="0" y="315" rx="10" ry="10" width="1170" height="150" /> 
    <rect x="0" y="480" rx="10" ry="10" width="1170" height="95" />
  </ContentLoader>
)

export default MovieDetailsLoader;