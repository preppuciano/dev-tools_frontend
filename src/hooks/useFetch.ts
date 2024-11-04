import { useEffect, useRef, useState } from "react";

interface UseFetchReturn<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  firstLoading: boolean;
  refreshData: () => void;
}

interface FetchState<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
  firstLoading: boolean;
}

interface UseFetchOptions<T> {
  dependencies?: any[];
  initialData?: T | null;
}

export default function useFetch<T>(fetchFunction: () => Promise<T>, options: UseFetchOptions<T> = {}): UseFetchReturn<T> {
  const isMounted = useRef(false);

  const { dependencies = [], initialData = null } = options;

  const [state, setState] = useState<FetchState<T>>({
    data: initialData,
    error: null,
    isLoading: true,
    firstLoading: true,
  })

  useEffect(() => {
    isMounted.current = true;
    return (() => {
      isMounted.current = false;
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, dependencies);

  async function fetchData(): Promise<void> {
    setState({ ...state, isLoading: true });

    try {
      await new Promise((resolve, _reject) => setTimeout(resolve, 2000));
      const result = await fetchFunction();

      if (isMounted.current) {
        setState({ data: result, error: null, isLoading: false, firstLoading: false })
      }

    } catch (err) {
      if (err instanceof Error) {
        setState({ data: null, error: err.message, isLoading: false, firstLoading: false });
      } else {
        setState({ data: null, error: 'ERROR', isLoading: false, firstLoading: false });
      }
    }
  }

  function refreshData(): void {
    fetchData()
  }

  return { ...state, refreshData: refreshData };
}