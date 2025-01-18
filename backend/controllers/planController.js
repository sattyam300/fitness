import Plan from '../models/planModel.js';  // Use import for modules

const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export { getPlans };  // Use export for named exports
