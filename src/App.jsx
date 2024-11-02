import { useEffect, useState } from "react";
import Crypto from "./component/Crypto";

const URL = "https://api.coinlore.net/api/tickers/";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  useEffect(function () {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`${URL}`);
        const datas = await res.json();
        const { data } = datas;
        //console.log(data);
        setData(data);
        setLoading(false);
      } catch {
        alert("There was an Error");
      }
    }
    fetchData();
  }, []);

  const totalPage = Math.ceil(data.length / postPerPage);

  const indexOfLastRow = currentPage * postPerPage;
  const indexOfFirstRow = indexOfLastRow - postPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  function handleNext() {
    if (currentPage < totalPage) {
      setCurrentPage((cur) => cur + 1);
    }
  }

  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage((cur) => cur - 1);
    }
  }

  return (
    <>
      <Crypto
        data={currentRows}
        loading={loading}
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </>
  );
}

export default App;
