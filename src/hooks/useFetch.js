import { useEffect, useState } from 'react';
import fetchQuestions from '../api';

function useFetch() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions().then((res) => {
      setQuestions([...res.results]);
    });
  }, []);

  return [questions, setQuestions];
}

export default useFetch;
