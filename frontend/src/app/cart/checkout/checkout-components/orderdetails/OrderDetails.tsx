"use client";

import React, { useState, useEffect } from "react";
import CustomRadioButton from "../checkout-subcomponents/CustomRadioButton";
import { RiDiscountPercentFill } from "react-icons/ri";
import { CartItem, useCartStore } from "@/stores/cartStore";
import { useOrderStore } from "@/stores/orderStore";
import { useSelectedAddressStore } from "@/stores/selectedAddressStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OrderSummary from "../ordersummary/OrderSummary";
import { OrderDetailsData } from "@/data/OrderDetails";
import OrderDetailsFooterIcons from "./components/OrderDetailsIcons";
import ApplyCoupon from "../ApplyCoupon";
import CouponAppliedPopup from "../CouponAppliedPopup";
import { Toaster, toast } from 'react-hot-toast';

interface OrderState {
  isProcessing: boolean;
  paymentInitiated: boolean;
  orderCreated: boolean;
}

export default function OrderDetails() {
  const { items } = useCartStore();
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const { addOrder } = useOrderStore();
  const { clearCart } = useCartStore();
  const { selectedAddressId } = useSelectedAddressStore();
  const router = useRouter();

  const [isCouponSidebarOpen, setIsCouponSidebarOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [handleApplyCouponFunction, setHandleApplyCouponFunction] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  const [isUpdateTextVisible, setUpdateTextVisible] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<{
    type: "payment" | "order" | "general" | null;
    message: string | null;
  }>({ type: null, message: null });

  const [appliedCoupon, setAppliedCoupon] = useState<any | null>(null);

  const calculateOrderAmounts = () => {
    const subtotal = items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );

    const discount = items.reduce(
      (acc: number, item: CartItem) => acc + (item.product.discount || 0),
      0
    );

    const taxBase = discount ? subtotal - discount : subtotal;
    const tax = taxBase * 0.18;
    const shippingCharges = 0;
    const couponDiscount = appliedCoupon ? appliedCoupon?.discount : 0;
    const total = subtotal + tax + shippingCharges - (discount || 0) - couponDiscount;

    return { subtotal, tax, shippingCharges, discount, total };
  };

  const { subtotal, tax, shippingCharges, discount, total } = calculateOrderAmounts();

  // Validation function to check if order can be proceeded
  const canProceedWithOrder = () => {
    return (
      selectedAddressId && // Address is selected
      items.length > 0 && // Cart has items
      total > 0 && // Total amount is greater than 0
      selectedMode // Payment mode is selected
    );
  };

  const validateOrderCreation = () => {
    if (!selectedAddressId) {
      toast.error("Please select a delivery address");
      return false;
    }

    if (items.length === 0) {
      toast.error("Your cart is empty");
      return false;
    }

    if (total <= 0) {
      toast.error("Order total must be greater than 0");
      return false;
    }

    if (!selectedMode) {
      toast.error("Please select a payment method");
      return false;
    }

    return true;
  };

  const createOrder = async () => {
    try {
      setIsProcessing(true);
  
      if (!validateOrderCreation()) {
        setIsProcessing(false);
        return;
      }
  
      const orderData = {
        orderItems: items.map((item) => ({
          productId: item.product._id,
          quantity: item.quantity,
        })),
        address: selectedAddressId,
        subtotal,
        tax,
        shippingCharges,
        couponDiscount: appliedCoupon?.discount,
        discount,
        total,
        paymentMethod: selectedMode === "Cash on Delivery" ? "COD" : "ONLINE",
      };
  
      const response = await addOrder(orderData);
      toast.success("Order created successfully");
      await clearCart();
      router.push("/dashboard/orders");
  
    } catch (error: any) {
      console.error("Order creation error:", error);
      toast.error(error?.response?.data?.message || error.message || "Failed to create order");
    } finally {
      setIsProcessing(false);
    }
  };
  

  // Helper functions
  const handleCouponPopup = (condition: boolean) => setPopupVisible(condition);
  const handleCouponCode = (code: any) => setCouponCode(code);
  const handleSetApplyCouponFunction = (func: any) => setHandleApplyCouponFunction(func);
  const handleUpdateInputText = (condition: boolean) => setUpdateTextVisible(condition);
  const handleCouponApplied = (couponDetails: any) => setAppliedCoupon(couponDetails);
  const toggleCouponSidebar = () => setIsCouponSidebarOpen((prev) => !prev);
  const toggleSummary = () => setIsOpen((prev) => !prev);
  const handleSelection = (mode: string) => {
    setSelectedMode((prevMode) => (prevMode === mode ? null : mode));
    setError({ type: null, message: null });
  };

  const handleDisabledClick = () => {
    toast.error("Select the address first");
  };

  return (
    <>
      <Toaster />
      <div className="p-[2rem] box-shadow border rounded-lg w-[35rem] max-[698px]:w-full max-[1250px]:w-[25rem] mb-6">
        {/* Order Details Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b-[.1rem] pb-3">
            Order Details
          </h2>

          {/* <div
            className="flex justify-between items-center py-[.6rem] px-5 max-xs:px-1 border-[.1rem] rounded-xl my-4 cursor-pointer"
            onClick={toggleSummary}
          >
            <div className="flex gap-2">
              {items.slice(0, 3)?.map((item: any) => (
                <Image
                  key={item.product._id}
                  width={30}
                  height={30}
                  src={item?.product?.images[0]?.secure_url}
                  className="rounded-lg"
                  alt={item.product.name || "product-image"}
                />
              ))}
            </div>
            <h1 className="text-sm font-semibold text-medium_primary opacity-[0.8]">
              View Summary
            </h1>
          </div> */}

          <OrderSummary
            // isOpen={isOpen}
            // toggleSummary={toggleSummary}
            OrderDetailsData={OrderDetailsData}
          />

          {isOpen && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-50"
              onClick={toggleSummary}
            />
          )}

          {/* Order Summary */}
          <div className="mt-3 space-y-2 border-t-[.1rem] pt-4">
            <div className="flex justify-between">
              <span>Products Total: {items.length}</span>
              <span className="font-semibold">₹ {subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (18%)</span>
              <span>₹ {tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Charges</span>
              <span className="text-medium_primary">Free</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-medium_primary">-₹ {discount}</span>
              </div>
            )}

            {appliedCoupon && (
              <div className="flex justify-between text-green-600">
                <span>Coupon Discount ({appliedCoupon.code})</span>
                <span>-₹ {appliedCoupon.discount}</span>
              </div>
            )}
          </div>
        </div>

        {/* Coupon Section */}
        <div className="w-full rounded-xl overflow-hidden">
          <div className="flex justify-between bg-gray-extrathin p-4">
            <input
              type="text"
              className={`w-[80%] bg-transparent outline-0 placeholder:font-semibold ${
                isUpdateTextVisible &&
                "text-[0.8rem] text-blue-Light font-semibold"
              }`}
              placeholder="Have a Coupon Code?"
              value={
                isUpdateTextVisible
                  ? `YAY! You saved ₹${appliedCoupon?.discount}`
                  : ""
              }
              onChange={(e) => handleCouponCode(e.target.value)}
            />
            {!isUpdateTextVisible ? (
              <button
                className="font-semibold opacity-[0.8] text-medium_primary"
                onClick={toggleCouponSidebar}
              >
                SELECT
              </button>
            ) : (
              <button
                className="font-semibold opacity-[0.8] text-red"
                onClick={() => handleUpdateInputText(false)}
              >
                REMOVE
              </button>
            )}
          </div>
          <div className="flex gap-3 items-center justify-center bg-low_primary p-2">
            <RiDiscountPercentFill className="text-medium_primary text-[1.4rem]" />
            <span className="border-b-[0.1rem] border-gray-dark text-[0.8rem] cursor-pointer">
              You have 0 coupon
            </span>
          </div>
        </div>

        {/* Payment Mode Selection */}
        <div className="flex justify-between mb-6 rounded-xl overflow-hidden mt-[1.1rem]">
          <div className="bg-gray-extrathin w-full p-4">
            <label className="text-sm font-semibold">Payment Mode</label>
            <div className="mt-2 gap-[1rem] flex justify-between">
              <label className="flex items-center">
                <CustomRadioButton
                  selected={selectedMode === "Cash on Delivery"}
                  onChange={() => handleSelection("Cash on Delivery")}
                />
                <span className="ml-2 text-sm">Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error.message && (
          <div
            className={`mb-4 p-3 rounded-lg ${
              error.type === "payment"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {error.message}
          </div>
        )}

        {/* Total Amount */}
        <div className="flex justify-between items-center border-t pt-3">
          <span className="text-xl font-thin">Total Amount</span>
          <span className="text-2xl font-bold">₹ {total.toFixed(2)}</span>
        </div>

        {/* Proceed Button */}
        <div className="mt-6">
          <button
            onClick={canProceedWithOrder() && !isProcessing ? createOrder : handleDisabledClick}
            disabled={!canProceedWithOrder() || isProcessing}
            className={`w-full ${
              !canProceedWithOrder() || isProcessing
                ? "opacity-50 cursor-not-allowed"
                : "opacity-80 hover:opacity-90"
            } bg-medium_primary text-white py-2 rounded-lg text-lg flex justify-center items-center`}
          >
            {isProcessing ? (
              <span className="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-white" />
            ) : (
              "Proceed To Payment"
            )}
          </button>
        </div>

        <OrderDetailsFooterIcons />

        <ApplyCoupon
          isCouponSidebarOpen={isCouponSidebarOpen}
          toggleCouponSidebar={toggleCouponSidebar}
          onCouponApplied={handleCouponApplied}
          handleCouponPopup={handleCouponPopup}
          handleUpdateInputText={handleUpdateInputText}
          couponCode={couponCode}
          handleCouponCode={handleCouponCode}
          handleSetApplyCouponFunction={handleSetApplyCouponFunction}
        />
      </div>
      {isPopupVisible && (
        <CouponAppliedPopup
          handleCouponPopup={handleCouponPopup}
          appliedCoupon={appliedCoupon}
        />
      )}
    </>
  );
}