class CartRecordController {
// получить все записи корзины
static getCartRecords = async (req, res) => {
  try {
    const cartRecords = await CartRecord.find();
    res.json(cartRecords);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// получить запись корзины по id
static getCartRecordById = async (req, res) => {
  try {
    const cartRecord = await CartRecord.findById(req.params.id);
    res.json(cartRecord);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// создать новую запись корзины
static createCartRecord = async (req, res) => {
  const cartRecord = new CartRecord({
    vinylId: req.body.vinylId,
    quantity: req.body.quantity,
    totalPrice: req.body.totalPrice
  });

  try {
    const newCartRecord = await cartRecord.save();
    res.status(201).json(newCartRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}




// удалить запись корзины
static deleteCartRecord = async (req, res) => {
  try {
    await CartRecord.findByIdAndDelete(req.params.id);
    res.json({ message: 'Запись корзины была удалена' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
}
module.exports = new CartRecordController
