import CryptoList from "./CryptoList";
import Loading from "./Loading";
import Button from "./Button";

function Crypto({
  data,
  loading,
  handleNext,
  handlePrev,
  currentPage,
  totalPage,
}) {
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="main-data">
      <table>
        <thead>
          <tr>
            <th>💰Coin</th>
            <th>📃Code</th>
            <th>😜Price</th>
            <th>📉Total Supply</th>
          </tr>
        </thead>
        {data.map((el) => (
          <CryptoList data={el} key={crypto.randomUUID()} />
        ))}
      </table>
      <div className="controllers">
        <div className={currentPage === 1 ? "display" : ""}>
          <Button onClick={handlePrev} disable={currentPage === 1}>
            <span>&#x1F878;</span>Previous
          </Button>
        </div>
        <div className={currentPage === totalPage ? "display" : ""}>
          <Button onClick={handleNext} disable={currentPage === totalPage}>
            Next<span> &#x2794;</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Crypto;
