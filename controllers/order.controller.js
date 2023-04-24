const Order=require('../Schema/order.model');

async function createOrder(req, res){
  try {
      // Retrieve the order details from the request body
      const { customerInfo, productInfo, totalCost, paymentInfo } = req.body;

      // Generate a random order ID
      const orderId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

      // Validate required fields
        const { error } = new Order({ productInfo, paymentInfo, customerInfo, totalCost }).validateSync();
        if (error) {
          return res.status(400).json({ message: error.message });
        }


      // Create a new order object
      const newOrder = new Order({
        orderId,
        customerInfo,
        productInfo,
        totalCost,
        paymentInfo,
        dateAndTime: new Date()
      });

      // Save the new order to the database
      const savedOrder = await newOrder.save();

      return res.status(200).json({ message: 'Order created successfully', order: savedOrder });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error creating order' });
    }
}

module.exports={createOrder};
