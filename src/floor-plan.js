import convertToBasic3dModel from './floor-plan/convert-to-basic-3d-model.js'
import convertToPremium3dModel from './floor-plan/convert-to-premium-3d-model.js'
import getConversionStatus from './floor-plan/get-conversion-status.js'
import recognize from './floor-plan/recognize.js'

var floorPlan = {
  convertToBasic3dModel: convertToBasic3dModel,
  convertToPremium3dModel: convertToPremium3dModel,
  getConversionStatus: getConversionStatus,
  recognize: recognize
}

export default floorPlan