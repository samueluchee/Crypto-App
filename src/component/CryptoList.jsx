function CryptoList({ data }) {
  const { name, symbol, price_usd, tsupply } = data;
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{symbol}</td>
        <td>{price_usd}</td>
        <td>
          {tsupply} {symbol}
        </td>
      </tr>
    </tbody>
  );
}

export default CryptoList;
