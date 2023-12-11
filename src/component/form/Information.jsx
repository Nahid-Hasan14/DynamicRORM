/* eslint-disable react/prop-types */

export default function Information({ userInfo, deleteUser, index }) {
  const {
    clothName,
    clothId,
    clothPrice,
    clothQuantity,
    colour,
    size,
    date,
    describtion,
  } = userInfo;
  console.log(userInfo);
  return (
    <>
      <tr className="allCloth">
        <td>{clothName}</td>
        <td>{clothId}</td>
        <td>{clothPrice * clothQuantity}</td>
        <td>{clothQuantity}</td>
        <td>{colour}</td>
        <td>{size}</td>
        <td>{date}</td>
        <td>{describtion}</td>
        <td>
          <button onClick={() => deleteUser(index)}>Delete</button>
        </td>
      </tr>
    </>
  );
}
