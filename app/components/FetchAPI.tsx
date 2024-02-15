interface Props {
    data: any;
    context:any;
}

export default async function FetchAPI(context:Props) {
  const res = await fetch("https://api.themoviedb.org/3/configuration");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

// curl --request GET \
//      --url https://api.themoviedb.org/3/configuration \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmY1YTUyODA2MjliZTI0MzgzZTNiODg0MjRkNzZkYyIsInN1YiI6IjY1Y2RmMTYwMzEyMzQ1MDE3YmJiMTQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0D7bGL73GTzarWR45vzU9Sj2Rf_OAvCXnuabutkrIAY' \
//      --header 'accept: application/json'
