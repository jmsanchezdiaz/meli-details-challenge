import {useEffect, useRef, useState} from "react";

interface PageState {
  curIndex: number;
  nxtIndex: number;
  pageNumber: number;
}

export const usePagination = <T>(initState: T[] = [], maxElements: number = 3) => {
  const [pageState, setPageState] = useState<PageState>({
    curIndex: 0,
    nxtIndex: maxElements,
    pageNumber: 1,
  });
  const {curIndex, nxtIndex, pageNumber} = pageState;
  const initRef = useRef(initState);
  const [filtered, setFiltered] = useState<T[]>(initRef.current.slice(curIndex, nxtIndex));

  const amountOfPages = Math.ceil(initRef.current.length / maxElements);
  const amountOfElements =
    pageNumber * maxElements > initRef.current.length
      ? initRef.current.length
      : pageNumber * maxElements;

  useEffect(() => {
    setPageState({
      curIndex: 0,
      nxtIndex: maxElements,
      pageNumber: 1,
    });
  }, [maxElements]);

  const goNextPage = () => {
    if (curIndex + maxElements < initState.length) {
      setPageState({
        curIndex: curIndex + maxElements,
        nxtIndex: nxtIndex + maxElements,
        pageNumber: pageNumber + 1,
      });
    }
  };

  const goPrevPage = () => {
    if (curIndex > 0) {
      setPageState({
        curIndex: curIndex - maxElements,
        nxtIndex: nxtIndex - maxElements,
        pageNumber: pageNumber - 1,
      });
    }
  };

  useEffect(() => {
    setFiltered(initRef.current.slice(curIndex, nxtIndex));
  }, [curIndex, nxtIndex]);

  return {
    filtered,
    amountOfElements,
    pageNumber,
    goNextPage,
    goPrevPage,
    amountOfPages,
  };
};
