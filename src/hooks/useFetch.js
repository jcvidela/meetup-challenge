import * as React from 'react';

export function useFetch(url, data) {
  const [state, setState] = React.useState({
    data: null,
    loading: true,
    error: null,
  });

  function handleError() {
    setState({ data: null, loading: false, error: 'Fetching error' });
  }

  function handleSuccess(data) {
    setState({ loading: false, error: null, data });
  }

  function fetchApiGET() {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((response) => response.json())
      .then(handleSuccess)
      .catch(handleError);
  }

  function fetchApiPOST(data) {
    setState({ data: null, loading: true, error: null });

    fetch(url, { method: 'POST', body: JSON.stringify(data) })
      .then((response) => response.json())
      .then(handleSuccess)
      .catch(handleError);
  }

  React.useEffect(
    function fetchApi() {
      if (data) {
        return fetchApiPOST(data);
      } else {
        return fetchApiGET();
      }
    },
    [url],
  );

  return state;
}
