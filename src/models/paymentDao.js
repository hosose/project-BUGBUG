const { database } = require('./dataSource');

const createPaymentHistory = async (orderId, paymentKey, amount) => {
  const result = await database.query(
    `
      INSERT INTO payments
      (
        order_id,
        payment_key,
        total_amount
      )
      VALUES
      (
        ?, 
        ?, 
        ?
      );
    `,
    [orderId, paymentKey, amount]
  );

  return result;
};

module.exports = {
  createPaymentHistory,
};
