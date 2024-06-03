import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/fetchSlice";
import vendorCategoryReducer from "../slices/store/vendor/vendorCategorySlice";
import wasteCategoryReducer from "../slices/restaurant/waste-management/wasteCategorySlice";
import wasteItemReducer from "../slices/restaurant/waste-management/wasteItemSlice";
import { nonChargeableCategoryReducer } from "../slices/restaurant/non-chargeables/nonChargeableCategorySlice";
import restaurantSKUCategoryReducer from "../slices/restaurant/restaurant-sku/restaurantSKUCategorySlice";
import gasReadingsReducer from "../slices/restaurant/gas-readings/gasReadingsSlice";
import nonChargeableItemReducer from "../slices/restaurant/non-chargeables/nonChargeableItemSlice";
import restaurantSKUGroupReducer from "../slices/restaurant/restaurant-sku/restaurantSKUGroupSlice";
import restaurantSKUItemReducer from "../slices/restaurant/restaurant-sku/restaurantSKUItemsSlice";
import restaurantSKUItemVariantReducer from "../slices/restaurant/restaurant-sku/restaurantSKUItemVariantsSlice";
import { expenseCategoryReducer } from "../slices/cashier/expenses/expenseCategorySlice";
import expenseReducer from "../slices/cashier/expenses/expenseSlice";
import recquisitionReducer from "../slices/chef/recquisitionSlice";
import vendorReducer from "../slices/store/vendor/vendorSlice";
import StorePurchaseReducer from "../slices/store/purchase/purchaseSlice";
import issueReducer from "../slices/store/issue/issueSlice";
import storeSKUCategoryReducer from "../slices/store/store-sku/storeSKUCategorySlice";
import storeSKUItemReducer from "../slices/store/store-sku/storeSKUItemsSlice";
import storeSKUItemVariantReducer from "../slices/store/store-sku/storeSKUItemVariantsSlice";
import storeSKUSectionReducer from "../slices/store/store-sku/storeSKUSectionsSlice";
const rootred = combineReducers({
  cartreducer,
  profile: profileReducer,
  wasteCategory: wasteCategoryReducer,
  wasteItem: wasteItemReducer,
  // nonChargeableCategory: nonChargeableCategoryReducer,
  restaurantSKUCategory: restaurantSKUCategoryReducer,
  gasReadings: gasReadingsReducer,
  nonChargeableItem: nonChargeableItemReducer,
  restaurantSKUGroup: restaurantSKUGroupReducer,
  restaurantSKUItem: restaurantSKUItemReducer,
  restaurantSKUItemVariant: restaurantSKUItemVariantReducer,
  // expenseCategory: expenseCategoryReducer,
  expense: expenseReducer,
  recquisition: recquisitionReducer,
  vendorCategory: vendorCategoryReducer,
  vendor: vendorReducer,
  storePurchase: StorePurchaseReducer,
  issue: issueReducer,
  storeSKUCategory: storeSKUCategoryReducer,
  storeSKUItem: storeSKUItemReducer,
  storeSKUItemVariant: storeSKUItemVariantReducer,
  storeSKUSection: storeSKUSectionReducer,
});

export default rootred;
